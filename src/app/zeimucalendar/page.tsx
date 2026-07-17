import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#C9A227";

export default function ZeimuCalendarPage() {
  return (
    <Layout
      title="税務カレンダー"
      description="法人・個人事業主向け税務期限管理アプリ"
    >
      <div style={{ maxWidth: 860 }}>

        {/* アイコン + タグ群 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <div style={{
            width: 88, height: 88, borderRadius: 20,
            background: "#0C1A2E",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, fontSize: 40,
            border: `2px solid ${APP_COLOR}40`
          }}>
            📅
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["税務期限管理", "法人対応", "個人事業主対応", "iPhoneカレンダー同期", "プッシュ通知"].map(t => (
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 48 }}>
          {[
            { href: "/zeimucalendar/terms", label: "利用規約" },
            { href: "/zeimucalendar/support", label: "サポート" },
            { href: "/zeimucalendar/privacy", label: "プライバシーポリシー" },
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
            税務カレンダーは、法人・個人事業主が抱える税務申告・納付期限を一元管理するiOSアプリです。
          </p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8 }}>
            決算月・事業形態に合わせて期限を自動計算し、法人税・消費税・源泉所得税・住民税など多岐にわたる税務イベントを見逃さないようサポートします。
          </p>
        </section>

        {/* こんな方に */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            こんな方におすすめ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { icon: "🏢", title: "法人経営者", desc: "法人税・消費税・役員任期登記まで決算月に合わせて自動管理" },
              { icon: "👤", title: "個人事業主", desc: "確定申告・住民税・予定納税など個人の税務スケジュールを網羅" },
              { icon: "🔄", title: "法人と個人を兼ねる方", desc: "複数プロファイルで法人と個人の期限を別々に管理（プレミアム）" },
              { icon: "📱", title: "スマートに管理したい方", desc: "iPhoneカレンダー同期・ウィジェット・バッジ通知で期限を常に把握" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{f.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 主な機能 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { title: "税務期限の自動計算", desc: "決算月・事業形態を登録するだけで法人税・消費税・源泉所得税など全期限を自動生成" },
              { title: "申告・納付を分けて表示", desc: "「申告」と「納付」を明確に分類し、何をすべきかが一目でわかるダッシュボード" },
              { title: "プッシュ通知・バッジ通知", desc: "1ヶ月前・1週間前・当日に通知。緊急度の高い期限はバッジで常に確認可能" },
              { title: "iPhoneカレンダー同期", desc: "タップ一つでiPhoneの標準カレンダーに税務イベントを追加" },
              { title: "完了管理と履歴", desc: "完了した申告・納付は履歴として3年分保存。翌年は自動リセットで通知再開" },
              { title: "役員任期登記管理", desc: "法人の役員登記更新時期を登録し、期限を見逃さない（法人プロファイル）" },
            ].map(f => (
              <div key={f.title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対応税目 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            対応税目
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 12 }}>法人</h3>
              <ul style={{ paddingLeft: 18, margin: 0, color: "var(--mid)", fontSize: 13, lineHeight: 2 }}>
                <li>法人税（確定・中間申告）</li>
                <li>法人住民税・事業税</li>
                <li>消費税・地方消費税</li>
                <li>源泉所得税（毎月 or 特例年2回）</li>
                <li>年末調整・法定調書</li>
                <li>償却資産申告</li>
                <li>役員任期登記</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 12 }}>個人事業主</h3>
              <ul style={{ paddingLeft: 18, margin: 0, color: "var(--mid)", fontSize: 13, lineHeight: 2 }}>
                <li>所得税確定申告・納付</li>
                <li>消費税確定申告（課税事業者）</li>
                <li>個人住民税（第1〜4期）</li>
                <li>所得税予定納税（第1・2期）</li>
                <li>源泉所得税（毎月 or 特例年2回）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* プラン比較 */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            プラン
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>無料プラン</h3>
              <p style={{ fontSize: 24, fontWeight: 800, color: "var(--text)", marginBottom: 16 }}>¥0</p>
              <ul style={{ paddingLeft: 18, margin: 0, color: "var(--mid)", fontSize: 13, lineHeight: 2 }}>
                <li>プロファイル1件</li>
                <li>決算申告のみ通知</li>
                <li>広告表示あり</li>
              </ul>
            </div>
            <div style={{ background: `${APP_COLOR}10`, border: `1px solid ${APP_COLOR}40`, borderRadius: 14, padding: "24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: APP_COLOR, marginBottom: 4 }}>プレミアムプラン</h3>
              <p style={{ fontSize: 24, fontWeight: 800, color: APP_COLOR, marginBottom: 16 }}>¥120 <span style={{ fontSize: 13, fontWeight: 400 }}>/ 月</span></p>
              <ul style={{ paddingLeft: 18, margin: 0, color: "var(--mid)", fontSize: 13, lineHeight: 2 }}>
                <li>複数プロファイル（法人＋個人）</li>
                <li>全税務イベントの通知</li>
                <li>広告非表示</li>
                <li>iCloud同期</li>
                <li>ウィジェット対応</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
