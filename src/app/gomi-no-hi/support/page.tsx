import Layout from "../../components/Layout";

export default function GomiNoHiSupport() {
  return (
    <Layout
      title="ゴミの日！ - サポート"
      description="よくある質問とお問い合わせ"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">❓ よくある質問（FAQ）</h2>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 自分の地域が見つかりません。</h3>
              <p className="text-gray-300">A: 都道府県・市区町村の一覧に該当地域がない場合は、「地域が見つからない場合は手動設定」から収集日を直接設定してください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 収集日の通知が届きません。</h3>
              <p className="text-gray-300">A: 端末の「設定」→「通知」から本アプリの通知が許可されているかご確認ください。許可されていても、おやすみモード等の設定で通知が抑制される場合があります。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: ウィジェットが表示されません。</h3>
              <p className="text-gray-300">A: ホーム画面を長押し→「+」ボタンから「ゴミの日！」を検索して追加してください。追加後、しばらく時間をおくと最新の情報に更新されます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 収集日が自治体と違っています。</h3>
              <p className="text-gray-300">A: 自治体の収集日は変更される場合があります。手動設定でお住まいの地域の最新スケジュールに修正してください。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 引っ越しした場合はどうすればいいですか？</h3>
              <p className="text-gray-300">A: 設定画面から地域を変更するか、新しい地区を追加することで、複数の地域を切り替えて管理できます。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: 広告が表示されません。</h3>
              <p className="text-gray-300">A: インターネット接続を確認してください。広告の在庫状況により表示されない場合があります。</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Q: アプリが起動しません。</h3>
              <p className="text-gray-300">A: デバイスを再起動後、アプリを再インストールしてください。</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🚑 トラブルシューティング</h2>

          <div className="space-y-4 text-gray-300">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">通知が届かない場合</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>設定アプリで通知の許可状況を確認する</li>
                <li>端末を再起動する</li>
                <li>アプリを再インストールし、再度地域を設定する</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">ウィジェットが更新されない場合</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>一度ウィジェットを削除して再度追加する</li>
                <li>アプリ本体を開いて最新の状態に同期する</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">動作が重い場合</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>アプリを再起動する</li>
                <li>デバイスを再起動する</li>
                <li>他のアプリを終了してメモリを解放する</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>

          <div className="text-gray-300 space-y-4">
            <p>上記で解決しない場合は、以下の方法でお問い合わせください。</p>
            <ul className="space-y-2">
              <li><strong className="text-white">メール：</strong><a href="mailto:support@liv-jpn.com" className="text-green-300 hover:text-green-200 transition-colors">support@liv-jpn.com</a></li>
              <li><strong className="text-white">対応時間：</strong>平日 9:00〜18:00</li>
              <li><strong className="text-white">回答目安：</strong>24時間以内</li>
            </ul>
            <div className="bg-green-500/20 rounded-lg p-4 mt-6">
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
