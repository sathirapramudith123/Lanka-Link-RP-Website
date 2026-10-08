import { results } from "@/data/content";
import { cn } from "@/utils/cn";

type Result = (typeof results)[number];

/** One component's "model vs simple alternatives" comparison as horizontal bars (dark card). */
export default function ResultBars({ result }: { result: Result }) {
  const max = Math.max(...result.bars.map((b) => b.value));
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-bold text-white">{result.id}</span>
          <h3 className="font-display text-lg font-bold text-white">{result.title}</h3>
        </div>
        <span className="shrink-0 text-[11px] font-medium uppercase tracking-wider text-slate-400">
          {result.better === "higher" ? "↑ higher is better" : "↓ lower is better"}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-400">{result.metric}</p>

      <div className="mt-5 space-y-3">
        {result.bars.map((b) => {
          const ours = "ours" in b && b.ours;
          return (
            <div key={b.label}>
              <div className="mb-1 flex justify-between text-xs">
                <span className={ours ? "font-semibold text-white" : "text-slate-400"}>{b.label}</span>
                <span className={cn("tabular-nums", ours ? "font-bold text-accent" : "text-slate-300")}>
                  {b.display}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={cn(
                    "h-full origin-left rounded-full",
                    ours ? "bg-gradient-to-r from-brand-400 to-accent" : "bg-slate-500/60"
                  )}
                  style={{ width: `${Math.max(3, (b.value / max) * 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">{result.note}</p>
    </div>
  );
}
