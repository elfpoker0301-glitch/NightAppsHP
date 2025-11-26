import Link from "next/link";
import Layout from "../components/Layout";

export default function NightPDFPage() {
  return (
    <Layout 
      title="Night PDF - PDF編集アプリ" 
      description="バケツ塗り機能搭載のPDF編集アプリ"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-6">
            <span className="text-6xl">📄</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Night PDF
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            PDFに色を塗る、革新的な編集体験
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            業界初のバケツ塗り機能を搭載したPDF編集アプリ。iPhoneとiPadで、PDFの特定エリアを簡単に塗りつぶすことができます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🎨</span>
              <h2 className="text-2xl font-bold text-white">バケツ塗り機能</h2>
            </div>
            <p className="text-gray-300 mb-4">
              PDFの好きなエリアをタップするだけで、そのエリア全体を指定した色で塗りつぶせます。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                契約書の重要項目を目立たせる
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                不要な情報を隠す（墨消し）
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                資料に視覚的な強調を追加
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                図やイラストに色を付ける
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">✏️</span>
              <h2 className="text-2xl font-bold text-white">充実した編集ツール</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <div>
                  <strong className="text-white">ペン:</strong> 手書きでメモや署名を追加
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <div>
                  <strong className="text-white">ハイライト:</strong> 重要な箇所を強調表示
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <div>
                  <strong className="text-white">消しゴム:</strong> 不要な注釈を削除
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <div>
                  <strong className="text-white">テキスト:</strong> タイプしたテキストを挿入・移動可能
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                <div>
                  <strong className="text-white">図形:</strong> 矩形、円、直線、矢印を描画
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🎨</span>
              <h2 className="text-2xl font-bold text-white">カスタマイズ可能</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                豊富なカラーパレット
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                線の太さ調整（1〜20pt）
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                透明度設定
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                フォントサイズ変更
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">⚡️</span>
              <h2 className="text-2xl font-bold text-white">リアルタイム描画</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                ペンやハイライトを描きながら即座に反映
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                カーソルプレビューで線の太さを確認
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                図形描画時のプレビュー表示
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 mb-16 border border-orange-500/30">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">🌟 プレミアム機能</h2>
          <p className="text-gray-300 text-center mb-6">
            広告を視聴することで、24時間すべての機能が使えます
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🖍️</div>
              <p className="text-white font-semibold">ハイライト</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🔷</div>
              <p className="text-white font-semibold">図形描画</p>
              <p className="text-sm text-gray-400">矩形、円、直線、矢印</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🎨</div>
              <p className="text-white font-semibold">バケツ塗り</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">こんな方におすすめ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-orange-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">PDFに手書きでメモを取りたい方</p>
            </div>
            <div className="flex items-start">
              <span className="text-orange-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">契約書に署名を追加したい方</p>
            </div>
            <div className="flex items-start">
              <span className="text-orange-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">資料に注釈を入れたい学生や社会人</p>
            </div>
            <div className="flex items-start">
              <span className="text-orange-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">PDFを視覚的に編集したい方</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link 
            href="/night-pdf/specs" 
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/60 transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-white mb-2">仕様詳細</h3>
            <p className="text-gray-300 text-sm">アプリの詳しい機能と仕様</p>
          </Link>

          <Link 
            href="/night-pdf/terms" 
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/60 transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">📜</div>
            <h3 className="text-xl font-bold text-white mb-2">利用規約</h3>
            <p className="text-gray-300 text-sm">サービス利用に関する規約</p>
          </Link>

          <Link 
            href="/night-pdf/support" 
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/60 transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">サポート</h3>
            <p className="text-gray-300 text-sm">よくある質問とお問い合わせ</p>
          </Link>

          <Link 
            href="/night-pdf/privacy" 
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/60 transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-bold text-white mb-2">プライバシーポリシー</h3>
            <p className="text-gray-300 text-sm">個人情報の取り扱いについて</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
