import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLang } from "@/lib/get-lang";
import { htmlLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteDescription = {
  en: siteConfig.description,
  no: "Holytones er Idun Munkejords kreative hjem – original musikk, bøker, kurs, kunst og refleksjon, skrevet på engelsk, norsk og spansk.",
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const title = `${siteConfig.name} — ${lang === "no" ? "Original musikk" : "Original Music"}`;
  return {
    title: { default: title, template: `%s — ${siteConfig.name}` },
    description: siteDescription[lang],
    openGraph: { title, description: siteDescription[lang], type: "website" },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const lang = await getLang();
  return (
    <html
      lang={htmlLang[lang]}
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="grain-overlay" />
        <Navbar lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
