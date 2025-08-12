"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "¿Cuánto tiempo toma la instalación de fibra óptica?",
      answer:
        "La instalación de fibra óptica típicamente toma entre 2-4 horas. Nuestros técnicos especializados coordinan contigo una cita conveniente y realizan todo el proceso el mismo día con tecnología de vanguardia. La instalación es completamente gratuita.",
    },
    {
      question: "¿Hay permanencia mínima en los contratos?",
      answer:
        "No, no manejamos permanencia mínima en nuestros planes residenciales. Puedes cancelar el servicio cuando gustes con un mes de anticipación. Para planes empresariales, ofrecemos descuentos especiales con contratos anuales que incluyen beneficios adicionales.",
    },
    {
      question: "¿Qué pasa si tengo problemas técnicos?",
      answer:
        "Contamos con soporte técnico inteligente 24/7 los 365 días del año. Puedes contactarnos por teléfono, WhatsApp, chat en línea o email. La mayoría de problemas se resuelven remotamente en minutos gracias a nuestro sistema de diagnóstico avanzado.",
    },
    {
      question: "¿Puedo cambiar de plan después de contratarlo?",
      answer:
        "Sí, puedes cambiar tu plan en cualquier momento a través de nuestro portal digital. Los upgrades son inmediatos y los downgrades se aplican en el siguiente ciclo de facturación. No hay costo por cambio de plan y el proceso es completamente automatizado.",
    },
    {
      question: "¿Incluyen el modem WiFi 6E?",
      answer:
        "Sí, todos nuestros planes incluyen el modem WiFi 6E de última generación sin costo adicional. Utilizamos equipos con tecnología mesh inteligente para garantizar la mejor cobertura y velocidad en todo tu hogar u oficina.",
    },
    {
      question: "¿Cómo funciona la facturación digital?",
      answer:
        "La facturación es completamente digital y se envía por email. Aceptamos pagos con tarjeta de crédito/débito, transferencia bancaria, SINPE Móvil o en nuestras oficinas. También ofrecemos descuentos por pago anual anticipado y facturación automática.",
    },
    {
      question: "¿Qué velocidad de fibra óptica necesito?",
      answer:
        "Para uso básico (navegación, email): 50 Mbps. Para streaming 4K y videollamadas: 100-200 Mbps. Para múltiples usuarios, gaming y trabajo remoto: 300+ Mbps. Para smart homes y empresas: 500+ Mbps. Nuestros asesores digitales te ayudan a elegir el plan ideal.",
    },
    {
      question: "¿Tienen servicio en zonas rurales?",
      answer:
        "Estamos expandiendo constantemente nuestra red de fibra óptica. Aunque nos enfocamos en zonas urbanas, también llegamos a muchas áreas rurales con tecnología satelital híbrida. Consulta disponibilidad en tu zona específica a través de nuestro verificador de cobertura.",
    },
    {
      question: "¿Qué garantías ofrecen con la fibra óptica?",
      answer:
        "Garantizamos el 99.5% de tiempo de actividad en planes residenciales y hasta 99.9% en planes empresariales. Si no cumplimos, aplicamos créditos automáticos a tu factura. Además, ofrecemos garantía de velocidad real y soporte técnico gratuito de por vida.",
    },
    {
      question: "¿Puedo usar mi propio router con fibra óptica?",
      answer:
        "Sí, puedes usar tu propio router si prefieres. Nuestros técnicos te ayudan con la configuración avanzada. Sin embargo, recomendamos usar nuestro equipo WiFi 6E incluido para garantizar el mejor rendimiento y compatibilidad con nuestra red de fibra óptica.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const handleContactSupport = () => {
    alert("Te redirigiremos a nuestro equipo de soporte para resolver tus dudas específicas.")
  }

  const handleStartChat = () => {
    alert("Iniciando chat en vivo con nuestro equipo de atención al cliente...")
  }

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <HelpCircle className="h-4 w-4 text-indigo-400" />
            <span className="text-slate-300">Preguntas Frecuentes</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Preguntas</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios de fibra óptica y tecnología del futuro. Si no
            encuentras la respuesta que buscas, contáctanos directamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-8 text-left hover:bg-slate-700/30 transition-all duration-300 flex justify-between items-center group-hover:bg-slate-700/20"
                  >
                    <h3 className="text-xl font-bold text-white pr-4 group-hover:text-indigo-400 transition-colors">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-6 w-6 text-indigo-400 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-slate-400 group-hover:text-indigo-400 transition-all duration-300" />
                      )}
                    </div>
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                      <div className="border-t border-slate-700/50 pt-6">
                        <p className="text-slate-300 leading-relaxed text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl shadow-indigo-500/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">¿Tienes otra pregunta?</h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Nuestro equipo de atención al cliente está listo para ayudarte con cualquier duda específica sobre
              nuestros servicios de fibra óptica.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleContactSupport}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
              >
                Contactar Soporte
              </button>
              <button
                onClick={handleStartChat}
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-indigo-500/50 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Iniciar Chat en Vivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
