import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#22c55e";

export default function GomiNoHiPage() {
  return (
    <Layout
      title="ゴミの日！"
      description="地域を選ぶだけでゴミ収集日を管理できるシンプルなアプリ"
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
            🗑️
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["かんたん地域設定", "通知機能", "ウィジェット対応", "無料"].map(t => (
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
            { href: "/gomi-no-hi/specs", label: "仕様詳細" },
            { href: "/gomi-no-hi/terms", label: "利用規約" },
            { href: "/gomi-no-hi/support", label: "サポート" },
            { href: "/gomi-no-hi/privacy", label: "プライバシーポリシー" },
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
            地域を選ぶだけでゴミ収集日を管理
          </p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8 }}>
            都道府県と市区町村を選択するだけで、お住まいの地域のゴミ収集日が自動で設定される、シンプルで使いやすいゴミ収集日お知らせアプリ。
          </p>
        </section>

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>かんたん地域設定</h3>
              <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: "0 0 10px" }}>
                都道府県と市区町村を選ぶだけで、収集スケジュールが自動で設定されます。
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li>・都道府県・市区町村から選択</li>
                <li>・地域が見つからない場合は手動設定も可能</li>
                <li>・複数の地区を登録して切り替え可能</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>通知でお知らせ</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li><strong>前日通知:</strong> 収集日前日にお知らせ</li>
                <li><strong>当日通知:</strong> 収集日当日にもお知らせ</li>
                <li><strong>出し忘れ防止:</strong> 通知でゴミ出しを忘れない</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>ウィジェット対応</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li>・ホーム画面ウィジェットで一目で確認</li>
                <li>・アプリを開かずに今日・明日のゴミの種類がわかる</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>シンプル＆無料</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li>・無料で全機能を利用可能</li>
                <li>・迷わない直感的な操作性</li>
              </ul>
            </div>
          </div>
        </section>

        {/* こんな方におすすめ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            こんな方におすすめ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {[
              "ゴミの収集日をよく忘れてしまう方",
              "引っ越し先のゴミ出しルールを早く把握したい方",
              "複数の地域のゴミ出し予定を管理したい方",
              "ウィジェットでさっと確認したい方",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ color: APP_COLOR, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 13, color: "var(--mid)", margin: 0, lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* App Store ボタン */}
        <div style={{ marginBottom: 40 }}>
          <a
            href="https://apps.apple.com/jp/app/id6782357102"
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
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Storeでダウンロード
          </a>
        </div>

      </div>
    </Layout>
  );
}
