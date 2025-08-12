"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Wifi, Zap, Shield, Phone, ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleCallNow = () => {
    window.open("tel:+50622223333", "_self")
  }

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Fiber+Optic+Network')] bg-cover bg-center opacity-5"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-slate-300">Instalación Profesional</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Instalación
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                  Profesional
                </span>
                <br />
                <span className="text-slate-300 text-3xl md:text-4xl">de Internet</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                Expertos en instalación de fibra óptica y configuración de redes de alta velocidad. Servicio profesional
                garantizado con <span className="text-cyan-400 font-semibold">instalación gratuita</span> y soporte
                24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0 shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 px-8 py-4 text-lg font-semibold"
                onClick={scrollToContact}
              >
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Instalación
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-cyan-500/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 group bg-transparent"
                onClick={handleCallNow}
              >
                Llamar Ahora
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: Wifi, title: "Fibra Óptica", subtitle: "Hasta 1000 Mbps", color: "cyan" },
                { icon: Zap, title: "Instalación", subtitle: "100% Gratuita", color: "emerald" },
                { icon: Shield, title: "Soporte 24/7", subtitle: "Técnicos locales", color: "blue" },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`bg-gradient-to-br from-${item.color}-400/20 to-${item.color}-600/20 backdrop-blur-sm border border-${item.color}-500/30 p-4 rounded-2xl mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-${item.color}-500/10`}
                  >
                    <item.icon className={`h-8 w-8 mx-auto text-${item.color}-400`} />
                  </div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500&text=Professional+Fiber+Installation"
                  alt="Instalación profesional de fibra óptica"
                  className="rounded-2xl w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                ¿Por qué elegir Soluciones Telecom?
              </h3>

              <ul className="space-y-4">
                {[
                  "15 años liderando en Costa Rica",
                  "Instalación de fibra óptica certificada",
                  "Atención personalizada 24/7",
                  "Precios transparentes, sin sorpresas",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-300 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
