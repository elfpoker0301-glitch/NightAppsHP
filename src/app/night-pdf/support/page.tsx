import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f97316";

export default function NightPDFSupport() {
  return (
    <Layout
      title="Night PDF - サポート"
      description="よくある質問とお問い合わせ"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>❓ よくある質問（FAQ）</h2>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: アプリが起動しません。</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: デバイスを再起動後、アプリを再インストールしてください。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: PDFが保存できません。</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: 端末のストレージ容量を確認し、不要なデータを削除してください。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: バケツ塗り機能が使えません。</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: プレミアム機能です。広告を視聴することで24時間利用可能になります。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: 編集内容が保存されません。</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: 編集後、必ず保存ボタンをタップしてください。アプリを終了する前に保存を確認してください。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: 広告が表示されません。</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: インターネット接続を確認してください。広告の在庫状況により表示されない場合があります。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: ペンの太さを変更したい。</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: ツールメニューから線の太さを1〜20ptの範囲で調整できます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: テキストの移動方法は？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A: テキストツールで追加したテキストは、長押しでドラッグして移動できます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q: データのバックアップはできますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>A: 編集したPDFは端末内に保存されます。iCloudやその他のクラウドサービスに手動でバックアップすることをお勧めします。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>🚑 トラブルシューティング</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>動作が重い場合</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリを再起動する</li>
            <li>大きなPDFファイルは処理に時間がかかる場合があります</li>
            <li>デバイスを再起動する</li>
            <li>他のアプリを終了してメモリを解放する</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>編集が反映されない場合</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>保存ボタンを確実にタップする</li>
            <li>アプリを一度終了して再起動する</li>
            <li>PDFファイルが読み取り専用になっていないか確認</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>広告が表示されない場合</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>インターネット接続を確認</li>
            <li>時間をおいて再度お試しください</li>
            <li>アプリを再起動する</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📩 お問い合わせ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>上記で解決しない場合は、以下の方法でお問い合わせください。</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>メール：</strong><a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a></li>
            <li><strong>対応時間：</strong>平日 9:00〜18:00</li>
            <li><strong>回答目安：</strong>24時間以内</li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--mid)", marginTop: 12, marginBottom: 4 }}>お問い合わせの際は、以下の情報をお知らせください：</p>
          <ul style={{ paddingLeft: 20, margin: "0", color: "var(--light)", fontSize: 13, lineHeight: 2 }}>
            <li>デバイスのモデル（例：iPhone 15 Pro）</li>
            <li>iOSバージョン</li>
            <li>アプリのバージョン</li>
            <li>問題の詳細な説明</li>
          </ul>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-pdf" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Night PDFに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
