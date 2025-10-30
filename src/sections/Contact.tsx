import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { whatsappLink } from "../utils/content";
import { fadeIn, scaleIn } from "../utils/motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-40" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="contato"
          title="Vamos conversar sobre o próximo projeto?"
          description="Preferi substituir formulários por uma conversa direta — clique, abra o WhatsApp e me conte o desafio que precisa ganhar vida."
        />

        <motion.div
          variants={fadeIn("up", 0.06)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-8 text-center backdrop-blur-xl sm:p-10"
        >
          <motion.div
            variants={scaleIn}
            className="mx-auto grid max-w-4xl grid-cols-12 gap-6 text-left text-slate-300"
          >
            <div className="col-span-12 flex flex-col items-center gap-4 text-center lg:col-span-4 lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.4em] text-slate-400">
                <MessageCircle size={18} className="text-accent" />
                resposta rápida
              </div>
              <h3 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-semibold text-white">
                Atendimento direto com Yan Chapetta
              </h3>
              <p className="text-pretty text-slate-300">
                Quer revisar um design, discutir integrações ou explorar uma
                vaga? Envie uma mensagem e eu retorno rapidamente com insights e
                próximos passos. Disponibilidade imediata para projetos remotos
                ou presenciais no Rio de Janeiro.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-gradient-to-r from-accent/40 via-emerald-400/35 to-primary/40 px-8 py-4 text-lg font-semibold text-white shadow-glow-accent transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Conversar com Yan Chapetta pelo WhatsApp"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <PhoneCall className="text-white transition-transform duration-500 group-hover:rotate-6" />
                </span>
                Falar com Yan no WhatsApp
              </a>
            </div>

            <div className="col-span-12 grid gap-4 text-sm lg:col-span-8 lg:grid-cols-2">
              <a
                href="tel:+5521981510300"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Ligar para +55 21 981510300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} className="text-primary" />
                </span>
                +55 21 981510300
              </a>
              <a
                href="mailto:cha.petta@hotmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Enviar e-mail para cha.petta@hotmail.com"
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
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Abrir perfil no LinkedIn"
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
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Abrir perfil no GitHub"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Github size={18} className="text-primary" />
                </span>
                github.com/chapetta
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={18} className="text-primary" />
                </span>
                Rio de Janeiro · Disponível para viagens
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
