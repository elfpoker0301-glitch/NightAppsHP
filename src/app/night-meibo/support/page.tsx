import Layout from "../../components/Layout";

export default function NightMeiboSupport() {
  return (
    <Layout 
      title="Night名簿帳 - サポート" 
      description="Night名簿帳に関するサポート情報"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">■ よくある質問</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">【プレミアムプランについて】</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q: プレミアムプランの料金は？</h4>
                  <p className="text-gray-300">A: 月額300円です。7日間の無料トライアルもご利用いただけます。</p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q: プレミアムプランの特典は？</h4>
                  <p className="text-gray-300">A: ・広告の完全非表示</p>
                  <p className="text-gray-300 pl-6">・データのバックアップ・復元機能</p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q: 解約方法は？</h4>
                  <p className="text-gray-300">A: iPhone/iPadの設定アプリ &gt; App Store &gt; サブスクリプション から管理できます。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 mt-8">【データについて】</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q: データは安全ですか？</h4>
                  <p className="text-gray-300">A: すべてのデータはお客様のデバイス内にのみ保存され、外部に送信されることはありません。</p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q: データのバックアップは？</h4>
                  <p className="text-gray-300">A: プレミアムプランにて、iCloudを利用したバックアップ機能をご利用いただけます。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 mt-8">【操作について】</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q: スタッフの写真が保存できません</h4>
                  <p className="text-gray-300">A: カメラ・フォトライブラリへのアクセス許可が必要です。設定アプリでアクセス許可をご確認ください。</p>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Q: PDFが出力できません</h4>
                  <p className="text-gray-300">A: iOS標準の共有機能を使用しています。他のアプリとの競合がある場合は、端末の再起動をお試しください。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>
          
          <div className="space-y-4 text-gray-300">
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