"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Search, CheckCircle, XCircle, Satellite } from "lucide-react"

export default function CoverageSection() {
  const [address, setAddress] = useState("")
  const [coverageResult, setCoverageResult] = useState<"available" | "unavailable" | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [showRequestForm, setShowRequestForm] = useState(false)

  const provinces = [
    {
      name: "San José",
      coverage: "95%",
      areas: ["Centro", "Escazú", "Santa Ana", "Curridabat", "Desamparados"],
      color: "cyan",
    },
    {
      name: "Alajuela",
      coverage: "88%",
      areas: ["Centro", "Atenas", "Grecia", "Naranjo", "Palmares"],
      color: "emerald",
    },
    {
      name: "Cartago",
      coverage: "82%",
      areas: ["Centro", "Paraíso", "La Unión", "Jiménez", "Turrialba"],
      color: "blue",
    },
    {
      name: "Heredia",
      coverage: "90%",
      areas: ["Centro", "Barva", "Santo Domingo", "Santa Bárbara", "San Rafael"],
      color: "purple",
    },
    {
      name: "Puntarenas",
      coverage: "65%",
      areas: ["Centro", "Esparza", "Montes de Oro", "Osa", "Golfito"],
      color: "orange",
    },
    {
      name: "Guanacaste",
      coverage: "70%",
      areas: ["Liberia", "Santa Cruz", "Bagaces", "Carrillo", "Cañas"],
      color: "pink",
    },
    {
      name: "Limón",
      coverage: "60%",
      areas: ["Centro", "Pococí", "Siquirres", "Talamanca", "Matina"],
      color: "indigo",
    },
  ]

  const handleCoverageCheck = async () => {
    if (!address.trim()) return

    setIsChecking(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const hasCoverage = Math.random() > 0.3
    setCoverageResult(hasCoverage ? "available" : "unavailable")
    setShowRequestForm(!hasCoverage)
    setIsChecking(false)
  }

  const handleCoverageRequest = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Solicitud enviada! Evaluaremos la factibilidad de cobertura en tu zona y te contactaremos pronto.")
    setShowRequestForm(false)
  }

  return (
    <section id="cobertura" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 text-sm mb-6">
            <Satellite className="h-4 w-4 text-blue-400" />
            <span className="text-slate-300">Cobertura Nacional</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Área de</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cobertura</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Expandimos constantemente nuestra red de fibra óptica para conectar más hogares y empresas en Costa Rica con
            tecnología del futuro.
          </p>
        </div>

        {/* Coverage Checker */}
        <div className="max-w-3xl mx-auto mb-20">
          <Card className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-blue-500/10">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-white">
                <MapPin className="h-6 w-6 mr-3 text-blue-400" />
                Verificar Cobertura
              </CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                Ingresa tu dirección para verificar si tenemos cobertura de fibra óptica en tu zona
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <Input
                  placeholder="Ej: San José, Escazú, del Mall Multiplaza 200m sur"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:ring-blue-500/25"
                />
                <Button
                  onClick={handleCoverageCheck}
                  disabled={isChecking || !address.trim()}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25 px-8"
                >
                  {isChecking ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <Search className="h-5 w-5" />
                  )}
                </Button>
              </div>

              {coverageResult && (
                <div
                  className={`p-6 rounded-2xl border transition-all duration-500 ${
                    coverageResult === "available"
                      ? "bg-emerald-500/10 border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                      : "bg-red-500/10 border-red-500/30 shadow-lg shadow-red-500/10"
                  }`}
                >
                  <div className="flex items-start">
                    {coverageResult === "available" ? (
                      <>
                        <CheckCircle className="h-6 w-6 text-emerald-400 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-emerald-400 text-xl mb-2">¡Excelente noticia!</p>
                          <p className="text-slate-300 mb-6 text-lg">
                            Tenemos cobertura de fibra óptica en tu zona. Puedes contratar nuestros servicios de última
                            generación.
                          </p>
                          <Button
                            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg shadow-emerald-500/25"
                            onClick={() => document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" })}
                          >
                            Ver Planes Disponibles
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-6 w-6 text-red-400 mr-4 mt-1 flex-shrink-0" />
                        <div className="w-full">
                          <p className="font-bold text-red-400 text-xl mb-2">Aún no llegamos a tu zona</p>
                          <p className="text-slate-300 mb-6 text-lg">
                            Pero estamos expandiendo nuestra red de fibra óptica. Completa el formulario para solicitar
                            cobertura en tu área.
                          </p>

                          {showRequestForm && (
                            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/50 mt-6">
                              <h4 className="font-bold text-white text-lg mb-4">Solicitar Cobertura en Mi Zona</h4>
                              <form onSubmit={handleCoverageRequest} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                  <Input
                                    placeholder="Nombre completo"
                                    required
                                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400"
                                  />
                                  <Input
                                    placeholder="Teléfono"
                                    required
                                    className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400"
                                  />
                                </div>
                                <Input
                                  placeholder="Correo electrónico"
                                  type="email"
                                  required
                                  className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400"
                                />
                                <Input
                                  placeholder="Dirección exacta"
                                  defaultValue={address}
                                  required
                                  className="bg-slate-600/50 border-slate-500 text-white placeholder:text-slate-400"
                                />
                                <Button
                                  type="submit"
                                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg shadow-red-500/25"
                                >
                                  Solicitar Cobertura
                                </Button>
                              </form>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Coverage by Province */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {provinces.map((province, index) => (
            <Card
              key={index}
              className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-${province.color}-500/50 transition-all duration-500 hover:scale-105 group`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {province.name}
                </CardTitle>
                <CardDescription>
                  <span className={`text-3xl font-bold text-${province.color}-400`}>{province.coverage}</span>
                  <span className="text-slate-400 text-lg"> de cobertura</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400 mb-4 font-medium">Principales áreas:</p>
                <ul className="space-y-2">
                  {province.areas.map((area, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-300 flex items-center group-hover:text-slate-200 transition-colors"
                    >
                      <div className={`w-2 h-2 bg-${province.color}-400 rounded-full mr-3 flex-shrink-0`}></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl shadow-blue-500/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">¿No ves tu zona en la lista?</h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Estamos en constante expansión con tecnología de fibra óptica. Contáctanos para conocer nuestros planes de
              crecimiento y ser el primero en saber cuándo llegamos a tu área.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 px-8 py-4 text-lg font-semibold"
                onClick={() =>
                  alert("Un asesor se pondrá en contacto contigo para evaluar la expansión de cobertura en tu zona.")
                }
              >
                Solicitar Expansión de Cobertura
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-cyan-500/50 hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Ver Mapa de Cobertura Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
