"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, CheckCircle, Rss } from "lucide-react"

export default function BlogSection() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const blogPosts = [
    {
      title: "Fibra Óptica vs 5G: El Futuro de las Telecomunicaciones",
      excerpt:
        "Análisis profundo de las tecnologías que están revolucionando la conectividad global y cómo impactan en Costa Rica.",
      category: "Tecnología",
      date: "15 Dic 2024",
      author: "Eduardo Jarquín",
      image: "/placeholder.svg?height=300&width=400&text=Fiber+Optic+vs+5G",
      readTime: "8 min",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Optimización de Redes WiFi 6E para Smart Homes",
      excerpt: "Guía completa para configurar tu hogar inteligente con la última tecnología WiFi 6E y mesh networking.",
      category: "Smart Home",
      date: "10 Dic 2024",
      author: "Equipo Técnico",
      image: "/placeholder.svg?height=300&width=400&text=WiFi+6E+Smart+Home",
      readTime: "12 min",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Trabajo Remoto: Infraestructura Digital del Futuro",
      excerpt: "Cómo preparar tu oficina en casa con tecnología de fibra óptica para máxima productividad.",
      category: "Trabajo Remoto",
      date: "5 Dic 2024",
      author: "María González",
      image: "/placeholder.svg?height=300&width=400&text=Remote+Work+Future",
      readTime: "10 min",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Regulaciones SUTEL 2024: Nuevas Oportunidades",
      excerpt:
        "Análisis de las nuevas regulaciones que impulsan la competencia y benefician a los usuarios costarricenses.",
      category: "Regulaciones",
      date: "1 Dic 2024",
      author: "Departamento Legal",
      image: "/placeholder.svg?height=300&width=400&text=SUTEL+2024+Regulations",
      readTime: "6 min",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Ciberseguridad: Protección Avanzada para Familias",
      excerpt: "Estrategias de seguridad digital para proteger a tu familia en el mundo conectado del futuro.",
      category: "Seguridad",
      date: "28 Nov 2024",
      author: "Especialista en Seguridad",
      image: "/placeholder.svg?height=300&width=400&text=Cybersecurity+Family",
      readTime: "15 min",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Streaming 8K: Preparando la Infraestructura",
      excerpt:
        "Todo sobre los requisitos de ancho de banda para contenido 8K y realidad virtual de próxima generación.",
      category: "Entretenimiento",
      date: "25 Nov 2024",
      author: "Equipo Técnico",
      image: "/placeholder.svg?height=300&width=400&text=8K+Streaming+VR",
      readTime: "7 min",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const categories = [
    "Todos",
    "Tecnología",
    "Smart Home",
    "Trabajo Remoto",
    "Regulaciones",
    "Seguridad",
    "Entretenimiento",
  ]
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const handleReadMore = (title: string) => {
    alert(`Abriendo artículo: "${title}"`)
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribing(false)
    setShowSuccess(true)
    setEmail("")

    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Rss className="h-4 w-4 text-blue-400" />
            <span className="text-slate-300">Blog Tecnológico</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Blog y</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Noticias</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Mantente informado con las últimas tendencias tecnológicas, análisis de la industria y consejos
            especializados para usuarios costarricenses del futuro digital.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-blue-500/50 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-blue-500/10 overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <Badge className={`bg-gradient-to-r ${blogPosts[0].gradient} text-white border-0 px-4 py-2`}>
                    {blogPosts[0].category}
                  </Badge>
                  <span className="text-sm text-cyan-400 font-semibold">Artículo Destacado</span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-6 leading-tight group-hover:text-cyan-400 transition-colors">
                  {blogPosts[0].title}
                </h3>

                <p className="text-slate-300 mb-8 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6 text-slate-400">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>{blogPosts[0].readTime} de lectura</span>
                  </div>
                </div>

                <Button
                  className="w-fit bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 px-8 py-4 text-lg font-semibold group/btn"
                  onClick={() => handleReadMore(blogPosts[0].title)}
                >
                  Leer Artículo Completo
                  <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 group overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`bg-gradient-to-r ${post.gradient} text-white border-0 text-xs px-3 py-1`}>
                    {post.category}
                  </Badge>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl leading-tight text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-slate-400 leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-cyan-500/50 hover:text-white transition-all duration-300 group/btn"
                  onClick={() => handleReadMore(post.title)}
                >
                  Leer Más
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl shadow-blue-500/10 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">Suscríbete a Nuestro Newsletter Tecnológico</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Recibe análisis exclusivos, tendencias tecnológicas y ofertas especiales directamente en tu correo.
            Contenido premium para profesionales del futuro digital.
          </p>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-8 p-6 rounded-2xl flex items-center justify-center space-x-3 max-w-md mx-auto bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/10">
              <CheckCircle className="h-6 w-6 text-emerald-400" />
              <p className="text-lg">¡Te has suscrito exitosamente! Recibirás contenido premium muy pronto.</p>
            </div>
          )}

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/25 h-12"
            />
            <Button
              type="submit"
              disabled={isSubscribing}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 px-8 h-12 font-semibold"
            >
              {isSubscribing ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Suscribiendo...</span>
                </div>
              ) : (
                "Suscribirse"
              )}
            </Button>
          </form>

          <p className="text-xs text-slate-500">
            Al suscribirte, aceptas recibir emails de Eduardo Jarquín Telecomunicaciones. Puedes cancelar en cualquier
            momento. Sin spam, solo contenido de valor.
          </p>
        </div>
      </div>
    </section>
  )
}
