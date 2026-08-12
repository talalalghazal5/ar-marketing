"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { Field, FieldGroup, FieldError } from "@workspace/ui/components/field"
import { z } from "zod"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MailSend02FreeIcons,
  WhatsappFreeIcons,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactForm() {
  const countries = [
    {
      name: "المملكة العربية السعودية",
      value: "KSA",
    },
    {
      name: "سوريا",
      value: "SAR",
    },
    {
      name: "الأردن",
      value: "JOR",
    },
    {
      name: "لبنان",
      value: "LBN",
    },
    {
      name: "الولايات المتحدة الأمريكية",
      value: "USA",
    },
    {
      name: "الإمارات العربية المتحدة",
      value: "UAE",
    },
    {
      name: "اليمن",
      value: "YEM",
    },
    {
      name: "مصر",
      value: "EGY",
    },
  ]
  const businesses = [
    {
      name: "عيادة طبية",
      value: "CLINIC",
    },
    {
      name: "متجر إلكتروني",
      value: "ECOMMRCE",
    },
    {
      name: "مصنع (صاحب منتجات)",
      value: "MANUFACTURER",
    },
    {
      name: "مزود خدمة",
      value: "SERVICE_PROVIDER",
    },
  ]

  const countriesValues = countries.map((country) => country.value)
  const businessesValues = businesses.map((business) => business.value)

  const contactSchema = z.object({
    fullName: z.string().min(1, "Name is required"),
    email: z.email("Invalid email"),
    country: z.enum(countriesValues, { error: "Country is required" }),
    business: z.enum(businessesValues, { error: "Business is required" }),
    message: z.string().min(1, "Message is required"),
  })
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      business: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const whatsappMessage = `
    مرحباً AR Marketing، أرغب بالتواصل مع فريقكم بخصوص مشروع جديد

    الاسم: ${data.fullName}
    البريد الإلكتروني: ${data.email}
    البلد: ${countries.find((c) => c.value === data.country)?.name ?? data.country}
    نوع العمل: ${businesses.find((b) => b.value === data.business)?.name ?? data.business}
    الرسالة: ${data.message}
    `
    const encodedUrl = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/963935299727?text=${encodedUrl}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <form
      id="contact-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid w-full gap-3"
    >
      <FieldGroup className="font-thmanyah-subheading-sans **:data-[slot=input]:h-12.5">
        <Controller
          name="fullName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Label htmlFor="fullName">الاسم الكامل</Label>
              <Input
                {...field}
                value={field.value}
                onChange={field.onChange}
                placeholder="الاسم الكامل"
                aria-invalid={!!fieldState.error}
                type="text"
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                {...field}
                value={field.value}
                onChange={field.onChange}
                placeholder="البريد الإلكتروني"
                aria-invalid={!!fieldState.error}
                type="email"
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <div className="grid w-full grid-cols-2 gap-3 **:data-[slot=input-group]:h-12.5">
          <Controller
            name="country"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="country">البلد</Label>
                <Combobox
                  items={countries}
                  itemToStringLabel={(item: (typeof countries)[0] | string) =>
                    typeof item === "object" && item !== null
                      ? item.name
                      : (countries.find((c) => c.value === item)?.name ??
                        String(item ?? ""))
                  }
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <ComboboxInput placeholder="اختر دولة" />
                  <ComboboxContent
                    sideOffset={14}
                    className="font-thmanyah-subheading-sans"
                    data-lenis-prevent
                  >
                    <ComboboxEmpty>لم يتم العثور على نتائج</ComboboxEmpty>
                    <ComboboxList>
                      {(item: (typeof countries)[0]) => (
                        <ComboboxItem key={item.value} value={item.value}>
                          {item.name}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            name="business"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="business">نوع المشروع</Label>
                <Select
                  {...field}
                  value={field.value}
                  onValueChange={field.onChange}
                  itemToStringLabel={(val) =>
                    businesses.find((c) => c.value === val)?.name ?? val
                  }
                >
                  <SelectTrigger className={"h-12.5!"}>
                    <SelectValue placeholder="اختر نوع المشروع" />
                  </SelectTrigger>
                  <SelectContent
                    data-lenis-prevent
                    className={"font-thmanyah-subheading-sans"}
                    alignItemWithTrigger={false}
                  >
                    <SelectGroup>
                      {businesses.map((business) => (
                        <SelectItem
                          key={business.name}
                          value={business.value}
                          label={business.name}
                        >
                          {business.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
        </div>
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Label htmlFor="message">الرسالة</Label>
              <Textarea
                {...field}
                value={field.value}
                onChange={field.onChange}
                placeholder="اكتب رسالتك هنا"
                aria-invalid={!!fieldState.error}
                className="h-32 resize-none"
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
        <Button className="h-14! gap-4 text-lg" type="submit">
          {" "}
          <HugeiconsIcon
            icon={WhatsappFreeIcons}
            className="size-6"
          ></HugeiconsIcon>
          إرسال عبر واتساب
        </Button>
      </FieldGroup>
    </form>
  )
}
