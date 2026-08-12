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
import {Toaster} from "@workspace/ui/components/sonner"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

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
