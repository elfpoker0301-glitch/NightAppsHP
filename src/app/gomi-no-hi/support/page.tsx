import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#22c55e";

export default function GomiNoHiSupportPage() {
  return (
    <Layout title="ゴミの日！ - サポート" description="よくある質問とお問い合わせ">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>よくある質問（FAQ）</h2>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 自分の地域が見つかりません</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>都道府県・市区町村の一覧に該当地域がない場合は、「地域が見つからない場合は手動設定」から収集日を直接設定してください。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 収集日の通知が届きません</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>端末の「設定」→「通知」から本アプリの通知が許可されているかご確認ください。許可されていても、おやすみモード等の設定で通知が抑制される場合があります。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. ウィジェットが表示されません</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>ホーム画面を長押し→「+」ボタンから「ゴミの日！」を検索して追加してください。追加後、しばらく時間をおくと最新の情報に更新されます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 収集日が自治体と違っています</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>自治体の収集日は変更される場合があります。手動設定でお住まいの地域の最新スケジュールに修正してください。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 引っ越しした場合はどうすればいいですか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>設定画面から地域を変更するか、新しい地区を追加することで、複数の地域を切り替えて管理できます。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>トラブルシューティング</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>通知が届かない場合</h3>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>設定アプリで通知の許可状況を確認する</li>
            <li>端末を再起動する</li>
            <li>アプリを再インストールし、再度地域を設定する</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>ウィジェットが更新されない場合</h3>
          <ul style={{ paddingLeft: 20, margin: "0 0 12px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>一度ウィジェットを削除して再度追加する</li>
            <li>アプリ本体を開いて最新の状態に同期する</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>動作が重い場合</h3>
          <ul style={{ paddingLeft: 20, margin: 0, color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリを再起動する</li>
            <li>デバイスを再起動する</li>
            <li>他のアプリを終了してメモリを解放する</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>お問い合わせ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>上記で解決しない場合は、メールにてご連絡ください。</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>Email：</strong><a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a></li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 12, padding: "12px 16px", background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 8 }}>
            お問い合わせの際は、デバイスのモデル・iOSバージョン・アプリのバージョン・問題の詳細をお知らせください。
          </p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/gomi-no-hi" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← ゴミの日！に戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
