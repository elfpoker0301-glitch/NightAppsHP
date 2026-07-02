import Layout from "../../components/Layout";
import Link from "next/link";

const APP_COLOR = "#f97316";

export default function NightPDFSpecs() {
  return (
    <Layout
      title="Night PDF - 仕様詳細"
      description="Night PDFの詳しい機能と仕様"
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>📋 基本概要</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>アプリ名：</strong>Night PDF</li>
            <li><strong>カテゴリ：</strong>仕事効率化 / ビジネス</li>
            <li><strong>対応OS：</strong>iOS 14.0以降、iPadOS 14.0以降</li>
            <li><strong>価格：</strong>無料（広告視聴でプレミアム機能解放）</li>
            <li><strong>開発者：</strong>HIDETA UTSUNO</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>🎨 主な機能</h2>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 8 }}>1. バケツ塗り機能（業界初！）</h3>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>PDFの特定エリアをタップするだけで、そのエリア全体を指定した色で塗りつぶせます。</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>契約書の重要項目を目立たせる</li>
            <li>不要な情報を隠す（墨消し）</li>
            <li>資料に視覚的な強調を追加</li>
            <li>図やイラストに色を付ける</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>2. PDF編集ツール</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>ペン:</strong> 手書きでメモや署名を追加</li>
            <li><strong>ハイライト:</strong> 重要な箇所を強調表示</li>
            <li><strong>消しゴム:</strong> 不要な注釈を削除</li>
            <li><strong>テキスト:</strong> タイプしたテキストを挿入・移動可能</li>
            <li><strong>図形:</strong> 矩形、円、直線、矢印を描画</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>3. カスタマイズ機能</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0 16px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>豊富なカラーパレット</li>
            <li>線の太さ調整（1〜20pt）</li>
            <li>透明度設定</li>
            <li>フォントサイズ変更</li>
          </ul>

          <h3 style={{ fontSize: 14, fontWeight: 700, color: APP_COLOR, marginBottom: 8, marginTop: 16 }}>4. ファイル管理</h3>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>編集したPDFの保存</li>
            <li>他のアプリと共有</li>
            <li>リアルタイム描画とプレビュー</li>
          </ul>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>⚙️ 技術仕様・システム要件</h2>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li><strong>フレームワーク：</strong>Flutter / Dart</li>
            <li><strong>PDF処理：</strong>flutter_pdf、signature + crypto（電子署名と暗号化）</li>
            <li><strong>データ保存：</strong>端末内ローカル保存</li>
            <li><strong>広告：</strong>Google AdMob</li>
            <li><strong>プレミアム機能：</strong>リワード広告視聴で24時間解放</li>
            <li><strong>対応デバイス：</strong>iPhone、iPad</li>
            <li><strong>iOS：</strong>14.0以降</li>
            <li><strong>ストレージ：</strong>50MB以上の空き容量</li>
            <li><strong>ネットワーク：</strong>広告表示のためインターネット接続が必要</li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 16, marginBottom: 0 }}>⚠️ 免責事項：本アプリは「現状有姿」で提供されます。PDFファイルのバックアップは適切に管理してください。データの損失や破損について、開発者は一切の責任を負いません。</p>
        </div>

        <div style={{ background: "var(--bg2)", border: "1px solid var(--line)", borderRadius: 16, padding: "32px", marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: -0.3, color: "var(--text)", marginBottom: 12, marginTop: 0 }}>🌟 プレミアム機能</h2>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8, margin: "0 0 8px 0" }}>広告を視聴することで、以下の機能が24時間利用可能になります：</p>
          <ul style={{ paddingLeft: 20, margin: "8px 0", color: "var(--mid)", fontSize: 14, lineHeight: 2 }}>
            <li>ハイライト機能</li>
            <li>図形描画（矩形、円、直線、矢印）</li>
            <li>バケツ塗り機能</li>
          </ul>
          <p style={{ fontSize: 13, color: "var(--light)", marginTop: 12, marginBottom: 0 }}>※ 広告視聴は任意です。基本的な編集機能は無料で利用できます。</p>
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
