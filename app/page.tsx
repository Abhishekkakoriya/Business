import { HeroSection } from "@/components/home/hero-section"
import { TrustedOutcomesSection } from "@/components/home/trusted-outcomes-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FoundersSection } from "@/components/home/founders-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedOutcomesSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FoundersSection />
      <CTASection />
    </>
  )
}
