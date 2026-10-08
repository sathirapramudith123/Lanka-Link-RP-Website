import Link from "next/link";
import { nav, site, contact } from "@/data/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="gradient-hero relative mt-24 overflow-hidden text-slate-300">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo size={34} />
              <span className="font-display text-lg font-bold text-white">{site.projectId}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{site.title}</p>
            <p className="mt-2 text-xs text-slate-500">{site.tagline}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Pages</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Project</p>
            <ul className="space-y-1.5 text-sm">
              <li>{site.module}</li>
              <li>{contact.institution}</li>
              <li>
                <a href={`mailto:${contact.supervisorEmail}`} className="transition hover:text-white">
                  {contact.supervisorEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>
            © {site.year} {site.projectId} · {site.university}
          </span>
          <span>Explainable ML for rural micro-merchants 🇱🇰</span>
        </div>
      </div>
    </footer>
  );
}
