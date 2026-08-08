"use client"

import SectionHeading from "@/components/section-heading"
import SectionTemplate from "@/components/section-template"
import { zodResolver } from "@hookform/resolvers/zod"
import { Globe, Globe02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Checkbox } from "@workspace/ui/components/checkbox"
import TagInput from "@workspace/ui/components/Tag-Input"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@workspace/ui/components/combobox"
import {
  Field,
  FieldDescription,
  FieldError,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
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
import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import z, { string } from "zod"
import { Button } from "@workspace/ui/components/button"
import { createItem } from "../actions/portfolio-actions"
import { PortfolioItem } from "@/data/types"
import { toast } from "sonner"

export default function Page() {
  const [itemcategory, setCategory] = useState<string>()
  const [technologies, setTechs] = useState<string[]>([])
  const [features, setFeatures] = useState<string[]>([])
  const [gallery, setGallery] = useState<string[]>([])
  const [brandGoals, setBrandGoals] = useState<string[]>([])
  const [results, setResults] = useState<string[]>([])
  const [platforms, setPlatforms] = useState<string[]>([])

  const techs = [
    "Svelte",
    "Solid.js",
    "Lit",
    "Alpine.js",
    "Preact",
    "Inferno",
    "Marko",
    "Riot.js",
    "Stimulus",
    "Hyperapp",
    "Mithril",
    "Backbone.js",
    "Ember.js",
    "Knockout.js",
    "Dojo",
    "Ext JS",
    "qiankun",
    "single-spa",
    "Express",
    "Koa",
    "Fastify",
    "Hapi",
    "NestJS",
    "Django",
    "Flask",
    "FastAPI",
    "Tornado",
    "Pyramid",
    "Bottle",
    "Ruby on Rails",
    "Sinatra",
    "Hanami",
    "Spring Boot",
    "Jakarta EE",
    "Micronaut",
    "Quarkus",
    "Vert.x",
    "Play Framework",
    "ASP.NET Core",
    "ASP.NET MVC",
    "WCF",
    "Laravel",
    "Symfony",
    "CodeIgniter",
    "Yii",
    "Slim",
    "Zend",
    "Gin",
    "Echo",
    "Fiber",
    "Chi",
    "Buffalo",
    "Revel",
    "Go Kit",
    "Actix-web",
    "Rocket",
    "Warp",
    "Tide",
    "Play Framework (Scala)",
    "Akka HTTP",
    "Finch",
    "http4s",
    "Ktor",
    "Dancer",
    "Mojolicious",
    "Catalyst",
    "Yesod",
    "Snap",
    "Scotty",
    "Phoenix",
    "Plug",
    "Crow",
    "Pistache",
    "Wt",
    "Drogon",
    "Restbed",
    "Meteor",
    "AdonisJS",
    "LoopBack",
    "FeathersJS",
    "Sails.js",
    "Strapi",
    "Directus",
    "Payload CMS",
    "KeystoneJS",
    "Blitz.js",
    "RedwoodJS",
    "Next.js",
    "Nuxt.js",
    "Remix",
    "Gatsby",
    "Astro",
    "Qwik",
    "Elder.js",
    "VitePress",
    "Docusaurus",
    "Hugo",
    "Jekyll",
    "Eleventy",
    "Zola",
    "MkDocs",
    "VuePress",
    "React Native",
    "Flutter",
    "Ionic",
    "Xamarin",
    "NativeScript",
    "PhoneGap/Cordova",
    "Titanium",
    "Kotlin Multiplatform Mobile",
    "SwiftUI",
    "UIKit",
    "Jetpack Compose",
    "Android SDK",
    "PostgreSQL",
    "MySQL",
    "MariaDB",
    "Oracle Database",
    "Microsoft SQL Server",
    "SQLite",
    "MongoDB",
    "Cassandra",
    "Redis",
    "Couchbase",
    "CouchDB",
    "DynamoDB",
    "Firebase Firestore",
    "ArangoDB",
    "Neo4j",
    "OrientDB",
    "RethinkDB",
    "InfluxDB",
    "TimescaleDB",
    "Prometheus",
    "Elasticsearch",
    "Apache Solr",
    "Algolia",
    "Memcached",
    "Hazelcast",
    "Docker",
    "Podman",
    "containerd",
    "Kubernetes",
    "Docker Swarm",
    "Apache Mesos",
    "Nomad",
    "GitHub Actions",
    "GitLab CI",
    "Jenkins",
    "Travis CI",
    "CircleCI",
    "Azure Pipelines",
    "Bitbucket Pipelines",
    "Ansible",
    "Chef",
    "Puppet",
    "SaltStack",
    "Terraform",
    "Pulumi",
    "AWS CDK",
    "Serverless Framework",
    "Grafana",
    "Datadog",
    "New Relic",
    "ELK Stack",
    "Loki",
    "Fluentd",
    "Fluent Bit",
    "Istio",
    "Linkerd",
    "Consul Connect",
    "AWS App Mesh",
    "Kong",
    "Tyk",
    "AWS API Gateway",
    "Azure API Management",
    "NGINX",
    "HAProxy",
    "Envoy",
    "Traefik",
    "Jest",
    "Mocha",
    "Jasmine",
    "Chai",
    "Ava",
    "Tape",
    "QUnit",
    "Karma",
    "Cypress",
    "Playwright",
    "Selenium",
    "TestCafe",
    "Puppeteer",
    "WebDriverIO",
    "Cucumber",
    "Behave",
    "SpecFlow",
    "Sinon.js",
    "Mockito",
    "fast-check",
    "jqwik",
    "Percy",
    "Chromatic",
    "k6",
    "Artillery",
    "Locust",
    "Gatling",
    "JMeter",
    "Stryker",
    "Pitest",
    "GraphQL",
    "Apollo Server",
    "Hasura",
    "Prisma",
    "Nexus",
    "REST",
    "gRPC",
    "Socket.io",
    "WS",
    "RabbitMQ",
    "Apache Kafka",
    "Apache Pulsar",
    "Amazon SQS",
    "Azure Service Bus",
    "Auth0",
    "Firebase Auth",
    "AWS Cognito",
    "Okta",
    "Keycloak",
    "Passport.js",
    "Redux",
    "MobX",
    "Zustand",
    "Recoil",
    "Jotai",
    "XState",
    "Vuex",
    "Pinia",
    "NgRx",
    "Webpack",
    "Vite",
    "Rollup",
    "Parcel",
    "esbuild",
    "Snowpack",
    "Turbopack",
    "Gulp",
    "Grunt",
    "npm",
    "Yarn",
    "pnpm",
    "Bun",
    "TypeScript",
    "Flow",
    "ReasonML",
    "ReScript",
    "Tailwind CSS",
    "Bootstrap",
    "Bulma",
    "Foundation",
    "Materialize",
    "Ant Design",
    "MUI",
    "Semantic UI",
    "Tachyons",
    "Pure.css",
    "Skeleton CSS",
    "Styled Components",
    "Emotion",
    "Stitches",
    "Linaria",
    "Twin.macro",
    "CSS Modules",
    "Ant Design (React)",
    "Material-UI",
    "Chakra UI",
    "Semantic UI React",
    "BlueprintJS",
    "PrimeReact",
    "React Bootstrap",
    "Vuetify",
    "Quasar",
    "Element Plus",
    "Naive UI",
    "Framer Motion",
    "React Spring",
    "GSAP",
    "Anime.js",
    "Lottie",
    "D3.js",
    "Chart.js",
    "Recharts",
    "Victory",
    "Visx",
    "Billboard.js",
    "ApexCharts",
    "Highcharts",
    "Plotly",
    "Font Awesome",
    "Material Icons",
    "Heroicons",
    "Phosphor Icons",
    "Ionicons",
    "Feather Icons",
    "Formik",
    "React Hook Form",
    "Yup",
    "Joi",
    "Zod",
    "i18next",
    "react-intl",
    "FormatJS",
    "LinguiJS",
    "LocalForage",
    "IDB",
    "Dexie.js",
    "Firebase",
    "Supabase",
    "Pusher",
    "Ably",
    "WebRTC",
    "Contentful",
    "Sanity",
    "Ghost",
    "WordPress",
    "Shopify",
    "WooCommerce",
    "Magento",
    "BigCommerce",
    "Saleor",
    "Medusa",
    "Ethereum",
    "Solana",
    "Polkadot",
    "Cosmos",
    "Hyperledger Fabric",
    "TensorFlow.js",
    "PyTorch",
    "Hugging Face Transformers",
    "ONNX Runtime",
    "Scikit-learn",
    "Unity",
    "Unreal Engine",
    "Godot",
    "Phaser",
    "Three.js",
    "Babylon.js",
    "PixiJS",
    "Electron",
    "Tauri",
    "NW.js",
    "Neutralino.js",
    "Commander.js",
    "Yargs",
    "Ink",
    "Blessed",
    "React Ink",
    "OWASP ZAP",
    "Burp Suite",
    "Snyk",
    "Dependabot",
    "WhiteSource",
    "SonarQube",
  ]

  const socials = [
    "Facebook",
    "Instagram",
    "Twitter/X",
    "LinkedIn",
    "TikTok",
    "YouTube",
    "Pinterest",
    "Snapchat",
    "WhatsApp",
    "Telegram",
    "Reddit",
    "Tumblr",
    "Threads",
    "Mastodon",
    "Bluesky",
  ]

  const statuses = [
    {
      label: "مكتمل",
      value: 1,
    },
    {
      label: "قيد الإنجاز",
      value: 0,
    },
  ]

  const formSchema = z.object({
    title: z.string("الاسم مطلوب"),
    description: z.string("Description is required"),
    itemCategory: z.enum(
      ["برمجة وتطوير", "تسويق", "مؤثرات بصرية", "تصميم", "تصوير"],
      "This is required"
    ),
    featured: z.boolean("This is required"),
    status: z.number(),
    timeTook: z.coerce.number().min(0, "هذا الحقل مطلوب"),
    image: z.string("This is required"),
    technologies: z.array(z.string()),
    features: z.array(z.string()),
    category: z.string("This is required"),
    url: z.string(),
    gallery: z.array(z.string()),
    brandOverview: z.string(),
    brandGoals: z.array(z.string()),
    result: z.string(),
    overview: z.string(),
    platforms: z.array(z.string()),
    results: z.array(z.string()),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      brandGoals: [],
      brandOverview: "",
      category: "",
      featured: false,
      features: [],
      gallery: [],
      image: "",
      itemCategory: "برمجة وتطوير",
      overview: "",
      platforms: [],
      result: "",
      results: [],
      status: 0,
      technologies: [],
      timeTook: 0,
      url: "",
    },
  })

  const submit = async (data: z.infer<typeof formSchema>) => {
    try {
      const itemJson = {
        title: data.title,
        slug: data.title.split(" ", 3).join("-"),
        description: data.description,
        brandGoals: data.brandGoals,
        brandOverview: data.brandOverview,
        category: data.category,
        featured: data.featured,
        features: data.features,
        gallery: data.gallery,
        image: data.image,
        itemCategory: data.itemCategory,
        overview: data.overview,
        platforms: data.platforms,
        result: data.result,
        results: data.results,
        status: data.status,
        technologies: data.technologies,
        timeTook: data.timeTook.toString(),
        url: data.url,
      }
      console.log(itemJson)
      const item = await createItem(itemJson as any)
      if (item) {
        console.log(item)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SectionTemplate className="items-center justify-center bg-background **:font-thmanyah-subheading-sans">
      <SectionHeading title="مكان تعبئة البيانات" />
      <div className="mt-6 w-lg">
        <form
          action=""
          id="create-item"
          onSubmit={form.handleSubmit(submit)}
          className="flex flex-col gap-6 **:font-thmanyah-subheading-sans **:data-[slot=select-group]:font-thmanyah-subheading-sans"
        >
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="title">العنوان</Label>
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!fieldState.error}
                  placeholder="العنوان"
                />
              </Field>
            )}
          />
          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="description">الوصف</Label>
                <InputGroup>
                  <Textarea
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!fieldState.error}
                    placeholder="الوصف"
                  ></Textarea>
                </InputGroup>
              </Field>
            )}
          />
          <Controller
            name="image"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="image">رابط الصورة</Label>
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!fieldState.error}
                  placeholder="قم بلصق رابط الصورة"
                />
              </Field>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="featured"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation={"horizontal"}
                  data-invalid={fieldState.invalid}
                >
                  <Label htmlFor="featured">مميز</Label>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Field>
              )}
            />
            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Label htmlFor="status">الحالة</Label>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    itemToStringLabel={(value) =>
                      statuses.find((status) => status.value === value)
                        ?.label ?? ""
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="الحالة" />
                    </SelectTrigger>
                    <SelectContent alignItemWithTrigger={false}>
                      <SelectGroup className="font-thmanyah-subheading-sans">
                        {statuses.map(
                          (status: { label: string; value: number }) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
          </div>
          <Controller
            name="timeTook"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="timeTook">{"الوقت المستغرق (بالأيام)"}</Label>
                <Input
                  type="number"
                  value={field.value as number}
                  min={0}
                  onChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            name="itemCategory"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="itemCategory">فئة العنصر</Label>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value)
                    setCategory(value!)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="فئة العنصر" />
                  </SelectTrigger>
                  <SelectContent alignItemWithTrigger={false}>
                    <SelectGroup className="font-thmanyah-subheading-sans">
                      <SelectItem value={"برمجة وتطوير"}>
                        برمجة وتطوير
                      </SelectItem>
                      <SelectItem value={"تصوير"}>تصوير</SelectItem>
                      <SelectItem value={"تصميم"}>تصميم جرافيكي</SelectItem>
                      <SelectItem value={"مؤثرات بصرية"}>
                        مؤثرات بصرية
                      </SelectItem>
                      <SelectItem value={"تسويق"}>تسويق</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
          {itemcategory === "برمجة وتطوير" && (
            <>
              <Controller
                name="technologies"
                control={form.control}
                render={({ fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="technologies">التقنيات</Label>
                    <Combobox
                      items={techs}
                      multiple
                      value={technologies}
                      onValueChange={setTechs}
                      aria-invalid={!!fieldState.error}
                    >
                      <ComboboxChips>
                        <ComboboxValue>
                          {technologies.map((tech) => (
                            <ComboboxChip key={tech}>{tech}</ComboboxChip>
                          ))}
                          <ComboboxChipsInput placeholder="قم بإضافة تقنية"></ComboboxChipsInput>
                        </ComboboxValue>
                      </ComboboxChips>
                      <ComboboxContent data-lenis-prevent>
                        <ComboboxEmpty>لم يتم العثور على عناصر</ComboboxEmpty>
                        <ComboboxList>
                          {(tech) => (
                            <ComboboxItem key={tech} value={tech}>
                              {tech}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  </Field>
                )}
              />
              <Controller
                name="url"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="url">رابط المشروع</Label>
                    <InputGroup>
                      <InputGroupInput
                        type="url"
                        value={field.value}
                        onChange={field.onChange}
                        aria-invalid={!!fieldState.error}
                        placeholder="قم بلصق رابط المشروع"
                      />
                      <InputGroupAddon align={"inline-end"}>
                        <HugeiconsIcon icon={Globe02Icon}></HugeiconsIcon>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                )}
              />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="category">فئة المشروع</Label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="فئة المشروع" />
                      </SelectTrigger>
                      <SelectContent
                        alignItemWithTrigger={false}
                        data-lenis-prevent
                      >
                        <SelectGroup className="font-thmanyah-subheading-sans">
                          <SelectItem value={"نظام إدارة عملاء"}>
                            نظام إدارة عملاء
                          </SelectItem>
                          <SelectItem value={"متجر إلكتروني"}>
                            متجر إلكتروني
                          </SelectItem>
                          <SelectItem value={"معرض أعمال"}>
                            معرض أعمال
                          </SelectItem>
                          <SelectItem value={"Saas"}>SaaS</SelectItem>
                          <SelectItem value={"وثائق"}>وثائق</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
              <Controller
                name="features"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="features">الميزات</Label>
                    <TagInput
                      value={features}
                      onChange={field.onChange}
                      disabled={false}
                    />
                  </Field>
                )}
              />
            </>
          )}
          {itemcategory === "تصوير" && (
            <>
              <Controller
                name="gallery"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="gallery">معرض الصور</Label>
                    <TagInput
                      value={gallery}
                      onChange={(value) => {
                        field.onChange(value)
                        setGallery(value)
                      }}
                      disabled={false}
                    />
                  </Field>
                )}
              />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="category">فئة المشروع</Label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="فئة المشروع" />
                      </SelectTrigger>
                      <SelectContent alignItemWithTrigger={false}>
                        <SelectGroup className="font-thmanyah-subheading-sans">
                          <SelectItem value={"جلسة تصوير منتجات"}>
                            جلسة تصوير منتجات
                          </SelectItem>
                          <SelectItem value={"ريلز"}>ريلز</SelectItem>
                          <SelectItem value={"فيديو"}>فيديو</SelectItem>
                          <SelectItem value={"جلسة تصوير شخصية"}>
                            جلسة تصوير شخصية
                          </SelectItem>
                          <SelectItem value={"تصوير إعلان"}>
                            تصوير إعلان
                          </SelectItem>
                          <SelectItem value={"قوالب لقطات"}>
                            قوالب لقطات
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
            </>
          )}
          {itemcategory === "تصميم" && (
            <>
              <Controller
                name="brandOverview"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="brandOverview">حول العلامة التجارية</Label>
                    <InputGroup>
                      <Textarea
                        value={field.value}
                        onChange={field.onChange}
                        aria-invalid={!!fieldState.error}
                        placeholder="حول العلامة التجارية"
                      ></Textarea>
                    </InputGroup>
                  </Field>
                )}
              />
              <Controller
                name="brandGoals"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="brandGoals">أهداف العلامة التجارية</Label>
                    <TagInput
                      value={brandGoals}
                      onChange={(value) => {
                        field.onChange(value)
                        setBrandGoals(value)
                      }}
                      disabled={false}
                    />
                  </Field>
                )}
              />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="category">فئة المشروع</Label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="فئة المشروع" />
                      </SelectTrigger>
                      <SelectContent alignItemWithTrigger={false}>
                        <SelectGroup className="font-thmanyah-subheading-sans">
                          <SelectItem value={"بناء العلامة التجارية"}>
                            بناء العلامة التجارية
                          </SelectItem>
                          <SelectItem value={"تصميم قوالب"}>
                            تصميم قوالب
                          </SelectItem>
                          <SelectItem value={"مطبوعات ومنشورات"}>
                            مطبوعات ومنشورات
                          </SelectItem>
                          <SelectItem value={"تصميم شعارات"}>
                            تصميم شعارات
                          </SelectItem>
                          <SelectItem value={"تصميم واجهة وتجربة المستخدم"}>
                            تصميم واجهة وتجربة المستخدم
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
            </>
          )}
          {itemcategory === "مؤثرات بصرية" && (
            <>
              <Controller
                name="result"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="result">رابط المشروع</Label>
                    <InputGroup>
                      <InputGroupInput
                        type="url"
                        value={field.value}
                        onChange={field.onChange}
                        aria-invalid={!!fieldState.error}
                        placeholder="قم بلصق رابط المشروع"
                      />
                      <InputGroupAddon align={"inline-end"}>
                        <HugeiconsIcon icon={Globe02Icon}></HugeiconsIcon>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                )}
              />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="category">فئة المشروع</Label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="فئة المشروع" />
                      </SelectTrigger>
                      <SelectContent alignItemWithTrigger={false}>
                        <SelectGroup className="font-thmanyah-subheading-sans">
                          <SelectItem value={"مؤثرات مولدة بالكمبيوتر"}>
                            مؤثرات مولدة بالكمبيوتر
                          </SelectItem>
                          <SelectItem value={"تأثيرات حركية"}>
                            تأثيرات حركية
                          </SelectItem>
                          <SelectItem value={"تعديل الفيديوهات"}>
                            تعديل الفيديوهات
                          </SelectItem>
                          <SelectItem value={"إعلانات"}>إعلانات</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
              <Controller
                name="overview"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="overview">نظرة عامة</Label>
                    <InputGroup>
                      <Textarea
                        value={field.value}
                        onChange={field.onChange}
                        aria-invalid={!!fieldState.error}
                        placeholder="نظرة عامة"
                      ></Textarea>
                    </InputGroup>
                  </Field>
                )}
              />
            </>
          )}
          {itemcategory === "تسويق" && (
            <>
              <Controller
                name="results"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="results">النتائج</Label>
                    <TagInput
                      value={results}
                      onChange={(value) => {
                        field.onChange(value)
                        setResults(value)
                      }}
                      disabled={false}
                    />
                  </Field>
                )}
              />
              <Controller
                name="platforms"
                control={form.control}
                render={({ fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Label htmlFor="platforms">المنصات</Label>
                    <Combobox
                      items={socials}
                      multiple
                      value={platforms}
                      onValueChange={setPlatforms}
                      aria-invalid={!!fieldState.error}
                    >
                      <ComboboxChips>
                        <ComboboxValue>
                          {platforms.map((platform) => (
                            <ComboboxChip key={platform}>
                              {platform}
                            </ComboboxChip>
                          ))}
                          <ComboboxChipsInput placeholder="قم بإضافة منصة"></ComboboxChipsInput>
                        </ComboboxValue>
                      </ComboboxChips>
                      <ComboboxContent data-lenis-prevent>
                        <ComboboxEmpty>لم يتم العثور على عناصر</ComboboxEmpty>
                        <ComboboxList>
                          {(platform) => (
                            <ComboboxItem key={platform} value={platform}>
                              {platform}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxContent>
                    </Combobox>
                  </Field>
                )}
              />
            </>
          )}
          <Button form="create-item" type="submit">
            إرسال
          </Button>
        </form>
      </div>
    </SectionTemplate>
  )
}
