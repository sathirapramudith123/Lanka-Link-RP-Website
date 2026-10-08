/*
 * Small diagram kit: numbered boxes, arrows and lanes, laid out with CSS so the diagrams stay
 * sharp, readable on phones (rows stack vertically) and easy to edit as text.
 */
import { cn } from "@/utils/cn";

export type Tone = "blue" | "green" | "amber" | "violet" | "slate" | "rose";

const head: Record<Tone, string> = {
  blue: "bg-brand-600 text-white",
  green: "bg-accent-600 text-white",
  amber: "bg-amber-500 text-white",
  violet: "bg-violet-600 text-white",
  slate: "bg-slate-700 text-white",
  rose: "bg-rose-600 text-white",
};
const body: Record<Tone, string> = {
  blue: "border-brand-200 bg-brand-50/60",
  green: "border-accent-100 bg-accent-50/70",
  amber: "border-amber-200 bg-amber-50/70",
  violet: "border-violet-200 bg-violet-50/70",
  slate: "border-slate-200 bg-slate-50",
  rose: "border-rose-200 bg-rose-50/70",
};

/** One step / component box: coloured header with an optional number, icon and bullet lines. */
export function Box({
  n,
  title,
  icon,
  items = [],
  tone = "blue",
  className,
  children,
}: {
  n?: number | string;
  title: string;
  icon?: string;
  items?: string[];
  tone?: Tone;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border", body[tone], className)}>
      <div className={cn("flex items-center gap-2 px-3 py-2", head[tone])}>
        {n !== undefined && (
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold text-slate-900">
            {n}
          </span>
        )}
        <span className="text-[13px] font-semibold leading-tight">{title}</span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-3 py-2.5">
        {icon && <div className="text-2xl leading-none">{icon}</div>}
        {items.length > 0 && (
          <ul className="space-y-1">
            {items.map((it) => (
              <li key={it} className="flex gap-1.5 text-[12px] leading-snug text-slate-700">
                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
}

/** Arrow between boxes: points right on wide screens, down on phones (or always down with `down`). */
export function Arrow({ label, down = false }: { label?: string; down?: boolean }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center gap-1 text-brand-500",
        down ? "flex-col py-1" : "flex-col py-1 lg:flex-row lg:px-1 lg:py-0"
      )}
      aria-hidden="true"
    >
      {label && (
        <span className="max-w-[90px] text-center text-[10px] font-medium leading-tight text-slate-500">{label}</span>
      )}
      <svg viewBox="0 0 24 24" className={cn("h-5 w-5", down ? "rotate-90" : "rotate-90 lg:rotate-0")} fill="none">
        <path d="M4 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** A horizontal chain of boxes with arrows (stacks on phones). */
export function Flow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex flex-col items-stretch lg:flex-row", className)}>{children}</div>;
}

/** A labelled band grouping several boxes (e.g. "Backend API"). */
export function Lane({
  title,
  tone = "slate",
  children,
  className,
}: {
  title: string;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border-2 border-dashed p-3", body[tone], className)}>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{title}</p>
      {children}
    </div>
  );
}

/** Small pill used inside boxes (features, outputs, tables...). */
export function Chip({ children, tone = "slate" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={cn("inline-block rounded-md border px-1.5 py-0.5 text-[11px] font-medium text-slate-700", body[tone])}>
      {children}
    </span>
  );
}

/** Note box (assumptions / what the diagram shows). */
export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-[12px] leading-snug text-slate-600">
      <span className="font-bold text-brand-600">ⓘ</span>
      <div>{children}</div>
    </div>
  );
}
