"use client"

import { useEffect, useState } from "react"
import { Settings, Users, Award, Clock } from "lucide-react"

export default function AboutSection() {
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

    const element = document.getElementById("servicios")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.05)_75%)] bg-[length:60px_60px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Settings className="h-4 w-4 text-cyan-400" />
            <span className="text-slate-300 font-semibold">Nuestros Servicios</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Expertos en
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              Telecomunicaciones
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            En Soluciones Telecom nos especializamos en la instalación profesional de sistemas de telecomunicaciones de
            última generación. Nuestro equipo de técnicos certificados garantiza una instalación perfecta y
            configuración óptima para tu hogar o empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Settings,
              title: "Instalación de Fibra Óptica",
              description:
                "Instalación profesional de cables de fibra óptica con tecnología de punta para máxima velocidad y estabilidad.",
              color: "cyan",
            },
            {
              icon: Users,
              title: "Configuración de Redes",
              description:
                "Configuración completa de redes domésticas y empresariales con optimización WiFi y seguridad avanzada.",
              color: "emerald",
            },
            {
              icon: Award,
              title: "Soporte Técnico 24/7",
              description:
                "Equipo de soporte técnico disponible las 24 horas para resolver cualquier inconveniente de manera inmediata.",
              color: "blue",
            },
            {
              icon: Clock,
              title: "Mantenimiento Preventivo",
              description:
                "Servicios de mantenimiento programado para asegurar el óptimo funcionamiento de tu conexión a internet.",
              color: "purple",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-${service.color}-500/5 hover:shadow-${service.color}-500/20 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`bg-gradient-to-br from-${service.color}-400/20 to-${service.color}-600/20 backdrop-blur-sm border border-${service.color}-500/30 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-${service.color}-500/10 w-fit`}
              >
                <service.icon className={`h-8 w-8 text-${service.color}-400`} />
              </div>

              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-cyan-500/10 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-slate-400">Instalaciones Completadas</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <p className="text-slate-400">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                99.8%
              </div>
              <p className="text-slate-400">Satisfacción del Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
