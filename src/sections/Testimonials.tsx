import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { testimonials } from '../utils/content'
import { fadeIn, staggerContainer } from '../utils/motion'

export function Testimonials() {
  return (
    <section id="feedbacks" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-40" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeader
          eyebrow="feedbacks"
          title="Palavras de quem acompanha minha jornada"
          description="Depoimentos coletados em mentorias e comunidades que ilustram colaboração, proatividade e atenção aos detalhes."
        />
        <motion.div
          variants={staggerContainer(0.2, 0.15)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={`${testimonial.name}-${index}`}
              variants={fadeIn('up', index * 0.1)}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/50 p-6 text-slate-200 shadow-lg shadow-black/30"
            >
              <Quote className="text-accent" size={24} aria-hidden />
              <p className="text-base leading-relaxed text-slate-300">{testimonial.content}</p>
              <footer className="mt-auto">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
