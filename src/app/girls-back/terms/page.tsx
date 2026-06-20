import Layout from "../../components/Layout";

export const metadata = {
  title: "利用規約 - Girls Back",
};

export default function GirlsBackTermsPage() {
  return (
    <Layout title="Girls Back - 利用規約" description="Girls Backの利用規約">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">利用規約</h2>
          <p className="text-gray-400 text-sm mb-8">最終更新日：2025年6月20日</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h3 className="text-lg font-semibold text-white mb-3">第1条（適用）</h3>
              <p>本規約は、Girls Back（以下「本アプリ」）の利用に関して適用されます。本アプリをダウンロード・使用することで、本規約に同意したものとみなします。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">第2条（利用目的）</h3>
              <p>本アプリはアフターバック収入の個人管理を目的としています。違法な目的または第三者に損害を与える目的での使用を禁止します。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">第3条（免責事項）</h3>
              <p>本アプリの利用によって生じたいかなる損害についても、開発者は責任を負いません。データの管理・バックアップはユーザー自身の責任で行ってください。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">第4条（データの取り扱い）</h3>
              <p>本アプリ内のデータはすべてデバイスローカルに保存されます。アプリのアンインストールによりデータは削除されます。事前にバックアップを行うことを推奨します。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">第5条（規約の変更）</h3>
              <p>本規約は予告なく変更される場合があります。変更後の規約はアプリ更新後の初回起動時より適用されます。</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">第6条（準拠法）</h3>
              <p>本規約は日本法に準拠し、解釈されるものとします。</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
