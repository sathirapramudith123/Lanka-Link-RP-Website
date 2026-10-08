import { cn } from "@/utils/cn";

/**
 * A document button. With an href it is a real link; without one it is a greyed-out,
 * non-clickable label (an `<a href="#">` would still jump to the top of the page).
 */
export default function ActionLink({
  href,
  children,
  variant = "primary",
  download = false,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  download?: boolean;
}) {
  const base = "flex-1 rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={cn(
          base,
          "cursor-not-allowed",
          variant === "primary" ? "bg-slate-100 text-slate-400" : "border border-slate-100 text-slate-300"
        )}
      >
        {children}
      </span>
    );
  }

  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      // files on this site download; links to Drive / PDFs open in a new tab
      {...(download && !external ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        base,
        variant === "primary"
          ? "bg-brand text-white hover:bg-brand-800"
          : "border border-slate-200 text-slate-700 hover:bg-slate-50"
      )}
    >
      {children}
    </a>
  );
}
