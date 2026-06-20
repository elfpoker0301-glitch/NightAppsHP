import Layout from "../../components/Layout";

export const metadata = {
  title: "プライバシーポリシー - Girls Back",
};

export default function GirlsBackPrivacyPage() {
  return (
    <Layout title="Girls Back - プライバシーポリシー" description="Girls Backのプライバシーポリシー">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">プライバシーポリシー</h2>
          <p className="text-gray-400 text-sm mb-8">最終更新日：2025年6月20日</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-white mb-3">1. 収集する情報</h3>
              <p>Girls Back（以下「本アプリ」）は、外部サーバーへの個人情報の送信を一切行いません。ユーザーが入力するすべてのデータ（アフターバック記録・店舗情報等）はデバイス内にのみ保存されます。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">2. データの保存場所</h3>
              <p>本アプリが扱うすべてのデータはユーザーのデバイスのローカルストレージにのみ保存されます。クラウドへの同期や外部への送信は行いません。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">3. 第三者への提供</h3>
              <p>ユーザーのデータを第三者に提供・販売・共有することは一切ありません。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">4. セキュリティ</h3>
              <p>本アプリはパスコードロック機能を提供しています。パスコードはデバイス内にのみ保存され、外部に送信されることはありません。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">5. お問い合わせ</h3>
              <p>プライバシーに関するご質問は、サポートページよりお問い合わせください。</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
