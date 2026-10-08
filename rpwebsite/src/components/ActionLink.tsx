"use client";

import { cn } from "@/utils/cn";

// Office files a browser cannot show by itself
const OFFICE_FILE = /\.(pptx?|docx?|xlsx?)$/i;

/**
 * A document button. With an href it is a real link; without one it is a greyed-out,
 * non-clickable label (an `<a href="#">` would still jump to the top of the page).
 *
 * "Open" on an Office file of this site (e.g. /presentations/progress-2.pptx) opens it in the
 * Microsoft Office Online viewer. The viewer downloads the file from the site's public URL,
 * so it works once the website is deployed — not on localhost.
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
  const officeView = !!href && !download && href.startsWith("/") && OFFICE_FILE.test(href);

  // the viewer needs the file's absolute URL, which is only known in the browser
  const openInViewer = (e: React.MouseEvent) => {
    if (!officeView || !href) return;
    e.preventDefault();
    const src = encodeURIComponent(window.location.origin + href);
    window.open(`https://view.officeapps.live.com/op/view.aspx?src=${src}`, "_blank", "noopener,noreferrer");
  };

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
      onClick={openInViewer}
      // files on this site download; links to Drive / the viewer / PDFs open in a new tab
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
