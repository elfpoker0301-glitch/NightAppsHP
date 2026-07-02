import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#a855f7";

export default function GirlsBoardPage() {
  return (
    <Layout
      title="Girls Board"
      description="キャバクラ・ガールズバーで働く女性のための顧客管理＆売上管理アプリ。月別売上ダッシュボード・指名客来店アラート・日報シェアをラグジュアリーなデザインで。"
    >
      <div style={{ maxWidth: 860 }}>

        {/* アイコン + タグ群 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <img
            src="/girls-board-icon.png"
            alt="Girls Board アイコン"
            style={{ width: 88, height: 88, borderRadius: 20, flexShrink: 0 }}
          />
          <div>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 12 }}>
              キャバクラ・ガールズバーで働く女性のための顧客管理＆売上管理アプリ。
              指名客の来店アラート・誕生日・売上集計・日報シェアをラグジュアリーなデザインで一元管理。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["来店アラート", "売上管理", "日報シェア", "誕生日管理", "無料"].map(t => (
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
            { href: "/girls-board/specs", label: "仕様詳細" },
            { href: "/girls-board/terms", label: "利用規約" },
            { href: "/girls-board/support", label: "サポート" },
            { href: "/girls-board/privacy", label: "プライバシーポリシー" },
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

        {/* 売上管理 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 6 }}>
            売上管理
          </h2>
          <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 16 }}>月別の売上を記録・集計・シェアできます</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { title: "月別ダッシュボード", desc: "売上高・小計・接客数・場内指名数・本指名数・ボトル数・ドリンク数を月ごとに集計。月間目標と達成率も表示。" },
              { title: "売上登録", desc: "客名・指名種別（フリー/場内/本指名）・同伴・ボトル・キープボトル・ドリンク・メモを登録。顧客管理と自動連携。" },
              { title: "カレンダー・日報", desc: "月カレンダーで登録状況を一覧表示。日付タップで日報をシェア。月次レポートもワンタップで共有できます。" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 顧客管理 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 6 }}>
            顧客管理
          </h2>
          <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 16 }}>指名客の情報をまとめて管理できます</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "ダッシュボード", desc: "指名客数・1/3/6ヶ月未来店客・誕生日客・要注意客・NG客をワンタップで確認。" },
              { title: "客一覧・客登録", desc: "名前・ふりがな・連絡先・誕生日・血液型などを登録。名前順・来店順・来店回数順で並び替え・検索対応。" },
              { title: "来店履歴・売上履歴", desc: "来店日・種別・売上を複数登録。売上管理で登録した記録も顧客ページに自動反映されます。" },
              { title: "要注意客・NG客", desc: "トラブルがあった客にフラグを立て、ダッシュボードから即座に確認できます。" },
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
              "顧客データ・売上データはすべてデバイス内にのみ保存。外部サーバーへの送信は一切ありません。",
              "ローカルバックアップ機能でデータを安全に引き継げます。顧客・売上・設定データをまとめてバックアップ。",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: i === 0 ? 10 : 0 }}>
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
