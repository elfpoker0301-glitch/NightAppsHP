import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#fb923c";

export const metadata = {
  title: "サポート - 子供クエスト",
};

export default function KodomoQuestSupportPage() {
  return (
    <Layout title="子供クエスト - サポート" description="子供クエストのサポートページ">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>よくある質問</h2>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. クエストの承認はどうするのですか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>子供がクエスト完了を報告したら、保護者が暗証番号で管理画面に入り「承認」ボタンを押すとポイントが付与されます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 暗証番号を忘れてしまいました</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>申し訳ありませんが、暗証番号はデバイス内にのみ保存されており復元できません。アプリを再インストールすることでリセットされますが、データも削除されます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. 複数の子供を登録できますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>はい、管理画面から子供を追加することで複数人の管理が可能です。それぞれ独立したクエストとポイントが管理されます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. ポイントを手動で調整できますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>管理画面から保護者がポイントを手動で加算・減算することができます。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. キャラクターはどのように成長しますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>ポイントを貯めることでキャラクターが「たまご → ひな → こども → おとな → スーパー」と段階的に成長します。</p>

          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, marginBottom: 4, fontWeight: 600 }}>Q. データはどこに保存されますか？</p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>すべてのデータはお使いのデバイス内にのみ保存されます。外部サーバーへの送信は行いません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>お問い合わせ</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>上記で解決しない場合は、メールにてご連絡ください。</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>Email：</strong><a href="mailto:app@liv-jpn.com" style={{ color: APP_COLOR }}>app@liv-jpn.com</a></li>
          </ul>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/kodomo-quest" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← 子供クエストに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
