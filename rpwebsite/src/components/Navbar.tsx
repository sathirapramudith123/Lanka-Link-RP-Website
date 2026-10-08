"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import { cn } from "@/utils/cn";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = (href: string) =>
    href.includes("#") ? false : href === "/" ? pathname === "/" : pathname.startsWith(href);

  // a stronger shadow once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-shadow",
        scrolled ? "border-slate-200/80 shadow-[0_6px_24px_-16px_rgba(15,23,42,.35)]" : "border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.projectId} home`}>
          <Logo />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-slate-900">{site.projectId}</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
              R26-IT-139
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full border border-slate-200/80 bg-white/70 p-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition",
                isActive(item.href) ? "bg-brand text-white shadow-sm" : "text-slate-600 hover:text-brand-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/downloads" className="btn-primary hidden !rounded-full !py-2 xl:inline-flex">
          Documents ↗
        </Link>

        <button
          className="rounded-lg p-2 text-xl text-slate-700 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
