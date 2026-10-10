/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Copy, Check, ExternalLink, Bookmark } from 'lucide-react';
import { SECTIONS, TRANSCRIPT_SEGMENTS } from '../data/transcriptData';

interface PropositionsViewProps {
  onJumpToTime: (seconds: number) => void;
  onCopyText: (text: string, title?: string) => void;
  copiedId: string | null;
}

export const PropositionsView: React.FC<PropositionsViewProps> = ({
  onJumpToTime,
  onCopyText,
  copiedId,
}) => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-6">
      {/* Intro overview card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-300/40 dark:border-amber-700/40">
        <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          ساختار علمی سخنرانی: بخش اول و هفت گزاره بخش دوم
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
          سخنران پس از تبیین آیات ۱۵ تا ۱۷ آل‌عمران و ۷۲ توبه (بخش اول)، وارد «بخش دوم» شده و ۷ گزاره تفسیری و روایی را برای واشکافی ۳ مفهوم مشکک (تقوا، جنات، خیر) مطرح می‌نماید. در اینجا هر بخش به همراه متن کامل پیاده‌شده به تفکیک ارائه شده است:
        </p>
      </div>

      {/* Accordion / Cards of all sections and propositions */}
      <div className="space-y-4">
        {SECTIONS.map((section, index) => {
          const sectionSegments = TRANSCRIPT_SEGMENTS.filter(
            (s) => s.sectionId === section.id
          );
          const fullText = sectionSegments.map((s) => s.text).join(' ');

          return (
            <div
              key={section.id}
              className="bg-white dark:bg-stone-900/50 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-xs hover:border-amber-300 dark:hover:border-stone-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
                      {section.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-xs">
                  <button
                    onClick={() => onJumpToTime(section.startSec)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-mono transition-colors cursor-pointer"
                    title="پخش صوت این گزاره"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{sectionSegments[0]?.time}</span>
                  </button>

                  <button
                    onClick={() => onCopyText(fullText, section.title)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                    title="کپی کردن متن این بخش"
                  >
                    {copiedId === section.title ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-medium">کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>کپی متن</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Text preview */}
              <div className="mt-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed text-justify bg-stone-50/50 dark:bg-stone-900/30 p-4 rounded-xl border border-stone-100 dark:border-stone-800/50">
                {fullText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
