export default function DistributeIcon({ className, size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M12 1v6m0 6v6" />
      <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24" />
      <path d="m19.07 4.93-4.24 4.24m-5.66 5.66-4.24 4.24" />
    </svg>
  );
}
