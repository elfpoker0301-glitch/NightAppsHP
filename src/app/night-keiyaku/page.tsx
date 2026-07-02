import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#3b82f6";

export default function NightKeiyakuPage() {
  return (
    <Layout
      title="Night契約書"
      description="デジタル契約書管理システム"
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
            📝
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["契約書作成", "電子署名", "進捗管理", "セキュア保存"].map(t => (
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
            { href: "/night-keiyaku/specs", label: "仕様詳細" },
            { href: "/night-keiyaku/terms", label: "利用規約" },
            { href: "/night-keiyaku/support", label: "サポート" },
            { href: "/night-keiyaku/privacy", label: "プライバシーポリシー" },
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
            Night契約書は、契約書の作成から管理まで一元化できるデジタル契約書管理システムです。
          </p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8 }}>
            電子署名機能により、ペーパーレスで効率的な契約業務を実現します。
          </p>
        </section>

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "契約書作成", desc: "テンプレートを使用した迅速な契約書作成" },
              { title: "電子署名", desc: "法的効力のある電子署名機能" },
              { title: "進捗管理", desc: "契約の進捗状況をリアルタイムで追跡" },
              { title: "セキュア保存", desc: "暗号化された安全なクラウドストレージ" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}
