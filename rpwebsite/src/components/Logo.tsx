/** Lanka-Link mark: a link of two rounded loops on the brand gradient. */
export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span
      className="gradient-brand inline-flex shrink-0 items-center justify-center rounded-xl shadow-md shadow-brand/30"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.58} height={size * 0.58} fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round">
        <path d="M10 14a4 4 0 0 1 0-5.66l2.1-2.1a4 4 0 0 1 5.66 5.66l-1.06 1.06" />
        <path d="M14 10a4 4 0 0 1 0 5.66l-2.1 2.1a4 4 0 0 1-5.66-5.66l1.06-1.06" stroke="#3ddc97" />
      </svg>
    </span>
  );
}
