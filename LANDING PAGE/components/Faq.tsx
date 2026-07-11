import { ChevronRight } from "lucide-react";
import { FAQ } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="shell max-w-3xl">
        <p className="eyebrow mb-4 text-center">Security & questions</p>
        <h2 className="text-center font-display text-[2rem] leading-tight tracking-tightest text-ink sm:text-[2.6rem]">
          The parts worth spelling out.
        </h2>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-1 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5">
                <span className="text-base font-medium tracking-tight text-ink">
                  {item.q}
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate transition-transform duration-200 group-open:rotate-90" />
              </summary>
              <p className="pb-6 pr-8 text-[15px] leading-relaxed text-slate">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
