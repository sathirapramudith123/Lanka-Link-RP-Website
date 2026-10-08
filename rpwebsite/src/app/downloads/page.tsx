import PageHero from "@/components/PageHero";
import { documentSections } from "@/data/content";
import { cn } from "@/utils/cn";
import ActionLink from "@/components/ActionLink";

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Documents"
        title="Research Documents"
        subtitle="Official research paper, presentation slide decks, individual proposal reports, thesis reports, and group thesis report prepared for the Lanka-Link research project."
      />
      <div className="container-page py-14">

      <div className="mt-14 space-y-14">
        {documentSections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                {section.icon}
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-slate-900">
                  {section.title}
                </h2>
                <p className="text-sm text-slate-500">{section.desc}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {section.documents.map((doc) => {
                const isAvailable = doc.status === "available";
                return (
                  <div key={doc.title} className="card">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs font-semibold text-slate-500">
                        {doc.fileType}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
                          isAvailable
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            isAvailable ? "bg-emerald-500" : "bg-amber-500"
                          )}
                        />
                        {isAvailable ? "Available" : "Upcoming"}
                      </span>
                    </div>

                    <h3 className="mt-3 font-semibold text-slate-900">
                      {doc.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {doc.desc}
                    </p>
                    <p className="mt-3 text-xs font-medium text-brand-700">
                      {doc.tag}
                    </p>

                    <div className="mt-5 flex gap-3">
                      <ActionLink href={isAvailable ? doc.openHref : undefined}>
                        {doc.actionLabel}
                      </ActionLink>
                      <ActionLink
                        href={isAvailable ? doc.downloadHref : undefined}
                        variant="outline"
                        download
                      >
                        Download
                      </ActionLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
}