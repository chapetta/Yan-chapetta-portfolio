import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { aboutParagraphs } from "../utils/content";
import { fadeIn, staggerContainer } from "../utils/motion";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl" aria-hidden />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeader
          eyebrow="sobre mim"
          title="Transformo interfaces em experiências digitais fluídas com atenção a código limpo, design e usabilidade."
          className="mx-auto text-left text-pretty lg:text-center"
        />

        <motion.div
          variants={staggerContainer()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto w-full max-w-4xl"
        >
          <motion.div
            variants={fadeIn("up", 0.05)}
            className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {/* Conteúdo ocupa 100% da largura útil e mantém leitura fluida em todas as quebras */}
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty break-words">
                {paragraph}
              </p>
            ))}

            {/* Mantemos o box destacado alinhado ao texto principal */}
            <div className="noise-overlay relative mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <div className="absolute -top-6 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/40 sm:-top-8 sm:right-6">
                <Sparkles className="text-white" size={22} />
              </div>
              <p className="text-lg font-semibold text-white text-pretty">
                "Meu objetivo é transformar requisitos complexos em jornadas
                intuitivas, com microinterações que contam histórias e
                performance de primeira."
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.4em] text-slate-400">
                foco em produto e experiência
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
