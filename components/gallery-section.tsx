"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera, ImageIcon } from "lucide-react"

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("todos")

  // Galería de imágenes de ejemplo
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600&text=Instalación+Fibra+Óptica+1",
      alt: "Instalación de fibra óptica en hogar",
      category: "residencial",
      title: "Instalación Residencial",
      description: "Instalación completa de fibra óptica en hogar familiar",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600&text=Configuración+Router+WiFi",
      alt: "Configuración de router WiFi 6",
      category: "equipos",
      title: "Configuración WiFi 6",
      description: "Setup y optimización de router WiFi de última generación",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600&text=Instalación+Empresarial+1",
      alt: "Instalación empresarial de red",
      category: "empresarial",
      title: "Red Empresarial",
      description: "Instalación de red completa para oficina corporativa",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600&text=Cableado+Estructurado",
      alt: "Cableado estructurado profesional",
      category: "cableado",
      title: "Cableado Estructurado",
      description: "Sistema de cableado Cat 6A para edificio comercial",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600&text=Técnico+Trabajando",
      alt: "Técnico realizando instalación",
      category: "equipo",
      title: "Técnico Especializado",
      description: "Nuestro equipo de técnicos certificados en acción",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600&text=Instalación+Fibra+Óptica+2",
      alt: "Instalación de fibra óptica exterior",
      category: "residencial",
      title: "Instalación Exterior",
      description: "Tendido de fibra óptica desde poste hasta hogar",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600&text=Rack+de+Comunicaciones",
      alt: "Rack de comunicaciones empresarial",
      category: "empresarial",
      title: "Rack Empresarial",
      description: "Centro de comunicaciones para empresa mediana",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600&text=Pruebas+de+Velocidad",
      alt: "Pruebas de velocidad de internet",
      category: "equipos",
      title: "Pruebas de Velocidad",
      description: "Verificación de velocidades reales post-instalación",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600&text=Instalación+Smart+Home",
      alt: "Instalación para hogar inteligente",
      category: "residencial",
      title: "Smart Home Setup",
      description: "Configuración de red para hogar inteligente",
    },
  ]

  const categories = [
    { id: "todos", name: "Todos los Proyectos", count: galleryImages.length },
    {
      id: "residencial",
      name: "Residencial",
      count: galleryImages.filter((img) => img.category === "residencial").length,
    },
    {
      id: "empresarial",
      name: "Empresarial",
      count: galleryImages.filter((img) => img.category === "empresarial").length,
    },
    { id: "equipos", name: "Equipos", count: galleryImages.filter((img) => img.category === "equipos").length },
    { id: "cableado", name: "Cableado", count: galleryImages.filter((img) => img.category === "cableado").length },
    { id: "equipo", name: "Nuestro Equipo", count: galleryImages.filter((img) => img.category === "equipo").length },
  ]

  const filteredImages =
    selectedCategory === "todos" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("galeria")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section
      id="galeria"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.05)_75%)] bg-[length:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Camera className="h-4 w-4 text-emerald-400" />
            <span className="text-slate-300 font-semibold">Galería de Proyectos</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Nuestros
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              Trabajos Realizados
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Explora nuestra galería de instalaciones completadas. Cada proyecto representa nuestro compromiso con la
            excelencia y la satisfacción del cliente.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-700/50 hover:border-emerald-500/50 hover:text-white backdrop-blur-sm"
              }`}
            >
              {category.name}
              <span
                className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id ? "bg-white/20" : "bg-slate-700/50"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-emerald-500/5 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
              onClick={() => openModal(index)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 p-4 rounded-full">
                      <ZoomIn className="h-8 w-8 text-emerald-400" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-sm text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-500/30">
                      {categories.find((cat) => cat.id === image.category)?.name || image.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {image.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <ImageIcon className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-400 mb-2">No hay imágenes en esta categoría</h3>
            <p className="text-slate-500">Selecciona otra categoría para ver más proyectos</p>
          </div>
        )}

        {/* Stats */}
        <div
          className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { number: "500+", label: "Proyectos Completados", color: "emerald" },
            { number: "15+", label: "Años de Experiencia", color: "cyan" },
            { number: "99.8%", label: "Satisfacción del Cliente", color: "purple" },
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

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-500/30">
                    {categories.find((cat) => cat.id === filteredImages[selectedImage].category)?.name}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">{filteredImages[selectedImage].description}</p>

                {/* Image Counter */}
                <div className="mt-4 text-center">
                  <span className="text-slate-500 text-sm">
                    {selectedImage + 1} de {filteredImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
