import Layout from "../../components/Layout";

export const metadata = {
  title: "サポート - 子供クエスト | NightApp",
  description: "子供クエストのよくある質問、トラブルシューティング、お問い合わせ方法について。",
};

export default function KodomoQuestSupportPage() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          子供クエスト サポート
        </h1>
        <p className="text-xl text-gray-300">
          よくある質問とお問い合わせ
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">❓</span>
            よくある質問
          </h2>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Q. クエストの承認はどうすればいいですか？
              </h3>
              <p className="text-gray-300">
                A. 歯車ボタンから親の管理画面（暗証番号が必要）にアクセスし、「かくにんしてね」セクションから承認できます。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Q. 暗証番号を忘れてしまいました
              </h3>
              <p className="text-gray-300">
                A. 現在のバージョンでは暗証番号のリセット機能がありません。アプリを削除して再インストールすることでリセットできます（データは消えます）。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Q. 子供を複数人登録できますか？
              </h3>
              <p className="text-gray-300">
                A. はい、管理画面の「こどもをふやす」から複数の子供を登録できます。それぞれ個別のクエストとポイントを管理できます。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Q. ポイントを手動で調整できますか？
              </h3>
              <p className="text-gray-300">
                A. はい、管理画面の「ポイント」セクションからステッパーを使ってポイントを手動で増減できます。
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Q. キャラクターはどうやって成長しますか？
              </h3>
              <p className="text-gray-300">
                A. ポイントが貯まるにつれてキャラクターが成長します。たまご→ひな→こども→おとな→スーパーの5段階で成長していきます。
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Q. データはどこに保存されますか？
              </h3>
              <p className="text-gray-300">
                A. すべてのデータはお使いのデバイスにのみ保存されます。クラウドへのアップロードは行いません。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">✉️</span>
            お問い合わせ
          </h2>
          <p className="text-gray-300 mb-4">
            上記で解決しない場合は、以下のメールアドレスまでお問い合わせください。
          </p>
          <a
            href="mailto:utsuno.liv@gmail.com"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors text-lg font-semibold"
          >
            📧 utsuno.liv@gmail.com
          </a>
        </section>
      </div>
    </Layout>
  );
}
