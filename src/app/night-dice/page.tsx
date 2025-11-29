import Link from "next/link";
import Layout from "../components/Layout";

export const metadata = {
  title: "Night Dice - チンチロゲーム | NightApp",
  description: "2〜8人で楽しむ伝統的なサイコロゲーム。友達や家族との集まりに最適なパーティーゲームアプリ。",
  keywords: "チンチロ,サイコロ,ダイス,パーティーゲーム,対戦,マルチプレイヤー,Night Dice",
  openGraph: {
    title: "Night Dice - チンチロゲーム",
    description: "2〜8人で楽しむ伝統的なサイコロゲーム",
    url: "https://apps.liv-jpn.com/night-dice",
  },
};

export default function NightDicePage() {
  return (
    <Layout>
      <div className="text-center py-16">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-emerald-500/50">
            🎲
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Night Dice
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          2〜8人で楽しむ伝統的なサイコロゲーム
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🎯</span>
            ゲームの特徴
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">2人から8人まで対戦可能</p>
                <p className="text-sm text-gray-400">友達や家族みんなで楽しめる</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">シンプルで分かりやすいルール</p>
                <p className="text-sm text-gray-400">誰でもすぐに始められる</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">美しいダイスアニメーション</p>
                <p className="text-sm text-gray-400">リアルなサイコロの動きを再現</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">直感的な操作性</p>
                <p className="text-sm text-gray-400">タップするだけで簡単プレイ</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🎮</span>
            遊び方
          </h2>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              サイコロを3つ振って、出た目で勝負！伝統的なチンチロのルールで、役の強さを競い合います。
            </p>
            <div className="bg-white/5 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-emerald-400">強い役の例：</p>
              <ul className="text-sm space-y-1 text-gray-400">
                <li>• ピンゾロ（1のゾロ目）</li>
                <li>• その他のゾロ目</li>
                <li>• シゴロ（4・5・6）</li>
                <li>• 目（2つ同じ数字 + 1つ違う数字）</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <section className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">✨</span>
            こんな時におすすめ
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-semibold text-white">友達との集まりやパーティーで</p>
                <p className="text-sm text-gray-400">盛り上がること間違いなし</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <div>
                <p className="font-semibold text-white">家族団らんの時間に</p>
                <p className="text-sm text-gray-400">世代を超えて楽しめる</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⏰</span>
              <div>
                <p className="font-semibold text-white">待ち時間の暇つぶしに</p>
                <p className="text-sm text-gray-400">短時間でサクッとプレイ</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎲</span>
              <div>
                <p className="font-semibold text-white">ゲーム好きな仲間と</p>
                <p className="text-sm text-gray-400">伝統ゲームの奥深さを堪能</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            娯楽目的のゲームアプリです
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Night Diceは純粋に娯楽を目的としたサイコロゲームアプリです。実際の金銭の授受は一切行いません。
            <br />
            実際の賭博行為を推奨・助長するものではありません。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/night-dice/specs"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-500 transition-all hover:scale-105 text-center group"
          >
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              仕様
            </h3>
            <p className="text-sm text-gray-400">
              詳細な機能と技術仕様
            </p>
          </Link>

          <Link
            href="/night-dice/support"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-500 transition-all hover:scale-105 text-center group"
          >
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              サポート
            </h3>
            <p className="text-sm text-gray-400">
              よくある質問とお問い合わせ
            </p>
          </Link>

          <Link
            href="/night-dice/terms"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-500 transition-all hover:scale-105 text-center group"
          >
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              利用規約
            </h3>
            <p className="text-sm text-gray-400">
              ご利用前にご確認ください
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
