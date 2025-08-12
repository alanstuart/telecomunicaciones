import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BenefitsSection from "@/components/benefits-section"
import ProcessSection from "@/components/process-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
