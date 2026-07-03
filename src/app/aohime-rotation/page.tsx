import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#e8547a";

export default function AohimeRotationPage() {
  return (
    <Layout
      title="Night シフト管理"
      description="ナイト系店舗のシフト・ローテーションをガントチャートで可視化・管理するiOSアプリ。出張モード・補償払い・日報出力・終了アラート搭載。"
    >
      <div style={{ maxWidth: 860 }}>

        {/* アイコン + タグ群 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <div style={{
            width: 88, height: 88, borderRadius: 20, flexShrink: 0,
            background: APP_COLOR,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#fff",
          }}>
            夜
          </div>
          <div>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 12 }}>
              ナイト系店舗のシフト・ローテーションをガントチャートで一括管理。
              出張モード・補償払い・日報出力をワンアプリで完結。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["シフト管理", "ガントチャート", "終了アラート", "補償払い対応", "無料"].map(t => (
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
            { href: "/aohime-rotation/specs", label: "仕様詳細" },
            { href: "/aohime-rotation/terms", label: "利用規約" },
            { href: "/aohime-rotation/support", label: "サポート" },
            { href: "/aohime-rotation/privacy", label: "プライバシーポリシー" },
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
            Night シフト管理は、ナイト系店舗のシフト・ローテーション業務をスマートフォン一台で完結させるiOSアプリです。
          </p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8 }}>
            ガントチャートによる直感的な操作で、セット状況・補償払い・出張案件・日報管理をまとめて効率化できます。
          </p>
        </section>

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "ガントチャート管理", desc: "縦軸にキャスト・横軸に時間を配置したガントチャートでシフト状況を一目で把握。タップで詳細入力ダイアログを表示。" },
              { title: "セット・延長管理", desc: "新規/指名・オプション・セット時間を記録。延長セットは別色で表示。セット時間・オプションはすべて店舗でカスタマイズ可能。" },
              { title: "補償払い対応", desc: "キャストごとに補償額を設定し、補償払いモードに切り替えると日報の給与合計に自動反映。補償バッジで一目で確認できます。" },
              { title: "出張モード", desc: "出張案件の訪問先・部屋番号をセッションに記録。店外案件も一元管理できます。" },
              { title: "終了アラート", desc: "セット終了前に音＋ポップアップで通知。複数セット同時進行にも対応し、見落としを防止します。" },
              { title: "日報・給与計算", desc: "部ごとの日報・月次レポートを出力。キャストの本指名報酬・補償額も含めた給与を自動計算します。" },
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
              "ローカルバックアップ機能でデータを安全に引き継げます。",
              "データは最大1ヶ月分のみ保持し、古いデータは自動削除されます。",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: i < 2 ? 10 : 0 }}>
                <span style={{ color: APP_COLOR, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* App Store */}
        <section style={{ textAlign: "center", padding: "32px 0" }}>
          <a
            href="https://apps.apple.com/jp/app/id6787041071"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: APP_COLOR, color: "#fff",
              padding: "14px 32px", borderRadius: 14,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
            }}
          >
            App Store でダウンロード
          </a>
        </section>

      </div>
    </Layout>
  );
}
