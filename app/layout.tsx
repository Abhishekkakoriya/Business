import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerLaunch - Accelerate Your Tech Career",
  description: "Build real-world skills through internships, projects, and expert mentorship. Land your dream tech job with hands-on experience.",
  keywords: ["internship", "tech careers", "software development", "interview prep", "coding bootcamp", "career acceleration"],
  authors: [{ name: "CareerLaunch" }],
  openGraph: {
    title: "CareerLaunch - Accelerate Your Tech Career",
    description: "Build real-world skills through internships, projects, and expert mentorship.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerLaunch - Accelerate Your Tech Career",
    description: "Build real-world skills through internships, projects, and expert mentorship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
