import Layout from "../../components/Layout";

export const metadata = {
  title: "仕様詳細 - Girls Back",
};

export default function GirlsBackSpecsPage() {
  return (
    <Layout title="Girls Back - 仕様詳細" description="Girls Backの機能仕様">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">仕様詳細</h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">動作環境</h3>
              <div className="bg-white/5 rounded-xl p-4 space-y-2 text-gray-300 text-sm">
                <div className="flex justify-between"><span>対応OS</span><span className="text-white">iOS 13.0以上</span></div>
                <div className="flex justify-between"><span>対応デバイス</span><span className="text-white">iPhone</span></div>
                <div className="flex justify-between"><span>価格</span><span className="text-white">無料</span></div>
                <div className="flex justify-between"><span>言語</span><span className="text-white">日本語</span></div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">機能一覧</h3>
              <div className="space-y-3">
                {[
                  { icon: "🔐", title: "パスコードロック", desc: "4桁数字でアプリを保護。初回起動時にパスコードを設定します。" },
                  { icon: "🏠", title: "ホーム画面", desc: "月別合計・未収金・前月比・過去6ヶ月グラフ・直近10件履歴を1画面で表示。" },
                  { icon: "✏️", title: "バック登録", desc: "日付・店舗・支払金額合計・小計・バック金額・同行者・メモを入力して記録。" },
                  { icon: "📋", title: "バック一覧", desc: "月別表示。未収（赤）・回収済（緑）・回収不可（グレー）を色分け。詳細タップでステータス変更可。" },
                  { icon: "🏪", title: "店舗管理", desc: "店舗名・担当者・連絡先（複数）・LINE（複数）・住所・バック率を登録。回収不可店舗は赤表示。" },
                  { icon: "⚠️", title: "未収一覧", desc: "ホーム画面の「詳細」から未収の一覧を表示。回収済・回収不可への操作が可能。" },
                  { icon: "💾", title: "ローカルバックアップ", desc: "設定画面からデータをデバイスに保存。機種変更時の引き継ぎに対応。" },
                ].map((f) => (
                  <div key={f.title} className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-1">{f.icon} {f.title}</h4>
                    <p className="text-gray-300 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">データ保存</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                すべてのデータはデバイスのローカルストレージ（SharedPreferences）に保存されます。
                外部サーバーへの通信は一切行いません。アプリのアンインストール時にデータは削除されますので、
                事前にバックアップ機能のご利用をお勧めします。
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
