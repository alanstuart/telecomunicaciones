"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, Clock, Users, Wrench, BookOpen, AlertCircle, Headphones } from "lucide-react"

export default function SupportSection() {
  const supportChannels = [
    {
      icon: Phone,
      title: "Soporte Telefónico",
      description: "Línea directa 24/7 para emergencias técnicas",
      contact: "+506 2222-3333",
      hours: "24 horas, 7 días",
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "emerald",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Atención rápida por WhatsApp",
      contact: "+506 8888-9999",
      hours: "6:00 AM - 10:00 PM",
      gradient: "from-green-500 to-emerald-500",
      glowColor: "green",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Soporte por correo electrónico",
      contact: "soporte@eduardojarquin.cr",
      hours: "Respuesta en 2 horas",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "blue",
    },
  ]

  const supportServices = [
    {
      icon: Wrench,
      title: "Soporte Técnico Remoto",
      description: "Diagnóstico y solución de problemas a distancia",
      features: ["Configuración de equipos", "Optimización de velocidad", "Resolución de conectividad"],
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "cyan",
    },
    {
      icon: Users,
      title: "Visita Técnica",
      description: "Técnicos especializados van a tu ubicación",
      features: ["Instalación de equipos", "Mantenimiento preventivo", "Reparaciones en sitio"],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple",
    },
    {
      icon: BookOpen,
      title: "Centro de Ayuda",
      description: "Guías y tutoriales para autoservicio",
      features: ["Videos explicativos", "Manuales de usuario", "Preguntas frecuentes"],
      gradient: "from-orange-500 to-red-500",
      glowColor: "orange",
    },
    {
      icon: AlertCircle,
      title: "Monitoreo 24/7",
      description: "Supervisión constante de la red",
      features: ["Detección proactiva", "Alertas automáticas", "Mantenimiento preventivo"],
      gradient: "from-indigo-500 to-purple-500",
      glowColor: "indigo",
    },
  ]

  const handleContactNow = (channel: string) => {
    switch (channel) {
      case "phone":
        window.open("tel:+50622223333", "_self")
        break
      case "whatsapp":
        window.open("https://wa.me/50688889999?text=Hola, necesito soporte técnico", "_blank")
        break
      case "email":
        window.open("mailto:soporte@eduardojarquin.cr", "_self")
        break
      default:
        alert("Contactando con soporte...")
    }
  }

  const handleEmergencyCall = () => {
    alert("Conectando con soporte de emergencia 24/7...")
    window.open("tel:+50622223333", "_self")
  }

  const handleReportOutage = () => {
    alert("Formulario de reporte de interrupción masiva - Un técnico se pondrá en contacto contigo.")
  }

  return (
    <section id="soporte" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Headphones className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300">Soporte Premium</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Soporte</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Técnico</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de soporte técnico especializado está disponible cuando lo necesites. Técnicos costarricenses
            capacitados en las últimas tecnologías para resolver cualquier inconveniente.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {supportChannels.map((channel, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105 group text-center"
            >
              <CardHeader>
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${channel.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg shadow-${channel.glowColor}-500/25 group-hover:shadow-${channel.glowColor}-500/50 transition-all duration-300`}
                >
                  <channel.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {channel.title}
                </CardTitle>
                <CardDescription className="text-slate-400 text-lg">{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <p className="font-bold text-emerald-400 text-xl">{channel.contact}</p>
                  <p className="text-slate-300 flex items-center justify-center text-lg">
                    <Clock className="h-5 w-5 mr-2" />
                    {channel.hours}
                  </p>
                </div>
                <Button
                  className={`w-full bg-gradient-to-r ${channel.gradient} hover:scale-105 text-white shadow-lg shadow-${channel.glowColor}-500/25 transition-all duration-300`}
                  onClick={() =>
                    handleContactNow(
                      channel.title.toLowerCase().includes("teléfono")
                        ? "phone"
                        : channel.title.toLowerCase().includes("whatsapp")
                          ? "whatsapp"
                          : "email",
                    )
                  }
                >
                  Contactar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supportServices.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 group"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg shadow-${service.glowColor}-500/25`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-400 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-300 flex items-center group-hover:text-slate-200 transition-colors"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Support */}
        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-xl border border-red-500/20 rounded-3xl p-12 mb-16 shadow-2xl shadow-red-500/10">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">Soporte de Emergencia</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Para interrupciones críticas del servicio o emergencias técnicas, contamos con un equipo especializado
              disponible las 24 horas con tecnología de respuesta rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg shadow-red-500/25 px-8 py-4 text-lg font-semibold"
                onClick={handleEmergencyCall}
              >
                <Phone className="h-5 w-5 mr-2" />
                Llamar Emergencia: +506 2222-3333
              </Button>
              <Button
                variant="outline"
                className="border-2 border-red-400/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 px-8 py-4 text-lg font-semibold bg-transparent"
                onClick={handleReportOutage}
              >
                Reportar Interrupción Masiva
              </Button>
            </div>
          </div>
        </div>

        {/* Self-Service Portal */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Portal de Autoservicio Inteligente</h3>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Accede a tu cuenta digital, revisa tu consumo en tiempo real, paga facturas y encuentra soluciones rápidas
              a problemas comunes en nuestro portal inteligente.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: BookOpen,
                  title: "Guías de Configuración",
                  action: () => alert("Accediendo a guías de configuración..."),
                },
                {
                  icon: Wrench,
                  title: "Diagnóstico Automático",
                  action: () => alert("Iniciando diagnóstico automático..."),
                },
                {
                  icon: Users,
                  title: "Comunidad de Usuarios",
                  action: () => alert("Accediendo a la comunidad de usuarios..."),
                },
                {
                  icon: Clock,
                  title: "Estado del Servicio",
                  action: () => alert("Verificando estado del servicio..."),
                },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center bg-slate-700/30 border-slate-600 text-slate-300 hover:bg-slate-600/50 hover:border-cyan-500/50 hover:text-white transition-all duration-300 group"
                  onClick={item.action}
                >
                  <item.icon className="h-8 w-8 mb-3 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
