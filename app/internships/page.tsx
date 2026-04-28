import { Metadata } from "next"
import { InternshipHero } from "@/components/internships/internship-hero"
import { InternshipTracks } from "@/components/internships/internship-tracks"
import { InternshipBenefits } from "@/components/internships/internship-benefits"
import { InternshipTimeline } from "@/components/internships/internship-timeline"
import { InternshipFAQ } from "@/components/internships/internship-faq"
import { InternshipApplicationForm } from "@/components/internships/internship-application-form"

export const metadata: Metadata = {
  title: "Internship Programs | CareerLaunch",
  description: "Join our paid and unpaid internship programs. Gain real-world experience, build projects, and launch your tech career.",
}

export default function InternshipsPage() {
  return (
    <>
      <InternshipHero />
      <InternshipTracks />
      <InternshipBenefits />
      <InternshipTimeline />
      <InternshipApplicationForm />
      <InternshipFAQ />
    </>
  )
}
