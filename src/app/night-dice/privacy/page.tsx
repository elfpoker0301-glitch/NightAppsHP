import Link from "next/link";
import Layout from "../../components/Layout";

export const metadata = {
  title: "プライバシーポリシー - Night Dice | NightApp",
  description: "Night Diceのプライバシーポリシー。個人情報の取り扱いについて。",
};

export default function NightDicePrivacyPage() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          プライバシーポリシー
        </h1>
        <p className="text-xl text-gray-300">
          Privacy Policy
        </p>
        <p className="text-sm text-gray-400 mt-4">
          最終更新日: 2025年11月28日
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">1. はじめに</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Night Dice（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. 収集する情報</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本アプリは、以下の情報を収集する場合があります：
            </p>

            <h3 className="text-xl font-semibold text-emerald-400 mb-3">2.1 広告配信に関する情報</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              本アプリはGoogle AdMobを使用して広告を表示しています。AdMobは、広告配信の最適化のために以下の情報を収集する場合があります：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li>デバイス情報（デバイスの種類、OS、広告ID等）</li>
              <li>アプリの使用状況</li>
              <li>IPアドレス</li>
              <li>位置情報（概算）</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. 情報の利用目的</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              収集した情報は以下の目的で使用されます：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li>広告の配信と最適化</li>
              <li>アプリの改善とパフォーマンスの向上</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">4. 第三者への情報提供</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              本アプリは、Google AdMobを通じて広告配信サービスを利用しています。AdMobのプライバシーポリシーについては以下をご確認ください：
            </p>
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors break-all"
              >
                https://policies.google.com/privacy
              </a>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">5. データの保存</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本アプリ自体は、ユーザーの個人情報をサーバーに保存しません。ゲームの設定やプレイヤー名などは、デバイスのローカルストレージにのみ保存されます。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. お子様のプライバシー</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本アプリは13歳未満のお子様から意図的に個人情報を収集することはありません。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. データの削除</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              ローカルに保存されたデータを削除する方法：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li>アプリをアンインストールすることで、デバイスに保存されたすべてのデータが削除されます</li>
              <li>広告IDに関する設定は、デバイスの設定から変更できます</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">8. プライバシーポリシーの変更</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本プライバシーポリシーは、必要に応じて変更される場合があります。変更がある場合は、本ページにて通知いたします。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              プライバシーポリシーに関するご質問は、以下までお問い合わせください：
            </p>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-gray-300">
                Email:{" "}
                <a
                  href="mailto:support@liv-jpn.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  support@liv-jpn.com
                </a>
              </p>
              <p className="text-gray-300 mt-2">Developer: UTSUNO HIDETA</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30">
          <h2 className="text-xl font-bold text-white mb-4">
            広告IDについて
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            iOSデバイスで広告トラッキングを制限する方法：
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
            <li>「設定」アプリを開く</li>
            <li>「プライバシーとセキュリティ」をタップ</li>
            <li>「トラッキング」をタップ</li>
            <li>「Appからのトラッキング要求を許可」をオフにする</li>
          </ol>
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
