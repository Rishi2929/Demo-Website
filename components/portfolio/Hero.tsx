import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f3ee]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-8 pt-32 lg:px-8">
        {/* Main content */}
        <div className="relative flex flex-1 items-center">
          <div className="relative z-10 max-w-5xl">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Independent web developer · India / Worldwide
            </p>

            <h1 className="text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-neutral-950">
              I BUILD
              <br />
              THINGS
              <br />
              <span className="text-neutral-400">FOR THE WEB.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link
                href="#work"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
              >
                Explore my work
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
                Websites, interfaces and digital experiences designed to make businesses stand out.
              </p>
            </div>
          </div>

          {/* Decorative project card */}
          <div className="absolute -bottom-10 right-[-8%] hidden w-[42%] max-w-xl rotate-[-4deg] lg:block">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-black/10 bg-neutral-900 shadow-2xl">
              <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
              </div>

              <div className="flex h-full items-center justify-center">
                <span className="text-sm uppercase tracking-[0.25em] text-white/40">Selected work / 01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="flex items-end justify-between border-t border-black/10 pt-5">
          <div className="flex gap-8 text-[11px] uppercase tracking-[0.15em] text-neutral-400">
            <span>Websites</span>
            <span>E-commerce</span>
            <span>Interfaces</span>
          </div>

          <ArrowDownRight className="size-5 text-neutral-400" />
        </div>
      </div>
    </section>
  );
}
