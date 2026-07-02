import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f59e0b";

export default function GirlsBackPage() {
  return (
    <Layout
      title="Girls Back"
      description="キャバクラ・クラブで働く女性のためのアフターバック収入管理アプリ。未収金管理・店舗管理・収支グラフを搭載。"
    >
      <div style={{ maxWidth: 860 }}>

        {/* アイコン + タグ群 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <img
            src="/girls-back-icon.png"
            alt="Girls Back アイコン"
            style={{ width: 88, height: 88, borderRadius: 20, flexShrink: 0 }}
          />
          <div>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 12 }}>
              キャバクラ・クラブで働く女性のためのアフターバック収入管理アプリ。
              アフターバックの未収管理・店舗管理・月別グラフを、ラグジュアリーなデザインで提供します。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["パスコード保護", "未収管理", "グラフ表示", "無料"].map(t => (
                <span key={t} style={{
                  fontSize: 12, fontWeight: 600, padding: "4px 12px",
                  border: `1px solid ${APP_COLOR}40`,
                  borderRadius: 100, color: APP_COLOR,
                  background: `${APP_COLOR}10`
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* サブページナビゲーション */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 48 }}>
          {[
            { href: "/girls-back/specs", label: "仕様詳細" },
            { href: "/girls-back/terms", label: "利用規約" },
            { href: "/girls-back/support", label: "サポート" },
            { href: "/girls-back/privacy", label: "プライバシーポリシー" },
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

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "ホーム画面", desc: "当月のアフターバック合計・未収金を一目で確認。前月比・過去6ヶ月グラフ・直近10件の履歴を1画面に集約。" },
              { title: "パスコード保護", desc: "4桁のパスコードでアプリをロック。金額情報をプライベートに管理できます。" },
              { title: "バック登録・一覧", desc: "日付・店舗・支払金額・バック金額・同行者・メモを登録。月別一覧で未収／回収済／回収不可を色分け表示。" },
              { title: "店舗管理", desc: "店舗名・担当者・連絡先（複数）・LINE（複数）・住所・バック率を登録。回収不可がある店舗は赤表示で警告。" },
              { title: "未収管理", desc: "未収一覧から回収済・回収不可への操作が可能。未収合計を素早く把握できます。" },
              { title: "収支グラフ", desc: "過去6ヶ月の合計と未収をグラフで可視化。稼ぎのトレンドが一目でわかります。" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* セキュリティ */}
        <section style={{ marginBottom: 40, background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, letterSpacing: -0.5, marginBottom: 14 }}>
            セキュリティ
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "すべてのデータはデバイス内にのみ保存。外部サーバーへの送信は一切ありません。",
              "パスコードロックにより、第三者による閲覧を防止します。",
              "ローカルバックアップ機能でデータを安全に引き継げます。",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: i < 2 ? 10 : 0 }}>
                <span style={{ color: APP_COLOR, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </Layout>
  );
}
