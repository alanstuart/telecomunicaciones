"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, User, Bot, Minimize2, Maximize2 } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy Ana, tu asistente virtual especializada en fibra óptica. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" }),
    },
  ])

  const quickReplies = ["Ver planes de fibra óptica", "Verificar cobertura", "Soporte técnico", "Hablar con un agente"]

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user" as const,
      timestamp: new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setMessage("")

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Gracias por tu mensaje. Un especialista en fibra óptica se pondrá en contacto contigo en breve. ¿Hay algo más en lo que pueda ayudarte?",
        sender: "bot" as const,
        timestamp: new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      sender: "user" as const,
      timestamp: new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])

    setTimeout(() => {
      let botText = ""
      switch (reply) {
        case "Ver planes de fibra óptica":
          botText =
            "Perfecto! Tenemos planes de fibra óptica desde ₡15,000 mensuales con velocidades hasta 1000 Mbps. ¿Te interesa internet residencial o empresarial?"
          break
        case "Verificar cobertura":
          botText =
            "¿Podrías compartirme tu dirección exacta para verificar si nuestra red de fibra óptica llega a tu zona?"
          break
        case "Soporte técnico":
          botText =
            "Te conectaré con nuestro equipo técnico especializado. Mientras tanto, ¿podrías describir el problema que estás experimentando?"
          break
        case "Hablar con un agente":
          botText =
            "Te estoy conectando con uno de nuestros especialistas en fibra óptica. El tiempo de espera aproximado es de 2 minutos."
          break
        default:
          botText = "Gracias por tu consulta sobre nuestros servicios. ¿En qué más puedo ayudarte?"
      }

      const botResponse = {
        id: messages.length + 2,
        text: botText,
        sender: "bot" as const,
        timestamp: new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-8 left-8 z-50">
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-br from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-4 rounded-2xl shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-110 group-hover:shadow-blue-500/40"
          >
            <MessageCircle className="h-7 w-7" />
          </button>

          {/* Tooltip */}
          <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl border border-slate-700">
            Chat en vivo
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-900"></div>
          </div>

          {/* Pulse animation */}
          <div className="absolute inset-0 bg-blue-500 rounded-2xl animate-ping opacity-20"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <Card
        className={`w-96 shadow-2xl transition-all duration-300 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 ${isMinimized ? "h-16" : "h-[500px]"}`}
      >
        <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Chat en Vivo</CardTitle>
                <p className="text-xs text-blue-100">Ana - Especialista en Fibra Óptica</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-blue-700/50 p-2 rounded-lg transition-colors"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700/50 p-2 rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[436px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 max-w-xs ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === "user" ? "bg-gradient-to-br from-blue-500 to-cyan-500" : "bg-slate-700"}`}
                    >
                      {msg.sender === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-slate-300" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`p-3 rounded-2xl ${msg.sender === "user" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white" : "bg-slate-700 text-slate-200"}`}
                      >
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-slate-700/50 bg-slate-800/50">
                <p className="text-xs text-slate-400 mb-3">Respuestas rápidas:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white p-3 rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-cyan-500/50"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="p-4 border-t border-slate-700/50 bg-slate-800/50">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 text-sm bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/25"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  size="sm"
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
