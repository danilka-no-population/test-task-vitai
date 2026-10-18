import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid size-9 place-items-center rounded-full bg-ink text-paper-soft transition-colors group-hover:bg-rust">
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3c3.5 3.5 6.5 8 6.5 12.5 0 2.8-2.2 4.5-6.5 4.5S5.5 18.3 5.5 15.5C5.5 11 8.5 6.5 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 3c-3 2-7.5 4.5-8 10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="font-serif text-xl font-semibold tracking-tight text-ink">
        Кварта
      </span>
    </Link>
  );
}
