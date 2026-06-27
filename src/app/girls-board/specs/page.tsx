import Layout from "../../components/Layout";

export const metadata = {
  title: "仕様詳細 - Girls Board",
};

export default function GirlsBoardSpecsPage() {
  return (
    <Layout title="Girls Board - 仕様詳細" description="Girls Boardの機能仕様">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">仕様詳細</h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">動作環境</h3>
              <div className="bg-white/5 rounded-xl p-4 space-y-2 text-gray-300 text-sm">
                <div className="flex justify-between"><span>対応OS</span><span className="text-white">iOS 13.0以上</span></div>
                <div className="flex justify-between"><span>対応デバイス</span><span className="text-white">iPhone</span></div>
                <div className="flex justify-between"><span>価格</span><span className="text-white">無料（広告あり）</span></div>
                <div className="flex justify-between"><span>言語</span><span className="text-white">日本語</span></div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">機能一覧</h3>
              <div className="space-y-3">
                {[
                  { icon: "🏠", title: "ダッシュボード", desc: "指名客数・1/3/6ヶ月未来店客・誕生日客（前後2ヶ月）・要注意客リスト・NG客リストを一覧表示。タップで詳細一覧へ。" },
                  { icon: "👥", title: "客一覧", desc: "名前順・来店順・来店回数順のソートと、名前・ふりがな・あだ名での検索に対応。" },
                  { icon: "✏️", title: "客登録・詳細編集", desc: "名前・ふりがな・あだ名・電話番号・職業・会社名・LINE名・インスタ・住所・誕生日・血液型・趣味・メモ等を登録。" },
                  { icon: "📅", title: "来店履歴管理", desc: "在籍店舗・来店日・新規/同伴/来店/その他の種別・売上・人数を複数登録。編集・削除に対応。" },
                  { icon: "🏪", title: "在籍店舗登録", desc: "複数の在籍店舗を登録し、来店履歴入力時にプルダウンで選択できます。" },
                  { icon: "💾", title: "ローカルバックアップ", desc: "設定画面からデータをデバイスに保存・復元。機種変更時の引き継ぎに対応。" },
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
                すべてのデータはデバイスのローカルストレージに保存されます。
                外部サーバーへの通信は行いません。アプリのアンインストール時にデータは削除されますので、
                事前にバックアップ機能のご利用をお勧めします。
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
