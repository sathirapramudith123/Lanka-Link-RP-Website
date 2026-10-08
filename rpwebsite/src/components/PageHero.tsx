/** Dark banner at the top of every inner page (same look as the home hero). */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="gradient-hero relative overflow-hidden text-white">
      <div className="grid-pattern absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-16 sm:py-20">
        {eyebrow && (
          <span className="eyebrow !bg-white/10 !text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl animate-fade-up font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>}
      </div>
    </section>
  );
}
