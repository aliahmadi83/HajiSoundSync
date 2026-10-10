/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  FileText, 
  Clock, 
  ListOrdered, 
  BookOpen, 
  Copy, 
  Download, 
  Sun, 
  Moon, 
  Search, 
  Type,
  Check
} from 'lucide-react';

export type TabType = 'continuous' | 'timeline' | 'propositions' | 'references';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onCopyAll: () => void;
  onDownloadTxt: () => void;
  copied: boolean;
  totalWords: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  fontSize,
  setFontSize,
  searchQuery,
  setSearchQuery,
  onCopyAll,
  onDownloadTxt,
  copied,
  totalWords,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        {/* Top bar with title and quick actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                دست‌نخورده و بدون ویرایش
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                مدت صوت: ۴۲ دقیقه و ۳۵ ثانیه • {totalWords.toLocaleString('fa-IR')} واژه
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-50 mt-1 flex items-center gap-2">
              <span className="text-amber-600 dark:text-amber-500">📜</span>
              متن کامل سخنرانی: اوصاف امیرالمؤمنین (ع)، مراتب بهشت و گزاره‌های نهج‌البلاغه
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Copy button */}
            <button
              onClick={onCopyAll}
              title="کپی کردن تمام متن سخنرانی در کلیپ‌بورد"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'کپی شد!' : 'کپی متن کامل'}</span>
            </button>

            {/* Download button */}
            <button
              onClick={onDownloadTxt}
              title="دانلود متن به صورت فایل متنی (TXT)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>دانلود TXT</span>
            </button>

            {/* Font size picker */}
            <div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded-lg p-0.5 text-xs text-stone-600 dark:text-stone-300">
              <span className="px-1.5 text-stone-400 flex items-center">
                <Type className="w-3.5 h-3.5" />
              </span>
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'sm' ? 'bg-white dark:bg-stone-700 font-bold shadow-xs' : 'hover:bg-stone-200 dark:hover:bg-stone-700/50'}`}
                title="قلم کوچک"
              >
                ک
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'base' ? 'bg-white dark:bg-stone-700 font-bold shadow-xs' : 'hover:bg-stone-200 dark:hover:bg-stone-700/50'}`}
                title="قلم متوسط"
              >
                م
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'lg' ? 'bg-white dark:bg-stone-700 font-bold shadow-xs' : 'hover:bg-stone-200 dark:hover:bg-stone-700/50'}`}
                title="قلم بزرگ"
              >
                ب
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 rounded transition-colors ${fontSize === 'xl' ? 'bg-white dark:bg-stone-700 font-bold shadow-xs' : 'hover:bg-stone-200 dark:hover:bg-stone-700/50'}`}
                title="قلم خیلی بزرگ"
              >
                خیلی بزرگ
              </button>
            </div>

            {/* Dark mode button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              title={darkMode ? 'حالت روز' : 'حالت شب'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
            </button>
          </div>
        </div>

        {/* Lower navigation tabs & Search bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          {/* Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('continuous')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'continuous'
                  ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200 font-semibold border border-amber-300/40 dark:border-amber-700/50'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>متن پیوسته و کامل</span>
            </button>

            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200 font-semibold border border-amber-300/40 dark:border-amber-700/50'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>زمان‌بندی خط‌به‌خط (صوتی)</span>
            </button>

            <button
              onClick={() => setActiveTab('propositions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'propositions'
                  ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200 font-semibold border border-amber-300/40 dark:border-amber-700/50'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
              }`}
            >
              <ListOrdered className="w-4 h-4" />
              <span>گزاره‌های هفت‌گانه</span>
            </button>

            <button
              onClick={() => setActiveTab('references')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'references'
                  ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-200 font-semibold border border-amber-300/40 dark:border-amber-700/50'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>آیات و منابع</span>
            </button>
          </nav>

          {/* Search bar */}
          <div className="relative min-w-[200px] sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در متن سخنرانی..."
              className="w-full pl-3 pr-8 py-1.5 text-xs bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
