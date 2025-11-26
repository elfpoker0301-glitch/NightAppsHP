import Layout from "../../components/Layout";

export default function NightPDFSupport() {
  return (
    <Layout 
      title="Night PDF - サポート" 
      description="よくある質問とお問い合わせ"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">❓ よくある質問（FAQ）</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: アプリが起動しません。</h3>
              <p className="text-gray-300">A: デバイスを再起動後、アプリを再インストールしてください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: PDFが保存できません。</h3>
              <p className="text-gray-300">A: 端末のストレージ容量を確認し、不要なデータを削除してください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: バケツ塗り機能が使えません。</h3>
              <p className="text-gray-300">A: プレミアム機能です。広告を視聴することで24時間利用可能になります。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 編集内容が保存されません。</h3>
              <p className="text-gray-300">A: 編集後、必ず保存ボタンをタップしてください。アプリを終了する前に保存を確認してください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 広告が表示されません。</h3>
              <p className="text-gray-300">A: インターネット接続を確認してください。広告の在庫状況により表示されない場合があります。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: ペンの太さを変更したい。</h3>
              <p className="text-gray-300">A: ツールメニューから線の太さを1〜20ptの範囲で調整できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: テキストの移動方法は？</h3>
              <p className="text-gray-300">A: テキストツールで追加したテキストは、長押しでドラッグして移動できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: データのバックアップはできますか？</h3>
              <p className="text-gray-300">A: 編集したPDFは端末内に保存されます。iCloudやその他のクラウドサービスに手動でバックアップすることをお勧めします。</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🚑 トラブルシューティング</h2>
          
          <div className="space-y-4 text-gray-300">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">動作が重い場合</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>アプリを再起動する</li>
                <li>大きなPDFファイルは処理に時間がかかる場合があります</li>
                <li>デバイスを再起動する</li>
                <li>他のアプリを終了してメモリを解放する</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">編集が反映されない場合</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>保存ボタンを確実にタップする</li>
                <li>アプリを一度終了して再起動する</li>
                <li>PDFファイルが読み取り専用になっていないか確認</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">広告が表示されない場合</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>インターネット接続を確認</li>
                <li>時間をおいて再度お試しください</li>
                <li>アプリを再起動する</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>上記で解決しない場合は、以下の方法でお問い合わせください。</p>
            <ul className="space-y-2">
              <li><strong className="text-white">メール：</strong><a href="mailto:support@liv-jpn.com" className="text-orange-300 hover:text-orange-200 transition-colors">support@liv-jpn.com</a></li>
              <li><strong className="text-white">対応時間：</strong>平日 9:00〜18:00</li>
              <li><strong className="text-white">回答目安：</strong>24時間以内</li>
            </ul>
            <div className="bg-orange-500/20 rounded-lg p-4 mt-6">
              <p className="text-sm">
                お問い合わせの際は、以下の情報をお知らせください：
              </p>
              <ul className="text-sm list-disc list-inside mt-2 ml-4">
                <li>デバイスのモデル（例：iPhone 15 Pro）</li>
                <li>iOSバージョン</li>
                <li>アプリのバージョン</li>
                <li>問題の詳細な説明</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
