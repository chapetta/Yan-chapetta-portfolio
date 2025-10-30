import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { certificates } from '../utils/content'
import { fadeIn, staggerContainer } from '../utils/motion'

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-35" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="certificados"
          title="Resultados reconhecidos em formação contínua"
          description="Selecionei cursos e imersões que reforçam meu domínio da stack moderna e o foco em UX, automação e performance."
        />

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              variants={fadeIn('up', index * 0.05, 0.25)}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{certificate.issuer}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{certificate.title}</h3>
                </div>
                <div className="mt-auto">
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-100 transition-colors hover:border-primary/60 hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Ver certificado
                    <ExternalLink size={16} aria-hidden />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
