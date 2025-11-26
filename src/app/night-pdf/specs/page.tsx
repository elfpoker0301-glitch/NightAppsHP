import Layout from "../../components/Layout";

export default function NightPDFSpecs() {
  return (
    <Layout 
      title="Night PDF - 仕様詳細" 
      description="Night PDFの詳しい機能と仕様"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📋 基本概要</h2>
          <div className="space-y-4 text-gray-300">
            <p><strong className="text-white">アプリ名：</strong>Night PDF</p>
            <p><strong className="text-white">カテゴリ：</strong>仕事効率化 / ビジネス</p>
            <p><strong className="text-white">対応OS：</strong>iOS 14.0以降、iPadOS 14.0以降</p>
            <p><strong className="text-white">価格：</strong>無料（広告視聴でプレミアム機能解放）</p>
            <p><strong className="text-white">開発者：</strong>HIDETA UTSUNO</p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🎨 主な機能</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">1. バケツ塗り機能（業界初！）</h3>
              <p className="text-gray-300 mb-3">
                PDFの特定エリアをタップするだけで、そのエリア全体を指定した色で塗りつぶせます。
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>契約書の重要項目を目立たせる</li>
                <li>不要な情報を隠す（墨消し）</li>
                <li>資料に視覚的な強調を追加</li>
                <li>図やイラストに色を付ける</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">2. PDF編集ツール</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong className="text-white">ペン:</strong> 手書きでメモや署名を追加</li>
                <li><strong className="text-white">ハイライト:</strong> 重要な箇所を強調表示</li>
                <li><strong className="text-white">消しゴム:</strong> 不要な注釈を削除</li>
                <li><strong className="text-white">テキスト:</strong> タイプしたテキストを挿入・移動可能</li>
                <li><strong className="text-white">図形:</strong> 矩形、円、直線、矢印を描画</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">3. カスタマイズ機能</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>豊富なカラーパレット</li>
                <li>線の太さ調整（1〜20pt）</li>
                <li>透明度設定</li>
                <li>フォントサイズ変更</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">4. ファイル管理</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>編集したPDFの保存</li>
                <li>他のアプリと共有</li>
                <li>リアルタイム描画とプレビュー</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">⚙️ 技術仕様</h2>
          <div className="space-y-3 text-gray-300">
            <p><strong className="text-white">フレームワーク：</strong>Flutter / Dart</p>
            <p><strong className="text-white">PDF処理：</strong>flutter_pdf、signature + crypto（電子署名と暗号化）</p>
            <p><strong className="text-white">データ保存：</strong>端末内ローカル保存</p>
            <p><strong className="text-white">広告：</strong>Google AdMob</p>
            <p><strong className="text-white">プレミアム機能：</strong>リワード広告視聴で24時間解放</p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🌟 プレミアム機能</h2>
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              広告を視聴することで、以下の機能が24時間利用可能になります：
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>ハイライト機能</li>
              <li>図形描画（矩形、円、直線、矢印）</li>
              <li>バケツ塗り機能</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              ※ 広告視聴は任意です。基本的な編集機能は無料で利用できます。
            </p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">💻 システム要件</h2>
          <div className="space-y-3 text-gray-300">
            <p><strong className="text-white">対応デバイス：</strong>iPhone、iPad</p>
            <p><strong className="text-white">iOS：</strong>14.0以降</p>
            <p><strong className="text-white">iPadOS：</strong>14.0以降</p>
            <p><strong className="text-white">ストレージ：</strong>50MB以上の空き容量</p>
            <p><strong className="text-white">ネットワーク：</strong>広告表示のためインターネット接続が必要</p>
          </div>
          <div className="bg-orange-500/20 rounded-lg p-4 mt-6">
            <p className="text-sm text-gray-300">
              ⚠️ <strong className="text-white">免責事項：</strong>
              本アプリは「現状有姿」で提供されます。PDFファイルのバックアップは適切に管理してください。
              データの損失や破損について、開発者は一切の責任を負いません。
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
