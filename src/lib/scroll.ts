export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector<HTMLElement>("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const gap = 16;

  const top =
    el.getBoundingClientRect().top + window.scrollY - headerHeight - gap;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}
