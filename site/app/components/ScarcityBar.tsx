import { scarcity } from "../content";

export default function ScarcityBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-2 text-center text-[13px]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
        <span>{scarcity}</span>
        <a href="#book" className="font-medium text-orange hover:underline">
          Book a call →
        </a>
      </div>
    </div>
  );
}
