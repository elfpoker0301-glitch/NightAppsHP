import Link from "next/link";
import Layout from "../../components/Layout";

const APP_COLOR = "#10b981";

export const metadata = {
  title: "サポート - Night Dice | NightApp",
  description: "Night Diceのよくある質問、トラブルシューティング、お問い合わせ方法について。",
};

export default function NightDiceSupportPage() {
  return (
    <Layout>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>❓ よくある質問</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>Q. 何人でプレイできますか？</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A. 2人から8人まで対応しています。ゲーム開始時に参加人数を設定できます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>Q. チンチロのルールがわかりません</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A. アプリ内の「ヘルプ」ボタンから詳細なルール説明をご覧いただけます。基本的には3つのサイコロを振り、役の強さで勝負します。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>Q. 実際のお金は必要ですか？</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A. いいえ、Night Diceは完全無料の娯楽アプリです。実際の金銭の授受は一切ありません。広告表示により無料で提供しています。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>Q. プレイヤー名は変更できますか？</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A. はい、ゲーム開始前の設定画面で各プレイヤーの名前をカスタマイズできます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>Q. オフラインでもプレイできますか？</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A. ゲーム自体はオフラインでプレイ可能ですが、広告表示のためにインターネット接続を推奨します。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>Q. 途中でゲームをやり直せますか？</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A. はい、設定メニューからゲームをリセットして新しいゲームを始められます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>Q. 広告を非表示にできますか？</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>A. 現在のバージョンでは広告非表示機能は提供しておりません。今後のアップデートで検討させていただきます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>Q. データは保存されますか？</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>A. ゲーム設定やプレイヤー名はデバイス内に保存されます。クラウドには保存されません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>🔧 トラブルシューティング</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>アプリが起動しない場合</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>デバイスを再起動してください</li>
            <li>iOSが最新版かご確認ください</li>
            <li>アプリを再インストールしてください</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>サイコロが表示されない場合</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>アプリを一度終了して再度起動してください</li>
            <li>デバイスのメモリ容量をご確認ください</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>広告が表示されない場合</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>インターネット接続を確認してください</li>
            <li>時間を置いて再度お試しください</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📧 お問い合わせ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>上記で解決しない問題やご質問がございましたら、以下のメールアドレスまでお気軽にお問い合わせください。</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>Email:</strong> <a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a></li>
            <li><strong>営業時間:</strong> 平日 9:00 - 18:00（土日祝日を除く）</li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 12, marginBottom: 4 }}>お問い合わせの際は以下の情報をご記載ください：</p>
          <ul style={{ paddingLeft: 20, margin: "0", color: "var(--light)", fontSize: 13, lineHeight: 2 }}>
            <li>お使いのデバイス（例: iPhone 13）</li>
            <li>iOSのバージョン</li>
            <li>問題の詳細な説明</li>
            <li>スクリーンショット（該当する場合）</li>
          </ul>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-dice" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Night Diceに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
