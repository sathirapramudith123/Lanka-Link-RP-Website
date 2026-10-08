"use client";

import { useEffect, useState } from "react";

/** Dark frame with the diagram on a white panel, a caption below, and a full-screen view. */
export default function DiagramCard({
  id,
  index,
  title,
  desc,
  children,
}: {
  id: string;
  index: number;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <figure id={id} className="scroll-mt-24 rounded-3xl border border-white/10 bg-ink-800 p-3 shadow-xl sm:p-4">
      <div className="rounded-2xl bg-white p-4 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-brand-900 sm:text-xl">
            <span className="mr-2 text-brand-500">{String(index).padStart(2, "0")}</span>
            {title}
          </h3>
          <button
            onClick={() => setOpen(true)}
            className="hidden shrink-0 rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-300 hover:text-brand-700 sm:block"
          >
            ⤢ Expand
          </button>
        </div>
        {children}
      </div>
      <figcaption className="px-2 pb-1 pt-4">
        <p className="font-display font-bold text-white">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-brand-200">{desc}</p>
      </figcaption>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-[100] overflow-auto bg-ink-900/90 p-4 backdrop-blur sm:p-8"
          onClick={() => setOpen(false)}
        >
          <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-brand-900">{title}</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-600 hover:text-slate-900"
                aria-label="Close"
              >
                ✕ Close
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </figure>
  );
}
