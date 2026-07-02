import Layout from "../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f97316";

export default function NightPDFPage() {
  return (
    <Layout
      title="Night PDF"
      description="バケツ塗り機能搭載のPDF編集アプリ"
    >
      <div style={{ maxWidth: 860 }}>

        {/* アイコン + タグ群 */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 40 }}>
          <div style={{
            width: 88, height: 88, borderRadius: 20,
            background: APP_COLOR,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, fontSize: 40
          }}>
            📄
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["バケツ塗り", "手書きメモ", "ハイライト", "図形描画", "リアルタイム描画"].map(t => (
              <span key={t} style={{
                fontSize: 12, fontWeight: 600, padding: "4px 12px",
                border: `1px solid ${APP_COLOR}40`,
                borderRadius: 100, color: APP_COLOR,
                background: `${APP_COLOR}10`
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* サブページナビゲーション */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 48 }}>
          {[
            { href: "/night-pdf/specs", label: "仕様詳細" },
            { href: "/night-pdf/terms", label: "利用規約" },
            { href: "/night-pdf/support", label: "サポート" },
            { href: "/night-pdf/privacy", label: "プライバシーポリシー" },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{
              display: "block", padding: "16px 12px", textAlign: "center",
              background: "var(--bg2)", border: "1px solid var(--line)",
              borderRadius: 12, textDecoration: "none",
              fontSize: 13, fontWeight: 600, color: "var(--text)"
            }}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* キャッチコピー */}
        <section style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
            PDFに色を塗る、革新的な編集体験
          </p>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8 }}>
            業界初のバケツ塗り機能を搭載したPDF編集アプリ。iPhoneとiPadで、PDFの特定エリアを簡単に塗りつぶすことができます。
          </p>
        </section>

        {/* 機能セクション */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 20 }}>
            主な機能
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>バケツ塗り機能</h3>
              <p style={{ fontSize: 13, color: "var(--mid)", lineHeight: 1.7, margin: "0 0 10px" }}>
                PDFの好きなエリアをタップするだけで、そのエリア全体を指定した色で塗りつぶせます。
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li>・契約書の重要項目を目立たせる</li>
                <li>・不要な情報を隠す（墨消し）</li>
                <li>・資料に視覚的な強調を追加</li>
                <li>・図やイラストに色を付ける</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>充実した編集ツール</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li><strong>ペン:</strong> 手書きでメモや署名を追加</li>
                <li><strong>ハイライト:</strong> 重要な箇所を強調表示</li>
                <li><strong>消しゴム:</strong> 不要な注釈を削除</li>
                <li><strong>テキスト:</strong> タイプしたテキストを挿入・移動可能</li>
                <li><strong>図形:</strong> 矩形、円、直線、矢印を描画</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>カスタマイズ可能</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li>・豊富なカラーパレット</li>
                <li>・線の太さ調整（1〜20pt）</li>
                <li>・透明度設定</li>
                <li>・フォントサイズ変更</li>
              </ul>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 14, padding: "20px 22px" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8 }}>リアルタイム描画</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 13, color: "var(--mid)", lineHeight: 2 }}>
                <li>・ペンやハイライトを描きながら即座に反映</li>
                <li>・カーソルプレビューで線の太さを確認</li>
                <li>・図形描画時のプレビュー表示</li>
              </ul>
            </div>
          </div>
        </section>

        {/* プレミアム機能 */}
        <section style={{ marginBottom: 40, background: `${APP_COLOR}0d`, border: `1px solid ${APP_COLOR}30`, borderRadius: 14, padding: "24px 28px" }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, letterSpacing: -0.5, marginBottom: 8 }}>
            プレミアム機能
          </h2>
          <p style={{ fontSize: 13, color: "var(--mid)", marginBottom: 16 }}>
            広告を視聴することで、24時間すべての機能が使えます
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {["ハイライト", "図形描画（矩形・円・直線・矢印）", "バケツ塗り"].map(f => (
              <div key={f} style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 10, padding: "14px 16px", textAlign: "center" }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", margin: 0 }}>{f}</p>
              </div>
            ))}
          </div>
        </section>

        {/* こんな方におすすめ */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>
            こんな方におすすめ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {[
              "PDFに手書きでメモを取りたい方",
              "契約書に署名を追加したい方",
              "資料に注釈を入れたい学生や社会人",
              "PDFを視覚的に編集したい方",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ color: APP_COLOR, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 13, color: "var(--mid)", margin: 0, lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* App Store ボタン */}
        <div style={{ marginBottom: 40 }}>
          <a
            href="https://apps.apple.com/jp/app/id6755779324"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#000", color: "#fff",
              padding: "14px 28px", borderRadius: 14,
              textDecoration: "none", fontSize: 14, fontWeight: 600
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Storeでダウンロード
          </a>
        </div>

      </div>
    </Layout>
  );
}
