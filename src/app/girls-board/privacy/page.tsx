import Layout from "../../components/Layout";

export const metadata = {
  title: "プライバシーポリシー - Girls Board",
};

export default function GirlsBoardPrivacyPage() {
  return (
    <Layout title="Girls Board - プライバシーポリシー" description="Girls Boardのプライバシーポリシー">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">プライバシーポリシー</h2>
          <p className="text-gray-400 text-sm mb-8">最終更新日：2026年6月28日</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-white mb-3">1. 収集する情報</h3>
              <p>Girls Board（以下「本アプリ」）は、ユーザーが入力する顧客情報（名前・連絡先・誕生日・来店履歴等）を外部サーバーへ送信することはありません。これらのデータはデバイス内にのみ保存されます。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">2. データの保存場所</h3>
              <p>本アプリが扱う顧客データはユーザーのデバイスのローカルストレージにのみ保存されます。クラウドへの同期や外部への送信は行いません。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">3. 広告の配信について</h3>
              <p>本アプリはGoogle AdMobを使用して広告を配信しています。AdMobは広告のパーソナライズや効果測定のため、広告識別子（IDFA）などの情報を収集する場合があります。初回起動時に表示されるApp Tracking Transparency（ATT）のダイアログでトラッキングの許可・拒否を選択できます。詳細はGoogleのプライバシーポリシー（https://policies.google.com/privacy）をご確認ください。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">4. 第三者への提供</h3>
              <p>顧客データを第三者に提供・販売・共有することは一切ありません。</p>
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
