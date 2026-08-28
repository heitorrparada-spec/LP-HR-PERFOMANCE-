import type { Metadata } from "next";
import { Lora, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp-hr-perfomance.vercel.app"),
  title: {
    default: "HR Performance — Acompanhamento Esportivo Multidisciplinar",
    template: "%s — HR Performance",
  },
  description:
    "Nutrição, psicologia e performance trabalhando de forma integrada. Escolha o nível de acompanhamento: individual, multidisciplinar ou HR Performance Elite.",
  keywords: [
    "HR Performance",
    "nutrição esportiva",
    "acompanhamento nutricional",
    "psicologia esportiva",
    "hr performance elite",
    "acompanhamento multidisciplinar",
    "Heitor Rodrigues Parada",
  ],
  authors: [{ name: "Heitor Rodrigues Parada" }],
  applicationName: "HR Performance",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "HR Performance — Acompanhamento Esportivo Multidisciplinar",
    description:
      "Um ecossistema de profissionais coordenados em torno do seu objetivo — do atendimento individual à HR Performance Elite.",
    url: "/",
    siteName: "HR Performance",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Performance — Acompanhamento Esportivo Multidisciplinar",
    description:
      "Nutrição, psicologia e performance trabalhando de forma integrada — individual, multidisciplinar ou HR Performance Elite.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HR Performance",
  description:
    "Ecossistema de acompanhamento esportivo multidisciplinar — nutrição, psicologia e performance, com formatos individual, multidisciplinar e HR Performance Elite.",
  founder: {
    "@type": "Person",
    name: "Heitor Rodrigues Parada",
    jobTitle: "Nutricionista Esportivo",
  },
  email: "heitor.nutri27@gmail.com",
  telephone: "+5511993116720",
  sameAs: ["https://instagram.com/heitor_rodriguesp"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${lora.variable} ${inter.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
