import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </Link>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl shadow-cyan-500/10 border border-slate-700/50 p-12">
          <div className="flex items-center mb-12">
            <div className="bg-gradient-to-br from-cyan-400 to-emerald-400 p-4 rounded-2xl shadow-lg shadow-cyan-500/25 mr-6">
              <Shield className="h-8 w-8 text-slate-900" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Política de Privacidad
              </h1>
              <p className="text-slate-400 text-lg mt-2">Protegemos tu información con tecnología de vanguardia</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-slate-700/30 rounded-2xl p-6 mb-8 border border-slate-600/50">
              <p className="text-slate-300 mb-0">
                <strong className="text-cyan-400">Última actualización:</strong> Diciembre 2024
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                1. Información que Recopilamos
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                En Eduardo Jarquín Telecomunicaciones recopilamos la siguiente información con los más altos estándares
                de seguridad:
              </p>
              <ul className="list-none pl-0 text-slate-300 space-y-3">
                {[
                  "Información personal: nombre, dirección, teléfono, correo electrónico",
                  "Información de servicios: tipo de plan contratado, historial de pagos, uso de fibra óptica",
                  "Información técnica: datos de uso de internet, calidad del servicio, diagnósticos de red",
                  "Información de contacto: cuando nos contacta a través de formularios, chat o llamadas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                2. Uso de la Información
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">Utilizamos su información para:</p>
              <ul className="list-none pl-0 text-slate-300 space-y-3">
                {[
                  "Brindar y mantener nuestros servicios de fibra óptica y telecomunicaciones",
                  "Procesar pagos y gestionar su cuenta digital",
                  "Proporcionar soporte técnico especializado y atención al cliente 24/7",
                  "Enviar comunicaciones importantes sobre su servicio y actualizaciones tecnológicas",
                  "Mejorar nuestros servicios y desarrollar nuevas tecnologías",
                  "Cumplir con obligaciones legales y regulatorias de SUTEL",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                3. Compartir Información
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
              </p>
              <ul className="list-none pl-0 text-slate-300 space-y-3">
                {[
                  "Cuando sea requerido por ley o autoridades competentes de Costa Rica",
                  "Con proveedores de servicios certificados que nos ayudan a operar nuestra infraestructura",
                  "En caso de fusión, adquisición o venta de activos de la empresa",
                  "Con su consentimiento explícito y documentado",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                4. Seguridad de los Datos
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas de vanguardia para proteger su información:
              </p>
              <ul className="list-none pl-0 text-slate-300 space-y-3">
                {[
                  "Encriptación de datos sensibles con estándares AES-256",
                  "Acceso restringido a información personal con autenticación multifactor",
                  "Capacitación regular del personal en ciberseguridad y protección de datos",
                  "Monitoreo continuo de nuestros sistemas con IA y machine learning",
                  "Certificaciones ISO 27001 y cumplimiento con estándares internacionales",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                5. Sus Derechos Digitales
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">Usted tiene derecho a:</p>
              <ul className="list-none pl-0 text-slate-300 space-y-3">
                {[
                  "Acceder a su información personal a través de nuestro portal digital",
                  "Corregir información inexacta de forma inmediata",
                  "Solicitar la eliminación de sus datos (derecho al olvido)",
                  "Oponerse al procesamiento de sus datos para fines específicos",
                  "Solicitar la portabilidad de sus datos en formatos estándar",
                  "Retirar su consentimiento en cualquier momento sin penalizaciones",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                6. Cookies y Tecnologías Avanzadas
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia digital:
              </p>
              <ul className="list-none pl-0 text-slate-300 space-y-3">
                {[
                  "Recordar sus preferencias y configuraciones personalizadas",
                  "Analizar el tráfico del sitio web con herramientas de analytics avanzadas",
                  "Personalizar contenido basado en sus intereses tecnológicos",
                  "Mejorar la funcionalidad del sitio con IA y machine learning",
                  "Optimizar la velocidad de carga y rendimiento del sitio",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                7. Retención de Datos
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, siguiendo las mejores prácticas internacionales y la legislación
                costarricense, a menos que la ley requiera un período de retención más largo.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                8. Actualizaciones de Política
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras
                prácticas o en la legislación. Le notificaremos sobre cambios significativos a través de nuestro sitio
                web, email y otros canales de comunicación, actualizando la fecha de "última actualización".
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                9. Contacto y Soporte
              </h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información, puede
                contactarnos a través de nuestros canales especializados:
              </p>
              <div className="bg-slate-700/30 p-8 rounded-2xl border border-slate-600/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white font-bold text-xl mb-2">Eduardo Jarquín Telecomunicaciones</p>
                    <p className="text-slate-300 text-lg">Departamento de Privacidad y Protección de Datos</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300">
                      <strong className="text-cyan-400">Email:</strong> privacidad@eduardojarquin.cr
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-cyan-400">Teléfono:</strong> +506 2222-3333
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-cyan-400">Dirección:</strong> San José, Costa Rica
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-cyan-400">Horario:</strong> Lun-Vie 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
