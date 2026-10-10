/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Copy, Clock, Check, Sparkles } from 'lucide-react';
import { SECTIONS, TRANSCRIPT_SEGMENTS, TranscriptSegment } from '../data/transcriptData';
import { FontSize } from './Header';

interface ContinuousTextViewProps {
  fontSize: FontSize;
  searchQuery: string;
  currentTime: number;
  onJumpToTime: (seconds: number) => void;
  onCopyText: (text: string, title?: string) => void;
  copiedId: string | null;
}

export const ContinuousTextView: React.FC<ContinuousTextViewProps> = ({
  fontSize,
  searchQuery,
  currentTime,
  onJumpToTime,
  onCopyText,
  copiedId,
}) => {
  // Font size classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-7';
      case 'base': return 'text-base leading-8';
      case 'lg': return 'text-lg leading-9';
      case 'xl': return 'text-xl leading-10';
      default: return 'text-base leading-8';
    }
  };

  // Highlight search matches
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery.trim()})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.trim().toLowerCase() ? (
        <mark key={i} className="bg-amber-300 dark:bg-amber-600/80 text-stone-900 dark:text-white px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      {/* Verbatim Disclaimer Banner */}
      <div className="mb-8 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/50 flex items-start gap-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 shadow-xs">
        <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-amber-900 dark:text-amber-200">
            تطبیق صددرصد واژه‌به‌واژه با فایل صوتی (بدون ویرایش و اصلاح)
          </p>
          <p className="text-stone-600 dark:text-stone-400">
            تمامی جملات، عبارات محاوره‌ای، استنادهای قرآنی و روایی، نقل‌قول‌ها، شوخی‌ها و تمثیل‌ها عیناً بر اساس بیانات گوینده پیاده‌سازی شده و هیچ‌گونه تغییر، حذف یا ویرایش لفظی صورت نگرفته است. با کلیک بر روی هر بند می‌توانید به زمان دقیق آن در فایل صوتی بروید.
          </p>
        </div>
      </div>

      {/* Sections rendering */}
      <div className="space-y-10">
        {SECTIONS.map((section, idx) => {
          const sectionSegments = TRANSCRIPT_SEGMENTS.filter(
            (s) => s.sectionId === section.id
          );
          const fullSectionText = sectionSegments.map((s) => s.text).join(' ');
          const isSectionActive = currentTime >= section.startSec && currentTime <= section.endSec;

          return (
            <article 
              key={section.id} 
              id={`section-${section.id}`}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isSectionActive 
                  ? 'bg-amber-50/50 dark:bg-stone-900/80 border-amber-300 dark:border-amber-700/60 shadow-md ring-1 ring-amber-400/30' 
                  : 'bg-white dark:bg-stone-900/40 border-stone-200 dark:border-stone-800/80 shadow-xs hover:border-stone-300 dark:hover:border-stone-700'
              }`}
            >
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 mb-4 border-b border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                    {section.badge}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                    {section.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => onJumpToTime(section.startSec)}
                    className="flex items-center gap-1 text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 font-mono transition-colors cursor-pointer"
                    title="پرش به زمان شروع این بخش"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{sectionSegments[0]?.time || '00:00'}</span>
                  </button>

                  <button
                    onClick={() => onCopyText(fullSectionText, section.title)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                    title="کپی کردن متن کامل این سرفصل"
                  >
                    {copiedId === section.title ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>کپی این بخش</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Subtitle / summary info */}
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-4 font-medium">
                {section.subtitle}
              </p>

              {/* Verbatim continuous paragraph */}
              <div className={`text-stone-800 dark:text-stone-200 text-justify font-sans ${getFontSizeClass()}`}>
                {sectionSegments.map((segment) => {
                  const isSegmentCurrent = 
                    currentTime >= segment.seconds && 
                    currentTime < (TRANSCRIPT_SEGMENTS[segment.id]?.seconds || segment.seconds + 5);

                  return (
                    <span
                      key={segment.id}
                      onClick={() => onJumpToTime(segment.seconds)}
                      title={`زمان: ${segment.time} (کلیک برای پخش)`}
                      className={`cursor-pointer transition-colors px-0.5 rounded inline ${
                        isSegmentCurrent
                          ? 'bg-amber-200/80 dark:bg-amber-900/60 font-semibold text-stone-950 dark:text-amber-100 shadow-xs'
                          : 'hover:bg-amber-50 dark:hover:bg-amber-950/20'
                      } ${segment.isVerseOrHadith ? 'font-quran text-emerald-900 dark:text-emerald-300' : ''}`}
                    >
                      {highlightText(segment.text)}{' '}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
