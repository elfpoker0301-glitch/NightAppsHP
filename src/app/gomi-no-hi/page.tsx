import Link from "next/link";
import Layout from "../components/Layout";

export default function GomiNoHiPage() {
  return (
    <Layout
      title="ゴミの日！ - ゴミ収集日お知らせアプリ"
      description="地域を選ぶだけでゴミ収集日を管理できるシンプルなアプリ"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl mb-6">
            <span className="text-6xl">🗑️</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            ゴミの日！
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            地域を選ぶだけでゴミ収集日を管理
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            都道府県と市区町村を選択するだけで、お住まいの地域のゴミ収集日が自動で設定される、シンプルで使いやすいゴミ収集日お知らせアプリ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">📍</span>
              <h2 className="text-2xl font-bold text-white">かんたん地域設定</h2>
            </div>
            <p className="text-gray-300 mb-4">
              都道府県と市区町村を選ぶだけで、収集スケジュールが自動で設定されます。
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                都道府県・市区町村から選択
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                地域が見つからない場合は手動設定も可能
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                複数の地区を登録して切り替え可能
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🔔</span>
              <h2 className="text-2xl font-bold text-white">通知でお知らせ</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <div>
                  <strong className="text-white">前日通知:</strong> 収集日前日にお知らせ
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <div>
                  <strong className="text-white">当日通知:</strong> 収集日当日にもお知らせ
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <div>
                  <strong className="text-white">出し忘れ防止:</strong> 通知でゴミ出しを忘れない
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">📱</span>
              <h2 className="text-2xl font-bold text-white">ウィジェット対応</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                ホーム画面ウィジェットで一目で確認
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                アプリを開かずに今日・明日のゴミの種類がわかる
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">⚡️</span>
              <h2 className="text-2xl font-bold text-white">シンプル＆無料</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                無料で全機能を利用可能
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                迷わない直感的な操作性
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">こんな方におすすめ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">ゴミの収集日をよく忘れてしまう方</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">引っ越し先のゴミ出しルールを早く把握したい方</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">複数の地域のゴミ出し予定を管理したい方</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-400 text-xl mr-3">✓</span>
              <p className="text-gray-300">ウィジェットでさっと確認したい方</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <a
            href="https://apps.apple.com/jp/app/id6782357102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-10 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-green-500/50"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Storeでダウンロード
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/gomi-no-hi/specs"
            className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-500/60 transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-white mb-2">仕様詳細</h3>
            <p className="text-gray-300 text-sm">アプリの詳しい機能と仕様</p>
          </Link>

          <Link
            href="/gomi-no-hi/terms"
            className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-500/60 transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">📜</div>
            <h3 className="text-xl font-bold text-white mb-2">利用規約</h3>
            <p className="text-gray-300 text-sm">サービス利用に関する規約</p>
          </Link>

          <Link
            href="/gomi-no-hi/support"
            className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-500/60 transition-all transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-white mb-2">サポート</h3>
            <p className="text-gray-300 text-sm">よくある質問とお問い合わせ</p>
          </Link>

          <Link
            href="/gomi-no-hi/privacy"
            className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-500/60 transition-all transform hover:-translate-y-1"
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
