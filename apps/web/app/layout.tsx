import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { DirectionProvider } from "@workspace/ui/components/direction"
import {
  thmanyahSans,
  thmanyahDisplay,
  thmanyahSerifText,
  adobe,
} from "@/lib/fonts"
import Header from "@/components/header"
import { LenisProvider } from "@/components/providers/lenis-provider"
import Footer from "@/components/footer"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import { Toaster } from "@workspace/ui/components/sonner"
import { Metadata } from "next"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ar-growth.com"),
  alternates: {
    canonical: "/",
  },
  title: "AR Marketing | شركة تسويق رقمي متكامل",
  description:
    "AR Marketing شركة متخصصة في التسويق الرقمي، إدارة حسابات التواصل الاجتماعي، تصميم الهوية البصرية، صناعة المحتوى، الإعلانات الممولة وتطوير المواقع والمتاجر الإلكترونية.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        thmanyahDisplay.variable,
        thmanyahSans.variable,
        thmanyahSerifText.variable,
        adobe.variable
      )}
    >
      <body className="bg-transparent!" suppressHydrationWarning>
        <LenisProvider>
          <ThemeProvider>
            <DirectionProvider direction="rtl">
              <Header />
              {children}
              <Toaster />
              <Footer />
              <ScrollToTopButton />
            </DirectionProvider>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  )
}
