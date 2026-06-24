import Layout from "../../components/Layout";

export default function KodomoQuestPrivacy() {
  return (
    <Layout
      title="子供クエスト - プライバシーポリシー"
      description="個人情報の取り扱いについて"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔒 プライバシーポリシー</h2>
          <p className="text-gray-300">
            子供クエスト（以下「本アプリ」）は、お子様とご家族のプライバシーを尊重し、個人情報の保護に努めています。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📋 収集する情報</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">収集する情報</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>広告識別子（IDFA）- 広告配信のため（ATTにより許可された場合のみ）</li>
                <li>デバイス情報（機種、OSバージョン）</li>
                <li>利用統計データ（機能の利用頻度）</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">収集しない情報</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>氏名、住所、電話番号などの個人情報</li>
                <li>位置情報</li>
                <li>連絡先</li>
                <li>お子様が入力したプロフィール情報は端末内にのみ保存されます</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">👨‍👩‍👧 保護者向け機能</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">保護者用ロック（暗証番号）</h3>
              <p>
                クエストの管理やリワードの設定を行う「おうちの人」メニューには、4桁の暗証番号によるロックが設けられています。
                初期暗証番号は設定画面から変更できます。
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">広告表示について</h3>
              <p>
                本アプリは「おうちの人」メニュー内（保護者用ロックの先）でのみ広告を表示し、
                お子様が直接操作する画面では広告を表示しません。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">💾 データの保存</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">ローカル保存</h3>
              <p>お子様のプロフィールやクエストの進捗は、すべて端末内に保存されます。</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">クラウド保存</h3>
              <p>本アプリは、クラウド上にお子様のデータを保存しません。すべての処理は端末内で完結します。</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🛡️ 情報の利用目的</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>アプリの機能提供</li>
            <li>サービスの改善</li>
            <li>サポート対応</li>
            <li>保護者向けメニュー内での広告の表示と最適化</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">👶 子供のプライバシー</h2>
          <p className="text-gray-300">
            本アプリは13歳未満のお子様も利用対象としていますが、お子様から個人を特定できる情報を収集することはありません。
            広告は保護者用ロックの先にのみ表示され、お子様が直接広告に接触することはありません。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔄 ポリシーの変更</h2>
          <p className="text-gray-300">
            本ポリシーは予告なく変更される場合があります。変更内容はアプリ内またはウェブサイトでお知らせします。
            定期的に本ページを確認することをお勧めします。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>
          <div className="text-gray-300 space-y-4">
            <p>プライバシーに関するご質問は以下までご連絡ください。</p>
            <div className="bg-white/5 rounded-lg p-6">
              <p><strong className="text-white">開発者：</strong>HIDETA UTSUNO</p>
              <p className="mt-2">
                <strong className="text-white">Email：</strong>
                <a href="mailto:support@liv-jpn.com" className="text-orange-300 hover:text-orange-200 transition-colors">
                  support@liv-jpn.com
                </a>
              </p>
              <p className="mt-4 pt-4 border-t border-white/10">
                <strong className="text-white">最終更新日：</strong>2026年6月23日
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
