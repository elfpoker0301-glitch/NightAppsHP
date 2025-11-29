import Link from "next/link";
import Layout from "../../components/Layout";

export const metadata = {
  title: "仕様 - Night Dice | NightApp",
  description: "Night Diceの技術仕様と機能詳細。対応OS、システム要件、ゲーム機能について。",
};

export default function NightDiceSpecsPage() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Night Dice 仕様
        </h1>
        <p className="text-xl text-gray-300">
          技術仕様と機能詳細
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">📱</span>
            基本情報
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p className="text-emerald-400 font-semibold mb-2">アプリ名</p>
              <p>Night Dice - チンチロゲーム</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">カテゴリ</p>
              <p>ゲーム（ボードゲーム）</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">対応OS</p>
              <p>iOS 14.0以降</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">年齢制限</p>
              <p>12歳以上（ギャンブルのシミュレーション）</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">価格</p>
              <p>無料（広告表示あり）</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">言語</p>
              <p>日本語、英語</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🎮</span>
            ゲーム機能
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">プレイヤー設定</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>2人〜8人まで対応</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>プレイヤー名のカスタマイズ可能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>参加人数の自由な設定</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">ゲームプレイ</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>伝統的なチンチロルール</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>3つのサイコロを使用</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>役の自動判定機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>スコア管理機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>ターン制のゲーム進行</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">ビジュアル・サウンド</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>美しいダイスアニメーション</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>リアルなサイコロの物理演算</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>直感的なUI/UXデザイン</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>エフェクト表示</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">その他の機能</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>ヘルプ・ルール説明</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>ゲーム設定のリセット機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>広告表示（AdMob）</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">⚙️</span>
            技術仕様
          </h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="text-emerald-400 font-semibold mb-2">開発環境</p>
              <p>SwiftUI / Xcode</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">プログラミング言語</p>
              <p>Swift</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">広告プラットフォーム</p>
              <p>Google AdMob</p>
            </div>
            <div>
              <p className="text-emerald-400 font-semibold mb-2">データストレージ</p>
              <p>ローカルストレージ（デバイス内）</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">💾</span>
            システム要件
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="font-semibold text-white mb-2">推奨環境</p>
              <ul className="space-y-1 text-sm">
                <li>• iOS 14.0以降</li>
                <li>• iPhone 8以降のモデル</li>
                <li>• 安定したインターネット接続（広告表示のため）</li>
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
