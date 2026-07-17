"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import JsonLd from "./components/JsonLd";

/* ── Types ─────────────────────────────────────────────────── */
interface NightCard {
  href: string;
  name: string;
  initial: string;
  initialSize?: number;
  category: string;
  color: string;
  rgb: string;
  chips: string[];
  appStoreHref?: string;
}

interface GeneralCard {
  href: string;
  name: string;
  emoji: string;
  category: string;
  color: string;
  rgb: string;
  chips: string[];
  desc: string;
  appStoreHref?: string;
}

/* ── Data ───────────────────────────────────────────────────── */
const APPLE_SVG = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zm-2.02-15.03c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const ARROW_SVG = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const nightCards: NightCard[] = [
  {
    href: "/night-meibo",
    name: "Night名簿帳",
    initial: "名",
    category: "顧客管理",
    color: "#8b5cf6", rgb: "139,92,246",
    chips: ["顧客情報管理", "データ保護", "PDF出力"],
    appStoreHref: "https://apps.apple.com/jp/app/night%E5%90%8D%E7%B0%BF%E5%B8%B3/id6749575718",
  },
  {
    href: "/zeimucalendar",
    name: "税務カレンダー",
    initial: "税",
    category: "税務管理",
    color: "#C9A227", rgb: "201,162,39",
    chips: ["法人対応", "個人事業主対応", "税務期限管理", "iPhoneカレンダー同期"],
  },
  {
    href: "/night-keiyaku",
    name: "Night契約書",
    initial: "契",
    category: "契約管理",
    color: "#3b82f6", rgb: "59,130,246",
    chips: ["電子契約書", "クラウド保存", "法的効力"],
  },
  {
    href: "/night-afterback",
    name: "Nightアフターバック",
    initial: "ア",
    category: "アフター管理",
    color: "#ec4899", rgb: "236,72,153",
    chips: ["アフター予約", "顧客分析", "リマインダー"],
    appStoreHref: "https://apps.apple.com/jp/app/night%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF/id6751783629",
  },
  {
    href: "/night-pdf",
    name: "Night PDF",
    initial: "PDF",
    initialSize: 10,
    category: "PDF編集",
    color: "#f97316", rgb: "249,115,22",
    chips: ["バケツ塗り", "PDF編集", "リアルタイム描画"],
    appStoreHref: "https://apps.apple.com/jp/app/id6755782601",
  },
  {
    href: "/girls-board",
    name: "Girls Board",
    initial: "GB",
    initialSize: 10,
    category: "売上管理",
    color: "#a855f7", rgb: "168,85,247",
    chips: ["顧客管理", "売上ダッシュ", "日報シェア"],
    appStoreHref: "https://apps.apple.com/jp/app/girls-board/id6785039885",
  },
  {
    href: "/girls-back",
    name: "Girls Back",
    initial: "G",
    category: "収入管理",
    color: "#f59e0b", rgb: "245,158,11",
    chips: ["バック収入管理", "未収管理", "6ヶ月グラフ"],
    appStoreHref: "https://apps.apple.com/jp/app/id6782473775",
  },
  {
    href: "/aohime-rotation",
    name: "Night シフト管理",
    initial: "夜",
    category: "シフト管理",
    color: "#e8547a", rgb: "232,84,122",
    chips: ["シフト管理", "ガントチャート", "補償払い対応"],
    appStoreHref: "https://apps.apple.com/jp/app/id6787041071",
  },
];

const generalCards: GeneralCard[] = [
  {
    href: "/night-dice",
    name: "Night Dice",
    emoji: "🎲",
    category: "ゲーム",
    color: "#10b981", rgb: "16,185,129",
    chips: ["2〜8人対戦", "チンチロ", "パーティー向け"],
    desc: "2〜8人で楽しむ伝統的なサイコロゲーム。パーティーに最適なアプリ。",
    appStoreHref: "https://apps.apple.com/jp/app/id6755870063",
  },
  {
    href: "/kodomo-quest",
    name: "子供クエスト",
    emoji: "⭐",
    category: "ファミリー",
    color: "#fb923c", rgb: "251,146,60",
    chips: ["クエスト制", "キャラ成長", "無料"],
    desc: "こどものやる気を引き出すクエスト管理アプリ。お手伝いをゲーム感覚で楽しもう！",
    appStoreHref: "https://apps.apple.com/jp/app/id6781513708",
  },
  {
    href: "/gomi-no-hi",
    name: "ゴミの日！",
    emoji: "🗑",
    category: "生活",
    color: "#22c55e", rgb: "34,197,94",
    chips: ["地域設定", "当日通知", "ウィジェット"],
    desc: "地域を選ぶだけでゴミ収集日を管理。通知とウィジェットでゴミ出し忘れを防止。",
    appStoreHref: "https://apps.apple.com/jp/app/id6782357102",
  },
];

