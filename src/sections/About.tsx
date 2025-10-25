import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { aboutParagraphs } from "../utils/content";
import { fadeIn, staggerContainer } from "../utils/motion";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 opacity-60 blur-3xl" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeader
          eyebrow="sobre mim"
          title="Transformo interfaces em experiências digitais fluídas com atenção a código limpo, design e usabilidade."
          className="mx-auto text-left lg:text-center"
        />

        <motion.div
          variants={staggerContainer(0.18, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto w-full max-w-4xl"
        >
          <motion.div
            variants={fadeIn("up", 0.1)}
            className="space-y-6 text-base leading-relaxed text-slate-600 transition-colors dark:text-slate-300"
          >
            {/* Conteúdo ocupa 100% da largura útil e mantém leitura fluida em todas as quebras */}
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {/* Mantemos o box destacado alinhado ao texto principal */}
            <div className="noise-overlay relative mt-8 rounded-3xl border border-surface-light-muted/70 bg-white/70 p-6 transition-colors dark:border-white/5 dark:bg-slate-900/60">
              <div className="absolute -top-8 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/40">
                <Sparkles className="text-white" size={22} />
              </div>
              <p className="text-lg font-semibold text-slate-900 transition-colors dark:text-white">
                "Meu objetivo é transformar requisitos complexos em jornadas
                intuitivas, com microinterações que contam histórias e
                performance de primeira."
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-slate-400">
                foco em produto e experiência
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
