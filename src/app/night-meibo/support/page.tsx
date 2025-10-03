import Layout from "../../components/Layout";

export default function NightMeiboSupport() {
  return (
    <Layout 
      title="Night名簿帳 - サポート" 
      description="Night名簿帳に関するサポート情報"
    >
      <div className="max-w-4xl mx-auto">
        {/* FAQ Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">よくある質問</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Q: データのバックアップ方法を教えてください</h3>
              <p className="text-gray-300">A: 設定画面から「データバックアップ」を選択し、クラウドストレージへの自動バックアップを有効にできます。手動でのエクスポートも可能です。</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Q: 連絡先をインポートできますか？</h3>
              <p className="text-gray-300">A: はい。CSV形式、vCard形式でのインポートが可能です。既存の連絡先アプリからのデータ移行も簡単に行えます。</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Q: アプリを削除するとデータはどうなりますか？</h3>
              <p className="text-gray-300">A: ローカルデータは削除されますが、クラウドバックアップを有効にしていればデータは保持されます。再インストール後にデータを復元できます。</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Q: 複数デバイスでの同期は可能ですか？</h3>
              <p className="text-gray-300">A: はい。同じアカウントでログインすることで、複数のデバイス間でデータを同期できます。</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">お問い合わせ</h2>
          
          <div className="space-y-4 text-gray-300">
            <p>上記で解決しない問題やご質問がございましたら、以下の方法でお気軽にお問い合わせください。</p>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">📧 メールサポート</h3>
              <p className="mb-2">
                <a 
                  href="mailto:app@liv-jpn.com" 
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  app@liv-jpn.com
                </a>
              </p>
              <p className="text-sm text-gray-400">通常24時間以内に回答いたします</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">📞 営業時間</h3>
              <p>平日: 9:00 - 18:00</p>
              <p>土日祝日: 休業</p>
              <p className="text-sm text-gray-400 mt-2">※緊急時を除き、メールでのお問い合わせをお願いいたします</p>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">トラブルシューティング</h2>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">アプリが起動しない場合</h3>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>デバイスの再起動を試してください</li>
                <li>アプリを最新バージョンに更新してください</li>
                <li>十分な空き容量があることを確認してください</li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">同期が正常に動作しない場合</h3>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>インターネット接続を確認してください</li>
                <li>設定でクラウド同期が有効になっていることを確認してください</li>
                <li>アカウントの認証状態を確認してください</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}