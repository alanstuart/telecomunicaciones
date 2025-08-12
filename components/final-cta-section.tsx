"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contacto")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static form - no backend integration
    alert("¡Gracias por tu interés! Te contactaremos pronto para programar tu instalación.")
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      message: "",
    })
  }

  const handleCall = () => {
    window.open("tel:+50622223333", "_self")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/50622223333?text=Hola, me interesa una instalación de internet", "_blank")
  }

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_25%,rgba(16,185,129,0.05)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.05)_75%)] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Phone className="h-4 w-4 text-cyan-400" />
            <span className="text-slate-300 font-semibold">Contacto Directo</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              ¿Listo para
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              Conectarte?
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Solicita tu instalación profesional hoy mismo. Nuestro equipo de expertos está listo para brindarte la mejor
            conexión de internet de Costa Rica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Solicita tu Instalación
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="+506 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Dirección exacta para la instalación"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Tipo de Servicio</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="residencial">Instalación Residencial</option>
                    <option value="empresarial">Instalación Empresarial</option>
                    <option value="migracion">Migración de Proveedor</option>
                    <option value="optimizacion">Optimización de Red</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Mensaje (Opcional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tus necesidades específicas..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/25"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Instalación Gratuita
                </Button>
              </form>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Respuesta Garantizada</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Te contactaremos en menos de 30 minutos para programar tu evaluación gratuita.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-emerald-500/10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Contacto Directo
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer" onClick={handleCall}>
                    <div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-500/30 p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/10">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">Llámanos Ahora</p>
                      <p className="text-white font-bold text-lg">+506 2222-3333</p>
                    </div>
                  </div>

                  <div
                    className="flex items-center space-x-4 group cursor-pointer"
                    onClick={() => window.open("mailto:info@solucionestelecom.cr")}
                  >
                    <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg shadow-emerald-500/10">
                      <Mail className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">Email</p>
                      <p className="text-white font-bold">info@solucionestelecom.cr</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 p-4 rounded-2xl shadow-lg shadow-purple-500/10">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">Ubicación</p>
                      <p className="text-white font-bold">San José, Costa Rica</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 p-4 rounded-2xl shadow-lg shadow-yellow-500/10">
                      <Clock className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">Horario de Atención</p>
                      <p className="text-white font-bold">24/7 Disponible</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleCall}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-bold py-3 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar Ahora
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex-1 border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-emerald-500/50 backdrop-blur-sm py-3 font-bold transition-all duration-300 group bg-transparent"
                  >
                    WhatsApp
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-cyan-500/10">
                <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  ¿Por qué actuar ahora?
                </h4>

                <ul className="space-y-3">
                  {[
                    "Evaluación técnica completamente gratuita",
                    "Instalación sin costo adicional incluida",
                    "Garantía de 2 años en toda la instalación",
                    "Soporte técnico 24/7 sin costo extra",
                    "Precios especiales por tiempo limitado",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl border border-cyan-500/20">
                  <p className="text-cyan-400 font-bold text-center">
                    ¡Oferta especial: Instalación gratuita por tiempo limitado!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
