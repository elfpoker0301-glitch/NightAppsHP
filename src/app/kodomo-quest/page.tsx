import Link from "next/link";
import Layout from "../components/Layout";

export const metadata = {
  title: "子供クエスト - こどものやる気を引き出すクエストアプリ | NightApp",
  description: "親がクエスト（お手伝い・宿題など）を作成し、子供が達成するとポイントがもらえる。貯めたポイントはごほうびと交換できる家族向けアプリ。",
  keywords: "子供,クエスト,お手伝い,ポイント,ごほうび,育児,習慣,タスク,家族,勉強",
  openGraph: {
    title: "子供クエスト - こどものやる気を引き出すクエストアプリ",
    description: "親がクエストを作成し、子供が達成するとポイントがもらえる家族向けアプリ",
    url: "https://apps.liv-jpn.com/kodomo-quest",
  },
};

export default function KodomoQuestPage() {
  return (
    <Layout>
      <div className="text-center py-16">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl flex items-center justify-center text-5xl shadow-2xl shadow-orange-500/50">
            ⭐
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          子供クエスト
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          こどものやる気を引き出す、家族みんなで楽しむクエストアプリ
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">🎯</span>
            アプリの特徴
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">クエストでやる気アップ</p>
                <p className="text-sm text-gray-400">お手伝いや宿題をゲーム感覚で楽しめる</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">ポイント制でごほうびをゲット</p>
                <p className="text-sm text-gray-400">達成するとポイントが貯まり、設定したごほうびと交換できる</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">可愛いキャラクターが成長</p>
                <p className="text-sm text-gray-400">たまごから育つキャラクターが一緒に成長していく</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">複数の子供に対応</p>
                <p className="text-sm text-gray-400">兄弟姉妹それぞれのクエストを管理できる</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-white">暗証番号で保護された管理画面</p>
                <p className="text-sm text-gray-400">親専用の管理画面で承認・ポイント管理ができる</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">📖</span>
            使い方
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-white">親がクエストを設定</p>
                <p className="text-sm text-gray-400">「お皿を洗う」「宿題をする」などのクエストとポイントを設定</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-white">子供がクエストに挑戦</p>
                <p className="text-sm text-gray-400">子供が達成したらアプリで報告</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-white">親が承認してポイント付与</p>
                <p className="text-sm text-gray-400">管理画面で確認・承認するとポイントが加算される</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">🎁</div>
              <div>
                <p className="font-semibold text-white">ごほうびと交換</p>
                <p className="text-sm text-gray-400">貯めたポイントで設定したごほうびをゲット！</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <section className="bg-gradient-to-br from-orange-900/50 to-yellow-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">✨</span>
            こんな家族におすすめ
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🧹</span>
              <div>
                <p className="font-semibold text-white">お手伝いをなかなかしてくれない</p>
                <p className="text-sm text-gray-400">ゲーム感覚で自発的に動くようになる</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-semibold text-white">宿題や勉強習慣をつけたい</p>
                <p className="text-sm text-gray-400">毎日のルーティンをクエスト化できる</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎮</span>
              <div>
                <p className="font-semibold text-white">子供がゲームが大好き</p>
                <p className="text-sm text-gray-400">現実のタスクをRPG風に楽しめる</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <div>
                <p className="font-semibold text-white">兄弟で一緒に頑張りたい</p>
                <p className="text-sm text-gray-400">複数の子供それぞれにクエストを設定できる</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <a
          href="https://apps.apple.com/jp/app/id6781513708"
          className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition-colors shadow-xl"
        >
          <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          App Storeからダウンロード
        </a>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/kodomo-quest/support"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 hover:border-orange-500 transition-all hover:scale-105 text-center group"
          >
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
              サポート
            </h3>
            <p className="text-sm text-gray-400">
              よくある質問とお問い合わせ
            </p>
          </Link>

          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 hover:border-orange-500 transition-all hover:scale-105 text-center group"
          >
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
              お問い合わせ
            </h3>
            <p className="text-sm text-gray-400">
              ご質問・ご要望はこちら
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
