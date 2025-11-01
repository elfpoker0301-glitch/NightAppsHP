import Layout from "../../components/Layout";

export default function NightMeiboSpecs() {
  return (
    <Layout 
      title="Night名簿帳 - 仕様詳細" 
      description="機能と技術仕様について詳しくご説明します"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📝 基本概要</h2>
          <div className="text-gray-300 space-y-3">
            <p>Night名簿帳は、ナイト業界で働くスタッフの情報を効率的に管理するための専用アプリです。</p>
            <div className="bg-white/5 rounded-lg p-4 mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">対応環境</h3>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>iOS 12.0以降</li>
                <li>iPhone、iPad対応</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">開発者情報</h3>
              <p>開発者: HIDETA UTSUNO</p>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🔧 主な機能</h2>
          
          <div className="space-y-6 text-gray-300">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">📋 スタッフ管理</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>スタッフの基本情報登録（名前、年齢、連絡先等）</li>
                <li>身分証明書の写真撮影・保存</li>
                <li>勤務店舗の割り当て</li>
                <li>職位・ランクの設定</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">🏪 店舗管理</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>複数店舗の情報管理</li>
                <li>店舗別スタッフ配置</li>
                <li>店舗情報の編集・削除</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">📄 出力機能</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>PDF形式でのスタッフリスト出力</li>
                <li>Excel形式でのデータエクスポート</li>
                <li>印刷・共有機能</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">📱 写真管理</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>カメラ撮影・ギャラリー選択</li>
                <li>身分証明書の安全な保存</li>
                <li>写真の閲覧・削除</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">📊 技術仕様</h2>
          
          <div className="bg-white/5 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">プラットフォーム</h4>
                <p className="text-sm">iOS（iPhone・iPad対応）</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">開発環境</h4>
                <p className="text-sm">Flutter 3.32.8</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">対応OS</h4>
                <p className="text-sm">iOS 12.0以降</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">データベース</h4>
                <p className="text-sm">SQLite（ローカル）</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">広告</h4>
                <p className="text-sm">Google AdMob</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">課金</h4>
                <p className="text-sm">App Store In-App Purchase</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">🖥 システム要件</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
              <li>iOS：14.0以降</li>
              <li>macOS：11.0以降</li>
              <li>容量：50MB以上</li>
              <li>ネットワーク：インターネット接続必須（同期機能あり）</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}