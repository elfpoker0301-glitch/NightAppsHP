import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#ec4899";

export default function NightAfterbackSpecs() {
  return (
    <Layout
      title="Nightアフターバック - 仕様詳細"
      description="機能と技術仕様について詳しくご説明します"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📝 基本概要</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>アプリ名：</strong>Nightアフターバック</li>
            <li><strong>対応OS：</strong>iOS 12.0以降</li>
            <li><strong>カテゴリ：</strong>ビジネス・効率化</li>
            <li><strong>言語：</strong>日本語</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📱 主な機能</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>基本機能（無料）</h3>

          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", margin: "12px 0 4px 0" }}>📝 簡単記録</p>
          <ul style={{ paddingLeft: 20, margin: "0 0 8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>手数料の金額と支払先を素早く記録</li>
            <li>請求日・支払期限も一緒に管理</li>
            <li>写真やメモも追加可能</li>
            <li>カテゴリ別分類（銀行手数料、年会費、システム利用料等）</li>
          </ul>

          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", margin: "12px 0 4px 0" }}>🏢 支払先別管理</p>
          <ul style={{ paddingLeft: 20, margin: "0 0 8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>会社・サービスごとに手数料履歴を整理</li>
            <li>月額・年額手数料の合計を一目で確認</li>
            <li>支払状況をリアルタイムで更新</li>
          </ul>

          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", margin: "12px 0 4px 0" }}>📊 見やすい一覧</p>
          <ul style={{ paddingLeft: 20, margin: "0 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>未払い・支払済みを分けて表示</li>
            <li>支払期限の近い順に並び替え</li>
            <li>期限切れをハイライト表示</li>
            <li>検索・フィルタ機能</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>プレミアム機能（月額480円）</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>広告なしの快適な操作</li>
            <li>より詳細な支払履歴管理</li>
            <li>定期手数料の自動リマインド設定</li>
            <li>データのiCloudバックアップ</li>
            <li>CSV形式でのデータエクスポート</li>
            <li>統計・グラフ表示機能</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>⚙️ 技術仕様・システム要件</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>開発言語：</strong>Flutter / Dart</li>
            <li><strong>データベース：</strong>SQLite + Cloud Storage</li>
            <li><strong>広告：</strong>Google AdMob統合</li>
            <li><strong>iOS：</strong>12.0以降</li>
            <li><strong>容量：</strong>50MB以上</li>
            <li><strong>ネットワーク：</strong>インターネット接続必須</li>
          </ul>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>データとプライバシー</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>データは端末内で暗号化保存</li>
            <li>個人情報は安全に管理</li>
            <li>バックアップデータも暗号化保護</li>
            <li>アカウント削除：設定画面から実行可能</li>
          </ul>
        </div>

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <Link href="/night-afterback" style={{ fontSize: 14, fontWeight: 600, color: APP_COLOR, textDecoration: "none" }}>
            ← Nightアフターバックに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
