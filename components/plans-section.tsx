"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

export default function PlansSection() {
  const [planType, setPlanType] = useState<"residential" | "business">("residential")

  const residentialPlans = [
    {
      name: "Básico",
      speed: "50 Mbps",
      price: "₡15,000",
      popular: false,
      icon: Zap,
      features: [
        "Internet 50 Mbps simétrico",
        "Instalación gratuita",
        "Soporte técnico 24/7",
        "Sin límite de descarga",
        "Modem WiFi 6 incluido",
      ],
      gradient: "from-slate-600 to-slate-700",
      glowColor: "slate",
    },
    {
      name: "Familiar",
      speed: "200 Mbps",
      price: "₡25,000",
      popular: true,
      icon: Star,
      features: [
        "Internet 200 Mbps simétrico",
        "Instalación gratuita",
        "Soporte técnico 24/7",
        "Sin límite de descarga",
        "Modem WiFi 6E incluido",
        "TV básica (100 canales)",
        "Teléfono fijo ilimitado",
      ],
      gradient: "from-cyan-500 to-emerald-500",
      glowColor: "cyan",
    },
    {
      name: "Premium",
      speed: "500 Mbps",
      price: "₡45,000",
      popular: false,
      icon: Crown,
      features: [
        "Internet 500 Mbps simétrico",
        "Instalación gratuita",
        "Soporte técnico prioritario",
        "Sin límite de descarga",
        "Modem WiFi 6E Pro incluido",
        "TV premium (200+ canales)",
        "Teléfono fijo ilimitado",
        "IP estática incluida",
      ],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple",
    },
    {
      name: "Ultra",
      speed: "1000 Mbps",
      price: "₡65,000",
      popular: false,
      icon: Zap,
      features: [
        "Internet 1000 Mbps simétrico",
        "Instalación gratuita",
        "Soporte técnico VIP",
        "Sin límite de descarga",
        "Modem WiFi 6E Pro Max incluido",
        "TV premium + streaming",
        "Teléfono fijo ilimitado",
        "IP estática incluida",
        "Técnico dedicado",
      ],
      gradient: "from-orange-500 to-red-500",
      glowColor: "orange",
    },
  ]

  const businessPlans = [
    {
      name: "PYME",
      speed: "100 Mbps",
      price: "₡35,000",
      popular: false,
      icon: Zap,
      features: [
        "Internet 100 Mbps dedicado",
        "SLA 99.5% uptime",
        "Soporte técnico empresarial",
        "IP estática incluida",
        "Firewall básico",
        "5 cuentas de email",
      ],
      gradient: "from-blue-500 to-indigo-500",
      glowColor: "blue",
    },
    {
      name: "Empresarial",
      speed: "500 Mbps",
      price: "₡85,000",
      popular: true,
      icon: Star,
      features: [
        "Internet 500 Mbps dedicado",
        "SLA 99.9% uptime",
        "Soporte técnico 24/7",
        "IP estática incluida",
        "Firewall avanzado",
        "VPN empresarial",
        "20 cuentas de email",
        "Backup de datos",
      ],
      gradient: "from-cyan-500 to-emerald-500",
      glowColor: "cyan",
    },
    {
      name: "Corporativo",
      speed: "1000 Mbps",
      price: "₡150,000",
      popular: false,
      icon: Crown,
      features: [
        "Internet 1000 Mbps dedicado",
        "SLA 99.99% uptime",
        "Soporte técnico VIP",
        "Múltiples IPs estáticas",
        "Firewall empresarial",
        "VPN multi-sitio",
        "Email ilimitado",
        "Backup automático",
        "Técnico en sitio",
      ],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple",
    },
  ]

  const currentPlans = planType === "residential" ? residentialPlans : businessPlans

  const handleContractPlan = (planName: string) => {
    alert(`¡Gracias por tu interés en el ${planName}! Un asesor se pondrá en contacto contigo pronto.`)
  }

  return (
    <section id="planes" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300">Planes Futuristas</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Planes y</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Precios</span>
          </h2>

          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Encuentra el plan perfecto para tus necesidades con tecnología de vanguardia y precios transparentes
          </p>

          <div className="flex justify-center mb-16">
            <div className="bg-slate-800/50 backdrop-blur-xl p-2 rounded-2xl border border-slate-700/50">
              <button
                onClick={() => setPlanType("residential")}
                className={`px-8 py-4 rounded-xl transition-all duration-300 font-semibold ${
                  planType === "residential"
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                Residencial
              </button>
              <button
                onClick={() => setPlanType("business")}
                className={`px-8 py-4 rounded-xl transition-all duration-300 font-semibold ${
                  planType === "business"
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                Empresarial
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-xl border transition-all duration-500 hover:scale-105 group overflow-hidden ${
                plan.popular
                  ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105"
                  : "border-slate-700/50 hover:border-slate-600/50"
              }`}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white border-0 shadow-lg shadow-cyan-500/25 px-4 py-2">
                    <Star className="h-3 w-3 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center relative z-10 pt-8">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg shadow-${plan.glowColor}-500/25`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-cyan-400 mb-4">{plan.speed}</CardDescription>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-lg">/mes</span>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                      : "bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600 hover:border-slate-500"
                  }`}
                  onClick={() => handleContractPlan(plan.name)}
                >
                  Contratar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl shadow-emerald-500/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas un plan personalizado?</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Contáctanos para una cotización especial adaptada a tus necesidades específicas
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-emerald-500/50 hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold bg-transparent"
              onClick={() => alert("Un asesor se pondrá en contacto contigo para crear un plan personalizado.")}
            >
              Solicitar Cotización Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
