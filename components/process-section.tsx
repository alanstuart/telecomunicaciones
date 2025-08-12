"use client"

import { useEffect, useState } from "react"
import { Phone, Calendar, Settings, CheckCircle, ArrowRight } from "lucide-react"

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("proceso")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: Phone,
      title: "1. Contacto Inicial",
      description:
        "Llámanos o completa el formulario. Te contactamos en menos de 30 minutos para evaluar tus necesidades.",
      color: "cyan",
      details: ["Evaluación gratuita", "Asesoría personalizada", "Cotización inmediata"],
    },
    {
      icon: Calendar,
      title: "2. Programación",
      description: "Agendamos la visita técnica en el horario que mejor te convenga, incluyendo fines de semana.",
      color: "emerald",
      details: ["Horarios flexibles", "Confirmación 24h antes", "Técnico asignado"],
    },
    {
      icon: Settings,
      title: "3. Instalación",
      description: "Nuestros técnicos certificados realizan la instalación completa con equipos de última generación.",
      color: "blue",
      details: ["Instalación en 2-4 horas", "Equipos premium incluidos", "Configuración optimizada"],
    },
    {
      icon: CheckCircle,
      title: "4. Entrega y Soporte",
      description: "Verificamos que todo funcione perfectamente y te capacitamos en el uso de tu nueva conexión.",
      color: "purple",
      details: ["Pruebas de velocidad", "Capacitación incluida", "Soporte continuo"],
    },
  ]

  return (
    <section id="proceso" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.05)_75%)] bg-[length:100px_100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Settings className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300 font-semibold">Proceso Simple</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              ¿Cómo
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              Trabajamos?
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Un proceso transparente y eficiente diseñado para brindarte la mejor experiencia desde el primer contacto
            hasta el soporte continuo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-${step.color}-500/5 hover:shadow-${step.color}-500/20 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`bg-gradient-to-br from-${step.color}-400/20 to-${step.color}-600/20 backdrop-blur-sm border border-${step.color}-500/30 p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-${step.color}-500/10 flex-shrink-0`}
                  >
                    <step.icon className={`h-8 w-8 text-${step.color}-400`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-slate-300 text-sm">
                          <div className={`w-2 h-2 bg-${step.color}-400 rounded-full mr-3`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className={`relative transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400&text=Installation+Process"
                  alt="Proceso de instalación"
                  className="rounded-2xl w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Garantía de Satisfacción
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                  <span className="text-slate-300">Tiempo promedio de instalación</span>
                  <span className="text-cyan-400 font-bold">2-4 horas</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                  <span className="text-slate-300">Satisfacción del cliente</span>
                  <span className="text-emerald-400 font-bold">99.8%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                  <span className="text-slate-300">Garantía de instalación</span>
                  <span className="text-purple-400 font-bold">2 años</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl border border-cyan-500/20">
                <p className="text-slate-300 text-sm">
                  <strong className="text-cyan-400">Compromiso:</strong> Si no quedas 100% satisfecho con la
                  instalación, la repetimos sin costo adicional.
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
