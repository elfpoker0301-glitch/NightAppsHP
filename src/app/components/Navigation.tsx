"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const GridLogo = ({ size = 18 }: { size?: number }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5px", width: size, height: size }}>
    <div style={{ background: "#8b5cf6", borderRadius: 2 }} />
    <div style={{ background: "#ec4899", borderRadius: 2 }} />
    <div style={{ background: "#3b82f6", borderRadius: 2 }} />
    <div style={{ background: "#f97316", borderRadius: 2 }} />
  </div>
);

const apps = [
  { href: "/night-meibo",     label: "Night名簿帳",       color: "#8b5cf6" },
  { href: "/night-keiyaku",   label: "Night契約書",        color: "#3b82f6" },
  { href: "/night-afterback", label: "Nightアフターバック", color: "#ec4899" },
  { href: "/night-pdf",       label: "Night PDF",         color: "#f97316" },
  { href: "/girls-board",     label: "Girls Board",       color: "#a855f7" },
  { href: "/girls-back",      label: "Girls Back",        color: "#f59e0b" },
  { href: "/night-dice",      label: "Night Dice",        color: "#10b981" },
  { href: "/kodomo-quest",    label: "子供クエスト",        color: "#fb923c" },
  { href: "/gomi-no-hi",      label: "ゴミの日！",          color: "#22c55e" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="nav"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64, padding: "0 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        transition: "border-color 0.25s",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--text)" }}>
        <GridLogo />
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px" }}>
          App Collection
        </span>
      </Link>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
        {/* Apps dropdown */}
        <div style={{ position: "relative" }} className="group">
          <button
            style={{ color: "var(--mid)", background: "none", border: "none", fontSize: 14, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontFamily: "'DM Sans', sans-serif" }}
          >
            アプリ
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className="nav-dropdown"
            style={{
              position: "absolute", top: "calc(100% + 12px)", right: 0,
              width: 200, background: "#fff", border: "1px solid var(--line)",
              borderRadius: 12, padding: "6px 0",
              boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
            }}
          >
            {apps.map(app => (
              <Link
                key={app.href}
                href={app.href}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", fontSize: 13, color: "var(--mid)", textDecoration: "none" }}
                className="nav-item"
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: app.color, flexShrink: 0 }} />
                {app.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/news" style={{ color: "var(--mid)", textDecoration: "none", fontSize: 14, fontWeight: 500 }} className="nav-link">
          お知らせ
        </Link>
        <Link
          href="/contact"
          style={{ display: "inline-flex", alignItems: "center", background: "var(--text)", color: "#fff", textDecoration: "none", padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 600 }}
        >
          お問い合わせ
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 4 }}
        className="show-mobile"
      >
        <span style={{ display: "block", width: 20, height: 1.5, background: "var(--mid)", borderRadius: 1, transition: "all 0.2s", transform: open ? "rotate(45deg) translateY(6.5px)" : "none" }} />
        <span style={{ display: "block", width: 20, height: 1.5, background: "var(--mid)", borderRadius: 1, transition: "all 0.2s", opacity: open ? 0 : 1 }} />
        <span style={{ display: "block", width: 20, height: 1.5, background: "var(--mid)", borderRadius: 1, transition: "all 0.2s", transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "absolute", top: 64, left: 0, right: 0,
          background: "#fff", borderBottom: "1px solid var(--line)",
          padding: "12px 24px 20px",
        }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: "var(--light)", textTransform: "uppercase", margin: "8px 0 4px" }}>APPS</p>
          {apps.map(app => (
            <Link
              key={app.href}
              href={app.href}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", fontSize: 14, color: "var(--mid)", textDecoration: "none", borderBottom: "1px solid var(--line)" }}
              onClick={() => setOpen(false)}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: app.color, flexShrink: 0 }} />
              {app.label}
            </Link>
          ))}
          <Link href="/news" style={{ display: "block", padding: "10px 0", fontSize: 14, color: "var(--mid)", textDecoration: "none" }} onClick={() => setOpen(false)}>お知らせ</Link>
          <Link href="/contact" style={{ display: "block", marginTop: 8, padding: "10px 20px", background: "var(--text)", color: "#fff", textDecoration: "none", borderRadius: 8, textAlign: "center", fontSize: 14, fontWeight: 600 }} onClick={() => setOpen(false)}>お問い合わせ</Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
        .group:hover .nav-dropdown { display: block; }
        .nav-dropdown { display: none; }
        .nav-item:hover { background: var(--bg2); color: var(--text); }
        .nav-link:hover { color: var(--text); }
      `}</style>
    </header>
  );
}
