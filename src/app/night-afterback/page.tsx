import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#ec4899";

export default function NightAfterbackPage() {
  return (
    <Layout
      title="Nightアフターバック"
      description="アフターサービス管理ツール"
    >
      <div style={{ maxWidth: 860 }}>

        {/* アイコン + タグ群 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <div style={{
            width: 88, height: 88, borderRadius: 20,
            background: APP_COLOR,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, fontSize: 40
          }}>
            📞
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["サポート管理", "満足度測定", "フォローアップ", "レポート機能"].map(t => (
              <span key={t} style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px",
                border: `1px solid ${APP_COLOR}40`,
                borderRadius: 100, color: APP_COLOR,
                background: `${APP_COLOR}10`
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* サブページナビゲーション */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 48 }}>
          {[
            { href: "/night-afterback/specs", label: "仕様詳細" },
            { href: "/night-afterback/terms", label: "利用規約" },
            { href: "/night-afterback/support", label: "サポート" },
            { href: "/night-afterback/privacy", label: "プライバシーポリシー" },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{
              display: "block", padding: "16px 12px", textAlign: "center",
              background: "var(--bg2)", border: "1px solid var(--line)",
              borderRadius: 12, textDecoration: "none",
              fontSize: 13, fontWeight: 600, color: "var(--text)"
            }}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* アプリ概要 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            アプリ概要
          </h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 8 }}>
            Nightアフターバックは、顧客のアフターサービスを効率的に管理するためのツールです。
          </p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8 }}>
            サポート履歴の管理から顧客満足度の向上まで、包括的なアフターサービス業務をサポートします。
          </p>
        </section>

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "サポート管理", desc: "顧客からの問い合わせを一元管理" },
              { title: "満足度測定", desc: "顧客満足度の測定と分析" },
              { title: "フォローアップ", desc: "自動フォローアップ機能" },
              { title: "レポート機能", desc: "詳細なアナリティクスレポート" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* App Store ボタン */}
        <div style={{ marginBottom: 40 }}>
          <a
            href="https://apps.apple.com/jp/app/id6751783629"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#000", color: "#fff",
              padding: "14px 28px", borderRadius: 14,
              textDecoration: "none", fontSize: 14, fontWeight: 600
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Storeでダウンロード
          </a>
        </div>

      </div>
    </Layout>
  );
}
