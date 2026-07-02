import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f59e0b";

export const metadata = {
  title: "仕様詳細 - Girls Back",
};

export default function GirlsBackSpecsPage() {
  return (
    <Layout title="Girls Back - 仕様詳細" description="Girls Backの機能仕様">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>動作環境</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>対応OS：</strong>iOS 13.0以上</li>
            <li><strong>対応デバイス：</strong>iPhone</li>
            <li><strong>価格：</strong>無料</li>
            <li><strong>言語：</strong>日本語</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>機能一覧</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 8 }}>🔐 パスコードロック</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>4桁数字でアプリを保護。初回起動時にパスコードを設定します。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>🏠 ホーム画面</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>月別合計・未収金・前月比・過去6ヶ月グラフ・直近10件履歴を1画面で表示。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>✏️ バック登録</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>日付・店舗・支払金額合計・小計・バック金額・同行者・メモを入力して記録。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>📋 バック一覧</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>月別表示。未収（赤）・回収済（緑）・回収不可（グレー）を色分け。詳細タップでステータス変更可。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>🏪 店舗管理</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>店舗名・担当者・連絡先（複数）・LINE（複数）・住所・バック率を登録。回収不可店舗は赤表示。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>⚠️ 未収一覧</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 12px 0" }}>ホーム画面の「詳細」から未収の一覧を表示。回収済・回収不可への操作が可能。</p>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 4, marginTop: 12 }}>💾 ローカルバックアップ</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>設定画面からデータをデバイスに保存。機種変更時の引き継ぎに対応。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>データ保存</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: 0 }}>すべてのデータはデバイスのローカルストレージ（SharedPreferences）に保存されます。外部サーバーへの通信は一切行いません。アプリのアンインストール時にデータは削除されますので、事前にバックアップ機能のご利用をお勧めします。</p>
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
