import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f43f5e";

export default function AohimeRotationPage() {
  return (
    <Layout
      title="泡姫ローテーション"
      description="風俗店のつけ回し（ローテーション）をガントチャートで可視化・管理するiOSアプリ。部屋管理・日報出力・終了アラート搭載。"
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
            泡
          </div>
          <div>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 12 }}>
              風俗店のつけ回し（ローテーション）をガントチャートで一括管理。
              部屋ごとのセット状況・終了アラート・日報出力をワンアプリで完結。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["つけ回し管理", "ガントチャート", "終了アラート", "日報PDF/Excel", "無料"].map(t => (
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

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "ガントチャート管理", desc: "縦軸に部屋・女の子、横軸に時間軸を配置したガントチャートでセット状況を一目で把握。タップで詳細入力ダイアログを表示。" },
              { title: "セット・延長管理", desc: "店頭/予約・新規/指名・オプション・セット時間を記録。延長セットは別色で表示。セット時間・延長時間・オプションはすべて店舗でカスタマイズ可能。" },
              { title: "終了アラート", desc: "セット終了X分前（設定で変更可能）に音＋ポップアップで通知。女の子の名前を表示し、複数セット同時進行にも対応。" },
              { title: "部制対応タブ", desc: "昼の部・夜の部など複数の部構成に対応。営業時間を部ごとに設定し、タブで切り替え。部ごとに「締め」ボタンで確定・ロック。" },
              { title: "日報出力", desc: "部ごとまたは全日分の日報をExcel・PDF形式で出力。LINE・メール経由で共有可能。過去1ヶ月分のシートを履歴として保存。" },
              { title: "柔軟な設定", desc: "部屋数・女の子登録（ランク付き）・セット時間・延長時間・オプション・ランク種別・アラートのオン/オフなど、店舗に合わせて細かく設定可能。" },
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

      </div>
    </Layout>
  );
}
