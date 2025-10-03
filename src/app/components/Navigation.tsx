"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-2xl hover:text-purple-300 transition-colors">
          NightApp
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-white">
          <Link href="/" className="hover:text-purple-300 transition-colors">ホーム</Link>
          
          {/* Apps Dropdown */}
          <div className="relative group">
            <span className="hover:text-purple-300 transition-colors cursor-pointer">アプリ</span>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link href="/night-meibo" className="block px-4 py-2 text-sm hover:bg-white/20 rounded-t-lg">Night名簿帳</Link>
              <Link href="/night-keiyaku" className="block px-4 py-2 text-sm hover:bg-white/20">Night契約書</Link>
              <Link href="/night-afterback" className="block px-4 py-2 text-sm hover:bg-white/20 rounded-b-lg">Nightアフターバック</Link>
            </div>
          </div>
          
          <Link href="/news" className="hover:text-purple-300 transition-colors">お知らせ</Link>
          <Link href="/contact" className="hover:text-purple-300 transition-colors">お問い合わせ</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="メニューを開く"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4">
          <Link href="/" className="block py-2 text-white hover:text-purple-300 transition-colors">ホーム</Link>
          <div className="py-2">
            <span className="text-white font-semibold">アプリ</span>
            <Link href="/night-meibo" className="block py-1 pl-4 text-sm text-gray-300 hover:text-purple-300 transition-colors">Night名簿帳</Link>
            <Link href="/night-keiyaku" className="block py-1 pl-4 text-sm text-gray-300 hover:text-purple-300 transition-colors">Night契約書</Link>
            <Link href="/night-afterback" className="block py-1 pl-4 text-sm text-gray-300 hover:text-purple-300 transition-colors">Nightアフターバック</Link>
          </div>
          <Link href="/news" className="block py-2 text-white hover:text-purple-300 transition-colors">お知らせ</Link>
          <Link href="/contact" className="block py-2 text-white hover:text-purple-300 transition-colors">お問い合わせ</Link>
        </div>
      )}
    </header>
  );
}