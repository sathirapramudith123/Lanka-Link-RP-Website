import PageHero from "@/components/PageHero";
import { milestones } from "@/data/content";
import { cn } from "@/utils/cn";

const dot: Record<string, string> = {
  done: "bg-accent border-accent",
  current: "bg-white border-brand-600 ring-4 ring-brand-100 animate-pulse",
  upcoming: "bg-white border-slate-300",
};
const badge: Record<string, string> = {
  done: "bg-emerald-50 text-emerald-700",
  current: "bg-amber-50 text-amber-700",
  upcoming: "bg-slate-100 text-slate-500",
};
const label: Record<string, string> = {
  done: "Completed",
  current: "In Progress",
  upcoming: "Upcoming",
};

export default function MilestonesPage() {
  const done = milestones.filter((m) => m.status === "done").length;
  const current = milestones.find((m) => m.status === "current");
  const progress = Math.round(((done + (current ? 0.5 : 0)) / milestones.length) * 100);

  return (
    <>
      <PageHero
        eyebrow="Timeline"
        title="Project Milestones"
        subtitle="The phases of the research from proposal to final evaluation."
      />
      <div className="container-page py-14">
      {/* overall progress: completed phases, the current one counts as half */}
      <div className="card -mt-24 relative z-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <div className="flex items-baseline justify-between">
            <p className="font-display text-lg font-bold text-slate-900">Overall progress</p>
            <p className="font-display text-2xl font-extrabold text-brand-700">{progress}%</p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {done} of {milestones.length} phases completed · now: {current?.phase ?? "—"}
          </p>
        </div>
        <div className="rounded-2xl bg-ink-800 px-5 py-4 text-center text-white">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-200">Final viva</p>
          <p className="font-display text-xl font-bold">20 Oct 2026</p>
        </div>
      </div>

      <div className="relative mt-12 ml-3 border-l-2 border-brand-100 pl-8">
        {milestones.map((m, i) => (
          <div key={i} className="relative pb-10 last:pb-0">
            <span
              className={cn(
                "absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2",
                dot[m.status]
              )}
            />
            <div className="card">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {m.phase}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    badge[m.status]
                  )}
                >
                  {label[m.status]}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-slate-400">{m.date}</p>
              <ul className="mt-3 space-y-1.5">
                {m.items.map((it, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-brand-600">›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}