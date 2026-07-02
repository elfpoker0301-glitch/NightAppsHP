import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#05050A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "NightApp — Apps Collection",
    template: "%s | NightApp",
  },
  description:
    "ナイトワーク・日常生活を支援するiOSアプリコレクション。顧客管理・売上管理・契約書・PDF・育児・ゴミ出しまで、毎日使えるアプリを一か所に。",
  keywords: [
    "ナイト業界", "アプリ", "顧客管理", "売上管理", "Girls Board",
    "Night名簿帳", "Night契約書", "Nightアフターバック", "Girls Back",
    "子供クエスト", "ゴミの日",
  ],
  authors: [{ name: "HIDETA UTSUNO" }],
  creator: "HIDETA UTSUNO",
  metadataBase: new URL("https://apps.liv-jpn.com"),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://apps.liv-jpn.com",
    siteName: "NightApp",
    title: "NightApp — Apps Collection",
    description: "ナイトワーク・日常生活を支援するiOSアプリコレクション",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NightApp Apps Collection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NightApp — Apps Collection",
    description: "ナイトワーク・日常生活を支援するiOSアプリコレクション",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
