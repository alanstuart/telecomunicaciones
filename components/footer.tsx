"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleCall = () => {
    window.open("tel:+50622223333", "_self")
  }

  const handleEmail = () => {
    window.open("mailto:info@solucionestelecom.cr", "_self")
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border-t border-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.03)_25%,rgba(6,182,212,0.03)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.03)_75%)] bg-[length:60px_60px]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-xl flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">ST</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Soluciones Telecom
                </h3>
                <p className="text-slate-400 text-sm">Servicios de Telecomunicaciones</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Líderes en instalación profesional de sistemas de telecomunicaciones en Costa Rica. Conectamos el futuro
              con tecnología de vanguardia.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", color: "blue" },
                { icon: Instagram, href: "#", color: "pink" },
                { icon: Twitter, href: "#", color: "cyan" },
                { icon: Linkedin, href: "#", color: "blue" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-slate-800/50 hover:bg-${social.color}-500/20 p-3 rounded-xl transition-all duration-300 hover:scale-110 border border-slate-700/50 hover:border-${social.color}-500/30`}
                >
                  <social.icon className={`h-5 w-5 text-slate-400 hover:text-${social.color}-400`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Instalación Fibra Óptica",
                "Configuración de Redes",
                "Soporte Técnico 24/7",
                "Mantenimiento Preventivo",
                "Optimización WiFi",
                "Instalación Empresarial",
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", id: "inicio" },
                { name: "Servicios", id: "servicios" },
                { name: "Beneficios", id: "beneficios" },
                { name: "Proceso", id: "proceso" },
                { name: "Galería", id: "galeria" },
                { name: "Testimonios", id: "testimonios" },
                { name: "Contacto", id: "contacto" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleCall}>
                <div className="bg-cyan-500/20 p-2 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Teléfono</p>
                  <p className="text-white font-medium">+506 2222-3333</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group cursor-pointer" onClick={handleEmail}>
                <div className="bg-emerald-500/20 p-2 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-medium">info@solucionestelecom.cr</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Ubicación</p>
                  <p className="text-white font-medium">San José, Costa Rica</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Soluciones Telecom. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Términos de Servicio
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Soporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
