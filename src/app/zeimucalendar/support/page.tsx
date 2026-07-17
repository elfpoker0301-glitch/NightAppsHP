import Layout from "../../components/Layout";

const APP_COLOR = "#C9A227";

export default function ZeimuCalendarSupport() {
  return (
    <Layout
      title="税務カレンダー - サポート"
      description="よくある質問とお問い合わせ"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            よくある質問
          </h2>
          {[
            {
              q: "プロファイルとは何ですか？",
              a: "法人または個人事業主の設定情報です。決算月・消費税区分・源泉所得税の納付方法などを登録することで、税務期限が自動計算されます。"
            },
            {
              q: "無料プランでは何ができますか？",
              a: "プロファイル1件の登録と、決算申告（法人税・所得税確定申告）のプッシュ通知が利用できます。広告が表示されます。"
            },
            {
              q: "プレミアムプランに切り替えるとどう変わりますか？",
              a: "複数プロファイルの登録が可能になり、源泉所得税・消費税・住民税・役員任期登記など全税務イベントの通知が届きます。また広告が非表示になり、iCloud同期・ウィジェットが利用できます。"
            },
            {
              q: "iPhoneカレンダーへの同期はどうやって行いますか？",
              a: "各税務イベントのカードにあるカレンダーアイコンをタップすると、iPhoneの標準カレンダーアプリに追加できます。初回はカレンダーへのアクセス許可が必要です。"
            },
            {
              q: "完了にした税務イベントはどうなりますか？",
              a: "完了済みとして表示が変わり、通知が停止します。翌年の同じ期限は自動でリセットされ、再び通知が届くようになります。完了履歴は3年分保存されます。"
            },
            {
              q: "サブスクリプションをキャンセルするとどうなりますか？",
              a: "解約後14日で無料プランに移行します。iCloud同期・通知が停止し、iPhoneカレンダーのイベントも削除されます。プロファイルが2件以上ある場合は1件のみ残ります。"
            },
            {
              q: "法人と個人事業主を両方登録できますか？",
              a: "プレミアムプランで複数プロファイルを登録することで、法人と個人事業主を同じアプリで管理できます。ダッシュボードでプロファイルを切り替えて確認できます。"
            },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px", marginBottom: 12 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 0 }}>Q. {q}</h3>
              <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>A. {a}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            お問い合わせ
          </h2>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "24px" }}>
            <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 12 }}>
              ご不明な点やご要望は、メールにてお問い合わせください。
            </p>
            <a href="mailto:utsuno.liv@gmail.com" style={{ color: APP_COLOR, fontWeight: 700, fontSize: 14 }}>
              utsuno.liv@gmail.com
            </a>
          </div>
        </section>

      </div>
    </Layout>
  );
}
