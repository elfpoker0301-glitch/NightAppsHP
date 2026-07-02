import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#a855f7";

export const metadata = {
  title: "仕様詳細 - Girls Board",
};

export default function GirlsBoardSpecsPage() {
  return (
    <Layout title="Girls Board - 仕様詳細" description="Girls Boardの機能仕様">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>動作環境</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>対応OS：</strong>iOS 13.0以上</li>
            <li><strong>対応デバイス：</strong>iPhone</li>
            <li><strong>価格：</strong>無料（広告あり）</li>
            <li><strong>言語：</strong>日本語</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>機能一覧</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>🏠 ダッシュボード</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>指名客数・1/3/6ヶ月未来店客・誕生日客（前後2ヶ月）・要注意客リスト・NG客リストを一覧表示。タップで詳細一覧へ。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>👥 客一覧</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>名前順・来店順・来店回数順のソートと、名前・ふりがな・あだ名での検索に対応。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>✏️ 客登録・詳細編集</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>名前・ふりがな・あだ名・電話番号・職業・会社名・LINE名・インスタ・住所・誕生日・血液型・趣味・メモ等を登録。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>📅 来店履歴管理</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>在籍店舗・来店日・新規/同伴/来店/その他の種別・売上・人数を複数登録。編集・削除に対応。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>🏪 在籍店舗登録</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>複数の在籍店舗を登録し、来店履歴入力時にプルダウンで選択できます。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>💾 ローカルバックアップ</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>設定画面からデータをデバイスに保存・復元。機種変更時の引き継ぎに対応。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>データ保存</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>すべてのデータはデバイスのローカルストレージに保存されます。外部サーバーへの通信は行いません。アプリのアンインストール時にデータは削除されますので、事前にバックアップ機能のご利用をお勧めします。</p>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/girls-board" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Girls Boardに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
