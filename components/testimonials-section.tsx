"use client"

import { useEffect, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "María González",
      location: "San José, Costa Rica",
      rating: 5,
      text: "Excelente servicio de Soluciones Telecom. Los técnicos llegaron puntuales, instalaron la fibra óptica en 3 horas y la velocidad es increíble. Ahora puedo trabajar desde casa sin problemas.",
      service: "Instalación Fibra Óptica Residencial",
      speed: "500 Mbps",
    },
    {
      name: "Roberto Vargas",
      location: "Cartago, Costa Rica",
      rating: 5,
      text: "Contraté Soluciones Telecom para mi empresa y superaron mis expectativas. La instalación fue rápida, profesional y el soporte técnico es excepcional. Recomendado 100%.",
      service: "Instalación Empresarial",
      speed: "1000 Mbps",
    },
    {
      name: "Ana Jiménez",
      location: "Heredia, Costa Rica",
      rating: 5,
      text: "Después de tener problemas con otros proveedores, Soluciones Telecom solucionó todo. Internet estable, velocidad real y atención personalizada. Vale cada colón invertido.",
      service: "Migración y Optimización",
      speed: "300 Mbps",
    },
    {
      name: "Carlos Mendoza",
      location: "Alajuela, Costa Rica",
      rating: 5,
      text: "Servicio impecable. Los técnicos explicaron todo el proceso, instalaron equipos de calidad y configuraron la red perfectamente. Mi familia está muy satisfecha.",
      service: "Instalación Residencial Completa",
      speed: "750 Mbps",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonios")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonios"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.05)_75%)] bg-[length:120px_120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Star className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300 font-semibold">Testimonios Reales</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Lo que dicen
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              Nuestros Clientes
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Conoce las experiencias reales
            de quienes ya confían en Soluciones Telecom.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl shadow-emerald-500/10 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute top-8 left-8">
              <Quote className="h-12 w-12 text-emerald-400/30" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-light text-center mb-8 leading-relaxed text-slate-200">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-900">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-slate-400">{testimonials[currentTestimonial].location}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                  <p className="text-slate-400 text-sm">Servicio Contratado</p>
                  <p className="text-emerald-400 font-semibold">{testimonials[currentTestimonial].service}</p>
                </div>
                <div className="bg-slate-700/30 rounded-xl p-4 text-center">
                  <p className="text-slate-400 text-sm">Velocidad Instalada</p>
                  <p className="text-cyan-400 font-semibold">{testimonials[currentTestimonial].speed}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-slate-700/50 hover:bg-slate-600/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-slate-300" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-emerald-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-slate-700/50 hover:bg-slate-600/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div
            className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { number: "500+", label: "Clientes Satisfechos", color: "emerald" },
              { number: "99.8%", label: "Satisfacción Garantizada", color: "cyan" },
              { number: "24/7", label: "Soporte Técnico", color: "purple" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-emerald-500/5 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-300 bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
