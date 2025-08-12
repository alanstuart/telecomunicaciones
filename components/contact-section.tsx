"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" })

    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleCall = () => {
    window.open("tel:+50622223333", "_self")
  }

  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <MessageSquare className="h-4 w-4 text-cyan-400" />
            <span className="text-slate-300">Contáctanos</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Contáctanos</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para tener el mejor internet de fibra óptica de Costa Rica? Contáctanos y te ayudamos a elegir el
            plan perfecto para tu futuro digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulario de Contacto */}
          <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Solicita tu Cotización</CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas con una propuesta
                personalizada
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Mensaje de éxito */}
              {showSuccess && (
                <div className="mb-8 p-6 rounded-2xl flex items-center space-x-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/10">
                  <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0" />
                  <p className="text-lg">¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/25 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-3">
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+506 8888-9999"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/25 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                    Correo Electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/25 h-12"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-3">
                    ¿Qué plan te interesa?
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Ej: Plan Familiar, Plan Empresarial, etc."
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/25 h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tus necesidades de internet y tecnología..."
                    rows={5}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/25 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg shadow-cyan-500/25 h-14 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Solicitud
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Datos de Contacto */}
            <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-blue-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { icon: Phone, title: "Teléfono", info: "+506 2222-3333", gradient: "from-emerald-500 to-teal-500" },
                  { icon: Mail, title: "Email", info: "info@eduardojarquin.cr", gradient: "from-blue-500 to-cyan-500" },
                  {
                    icon: MapPin,
                    title: "Oficina Principal",
                    info: "San José, Costa Rica\nAvenida Central, Torre del Este, Piso 5",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Clock,
                    title: "Horario de Atención",
                    info: "Lun-Vie: 8:00 AM - 6:00 PM\nSáb: 8:00 AM - 2:00 PM",
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </p>
                      <p className="text-slate-300 leading-relaxed whitespace-pre-line">{item.info}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center border border-slate-600/50">
                  <div className="text-center text-slate-400">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-purple-400" />
                    <p className="text-lg font-semibold">Mapa Interactivo</p>
                    <p className="text-sm">San José, Costa Rica</p>
                  </div>
                </div>
                <p className="text-slate-400 mt-6 leading-relaxed">
                  Estamos ubicados en el corazón de San José, con fácil acceso en transporte público y parqueo
                  disponible. Oficinas modernas con tecnología de vanguardia.
                </p>
              </CardContent>
            </Card>

            {/* Llamada a la Acción */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas ayuda inmediata?</h3>
                <p className="text-slate-300 mb-6 text-lg">
                  Llámanos ahora y te atendemos al instante con soporte especializado
                </p>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-lg shadow-cyan-500/25 px-8 py-4 text-lg font-semibold"
                  onClick={handleCall}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar: +506 2222-3333
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
