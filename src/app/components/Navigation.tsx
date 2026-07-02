"use client";

import Link from "next/link";
import { useState } from "react";

const apps = [
  { href: "/night-meibo",    label: "Night名簿帳",      series: "night" },
  { href: "/night-keiyaku",  label: "Night契約書",       series: "night" },
  { href: "/night-afterback",label: "Nightアフターバック", series: "night" },
  { href: "/night-pdf",      label: "Night PDF",        series: "night" },
  { href: "/night-dice",     label: "Night Dice",       series: "night" },
  { href: "/girls-board",    label: "Girls Board",      series: "girls" },
  { href: "/girls-back",     label: "Girls Back",       series: "girls" },
  { href: "/kodomo-quest",   label: "子供クエスト",       series: "life" },
  { href: "/gomi-no-hi",     label: "ゴミの日！",         series: "life" },
];

const seriesColor: Record<string, string> = {
  night: "var(--night-accent)",
  girls: "var(--girls-accent)",
  life:  "var(--life-accent)",
};

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{ background: "rgba(5,5,10,0.72)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--night-gradient)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L9.2 5.4L14 6.1L10.5 9.5L11.4 14L7 11.6L2.6 14L3.5 9.5L0 6.1L4.8 5.4L7 1Z" fill="white"/>
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--text-primary)" }}>NightApp</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "var(--text-secondary)" }}>
            ホーム
          </Link>

          {/* Apps dropdown */}
          <div className="relative group">
            <button className="text-sm transition-colors duration-200 hover:text-white flex items-center gap-1 cursor-pointer" style={{ color: "var(--text-secondary)" }}>
              アプリ一覧
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="group-hover:rotate-180 transition-transform duration-200">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div
              className="absolute top-full right-0 mt-3 w-52 rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
            >
              {apps.map(app => (
                <Link
                  key={app.href}
                  href={app.href}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-white/5 cursor-pointer"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: seriesColor[app.series] }} />
                  {app.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "var(--text-secondary)" }}>
            お問い合わせ
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        >
          <span className={`block h-0.5 w-5 transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--text-secondary)" }} />
          <span className={`block h-0.5 w-5 transition-all duration-200 ${open ? "opacity-0" : ""}`} style={{ background: "var(--text-secondary)" }} />
          <span className={`block h-0.5 w-5 transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--text-secondary)" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-5 pb-6 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
          <Link href="/" className="block py-3 text-sm" style={{ color: "var(--text-secondary)" }} onClick={() => setOpen(false)}>
            ホーム
          </Link>
          <p className="text-xs font-medium mt-2 mb-1 px-0" style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}>APPS</p>
          {apps.map(app => (
            <Link
              key={app.href}
              href={app.href}
              className="flex items-center gap-3 py-2.5 text-sm"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: seriesColor[app.series] }} />
              {app.label}
            </Link>
          ))}
          <Link href="/contact" className="block py-3 text-sm mt-2" style={{ color: "var(--text-secondary)" }} onClick={() => setOpen(false)}>
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
}
