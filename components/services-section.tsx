"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Tv, Phone, Building, Home, Smartphone, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".service-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Wifi,
      title: "Internet Fibra Óptica",
      description: "Conexión ultrarrápida con tecnología de fibra óptica hasta tu hogar",
      features: [
        "Velocidades desde 50 Mbps hasta 1000 Mbps",
        "Conexión simétrica garantizada",
        "Sin límite de descarga",
        "99.9% de tiempo de actividad",
      ],
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "cyan",
    },
    {
      icon: Tv,
      title: "Televisión 4K",
      description: "Canales en ultra alta definición con la mejor calidad de imagen",
      features: [
        "Más de 200 canales 4K HDR",
        "Canales premium incluidos",
        "Grabación en la nube",
        "Guía inteligente de programas",
      ],
      gradient: "from-purple-500 to-pink-600",
      glowColor: "purple",
    },
    {
      icon: Phone,
      title: "Telefonía VoIP",
      description: "Servicio de telefonía digital con llamadas ilimitadas",
      features: [
        "Llamadas ilimitadas nacionales",
        "Buzón de voz inteligente",
        "Identificador avanzado",
        "Conferencias hasta 10 personas",
      ],
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "emerald",
    },
    {
      icon: Building,
      title: "Soluciones Empresariales",
      description: "Conectividad dedicada y servicios especializados para empresas",
      features: ["Internet dedicado empresarial", "IP estática múltiple", "VPN empresarial", "Soporte técnico VIP"],
      gradient: "from-orange-500 to-red-600",
      glowColor: "orange",
    },
    {
      icon: Home,
      title: "Paquetes Smart Home",
      description: "Combos inteligentes diseñados para el hogar del futuro",
      features: ["Internet + TV + Teléfono", "Instalación inteligente", "Precio fijo 24 meses", "Sin permanencia"],
      gradient: "from-rose-500 to-pink-600",
      glowColor: "rose",
    },
    {
      icon: Smartphone,
      title: "Servicios Premium",
      description: "Servicios adicionales para una experiencia completa",
      features: [
        "Configuración WiFi 6E",
        "Soporte técnico remoto",
        "Mantenimiento predictivo",
        "Consultoría tecnológica",
      ],
      gradient: "from-indigo-500 to-purple-600",
      glowColor: "indigo",
    },
  ]

  return (
    <section ref={sectionRef} id="servicios" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300">Servicios de Vanguardia</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Nuestros</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Tecnología de última generación diseñada específicamente para las necesidades del futuro digital de Costa
            Rica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`service-card opacity-0 translate-y-8 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-${service.glowColor}-500/50 transition-all duration-500 hover:scale-105 group relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg shadow-${service.glowColor}-500/25 group-hover:shadow-${service.glowColor}-500/50 transition-all duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}
                      ></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-cyan-500/50 hover:text-white transition-all duration-300 group/btn"
                >
                  Más Información
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">¿Necesitas una solución personalizada?</h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Nuestro equipo de expertos puede diseñar una solución de telecomunicaciones que se adapte perfectamente a
              tus necesidades específicas del futuro digital.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
