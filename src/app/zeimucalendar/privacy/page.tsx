import Layout from "../../components/Layout";

const APP_COLOR = "#C9A227";

export default function ZeimuCalendarPrivacy() {
  return (
    <Layout
      title="税務カレンダー - プライバシーポリシー"
      description="個人情報の取り扱いについて"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "var(--light)", marginBottom: 24 }}>制定日：2026年7月17日</p>

        {[
          {
            title: "プライバシーポリシー",
            content: <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>税務カレンダー（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。</p>
          },
          {
            title: "収集する情報",
            content: (
              <>
                <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 8 }}>本アプリが収集する情報は以下の通りです。</p>
                <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
                  <li>プロファイル情報（法人名・個人名・決算月・消費税区分など）</li>
                  <li>税務イベントの完了状態・完了日時</li>
                  <li>広告配信のためのデバイス識別情報（AdMob）</li>
                </ul>
                <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginTop: 8, marginBottom: 0 }}>氏名・住所・電話番号・金融情報などの機密個人情報は収集しません。</p>
              </>
            )
          },
          {
            title: "データの保存",
            content: (
              <>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 0 }}>ローカル保存</h3>
                <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 12 }}>プロファイルデータ・税務イベント情報はお客様の端末内に保存されます。</p>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>iCloud同期（プレミアム機能）</h3>
                <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>プレミアムプランをご利用の場合、設定データをiCloudに同期します。iCloudのデータはApple Inc.のプライバシーポリシーに従って管理されます。</p>
              </>
            )
          },
          {
            title: "広告について",
            content: <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>無料プランではGoogle AdMobによる広告を表示します。AdMobは広告配信のためにデバイス識別情報を使用する場合があります。詳細はGoogle のプライバシーポリシーをご確認ください。プレミアムプランでは広告は表示されません。</p>
          },
          {
            title: "情報の利用目的・第三者提供",
            content: (
              <>
                <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 8 }}>収集した情報は以下の目的で利用します。</p>
                <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
                  <li>アプリ機能の提供（税務期限の計算・通知）</li>
                  <li>サービスの改善</li>
                  <li>広告配信（無料プランのみ）</li>
                </ul>
                <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginTop: 8, marginBottom: 0 }}>法令に基づく場合を除き、第三者への情報提供は行いません。</p>
              </>
            )
          },
          {
            title: "お問い合わせ",
            content: <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>プライバシーに関するご質問は、サポートページよりお問い合わせください。</p>
          },
        ].map(({ title, content }) => (
          <div key={title} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>{title}</h2>
            {content}
          </div>
        ))}
      </div>
    </Layout>
  );
}
