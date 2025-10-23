import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, PhoneCall } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { whatsappLink } from '../utils/content'
import { fadeIn, scaleIn } from '../utils/motion'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-60" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeader
          eyebrow="contato"
          title="Vamos conversar sobre o próximo projeto?"
          description="Preferi substituir formulários por uma conversa direta — clique, abra o WhatsApp e me conte o desafio que precisa ganhar vida."
        />

        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-10 text-center backdrop-blur-xl"
        >
          <motion.div
            variants={scaleIn}
            className="mx-auto flex max-w-2xl flex-col items-center gap-6"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.4em] text-slate-300">
              <MessageCircle size={18} className="text-accent" />
              resposta rápida
            </div>
            <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Atendimento direto com Yan Chapetta
            </h3>
            <p className="text-base text-slate-300">
              Quer revisar um design, discutir integrações ou explorar uma vaga? Envie uma mensagem e eu retorno rapidamente com insights e próximos passos. Disponibilidade imediata para projetos remotos ou presenciais no Rio de Janeiro.
            </p>
            <div className="grid w-full gap-4 text-left sm:grid-cols-2">
              <a
                href="tel:+5599999999999"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} className="text-primary" />
                </span>
                +55 99 9999-9999
              </a>
              <a
                href="mailto:cha.petta@hotmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Mail size={18} className="text-primary" />
                </span>
                cha.petta@hotmail.com
              </a>
              <a
                href="https://linkedin.com/in/yan-chapetta"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Linkedin size={18} className="text-primary" />
                </span>
                linkedin.com/in/yan-chapetta
              </a>
              <a
                href="https://github.com/chapetta"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Github size={18} className="text-primary" />
                </span>
                github.com/chapetta
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={18} className="text-primary" />
                </span>
                Rio de Janeiro · Disponível para viagens
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-gradient-to-r from-accent/40 via-emerald-400/40 to-primary/40 px-8 py-4 text-lg font-semibold text-white shadow-glow-accent transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <PhoneCall className="text-white transition-transform duration-500 group-hover:rotate-6" />
              </span>
              Falar com Yan no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
