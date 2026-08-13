import {
  ArrowUpLeft,
  CopyrightIcon,
  Mail02FreeIcons,
  Phone,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { buttonVariants } from "@workspace/ui/components/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import React from "react"

interface FooterLinkProps {
  href: string
  label: string
  icon?: React.ReactNode
}

function FooterLink({ href, label, icon }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "link",
        className:
          "flex w-fit items-center gap-1.5 px-0! text-muted-foreground!",
      })}
    >
      {label}
      {icon}
    </Link>
  )
}

export default function Footer() {
  const quickLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "خدماتنا", href: "/#services" },
    { label: "أعمالنا", href: "/portfolio" },
    { label: "FAQ", href: "/#faq" },
    { label: "تواصل معنا", href: "/#contact" },
  ]

  return (
    <footer className="mt-0 flex w-full flex-col justify-center gap-5 border-t border-accent bg-background p-6 backdrop-blur-3xl sm:p-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center font-thmanyah-subheading-sans text-4xl font-bold sm:text-6xl md:text-8xl lg:text-9xl">
          <span className="text-primary">AR</span> MARKETING
        </h1>
        <h3 className="text-center font-thmanyah-heading text-lg text-muted-foreground sm:text-2xl md:text-3xl">
          نحول الرؤية إلى قوة سوقية
        </h3>
      </div>
      <div className="mt-10 flex flex-col justify-between gap-10 font-thmanyah-subheading-sans text-muted-foreground sm:mt-15 md:flex-row">
        <div className="flex w-full max-w-lg flex-col gap-4 not-sm:items-center">
          <h4 className="font-thmanyah-subheading-sans text-xl font-semibold text-primary">
            روابط سريعة
          </h4>
          <div className="grid grid-cols-2 gap-3 not-sm:w-full not-sm:place-items-center sm:grid-cols-3">
            {quickLinks.map((link) => (
              <FooterLink
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-lg flex-col gap-4 not-sm:items-center">
          <h4 className="font-thmanyah-subheading-sans text-xl font-semibold text-primary">
            تابعنا
          </h4>
          <div className="flex gap-4">
            <Link
              href={"https://www.facebook.com/share/1Bwp2sSfEu/"}
              className={buttonVariants({
                variant: "link",
                className: "w-fit px-0! text-muted-foreground!",
              })}
            >
              <FontAwesomeIcon className="size-7" icon={faFacebook} />
            </Link>
            <Link
              href={"https://www.instagram.com/ar_comprehensive_marketing?igsh=MW5yankxYzNiaHk0Mg=="}
              className={buttonVariants({
                variant: "link",
                className: "w-fit px-0! text-muted-foreground!",
              })}
            >
              <FontAwesomeIcon className="size-7" icon={faInstagram} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/ar-comprehensive-markting-0674a3348%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app?fbclid=IwdGRjcATq089jbGNrBOrTy3Bkb2YFZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMzUwNjg1NTMxNzI4AAEeqja5q3W1epv0TOWtFmK4mTsQAOq4g9_2aqk-RPhbAl6_lP5RymzT4mpe5l4_aem_zWoJZe8KY2S2jPOwQLfwOg"
              }
              className={buttonVariants({
                variant: "link",
                className: "w-fit px-0! text-muted-foreground!",
              })}
            >
              <FontAwesomeIcon className="size-7" icon={faLinkedin} />
            </Link>
            <Link
              href={"https://www.pinterest.com/https%3A%2F%2Fpin.it%2F40mYYvQC9?fbclid=IwdGRjcATq0-xjbGNrBOrT6XBkb2YFZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMzUwNjg1NTMxNzI4AAEer1w3WtSTQBxV3fcwEO2tkQngN2Zo0CVij4hKxSIot0W943PCqBQBv6Aubxc_aem_kRN1RK8LuhWUy3iZtWXhiQ"}
              className={buttonVariants({
                variant: "link",
                className: "w-fit px-0! text-muted-foreground!",
              })}
            >
              <FontAwesomeIcon className="size-7" icon={faPinterest} />
            </Link>
          </div>
          <div className="flex items-start gap-3">
            <HugeiconsIcon icon={Mail02FreeIcons} className="mt-0.5 shrink-0" />
            <p className="text-sm break-all sm:text-base">
              ARcomprehensivemarketing@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-3">
            <HugeiconsIcon icon={Phone} className="shrink-0" />
            <p dir="ltr" className="text-sm sm:text-base">
              +963 983 728 578
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-accent/60 py-8 text-center font-thmanyah-subheading-sans text-sm text-muted-foreground">
        <p className="flex flex-wrap items-center justify-center gap-2">
          <HugeiconsIcon icon={CopyrightIcon} className="shrink-0" size={20} />
          {new Date().getFullYear()} AR Comprehensive Marketing{" "}
        </p>
        <p> جميع الحقوق محفوظة </p>
      </div>
    </footer>
  )
}
