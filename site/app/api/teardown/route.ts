// Async "free UX teardown" form handler.
// This is the ONLY conversion path on the site, so it must never silently drop a lead.
//
// Delivery is chosen by env var (set ONE — see .env.example):
//   RESEND_API_KEY        → emails the teardown request to TEARDOWN_TO (or site owner) via Resend
//   TEARDOWN_WEBHOOK_URL  → POSTs the JSON to a webhook (Slack / Zapier / Make / n8n / Discord)
//   (neither set)         → logs to the server console and still returns ok, so dev/staging works.
//
// The client (AuditForm) falls back to a mailto if this route ever returns non-ok.

const OWNER_EMAIL = process.env.TEARDOWN_TO || "yevledenov@gmail.com";
const FROM_EMAIL = process.env.TEARDOWN_FROM || "teardown@ledenov.com"; // must be a Resend-verified sender

type Payload = { url?: string; note?: string; email?: string; source?: string };

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

async function deliver(p: Required<Pick<Payload, "url" | "email">> & { note: string; source?: string }) {
  const subject = `Free UX teardown request — ${p.url}`;
  const text = `Product / site: ${p.url}\n\nWhat feels broken: ${p.note || "(not specified)"}\n\nReply to: ${p.email}${p.source ? `\n\nSource: ${p.source}` : ""}`;

  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        reply_to: p.email,
        subject,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    return;
  }

  if (process.env.TEARDOWN_WEBHOOK_URL) {
    const res = await fetch(process.env.TEARDOWN_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: `${subject}\n${text}`, ...p }),
    });
    if (!res.ok) throw new Error(`Webhook ${res.status}`);
    return;
  }

  // No delivery configured yet — don't fail the user; surface it in logs so it's obvious in dev.
  console.warn("[teardown] No RESEND_API_KEY or TEARDOWN_WEBHOOK_URL set. Lead not delivered:", p);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const url = (body.url || "").trim();
  const email = (body.email || "").trim();
  const note = (body.note || "").trim();
  const source = (body.source || "").trim() || undefined;

  if (!url || !isEmail(email)) {
    return Response.json({ ok: false, error: "A product URL and a valid email are required." }, { status: 422 });
  }

  try {
    await deliver({ url, email, note, source });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[teardown] delivery failed:", err);
    // Tell the client it failed so it can fall back to mailto and the lead survives.
    return Response.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
