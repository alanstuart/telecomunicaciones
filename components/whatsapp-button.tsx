"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    const message = "Hola, me interesa información sobre instalación de internet profesional"
    const phoneNumber = "50622223333"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <div className="absolute -top-12 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Chatea con nosotros!
      </div>
    </button>
  )
}
