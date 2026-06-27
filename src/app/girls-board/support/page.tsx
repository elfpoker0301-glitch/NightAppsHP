import Layout from "../../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "サポート - Girls Board",
};

export default function GirlsBoardSupportPage() {
  return (
    <Layout title="Girls Board - サポート" description="Girls Boardのサポートページ">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">サポート</h2>
          <div className="space-y-6 text-gray-300">
            <section>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">よくある質問</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. データはどこに保存されますか？</p>
                  <p className="text-sm">すべてのデータはお使いのデバイス内にのみ保存されます。外部サーバーへの送信は行いません。</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. 機種変更時にデータを移行できますか？</p>
                  <p className="text-sm">設定画面の「バックアップを書き出す」でファイルを保存し、新しい端末で「バックアップから復元する」を使うことでデータを引き継げます。</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. 在籍店舗を削除すると来店履歴も消えますか？</p>
                  <p className="text-sm">店舗を削除しても、すでに登録済みの来店履歴は残ります。</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. 広告を非表示にできますか？</p>
                  <p className="text-sm">設定画面から広告動画を視聴することで、一定時間広告を非表示にできます。</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-white mb-4">お問い合わせ</h3>
          <p className="text-gray-300 mb-4">上記で解決しない場合は、お問い合わせフォームよりご連絡ください。</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-3 px-8 rounded-xl hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 font-semibold"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </div>
    </Layout>
  );
}