const mosaicTiles = [
  { char: "名", label: "Night\n名簿帳", color: "#8b5cf6", rgb: "139,92,246", delay: "0s" },
  { char: "契", label: "Night\n契約書", color: "#3b82f6", rgb: "59,130,246", delay: "0.5s" },
  { char: "ア", label: "After\nBack",   color: "#ec4899", rgb: "236,72,153", delay: "1s" },
  { char: "PDF", label: "Night\nPDF",   color: "#f97316", rgb: "249,115,22", delay: "1.5s", small: true },
  { char: "GB",  label: "Girls\nBoard", color: "#a855f7", rgb: "168,85,247", delay: "2.2s", small: true },
  { char: "G",   label: "Girls\nBack",  color: "#f59e0b", rgb: "245,158,11", delay: "2.5s" },
  { emoji: "⭐", label: "子供\nクエスト", color: "#fb923c", rgb: "251,146,60", delay: "0.3s" },
  { emoji: "🗑", label: "ゴミ\nの日！",  color: "#22c55e", rgb: "34,197,94",  delay: "0.8s" },
  { char: "夜",  label: "Night\nシフト管理",  color: "#e8547a", rgb: "232,84,122",  delay: "1.2s" },
];

/* ── Sub-components ─────────────────────────────────────────── */
function GridLogo({ size = 14 }: { size?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", width: size, height: size }}>
      <div style={{ background: "#8b5cf6", borderRadius: 1.5 }} />
      <div style={{ background: "#ec4899", borderRadius: 1.5 }} />
      <div style={{ background: "#3b82f6", borderRadius: 1.5 }} />
      <div style={{ background: "#f97316", borderRadius: 1.5 }} />
    </div>
  );
}

function NightCardEl({ card }: { card: NightCard }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={card.href}
      style={{
        background: "#fff",
        border: `1.5px solid ${hovered ? card.color : "var(--line)"}`,
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform .22s, box-shadow .22s, border-color .22s",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 20px 48px rgba(${card.rgb},.16)` : "none",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header band */}
      <div style={{ background: card.color, padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          width: 32, height: 32, borderRadius: 9,
          background: "rgba(255,255,255,.22)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Syne', sans-serif",
          fontSize: card.initialSize ?? 15,
          fontWeight: 800, color: "#fff",
        }}>
          {card.initial}
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.8)" }}>
          {card.category}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 800, margin: 0, letterSpacing: "-.2px" }}>
          {card.name}
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {card.chips.map(c => (
            <span key={c} style={{
              fontSize: 10, fontWeight: 600,
              color: card.color,
              background: `rgba(${card.rgb},.08)`,
              padding: "3px 8px", borderRadius: 100,
              border: `1px solid rgba(${card.rgb},.18)`,
            }}>{c}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: "auto" }}>
          {card.appStoreHref && (
            <a
              href={card.appStoreHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                background: card.color, color: "#fff", textDecoration: "none",
                padding: 8, borderRadius: 7, fontSize: 11.5, fontWeight: 600,
              }}
            >
              {APPLE_SVG} App Store
            </a>
          )}
          <span style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1.5px solid var(--line)", color: "var(--mid)",
            padding: card.appStoreHref ? 7 : 8, borderRadius: 7,
            fontSize: 11.5, fontWeight: 500,
          }}>
            詳細を見る
          </span>
        </div>
      </div>
    </Link>
  );
}

