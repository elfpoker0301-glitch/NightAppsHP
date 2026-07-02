import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f59e0b";

export const metadata = {
  title: "サポート - Girls Back",
};

export default function GirlsBackSupportPage() {
  return (
    <Layout title="Girls Back - サポート" description="Girls Backのサポートページ">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>よくある質問</h2>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. パスコードを忘れてしまいました</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>設定画面の「パスコードリセット」から新しいパスコードを設定できます。ただしリセット時にアプリへのアクセスが必要です。パスコードを完全に忘れた場合はアプリの再インストールが必要になりますのでご注意ください。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. データはどこに保存されますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>すべてのデータはお使いのデバイス内にのみ保存されます。外部サーバーへの送信は行いません。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 機種変更時にデータを移行できますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>設定画面の「バックアップ」機能でローカルに保存し、「バックアップ引き継ぎ」で復元できます。（近日公開予定）</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 店舗を削除するとバック記録も消えますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>店舗を削除してもバック記録は残ります。ただし店舗名が更新されなくなります。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>お問い合わせ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>上記で解決しない場合は、メールにてご連絡ください。</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>Email：</strong><a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a></li>
          </ul>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/girls-back" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Girls Backに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
