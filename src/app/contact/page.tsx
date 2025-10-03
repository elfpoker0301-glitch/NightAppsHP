"use client";

import Layout from "../components/Layout";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    app: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:app@liv-jpn.com?subject=${encodeURIComponent(
      `[${formData.app || "お問い合わせ"}] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `お名前: ${formData.name}\nメールアドレス: ${formData.email}\n\nお問い合わせ内容:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout 
      title="お問い合わせ" 
      description="NightAppに関するご質問やご意見をお聞かせください"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">お問い合わせフォーム</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="app" className="block text-white font-semibold mb-2">
                  関連するアプリ
                </label>
                <select
                  id="app"
                  name="app"
                  value={formData.app}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                >
                  <option value="">選択してください</option>
                  <option value="Night名簿帳">Night名簿帳</option>
                  <option value="Night契約書">Night契約書</option>
                  <option value="Nightアフターバック">Nightアフターバック</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  件名 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                  placeholder="お問い合わせの件名"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-vertical"
                  placeholder="お問い合わせの詳細をご記入ください"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                メールアプリで送信
              </button>
            </form>

            <p className="text-gray-300 text-sm mt-4">
              ※ このフォームはメールアプリを開きます。送信前に内容をご確認ください。
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-6">
            {/* Direct Email */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">直接メール</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">メールアドレス</p>
                    <a 
                      href="mailto:app@liv-jpn.com" 
                      className="text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      app@liv-jpn.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-lg">⏰</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">営業時間</p>
                    <p className="text-gray-300 text-sm">平日 9:00 - 18:00</p>
                    <p className="text-gray-400 text-xs">通常24時間以内に回答いたします</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">よくある質問</h2>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Q: アプリのダウンロード方法は？</h3>
                  <p className="text-gray-300 text-sm">A: 各アプリストア（App Store、Google Play）からダウンロードできます。</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Q: データのバックアップは？</h3>
                  <p className="text-gray-300 text-sm">A: クラウドバックアップ機能により、安全にデータを保護しています。</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Q: 複数端末での利用は可能？</h3>
                  <p className="text-gray-300 text-sm">A: はい。同じアカウントで複数端末でご利用いただけます。</p>
                </div>
              </div>
            </div>

            {/* Developer Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">開発者情報</h2>
              
              <div className="space-y-3">
                <div>
                  <p className="text-white font-semibold">開発者</p>
                  <p className="text-gray-300">UTSUNO HIDETA</p>
                </div>
                
                <div>
                  <p className="text-white font-semibold">著作権</p>
                  <p className="text-gray-300">© 2025 UTSUNO HIDETA</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}