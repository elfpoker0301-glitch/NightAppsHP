import Layout from "../../components/Layout";

export default function NightKeiyakuSupport() {
  return (
    <Layout 
      title="Night契約書 - サポート" 
      description="よくある質問と問い合わせ先"
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
              <h3 className="text-lg font-semibold text-white mb-2">Q: 契約書が保存できません。</h3>
              <p className="text-gray-300">A: 端末のストレージ容量を確認し、不要データを削除してください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: PDF出力でエラーが発生します。</h3>
              <p className="text-gray-300">A: アプリを一度終了し、再度お試しください。改善しない場合はお問い合わせください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: データが消えてしまいました。</h3>
              <p className="text-gray-300">A: バックアップ機能から復元をお試しください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 署名機能が反応しません。</h3>
              <p className="text-gray-300">A: 端末のタッチ機能が有効か確認してください。</p>
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
                <li>不要なデータを削除する</li>
                <li>デバイスを再起動する</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">同期できない場合</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>ネットワーク接続を確認</li>
                <li>アカウント情報を再入力</li>
                <li>アプリを最新バージョンに更新</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>
          
          <div className="text-gray-300 space-y-4">
            <ul className="space-y-2">
              <li><strong className="text-white">メール：</strong><a href="mailto:support@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">support@liv-jpn.com</a></li>
              <li><strong className="text-white">アプリ内：</strong>「設定 ＞ お問い合わせ」から送信可能</li>
              <li><strong className="text-white">対応時間：</strong>平日 9:00〜18:00</li>
              <li><strong className="text-white">回答目安：</strong>24時間以内</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
