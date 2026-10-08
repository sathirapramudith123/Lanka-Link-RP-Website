import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { scope, components } from "@/data/content";
import DiagramCard from "@/components/diagrams/DiagramCard";
import { diagrams } from "@/components/diagrams/SystemDiagrams";

function TextSection({
  heading,
  paragraphs,
  image,
}: {
  heading: string;
  paragraphs: string[];
  image?: { src: string; caption: string };
}) {
  return (
    <div className="mt-12">
      <h3 className="font-display text-xl font-bold text-slate-900">
        {heading}
      </h3>
      <div className={image ? "mt-5 grid gap-6 md:grid-cols-2 md:items-start" : "mt-4"}>
        <div className="space-y-3">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </div>
        {image ? (
          <figure className="card p-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={image.src}
                alt={image.caption}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-medium text-slate-600">
              {image.caption}
            </figcaption>
          </figure>
        ) : null}
      </div>
    </div>
  );
}

export default function ScopePage() {
  // only show figures whose file is really in /public (missing ones would render broken)
  const findImage = (caption: string) =>
    scope.images.find(
      (img) =>
        img.caption === caption &&
        fs.existsSync(path.join(process.cwd(), "public", img.src))
    );

  return (
    <>
      <PageHero
        eyebrow="Domain"
        title="Research Scope & Methodology"
        subtitle={scope.intro}
      />
      <div className="container-page py-14">

      <TextSection
        heading={scope.literatureSurvey.heading}
        paragraphs={scope.literatureSurvey.paragraphs}
        image={findImage("Literature Survey")}
      />

      <TextSection
        heading={scope.researchGap.heading}
        paragraphs={scope.researchGap.paragraphs}
        image={findImage("Research Gap")}
      />

      <TextSection
        heading={scope.researchProblem.heading}
        paragraphs={scope.researchProblem.paragraphs}
      />

      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-slate-900">
          Research Objectives
        </h3>
        <div className="mt-5 card">
          <ul className="space-y-3">
            {scope.objectives.map((o, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                  {i + 1}
                </span>
                <span className="text-slate-600">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <TextSection
        heading={scope.methodology.heading}
        paragraphs={scope.methodology.paragraphs}
        image={findImage("Methodology")}
      />

      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-slate-900">
          Technologies Used
        </h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {scope.technologies.map((t) => (
            <span
              key={t.name}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm"
            >
              <span className="font-semibold text-slate-900">{t.name}</span>
              <span className="text-xs text-slate-400">{t.category}</span>
            </span>
          ))}
        </div>
        {findImage("Technologies Used") ? (
          <figure className="card mt-6 max-w-md p-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={findImage("Technologies Used")!.src}
                alt="Technologies Used"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </figure>
        ) : null}
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-slate-900">
          The Four Components
        </h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {components.map((c) => (
            <div key={c.id} className="card flex gap-4">
              <div className="text-3xl">{c.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-bold text-brand-700">
                    {c.id}
                  </span>
                  <span className="text-xs text-slate-400">{c.task}</span>
                </div>
                <h4 className="mt-1 font-semibold text-slate-900">{c.title}</h4>
                <p className="mt-1 text-sm text-slate-500">{c.desc}</p>
                <p className="mt-2 text-xs font-semibold text-brand-700">
                  {c.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* ============================ SYSTEM DIAGRAMS ============================ */}
      <section id="diagrams" className="gradient-hero relative mt-10 overflow-hidden py-20">
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="container-page relative">
          <span className="eyebrow !bg-white/10 !text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            System design
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">System Diagrams</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            The architecture, the end-to-end workflow, how the models connect, the research pipeline, and the two
            core business workflows of Lanka-Link.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Diagrams">
            {diagrams.map((d, i) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/15"
              >
                {String(i + 1).padStart(2, "0")} · {d.title}
              </a>
            ))}
          </nav>
          <div className="mt-10 space-y-10">
            {diagrams.map(({ id, title, desc, Diagram }, i) => (
              <DiagramCard key={id} id={id} index={i + 1} title={title} desc={desc}>
                <Diagram />
              </DiagramCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}