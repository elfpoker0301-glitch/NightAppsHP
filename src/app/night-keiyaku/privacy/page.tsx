import Layout from "../../components/Layout";

export default function NightKeiyakuPrivacy() {
  return (
    <Layout 
      title="Night契約書 - プライバシーポリシー" 
      description="個人情報の取り扱いについて"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔒 プライバシーポリシー</h2>
          <p className="text-gray-300">
            Night契約書（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📋 収集する情報</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">収集する情報</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>契約書データ（テキスト、署名、日付など）</li>
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
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">💾 データの保存</h2>
          <div className="text-gray-300 space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">ローカル保存</h3>
              <p>契約書データは端末内に暗号化されて保存されます。</p>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">クラウド同期（プレミアム機能）</h3>
              <p>プレミアム機能を利用する場合、iCloudまたはGoogle Driveに同期されます。</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🛡️ 情報の利用目的</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>アプリの機能提供</li>
            <li>サービスの改善</li>
            <li>サポート対応</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🚫 第三者提供</h2>
          <p className="text-gray-300">
            契約書データを第三者に提供することはありません。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📊 広告の利用（Google AdMob）</h2>
          <div className="text-gray-300 space-y-4">
            <p>本アプリは、Google AdMobを使用して広告を表示します。</p>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">AdMobが収集する情報</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>広告ID</li>
                <li>デバイス情報</li>
                <li>アクセスログ</li>
              </ul>
              <p className="mt-4">
                詳細は
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-200 transition-colors ml-1"
                >
                  Googleのプライバシーポリシー
                </a>
                をご確認ください。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔐 セキュリティ</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>データは暗号化されて保存されます。</li>
            <li>通信はSSL/TLSで保護されます。</li>
          </ul>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🗑️ データの削除</h2>
          <p className="text-gray-300">
            アプリをアンインストールすることで、端末内のデータはすべて削除されます。
            クラウドに同期されたデータは、設定から削除できます。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔄 ポリシーの変更</h2>
          <p className="text-gray-300">
            本ポリシーは予告なく変更される場合があります。変更内容はアプリ内でお知らせします。
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📩 お問い合わせ</h2>
          <div className="text-gray-300 space-y-4">
            <p>プライバシーに関するお問い合わせは以下までご連絡ください。</p>
            <div className="bg-white/5 rounded-lg p-6">
              <p><strong className="text-white">開発者：</strong>HIDETA UTSUNO</p>
              <p className="mt-2">
                <strong className="text-white">Email：</strong>
                <a href="mailto:support@liv-jpn.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                  SUPPORT@LIV-JPN.COM
                </a>
              </p>
              <p className="mt-4 pt-4 border-t border-white/10">
                <strong className="text-white">制定日：</strong>2025年8月29日
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
