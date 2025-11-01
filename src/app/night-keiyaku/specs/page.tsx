import Layout from "../../components/Layout";

export default function NightKeiyakuSpecs() {
  return (
    <Layout 
      title="Night契約書 - 仕様詳細" 
      description="機能と技術仕様について詳しくご説明します"
    >
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📝 基本概要</h2>
          <div className="text-gray-300 space-y-3">
            <ul className="space-y-2">
              <li><strong className="text-white">アプリ名：</strong>Night契約書</li>
              <li><strong className="text-white">Bundle ID：</strong>com.nightcontract.app</li>
              <li><strong className="text-white">対応OS：</strong>iOS 14.0以降、macOS 11.0以降</li>
              <li><strong className="text-white">カテゴリ：</strong>ビジネス・効率化</li>
              <li><strong className="text-white">言語：</strong>日本語</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">⭐ 主な機能</h2>
          
          <div className="space-y-6 text-gray-300">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">1. 契約書作成</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">テンプレート選択：</strong>労働基準法に準拠した契約書テンプレート</li>
                <li><strong className="text-white">自動入力：</strong>会社情報・従業員情報をフォームから自動反映</li>
                <li><strong className="text-white">夜間労働特化：</strong>ナイトワークに合わせた条項をカスタマイズ可能</li>
                <li><strong className="text-white">リアルタイムプレビュー：</strong>作成中の契約書を即時確認</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">2. PDF出力・共有</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">高品質PDF生成：</strong>見やすいプロフェッショナルなレイアウト</li>
                <li><strong className="text-white">署名機能：</strong>デジタル署名対応</li>
                <li><strong className="text-white">共有オプション：</strong>メール送信／クラウド保存／印刷</li>
                <li><strong className="text-white">セキュリティ：</strong>パスワード保護機能付き</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">3. 契約管理</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">契約一覧：</strong>作成済み契約を一括管理</li>
                <li><strong className="text-white">検索・フィルター：</strong>従業員名・日付で検索</li>
                <li><strong className="text-white">ステータス管理：</strong>作成中／完了／更新予定</li>
                <li><strong className="text-white">更新通知：</strong>契約更新時期を自動リマインド</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">4. データ管理</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="text-white">バックアップ・復元：</strong>データ消失に備えた保存機能</li>
                <li><strong className="text-white">インポート・エクスポート：</strong>他システムと連携可能</li>
                <li><strong className="text-white">クラウド同期：</strong>複数デバイス間でデータ共有</li>
                <li><strong className="text-white">データ暗号化：</strong>強固なセキュリティで個人情報を保護</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">⚙️ 技術仕様</h2>
          
          <div className="bg-white/5 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">開発言語</h4>
                <p className="text-sm">Flutter / Dart</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">データベース</h4>
                <p className="text-sm">SQLite + Cloud Storage</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">PDF生成</h4>
                <p className="text-sm">flutter_pdf</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">署名機能</h4>
                <p className="text-sm">signature + crypto暗号化</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">広告</h4>
                <p className="text-sm">Google AdMob統合</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">🖥 システム要件</h2>
          
          <div className="bg-white/5 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
              <li>iOS：14.0以降</li>
              <li>macOS：11.0以降</li>
              <li>容量：50MB以上</li>
              <li>ネットワーク：インターネット接続必須（同期機能あり）</li>
            </ul>
          </div>

          <div className="mt-6 bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">🔒 データとプライバシー</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
              <li>データは端末内で暗号化保存</li>
              <li>個人情報は安全に管理</li>
              <li>バックアップデータも暗号化保護</li>
              <li>アカウント削除：設定画面から実行可能</li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-sm text-yellow-200">
              <strong>⚠️ 免責：</strong>本アプリおよび本ページは法的助言を提供するものではありません。必要に応じて専門家へご相談ください。
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
