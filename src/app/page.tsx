import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navigation />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            NightApp
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Experience the Future
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ナイトワークの管理を革新する、プロフェッショナルなアプリケーションスイート
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-bl-3xl rounded-tr-3xl opacity-20"></div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Night名簿帳</h2>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                顧客管理を効率化する革新的な名簿管理アプリ。シンプルで使いやすいインターフェースで、大切なお客様情報をスマートに管理。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  簡単な顧客情報管理
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  安全なデータ保護
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  直感的な操作性
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href="https://apps.apple.com/jp/app/night%E5%90%8D%E7%B0%BF%E5%B8%B3/id6749575718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-purple-500/50"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  App Storeでダウンロード
                </a>
                <Link
                  href="/night-meibo"
                  className="block text-center w-full bg-gray-800/50 backdrop-blur-sm text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-all duration-300 border border-purple-500/30 hover:border-purple-500 font-semibold"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-bl-3xl rounded-tr-3xl opacity-20"></div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Night契約書</h2>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                デジタル契約書管理システム。紙の契約書から解放され、セキュアで効率的な契約管理を実現。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  電子契約書作成
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  クラウド保存
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  法的効力の確保
                </div>
              </div>
              <Link
                href="/night-keiyaku"
                className="block text-center w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-blue-500/50"
              >
                詳細を見る
              </Link>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-bl-3xl rounded-tr-3xl opacity-20"></div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Nightアフターバック</h2>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                アフターサービス管理の決定版。お客様との関係性を深め、リピート率を向上させる究極のツール。
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-pink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  アフター予約管理
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-pink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  顧客分析機能
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-pink-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  リマインダー通知
                </div>
              </div>
              <Link
                href="/night-afterback"
                className="block text-center w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 px-6 rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-pink-500/50"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-gray-400 text-lg">アプリケーション</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-400 text-lg">セキュア</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-400 text-lg">サポート</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative bg-gray-950/80 backdrop-blur-xl border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 UTSUNO HIDETA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
