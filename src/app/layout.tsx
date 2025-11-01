import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NightApp - ナイト業界向けアプリケーション",
    template: "%s | NightApp"
  },
  description: "ナイト業界の業務効率化を実現する3つのアプリ。Night名簿帳・Night契約書・Nightアフターバックで、スタッフ管理・契約管理・手数料管理をスマートに。",
  keywords: ["ナイト業界", "業務管理アプリ", "スタッフ管理", "契約書管理", "手数料管理", "Night名簿帳", "Night契約書", "Nightアフターバック"],
  authors: [{ name: "HIDETA UTSUNO" }],
  creator: "HIDETA UTSUNO",
  publisher: "HIDETA UTSUNO",
  metadataBase: new URL("https://apps.liv-jpn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://apps.liv-jpn.com",
    siteName: "NightApp",
    title: "NightApp - ナイト業界向けアプリケーション",
    description: "ナイト業界の業務効率化を実現する3つのアプリ。Night名簿帳・Night契約書・Nightアフターバックで、スタッフ管理・契約管理・手数料管理をスマートに。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NightApp - ナイト業界向けアプリケーション",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NightApp - ナイト業界向けアプリケーション",
    description: "ナイト業界の業務効率化を実現する3つのアプリ",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification (add your code later)
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
