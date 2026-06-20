import Layout from "../../components/Layout";

export default function GomiNoHiSpecs() {
  return (
    <Layout
      title="ゴミの日！ - 仕様詳細"
      description="ゴミの日！の詳しい機能と仕様"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📋 基本概要</h2>
          <div className="space-y-4 text-gray-300">
            <p><strong className="text-white">アプリ名：</strong>ゴミの日！ - ゴミ収集日お知らせアプリ</p>
            <p><strong className="text-white">カテゴリ：</strong>ユーティリティ / ライフスタイル</p>
            <p><strong className="text-white">対応OS：</strong>iOS 17.0以降</p>
            <p><strong className="text-white">価格：</strong>無料</p>
            <p><strong className="text-white">開発者：</strong>HIDETA UTSUNO</p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🗑️ 主な機能</h2>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">1. かんたん地域設定</h3>
              <p className="text-gray-300 mb-3">
                都道府県・市区町村を選択するだけで、お住まいの地域のゴミ収集スケジュールが自動で設定されます。
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>都道府県・市区町村から選択</li>
                <li>地域が見つからない場合の手動設定</li>
                <li>複数の地区（自宅・実家・職場など）を登録・切り替え可能</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">2. 通知機能</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>収集日前日の通知</li>
                <li>収集日当日の通知</li>
                <li>ゴミ出し忘れを防止</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">3. ホーム画面ウィジェット</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>WidgetKitによるホーム画面ウィジェット表示</li>
                <li>アプリを開かずに今日・明日の収集予定を確認</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">4. シンプルな操作性</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>設定画面からいつでも地域変更が可能</li>
                <li>直感的でわかりやすいUI</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">⚙️ 技術仕様</h2>
          <div className="space-y-3 text-gray-300">
            <p><strong className="text-white">フレームワーク：</strong>SwiftUI</p>
            <p><strong className="text-white">ウィジェット：</strong>WidgetKit（App Groups対応）</p>
            <p><strong className="text-white">通知：</strong>UserNotifications</p>
            <p><strong className="text-white">データ保存：</strong>端末内ローカル保存</p>
            <p><strong className="text-white">広告：</strong>Google AdMob（Google Mobile Ads SDK）</p>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">💻 システム要件</h2>
          <div className="space-y-3 text-gray-300">
            <p><strong className="text-white">対応デバイス：</strong>iPhone、iPad</p>
            <p><strong className="text-white">iOS：</strong>17.0以降</p>
            <p><strong className="text-white">ストレージ：</strong>最小限の空き容量で動作</p>
            <p><strong className="text-white">ネットワーク：</strong>広告表示のためインターネット接続が必要</p>
          </div>
          <div className="bg-green-500/20 rounded-lg p-4 mt-6">
            <p className="text-sm text-gray-300">
              ⚠️ <strong className="text-white">免責事項：</strong>
              本アプリは「現状有姿」で提供されます。収集日の最新情報は各自治体の公式情報をご確認ください。
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
