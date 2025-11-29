import Link from "next/link";
import Layout from "../../components/Layout";

export const metadata = {
  title: "利用規約 - Night Dice | NightApp",
  description: "Night Diceの利用規約。アプリをご利用いただく前に必ずお読みください。",
};

export default function NightDiceTermsPage() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          利用規約
        </h1>
        <p className="text-xl text-gray-300">
          Terms of Service
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
              本利用規約（以下「本規約」）は、Night Dice（以下「本アプリ」）の利用条件を定めるものです。本アプリをご利用いただく前に、本規約をよくお読みください。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. 利用許諾</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本アプリの利用者は、本規約に同意した上で、本アプリを利用できるものとします。本アプリのダウンロードまたは利用をもって、本規約に同意したものとみなされます。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. ゲームの性質</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              本アプリは娯楽目的のサイコロゲーム（チンチロ）です。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li>実際の金銭の授受は一切行いません</li>
              <li>ゲーム内での勝敗は娯楽目的のみです</li>
              <li>実際の賭博行為を推奨・助長するものではありません</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">4. 禁止事項</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              利用者は、以下の行為を行ってはならないものとします：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li>本アプリを実際の賭博行為に使用すること</li>
              <li>本アプリを不正な目的で使用すること</li>
              <li>本アプリの改変、リバースエンジニアリング</li>
              <li>他者の権利を侵害する行為</li>
              <li>法令または公序良俗に反する行為</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. 年齢制限</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本アプリは12歳以上の方を対象としています。12歳未満の方は保護者の同意を得た上でご利用ください。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. 免責事項</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li>本アプリは「現状のまま」提供されます</li>
              <li>開発者は、本アプリの動作について一切の保証を行いません</li>
              <li>本アプリの利用により生じたいかなる損害についても、開発者は責任を負いません</li>
              <li>本アプリの内容は予告なく変更または終了する場合があります</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">7. 知的財産権</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本アプリに関する著作権、商標権、その他の知的財産権は、開発者または正当な権利者に帰属します。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. プライバシー</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              個人情報の取り扱いについては、別途{" "}
              <Link href="/night-dice/privacy" className="text-emerald-400 hover:text-emerald-300 underline">
                プライバシーポリシー
              </Link>
              をご確認ください。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. 広告の表示</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本アプリは、Google AdMobを通じて広告を表示します。広告の内容や表示頻度は予告なく変更される場合があります。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">10. 規約の変更</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              開発者は、必要に応じて本規約を変更することができます。変更後の規約は、本ページに掲載された時点で効力を生じるものとします。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">11. 準拠法</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              本規約は日本国の法律に準拠するものとします。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">12. お問い合わせ</h2>
            <p className="text-gray-300 leading-relaxed">
              本規約に関するご質問は、以下までお問い合わせください：
            </p>
            <div className="bg-white/5 rounded-lg p-4 mt-3">
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
