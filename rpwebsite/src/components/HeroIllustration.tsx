/**
 * Hero visual: a phone running Lanka-Link with three AI insight cards floating around it.
 * Pure markup + CSS (no images), so it stays sharp and themable.
 */
export default function HeroIllustration() {
  const bars = [38, 52, 44, 66, 58, 80, 72];
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md select-none" aria-hidden="true">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/40 blur-3xl" />

      {/* phone */}
      <div className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-[2.2rem] border border-white/15 bg-ink-800 p-2.5 shadow-2xl shadow-black/40">
        <div className="overflow-hidden rounded-[1.7rem] bg-slate-50">
          <div className="gradient-brand px-4 pb-10 pt-5 text-white">
            <p className="text-[9px] opacity-80">Ayubowan 👋</p>
            <p className="mt-2 text-[9px] opacity-80">Net Profit</p>
            <p className="font-display text-xl font-bold">LKR 84,250</p>
          </div>
          <div className="-mt-7 grid grid-cols-2 gap-2 px-3">
            {[
              ["Income", "LKR 212k", "text-emerald-500"],
              ["Expense", "LKR 128k", "text-rose-500"],
            ].map(([l, v, c]) => (
              <div key={l} className="rounded-xl bg-white p-2 shadow-md">
                <p className="text-[8px] text-slate-400">{l}</p>
                <p className={`text-[11px] font-bold ${c}`}>{v}</p>
              </div>
            ))}
          </div>
          <div className="px-3 pb-4 pt-3">
            <p className="text-[9px] font-semibold text-slate-500">Sales this week</p>
            <div className="mt-2 flex h-16 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t ${i === bars.length - 2 ? "bg-brand-600" : "bg-brand-200"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {["🧾", "📦", "🏦"].map((e) => (
                <div key={e} className="rounded-lg bg-white py-1.5 text-center text-xs shadow-sm">
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* credit score card */}
      <div className="absolute left-0 top-8 w-40 animate-float rounded-2xl border border-white/10 bg-white/95 p-3 shadow-xl backdrop-blur">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Credit readiness</p>
        <div className="mt-2 flex items-center gap-2.5">
          <svg viewBox="0 0 36 36" className="h-11 w-11 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e2e8f0" strokeWidth="4" />
            <circle
              cx="18" cy="18" r="15.5" fill="none" stroke="#3ddc97" strokeWidth="4" strokeLinecap="round"
              strokeDasharray={`${0.78 * 97.4} 97.4`}
            />
          </svg>
          <div>
            <p className="font-display text-lg font-bold leading-none text-slate-900">78</p>
            <p className="text-[10px] font-semibold text-emerald-600">Approved</p>
          </div>
        </div>
      </div>

      {/* forecast card */}
      <div className="absolute bottom-10 left-2 w-44 animate-float-slow rounded-2xl border border-white/10 bg-white/95 p-3 shadow-xl [animation-delay:1.2s]">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Next week · Rice 5kg</p>
        <p className="mt-1 font-display text-base font-bold text-slate-900">
          46 units <span className="text-xs font-semibold text-brand-600">→ Restock</span>
        </p>
        <svg viewBox="0 0 120 30" className="mt-1 h-7 w-full">
          <polyline points="0,24 20,20 40,22 60,14 80,16 100,8 120,10" fill="none" stroke="#2a5bdb" strokeWidth="2.2" strokeLinejoin="round" />
          <polyline points="100,8 120,10" fill="none" stroke="#3ddc97" strokeWidth="2.2" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* anomaly flag */}
      <div className="absolute right-0 top-24 w-40 animate-float rounded-2xl border border-white/10 bg-white/95 p-3 shadow-xl [animation-delay:.6s]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-amber-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Banking check</p>
        </div>
        <p className="mt-1.5 text-xs font-semibold text-slate-800">Transfer looks unusual</p>
        <p className="text-[10px] text-slate-500">Amount far above usual · verify customer</p>
      </div>

      {/* SHAP chip */}
      <div className="absolute bottom-16 right-3 animate-float rounded-full border border-accent/40 bg-ink-800/90 px-3 py-1.5 text-[10px] font-semibold text-accent shadow-lg [animation-delay:2s]">
        ✦ Explained with SHAP
      </div>
    </div>
  );
}