function GeneralCardEl({ card }: { card: GeneralCard }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={card.href}
      style={{
        background: "#fff",
        border: `1.5px solid ${hovered ? card.color : "var(--line)"}`,
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform .22s, box-shadow .22s, border-color .22s",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 20px 48px rgba(${card.rgb},.16)` : "none",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ background: card.color, padding: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.75)" }}>
          {card.category}
        </span>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, lineHeight: 1 }}>
          {card.emoji}
        </div>
      </div>
      <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-.3px" }}>
          {card.name}
        </h3>
        <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: "0 0 16px", flex: 1 }}>
          {card.desc}
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {card.chips.map(c => (
            <span key={c} style={{
              fontSize: 11, fontWeight: 600,
              color: card.color,
              background: `rgba(${card.rgb},.08)`,
              padding: "4px 10px", borderRadius: 100,
              border: `1px solid rgba(${card.rgb},.2)`,
            }}>{c}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: "auto" }}>
          {card.appStoreHref && (
            <a
              href={card.appStoreHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 5,
                background: card.color, color: "#fff", textDecoration: "none",
                padding: 11, borderRadius: 8, fontSize: 13, fontWeight: 600,
              }}
            >
              {APPLE_SVG} App Store
            </a>
          )}
          <span style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1.5px solid var(--line)", color: "var(--mid)",
            padding: card.appStoreHref ? 10 : 11, borderRadius: 8,
            fontSize: 13, fontWeight: 500,
          }}>
            詳細を見る
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  const [ready, setReady] = useState(false);
  const mosaicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const heroReveal = {
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(20px)",
    transition: "opacity .55s, transform .55s",
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", fontFamily: "'DM Sans', -apple-system, sans-serif", color: "var(--text)", overflowX: "hidden" }}>
      <JsonLd />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        paddingTop: 64,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dot grid bg */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, #d8d8d8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
          pointerEvents: "none",
        }} />

        {/* Left: text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 60px 80px 80px", position: "relative", zIndex: 1 }}>
          <div style={heroReveal}>
            {/* Tagline */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6" }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--mid)" }}>
                iOS App Collection
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--line)", maxWidth: 60 }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", color: "var(--light)" }}>10 APPS</span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(72px, 7.5vw, 108px)",
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: "-4px",
              margin: "0 0 32px",
            }}>
              App<br />
              <span style={{ color: "#8b5cf6" }}>Coll</span>ection<span style={{ color: "#8b5cf6" }}>.</span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: 17, color: "var(--mid)", lineHeight: 1.75, margin: "0 0 48px", maxWidth: 400 }}>
              ナイト業界から日常生活まで<br />あらゆるシーンを支えるアプリスイート
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#apps" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#0c0c0c", color: "#fff", textDecoration: "none",
                padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 600,
              }}>
                アプリを見る {ARROW_SVG}
              </a>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center",
                background: "transparent", border: "1.5px solid #c8c8c8",
                color: "#0c0c0c", textDecoration: "none",
                padding: "13px 28px", borderRadius: 8, fontSize: 15, fontWeight: 500,
              }}>
                お問い合わせ
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40, marginTop: 64, paddingTop: 40, borderTop: "1px solid #e2e2e2", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, letterSpacing: "-1px", color: "#0c0c0c" }}>
                  10<span style={{ color: "#8b5cf6", fontSize: 20 }}>+</span>
                </div>
                <div style={{ fontSize: 12, color: "#a0a0a0", fontWeight: 500, marginTop: 2 }}>アプリ数</div>
              </div>
              <div style={{ width: 1, background: "#e2e2e2" }} />
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, letterSpacing: "-1px", color: "#3b82f6" }}>iOS</div>
                <div style={{ fontSize: 12, color: "#a0a0a0", fontWeight: 500, marginTop: 2 }}>対応プラットフォーム</div>
              </div>
              <div style={{ width: 1, background: "#e2e2e2" }} />
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, letterSpacing: "-1px" }}>
                  100<span style={{ color: "#ec4899", fontSize: 20 }}>%</span>
                </div>
                <div style={{ fontSize: 12, color: "#a0a0a0", fontWeight: 500, marginTop: 2 }}>セキュア設計</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: app mosaic */}
        <div ref={mosaicRef} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 80px 80px 40px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, maxWidth: 380, width: "100%" }}>
            {mosaicTiles.map((t, i) => (
              <div key={i} style={{
                aspectRatio: "1",
                borderRadius: 20,
                background: t.color,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                animation: `float 3.8s ${t.delay} ease-in-out infinite`,
                boxShadow: `0 12px 32px rgba(${t.rgb},.28)`,
              }}>
                {"emoji" in t ? (
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{t.emoji}</span>
                ) : (
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: (t as {small?: boolean}).small ? 11 : 18, fontWeight: 800, color: "#fff" }}>
                    {t.char}
                  </span>
                )}
                <span style={{ fontSize: 7, color: "rgba(255,255,255,.7)", textAlign: "center", lineHeight: 1.3, fontWeight: 500, whiteSpace: "pre-line" }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────── */}
      <div aria-hidden="true" style={{ background: "#0c0c0c", overflow: "hidden", padding: "18px 0", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ display: "flex", animation: "marquee 28s linear infinite", width: "max-content" }}>
          {[0, 1].map(n => (
            <span key={n} style={{ whiteSpace: "nowrap", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.35)", letterSpacing: ".14em", textTransform: "uppercase", paddingRight: 4 }}>
              Night名簿帳　/　Night契約書　/　Nightアフターバック　/　Night PDF　/　Girls Board　/　Girls Back　/　Night シフト管理　/　Night Dice　/　子供クエスト　/　ゴミの日！　/
            </span>
          ))}
        </div>
      </div>

      {/* ── Apps section ─────────────────────────────────── */}
      <section id="apps" style={{ padding: "100px 80px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Section header 01 */}
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "end", marginBottom: 52, paddingBottom: 28, borderBottom: "1.5px solid var(--text)" }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 80, fontWeight: 800, lineHeight: 1, color: "var(--line-mid)", letterSpacing: "-4px", marginBottom: -8 }}>01</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, letterSpacing: "-.8px", margin: 0, color: "var(--text)" }}>ナイト業界シリーズ</h2>
            </div>
            <div style={{ paddingBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#8b5cf6" }} />
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", color: "#8b5cf6" }}>Night Industry</span>
              </div>
              <p style={{ fontSize: 14, color: "var(--mid)", margin: 0, lineHeight: 1.6 }}>
                ナイトワーク特化の業務管理ツール。スタッフ管理から電子契約まで、業界に必要な機能をすべて網羅。
              </p>
            </div>
          </div>

          {/* Night cards — 3+3 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 80 }}>
            {nightCards.map(card => <NightCardEl key={card.href} card={card} />)}
          </div>

          {/* Section header 02 */}
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "end", marginBottom: 52, paddingBottom: 28, borderBottom: "1.5px solid var(--text)" }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 80, fontWeight: 800, lineHeight: 1, color: "var(--line-mid)", letterSpacing: "-4px", marginBottom: -8 }}>02</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, letterSpacing: "-.8px", margin: 0, color: "var(--text)" }}>その他のアプリ</h2>
            </div>
            <div style={{ paddingBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".15em", textTransform: "uppercase", color: "#10b981" }}>General</span>
              </div>
              <p style={{ fontSize: 14, color: "var(--mid)", margin: 0, lineHeight: 1.6 }}>
                ゲーム・ファミリー・生活を豊かにするアプリ。あらゆる日常シーンをサポート。
              </p>
            </div>
          </div>

          {/* General cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {generalCards.map(card => <GeneralCardEl key={card.href} card={card} />)}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section style={{ padding: "0 80px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            background: "#0c0c0c",
            borderRadius: 24,
            padding: "64px 72px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "center",
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: 16 }}>
                Get in touch
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px,4vw,56px)", fontWeight: 800, letterSpacing: "-2px", color: "#fff", margin: "0 0 16px", lineHeight: 1.05 }}>
                ご要望・お問い合わせは<br />お気軽にどうぞ。
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.45)", margin: 0, lineHeight: 1.7 }}>
                アプリへのご意見や機能リクエスト、<br />ビジネスのご相談もお待ちしています。
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200 }}>
              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#8b5cf6", color: "#fff", textDecoration: "none", padding: "16px 32px", borderRadius: 10, fontSize: 15, fontWeight: 700, whiteSpace: "nowrap" }}>
                お問い合わせ
              </Link>
              <Link href="/news" style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1.5px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.7)", textDecoration: "none", padding: "15px 32px", borderRadius: 10, fontSize: 15, fontWeight: 500, whiteSpace: "nowrap" }}>
                お知らせを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer style={{ padding: "28px 80px", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <GridLogo size={14} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700 }}>App Collection</span>
            <span style={{ fontSize: 11.5, color: "var(--light)" }}>© 2025 UTSUNO HIDETA.</span>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            <Link href="/news" style={{ fontSize: 12.5, color: "var(--light)", textDecoration: "none" }}>お知らせ</Link>
            <Link href="/contact" style={{ fontSize: 12.5, color: "var(--light)", textDecoration: "none" }}>お問い合わせ</Link>
            <Link href="/admob" style={{ fontSize: 12.5, color: "var(--light)", textDecoration: "none" }}>AdMob</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
