import Link from "next/link";
import HeroIllustration from "@/components/HeroIllustration";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ResultBars from "@/components/ResultBars";
import {
  site,
  abstract,
  components,
  highlights,
  problems,
  pipeline,
  results,
  modules,
  team,
} from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="gradient-hero relative overflow-hidden text-white">
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="container-page relative grid gap-12 pb-28 pt-16 md:grid-cols-[1.15fr_1fr] md:items-center md:pt-24">
          <div className="animate-fade-up">
            <div className="flex flex-wrap gap-2">
              {[site.module, site.university, "Explainable AI"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur"
                >
                  {b}
                </span>
              ))}
            </div>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {site.title.replace(" for Agency Banking and Procurement", "")}{" "}
              <span className="text-gradient">for Agency Banking &amp; Procurement</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{site.tagline}.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/scope"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
              >
                Explore the research →
              </Link>
              <Link
                href="/downloads"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Read the documents
              </Link>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* ============================ HIGHLIGHTS ============================ */}
      <section className="container-page relative z-10 -mt-16">
        <div className="grid gap-4 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-[0_24px_60px_-30px_rgba(20,34,80,.45)] sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 90} className="rounded-2xl p-4 lg:border-r lg:border-slate-100 lg:last:border-0">
              <p className="font-display text-4xl font-extrabold tracking-tight text-brand-700">
                <CountUp value={h.value} decimals={h.decimals} prefix={h.prefix} suffix={h.suffix} />
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{h.label}</p>
              <p className="text-xs text-slate-500">{h.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================= OVERVIEW ============================= */}
      <section className="container-page grid gap-10 py-24 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeader eyebrow="Overview" title={abstract.heading} />
          <div className="mt-6 space-y-4">
            {abstract.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.problem} delay={i * 80} className="card card-hover">
              <div className="text-2xl">{p.icon}</div>
              <p className="mt-3 text-sm font-semibold italic text-slate-800">{p.problem}</p>
              <div className="my-3 h-px bg-gradient-to-r from-brand-200 to-transparent" />
              <p className="text-sm leading-relaxed text-slate-500">{p.solution}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ HOW IT WORKS ============================ */}
      <section className="border-y border-slate-200/70 bg-white py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              center
              eyebrow="How it works"
              title="One ledger, four explainable models"
              subtitle="What a shop records once feeds every insight — the demand forecast decides when to restock, and steady stock improves the credit score."
            />
          </Reveal>
          <div className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div
              className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-accent md:block"
              aria-hidden="true"
            />
            {pipeline.map((s, i) => (
              <Reveal key={s.step} delay={i * 110} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-800 font-display text-lg font-bold text-white shadow-lg ring-8 ring-white">
                  {s.step}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ COMPONENTS ============================ */}
      <section className="container-page py-24">
        <Reveal>
          <SectionHeader
            eyebrow="Machine learning"
            title="Four explainable components"
            subtitle="For each one, five algorithms were compared; the winner was chosen on training data only and tested once on data it had never seen."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {components.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 100} className="card card-hover group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 transition group-hover:scale-125" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
                  {c.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-ink-800 px-2 py-0.5 text-xs font-bold text-white">{c.id}</span>
                    <span className="text-xs font-medium text-slate-400">{c.task}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.desc}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                    ▲ {c.metric}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================== RESULTS ============================== */}
      <section className="gradient-hero relative overflow-hidden py-24 text-white">
        <div className="grid-pattern absolute inset-0" aria-hidden="true" />
        <div className="container-page relative">
          <Reveal>
            <SectionHeader
              dark
              eyebrow="Honest evaluation"
              title="Does the AI beat the simple rule?"
              subtitle="Every model is compared with the rule or naive forecast a shop owner or bank would use anyway — on unseen data, with bootstrap 95 % confidence intervals."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {results.map((r, i) => (
              <Reveal key={r.id} delay={(i % 2) * 100}>
                <ResultBars result={r} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            Synthetic and public datasets — the comparisons are valid; absolute numbers are not a claim about
            real-world performance.
          </p>
        </div>
      </section>

      {/* ============================== MODULES ============================== */}
      <section className="container-page py-24">
        <Reveal>
          <SectionHeader
            center
            eyebrow="The platform"
            title="Everything a small shop needs, in one app"
            subtitle="Built for web and Android, in English and Sinhala — the AI lives inside everyday tools."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 80} className="card card-hover flex items-start gap-4 !p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl">
                {m.icon}
              </span>
              <div>
                <h3 className="font-display font-semibold text-slate-900">{m.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================ CTA ================================ */}
      <section className="container-page">
        <Reveal className="gradient-brand relative overflow-hidden rounded-3xl px-6 py-12 text-white sm:px-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
          <div className="absolute -bottom-20 right-32 h-48 w-48 rounded-full bg-accent/20" aria-hidden="true" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Meet the team behind {site.projectId}</h2>
              <p className="mt-2 max-w-xl text-brand-100">
                {team.members.length} researchers and {team.supervisors.length} supervisors at {site.university}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:-translate-y-0.5"
              >
                About the team
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
