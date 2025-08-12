"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleCall = () => {
    window.open("tel:+50622223333", "_self")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-xl flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">ST</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Soluciones Telecom
              </h1>
              <p className="text-xs text-slate-400">Servicios de Telecomunicaciones</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Inicio", id: "inicio" },
              { name: "Servicios", id: "servicios" },
              { name: "Beneficios", id: "beneficios" },
              { name: "Proceso", id: "proceso" },
              { name: "Galería", id: "galeria" },
              { name: "Testimonios", id: "testimonios" },
              { name: "Contacto", id: "contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={handleCall}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold px-6 py-2 transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              Llamar
            </Button>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Inicio", id: "inicio" },
                { name: "Servicios", id: "servicios" },
                { name: "Beneficios", id: "beneficios" },
                { name: "Proceso", id: "proceso" },
                { name: "Galería", id: "galeria" },
                { name: "Testimonios", id: "testimonios" },
                { name: "Contacto", id: "contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={handleCall}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold mt-4"
              >
                <Phone className="h-4 w-4 mr-2" />
                Llamar Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
