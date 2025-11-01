import Layout from "../../components/Layout";

export default function NightAfterbackSupport() {
  return (
    <Layout 
      title="Nightアフターバック - サポート" 
      description="よくある質問と問い合わせ先"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">❓ よくある質問（FAQ）</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">基本的な使い方</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q1. 手数料はどのように記録しますか？</h4>
                  <p className="text-gray-300">A1. 「+」ボタンから新規記録画面を開き、支払先・金額・期限を入力して保存してください。</p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q2. 手数料のカテゴリ分けはできますか？</h4>
                  <p className="text-gray-300">A3. いいえ</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 mt-8">データ管理</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q3. データはどこに保存されますか？</h4>
                  <p className="text-gray-300">A4. 基本版はデバイス内、プレミアム版はiCloudにもバックアップされます。</p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q4. 機種変更時のデータ移行は？</h4>
                  <p className="text-gray-300">A5. プレミアム版を利用すれば、新しいデバイスで復元できます。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 mt-8">料金・サブスクリプション</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q5. プレミアム版の料金は？</h4>
                  <p className="text-gray-300">A6. 月額480円です。</p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q6. 解約方法は？</h4>
                  <p className="text-gray-300">A7. 設定アプリ → Apple ID → サブスクリプション → Night AfteBackで解約できます。</p>
                </div>
              </div>
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
        </section>        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">お問い合わせ</h2>
          
          <div className="text-gray-300 space-y-4">
            <p>
              その他のご質問やサポートが必要な場合は、以下の連絡先までお気軽にお問い合わせください。
            </p>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">連絡先</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-white font-medium">Email:</span>{" "}
                  <a href="mailto:app@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                    app@liv-jpn.com
                  </a>
                </p>
                <p>
                  <span className="text-white font-medium">開発者:</span> UTSUNO HIDETA
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  ※ お問い合わせいただいた内容には、3営業日以内に返信いたします。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
