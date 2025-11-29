import Link from "next/link";
import Layout from "../../components/Layout";

export const metadata = {
  title: "サポート - Night Dice | NightApp",
  description: "Night Diceのよくある質問、トラブルシューティング、お問い合わせ方法について。",
};

export default function NightDiceSupportPage() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Night Dice サポート
        </h1>
        <p className="text-xl text-gray-300">
          よくある質問とお問い合わせ
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">❓</span>
            よくある質問
          </h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. 何人でプレイできますか？
              </h3>
              <p className="text-gray-300">
                A. 2人から8人まで対応しています。ゲーム開始時に参加人数を設定できます。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. チンチロのルールがわかりません
              </h3>
              <p className="text-gray-300">
                A. アプリ内の「ヘルプ」ボタンから詳細なルール説明をご覧いただけます。基本的には3つのサイコロを振り、役の強さで勝負します。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. 実際のお金は必要ですか？
              </h3>
              <p className="text-gray-300">
                A. いいえ、Night Diceは完全無料の娯楽アプリです。実際の金銭の授受は一切ありません。広告表示により無料で提供しています。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. プレイヤー名は変更できますか？
              </h3>
              <p className="text-gray-300">
                A. はい、ゲーム開始前の設定画面で各プレイヤーの名前をカスタマイズできます。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. オフラインでもプレイできますか？
              </h3>
              <p className="text-gray-300">
                A. ゲーム自体はオフラインでプレイ可能ですが、広告表示のためにインターネット接続を推奨します。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. 途中でゲームをやり直せますか？
              </h3>
              <p className="text-gray-300">
                A. はい、設定メニューからゲームをリセットして新しいゲームを始められます。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. 広告を非表示にできますか？
              </h3>
              <p className="text-gray-300">
                A. 現在のバージョンでは広告非表示機能は提供しておりません。今後のアップデートで検討させていただきます。
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                Q. データは保存されますか？
              </h3>
              <p className="text-gray-300">
                A. ゲーム設定やプレイヤー名はデバイス内に保存されます。クラウドには保存されません。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🔧</span>
            トラブルシューティング
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                アプリが起動しない場合
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">1.</span>
                  <span>デバイスを再起動してください</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">2.</span>
                  <span>iOSが最新版かご確認ください</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">3.</span>
                  <span>アプリを再インストールしてください</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                サイコロが表示されない場合
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">1.</span>
                  <span>アプリを一度終了して再度起動してください</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">2.</span>
                  <span>デバイスのメモリ容量をご確認ください</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">
                広告が表示されない場合
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">1.</span>
                  <span>インターネット接続を確認してください</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">2.</span>
                  <span>時間を置いて再度お試しください</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">📧</span>
            お問い合わせ
          </h2>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              上記で解決しない問題やご質問がございましたら、以下のメールアドレスまでお気軽にお問い合わせください。
            </p>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-emerald-400 font-semibold mb-3">サポート窓口</p>
              <p className="mb-2">
                <span className="text-white font-semibold">Email:</span>{" "}
                <a
                  href="mailto:support@liv-jpn.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  support@liv-jpn.com
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-4">
                営業時間: 平日 9:00 - 18:00（土日祝日を除く）
                <br />
                ※ お問い合わせへの返信には数日かかる場合がございます
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-sm">
              <p className="text-emerald-400 font-semibold mb-2">お問い合わせの際は以下の情報をご記載ください：</p>
              <ul className="space-y-1 text-gray-400">
                <li>• お使いのデバイス（例: iPhone 13）</li>
                <li>• iOSのバージョン</li>
                <li>• 問題の詳細な説明</li>
                <li>• スクリーンショット（該当する場合）</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center pt-8">
          <Link
            href="/night-dice"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-8 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
          >
            ← Night Diceトップに戻る
          </Link>
        </div>
      </div>
    </Layout>
  );
}
