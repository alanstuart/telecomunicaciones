"use client"

import { useEffect, useState } from "react"
import { Zap, Shield, Clock, Users, Award, Settings, CheckCircle, Star } from "lucide-react"

export default function BenefitsSection() {
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

    const element = document.getElementById("beneficios")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="beneficios"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.05)_75%)] bg-[length:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Star className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300 font-semibold">Beneficios Únicos</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              ¿Por qué elegir
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              Soluciones Telecom?
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Ofrecemos ventajas únicas que nos distinguen en el mercado de telecomunicaciones. Cada instalación es una
            garantía de calidad y excelencia técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Zap,
              title: "Instalación Rápida",
              description: "Instalación completa en menos de 4 horas con técnicos especializados.",
              color: "yellow",
              delay: 0,
            },
            {
              icon: Shield,
              title: "Garantía Total",
              description: "Garantía de 2 años en instalación y 1 año en equipos incluidos.",
              color: "emerald",
              delay: 200,
            },
            {
              icon: Clock,
              title: "Soporte 24/7",
              description: "Atención técnica disponible las 24 horas, los 365 días del año.",
              color: "cyan",
              delay: 400,
            },
            {
              icon: Users,
              title: "Equipo Certificado",
              description: "Técnicos con certificaciones internacionales y +10 años de experiencia.",
              color: "blue",
              delay: 600,
            },
            {
              icon: Award,
              title: "Calidad Premium",
              description: "Utilizamos únicamente equipos de marcas reconocidas mundialmente.",
              color: "purple",
              delay: 800,
            },
            {
              icon: Settings,
              title: "Configuración Completa",
              description: "Configuración optimizada de WiFi, seguridad y rendimiento de red.",
              color: "pink",
              delay: 1000,
            },
            {
              icon: CheckCircle,
              title: "Sin Costos Ocultos",
              description: "Precio fijo sin sorpresas. Todo incluido desde el primer día.",
              color: "green",
              delay: 1200,
            },
            {
              icon: Star,
              title: "Satisfacción Garantizada",
              description: "99.8% de clientes satisfechos. Tu satisfacción es nuestra prioridad.",
              color: "orange",
              delay: 1400,
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 shadow-2xl shadow-${benefit.color}-500/5 hover:shadow-${benefit.color}-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              <div
                className={`bg-gradient-to-br from-${benefit.color}-400/20 to-${benefit.color}-600/20 backdrop-blur-sm border border-${benefit.color}-500/30 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-${benefit.color}-500/10 w-fit`}
              >
                <benefit.icon className={`h-6 w-6 text-${benefit.color}-400`} />
              </div>

              <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {benefit.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-1600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              ¿Listo para la mejor conexión de tu vida?
            </h3>
            <p className="text-slate-400 mb-6 text-lg">
              Únete a más de 500 clientes satisfechos que ya disfrutan de internet de alta velocidad con instalación
              profesional garantizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                Solicitar Instalación Ahora
              </button>
              <button
                onClick={() => window.open("tel:+50622223333", "_self")}
                className="border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-cyan-500/50 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold transition-all duration-300 group bg-transparent"
              >
                Llamar para Consulta Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
