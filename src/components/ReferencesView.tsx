/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Copy, Check, Quote } from 'lucide-react';
import { SCRIPTURE_REFERENCES, ScriptureReference } from '../data/transcriptData';

interface ReferencesViewProps {
  onCopyText: (text: string, title?: string) => void;
  copiedId: string | null;
}

export const ReferencesView: React.FC<ReferencesViewProps> = ({
  onCopyText,
  copiedId,
}) => {
  const [categoryFilter, setCategoryFilter] = React.useState<string>('all');

  const filteredRefs = SCRIPTURE_REFERENCES.filter(
    (item) => categoryFilter === 'all' || item.category === categoryFilter
  );

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-6">
      {/* Category selector */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-stone-500 dark:text-stone-400">دسته‌بندی ارجاعات:</span>
          {['all', 'قرآن', 'نهج‌البلاغه', 'حدیث و کتب روایی'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {cat === 'all' ? 'همه منابع' : cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-stone-400">
          {filteredRefs.length} منبع استناد شده در متن
        </span>
      </div>

      {/* Cards list */}
      <div className="grid grid-cols-1 gap-4">
        {filteredRefs.map((ref, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-stone-900/50 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs hover:border-amber-300 dark:hover:border-stone-700 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 mb-3 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  ref.category === 'قرآن'
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                    : ref.category === 'نهج‌البلاغه'
                    ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                }`}>
                  {ref.category}
                </span>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
                  {ref.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-stone-500 dark:text-stone-400 font-medium">
                  {ref.source}
                </span>
                <button
                  onClick={() => onCopyText(ref.quote, ref.title)}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                  title="کپی کردن متن این آیه یا روایت"
                >
                  {copiedId === ref.title ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 dark:text-emerald-300">کپی شد</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>کپی</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Arabic / Scripture Quote */}
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/40 border border-stone-100 dark:border-stone-800/80 mb-3 text-stone-900 dark:text-stone-100 font-quran text-base sm:text-lg leading-relaxed text-right">
              <Quote className="w-4 h-4 text-amber-500 mb-1 inline ml-2 opacity-60" />
              {ref.quote}
            </div>

            {/* Context explanation */}
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              <strong className="text-stone-800 dark:text-stone-200">کاربرد در سخنرانی: </strong>
              {ref.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
