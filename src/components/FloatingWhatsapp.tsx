import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../utils/content'

export function FloatingWhatsapp() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-500/80 via-emerald-500/70 to-sky-500/70 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      aria-label="Abrir conversa no WhatsApp com Yan Chapetta"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 160, damping: 15 }}
    >
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"
      >
        <MessageCircle size={18} aria-hidden />
      </motion.span>
      Falar pelo WhatsApp
    </motion.a>
  )
}
