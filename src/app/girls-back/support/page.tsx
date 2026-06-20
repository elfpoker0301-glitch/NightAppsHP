import Layout from "../../components/Layout";
import Link from "next/link";

export const metadata = {
  title: "サポート - Girls Back",
};

export default function GirlsBackSupportPage() {
  return (
    <Layout title="Girls Back - サポート" description="Girls Backのサポートページ">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">サポート</h2>
          <div className="space-y-6 text-gray-300">
            <section>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">よくある質問</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. パスコードを忘れてしまいました</p>
                  <p className="text-sm">設定画面の「パスコードリセット」から新しいパスコードを設定できます。ただしリセット時にアプリへのアクセスが必要です。パスコードを完全に忘れた場合はアプリの再インストールが必要になりますのでご注意ください。</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. データはどこに保存されますか？</p>
                  <p className="text-sm">すべてのデータはお使いのデバイス内にのみ保存されます。外部サーバーへの送信は行いません。</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. 機種変更時にデータを移行できますか？</p>
                  <p className="text-sm">設定画面の「バックアップ」機能でローカルに保存し、「バックアップ引き継ぎ」で復元できます。（近日公開予定）</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Q. 店舗を削除するとバック記録も消えますか？</p>
                  <p className="text-sm">店舗を削除してもバック記録は残ります。ただし店舗名が更新されなくなります。</p>
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
