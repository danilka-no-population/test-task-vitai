"use client";

import { ArrowRight } from "lucide-react";
import { type Interest, LEAD_INTEREST_EVENT } from "@/lib/lead";
import { scrollToSection } from "@/lib/scroll";

type OrderButtonProps = {
  interest: Interest;
  label?: string;
  className?: string;
};

export default function OrderButton({
  interest,
  label = "Заказать",
  className = "",
}: OrderButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent<Interest>(LEAD_INTEREST_EVENT, { detail: interest }),
        );
        scrollToSection("order");
      }}
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      {label}
      <ArrowRight
        className="size-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </button>
  );
}
