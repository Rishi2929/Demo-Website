import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Experiments", href: "#experiments" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#f4f3ee]/80 px-5 shadow-sm backdrop-blur-xl md:px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2" aria-label="Rishi home">
          <span className="text-lg font-semibold tracking-[-0.04em]">RISHI</span>

          <span className="flex h-2 w-2 rounded-full bg-lime-400 transition-transform duration-300 group-hover:scale-150" />
        </Link>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium tracking-[-0.01em] text-neutral-600 transition-colors duration-200 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}

        <Link href="#contact" className="group h-10 rounded-full bg-black px-4 text-sm font-medium text-white hover:bg-neutral-800">
          Start a project
          <ArrowUpRight className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </nav>
    </header>
  );
}
