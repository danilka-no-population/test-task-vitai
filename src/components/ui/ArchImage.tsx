import Image from "next/image";

type ArchImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  accent?: "rust" | "moss";
  className?: string;
};

export default function ArchImage({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 100vw",
  accent = "rust",
  className = "",
}: ArchImageProps) {
  const block =
    accent === "rust"
      ? "bg-gradient-to-br from-rust/40 to-rust/10"
      : "bg-gradient-to-br from-moss/40 to-moss/10";

  return (
    <div className={className}>
      <div className="relative">
        <div
          aria-hidden="true"
          className={`absolute inset-0 translate-x-5 translate-y-6 rounded-t-[999px] rounded-b-3xl ${block}`}
        />
        <div className="relative overflow-hidden rounded-t-[999px] rounded-b-3xl border border-line shadow-[0_36px_70px_-24px_rgba(33,22,17,0.55)]">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1130}
            priority={priority}
            sizes={sizes}
            className="aspect-[4/5] w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-bean/30 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
