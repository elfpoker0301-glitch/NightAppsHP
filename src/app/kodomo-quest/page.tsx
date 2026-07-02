import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#fb923c";

export default function KodomoQuestPage() {
  return (
    <Layout
      title="子供クエスト"
      description="親がクエスト（お手伝い・宿題など）を作成し、子供が達成するとポイントがもらえる。貯めたポイントはごほうびと交換できる家族向けアプリ。"
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
            ⭐
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["クエスト", "ポイント制", "ごほうび交換", "家族向け", "複数の子供対応"].map(t => (
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
            { href: "/kodomo-quest/specs", label: "仕様詳細" },
            { href: "/kodomo-quest/terms", label: "利用規約" },
            { href: "/kodomo-quest/support", label: "サポート" },
            { href: "/kodomo-quest/privacy", label: "プライバシーポリシー" },
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

        {/* キャッチ */}
        <section style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
            こどものやる気を引き出す、家族みんなで楽しむクエストアプリ
          </p>
        </section>

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            アプリの特徴
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "クエストでやる気アップ", desc: "お手伝いや宿題をゲーム感覚で楽しめる" },
              { title: "ポイント制でごほうびをゲット", desc: "達成するとポイントが貯まり、設定したごほうびと交換できる" },
              { title: "可愛いキャラクターが成長", desc: "たまごから育つキャラクターが一緒に成長していく" },
              { title: "複数の子供に対応", desc: "兄弟姉妹それぞれのクエストを管理できる" },
              { title: "暗証番号で保護された管理画面", desc: "親専用の管理画面で承認・ポイント管理ができる" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 使い方 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            使い方
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { step: "1", title: "親がクエストを設定", desc: "「お皿を洗う」「宿題をする」などのクエストとポイントを設定" },
              { step: "2", title: "子供がクエストに挑戦", desc: "子供が達成したらアプリで報告" },
              { step: "3", title: "親が承認してポイント付与", desc: "管理画面で確認・承認するとポイントが加算される" },
              { step: "🎁", title: "ごほうびと交換", desc: "貯めたポイントで設定したごほうびをゲット！" },
            ].map(item => (
              <div key={item.step} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: APP_COLOR, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, flexShrink: 0
                }}>{item.step}</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", margin: "0 0 4px" }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: "var(--mid)", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* こんな家族におすすめ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            こんな家族におすすめ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { emoji: "🧹", title: "お手伝いをなかなかしてくれない", desc: "ゲーム感覚で自発的に動くようになる" },
              { emoji: "📚", title: "宿題や勉強習慣をつけたい", desc: "毎日のルーティンをクエスト化できる" },
              { emoji: "🎮", title: "子供がゲームが大好き", desc: "現実のタスクをRPG風に楽しめる" },
              { emoji: "👨‍👩‍👧‍👦", title: "兄弟で一緒に頑張りたい", desc: "複数の子供それぞれにクエストを設定できる" },
            ].map(item => (
              <div key={item.title} style={{ display: "flex", gap: 12, background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "16px 18px" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.emoji}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", margin: "0 0 4px" }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: "var(--mid)", margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* App Store ボタン */}
        <div style={{ marginBottom: 40 }}>
          <a
            href="https://apps.apple.com/jp/app/id6781513708"
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
            App Storeからダウンロード
          </a>
        </div>

        {/* お問い合わせリンク */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          <Link href="/kodomo-quest/support" style={{
            display: "block", padding: "16px 12px", textAlign: "center",
            background: "var(--bg2)", border: "1px solid var(--line)",
            borderRadius: 12, textDecoration: "none",
            fontSize: 13, fontWeight: 600, color: "var(--text)"
          }}>
            サポート
          </Link>
          <Link href="/contact" style={{
            display: "block", padding: "16px 12px", textAlign: "center",
            background: "var(--bg2)", border: "1px solid var(--line)",
            borderRadius: 12, textDecoration: "none",
            fontSize: 13, fontWeight: 600, color: "var(--text)"
          }}>
            お問い合わせ
          </Link>
        </div>

      </div>
    </Layout>
  );
}
