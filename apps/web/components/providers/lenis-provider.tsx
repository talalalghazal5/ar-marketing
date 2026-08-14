"use client"
import Lenis from "lenis"
import { createContext, useContext, useEffect, useRef } from "react"

type LenisContextValue = {
  scrollTo: (
    target: string | number | HTMLElement,
  ) => void
}

const LenisContext = createContext<LenisContextValue>({
  scrollTo: () => {},
})

export function useLenis() {
  return useContext(LenisContext)
}

type LenisProviderProps = {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      prevent: (node) => {
        return node.hasAttribute("data-lenis-prevent")
      },
      duration: 1.8,
      smoothWheel: true,
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const animationFrame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Ensure we scroll to top on page load if there's no hash (to handle uncertain landing positions)
  useEffect(() => {
    const handleLoad = () => {
      // Only scroll to top if there's no hash in the URL
      // If there is a hash, we want to let the anchor link scrolling handle it
      if (window.location.hash === '') {
        // Small delay to let rendering settle
        const timer = setTimeout(() => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { duration: 1.4 })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }, 100)
        return () => clearTimeout(timer)
      }
    }

    // Handle page load and pageshow (for back/forward navigation)
    window.addEventListener('load', handleLoad)
    window.addEventListener('pageshow', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('pageshow', handleLoad)
    }
  }, [])

  const scrollTo: LenisContextValue["scrollTo"] = (target) => {
    // Calculate header offset for smooth scrolling that accounts for fixed header
    const headerOffset = () => {
      const header = document.querySelector('header')
      if (header) {
        return header.offsetHeight
      }
      return 0
    }

    if (typeof target === 'string' && target.startsWith('#')) {
      // For anchor links, scroll to element minus header height
      const element = document.querySelector(target)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset() - 40
        if (lenisRef.current) {
          lenisRef.current.scrollTo(offsetPosition, { duration: 1.4 })
        } else {
          // Fallback to native scroll if Lenis isn't ready yet
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
        return
      }
    }

    // For other targets (numbers, elements), use default behavior
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target as string, { duration: 1.4 })
    } else {
      // Fallback to native scroll if Lenis isn't ready yet
      if (typeof target === 'number') {
        window.scrollTo({
          top: target,
          behavior: 'smooth'
        })
      } else if (target instanceof HTMLElement) {
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      } else {
        // For string targets that aren't anchors, try to parse as number or find element
        const numTarget = parseFloat(target as string)
        if (!isNaN(numTarget)) {
          window.scrollTo({
            top: numTarget,
            behavior: 'smooth'
          })
        } else {
          const element = document.querySelector(target as string)
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }
  }

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  )
}
