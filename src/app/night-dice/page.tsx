import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#10b981";

export default function NightDicePage() {
  return (
    <Layout
      title="Night Dice"
      description="2〜8人で楽しむ伝統的なサイコロゲーム。友達や家族との集まりに最適なパーティーゲームアプリ。"
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
            🎲
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["チンチロ", "2〜8人対戦", "パーティーゲーム", "サイコロアニメーション"].map(t => (
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
            { href: "/night-dice/specs", label: "仕様詳細" },
            { href: "/night-dice/terms", label: "利用規約" },
            { href: "/night-dice/support", label: "サポート" },
            { href: "/night-dice/privacy", label: "プライバシーポリシー" },
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
            2〜8人で楽しむ伝統的なサイコロゲーム
          </p>
        </section>

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            ゲームの特徴
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "2人から8人まで対戦可能", desc: "友達や家族みんなで楽しめる" },
              { title: "シンプルで分かりやすいルール", desc: "誰でもすぐに始められる" },
              { title: "美しいダイスアニメーション", desc: "リアルなサイコロの動きを再現" },
              { title: "直感的な操作性", desc: "タップするだけで簡単プレイ" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 遊び方 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            遊び方
          </h2>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
            <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.8, marginBottom: 12 }}>
              サイコロを3つ振って、出た目で勝負！伝統的なチンチロのルールで、役の強さを競い合います。
            </p>
            <p style={{ fontSize: 12, fontWeight: 600, color: APP_COLOR, marginBottom: 8 }}>強い役の例：</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
              <li>・ピンゾロ（1のゾロ目）</li>
              <li>・その他のゾロ目</li>
              <li>・シゴロ（4・5・6）</li>
              <li>・目（2つ同じ数字 + 1つ違う数字）</li>
            </ul>
          </div>
        </section>

        {/* こんな時におすすめ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            こんな時におすすめ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { emoji: "🎉", title: "友達との集まりやパーティーで", desc: "盛り上がること間違いなし" },
              { emoji: "👨‍👩‍👧‍👦", title: "家族団らんの時間に", desc: "世代を超えて楽しめる" },
              { emoji: "⏰", title: "待ち時間の暇つぶしに", desc: "短時間でサクッとプレイ" },
              { emoji: "🎲", title: "ゲーム好きな仲間と", desc: "伝統ゲームの奥深さを堪能" },
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

        {/* 注意書き */}
        <section style={{ marginBottom: 40, background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 800, marginBottom: 8 }}>
            娯楽目的のゲームアプリです
          </h2>
          <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>
            Night Diceは純粋に娯楽を目的としたサイコロゲームアプリです。実際の金銭の授受は一切行いません。実際の賭博行為を推奨・助長するものではありません。
          </p>
        </section>

      </div>
    </Layout>
  );
}
