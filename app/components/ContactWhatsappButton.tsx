"use client"

import { MessageCircleMoreIcon } from "lucide-react"

export const contactTel = "7772833780"

export const whatsappUrl = `https://wa.me/${contactTel}?text=${encodeURIComponent(
  "¡Hola! Me gustaría comprar tu flor de jamaica."
)}`

export function ContactWhatsAppButton() {

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/50 hover:bg-[#20BD5A] transition-all hover:scale-105 group animate-heartbeat"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircleMoreIcon className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </a>
  )
}
