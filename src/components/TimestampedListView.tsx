/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from 'react';
import { Play, Copy, Check, Filter } from 'lucide-react';
import { SECTIONS, TRANSCRIPT_SEGMENTS, TranscriptSegment } from '../data/transcriptData';
import { FontSize } from './Header';

interface TimestampedListViewProps {
  fontSize: FontSize;
  searchQuery: string;
  currentTime: number;
  onJumpToTime: (seconds: number) => void;
  onCopyText: (text: string, title?: string) => void;
  copiedId: string | null;
  autoScroll: boolean;
}

export const TimestampedListView: React.FC<TimestampedListViewProps> = ({
  fontSize,
  searchQuery,
  currentTime,
  onJumpToTime,
  onCopyText,
  copiedId,
  autoScroll,
}) => {
  const [selectedSectionFilter, setSelectedSectionFilter] = React.useState<string>('all');
  const activeRowRef = useRef<HTMLDivElement | null>(null);

  // Filter segments by search and selected section
  const filteredSegments = TRANSCRIPT_SEGMENTS.filter((seg) => {
    const matchesSection = selectedSectionFilter === 'all' || seg.sectionId === selectedSectionFilter;
    const matchesSearch = !searchQuery.trim() || seg.text.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesSection && matchesSearch;
  });

  // Find active segment
  const activeSegment = TRANSCRIPT_SEGMENTS.reduce((curr, seg) => {
    if (currentTime >= seg.seconds) return seg;
    return curr;
  }, TRANSCRIPT_SEGMENTS[0]);

  // Auto-scroll when active row changes
  useEffect(() => {
    if (autoScroll && activeRowRef.current) {
      activeRowRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeSegment?.id, autoScroll]);

  // Font size classes
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-xs sm:text-sm';
      case 'base': return 'text-sm sm:text-base';
      case 'lg': return 'text-base sm:text-lg';
      case 'xl': return 'text-lg sm:text-xl';
      default: return 'text-sm sm:text-base';
    }
  };

  // Highlight matches
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
      {/* Top Filter Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-stone-900/60 p-3 rounded-xl border border-stone-200 dark:border-stone-800 text-xs">
        <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300">
          <Filter className="w-4 h-4 text-stone-400" />
          <span>فیلتر بر اساس بخش:</span>
          <select
            value={selectedSectionFilter}
            onChange={(e) => setSelectedSectionFilter(e.target.value)}
            className="bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg px-2.5 py-1 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
          >
            <option value="all">تمام بخش‌ها ({TRANSCRIPT_SEGMENTS.length} بند)</option>
            {SECTIONS.map((sec) => (
              <option key={sec.id} value={sec.id}>
                {sec.badge}: {sec.title}
              </option>
            ))}
          </select>
        </div>

        <div className="text-stone-500 dark:text-stone-400">
          نمایش {filteredSegments.length} از {TRANSCRIPT_SEGMENTS.length} جمله
        </div>
      </div>

      {/* Segments List */}
      <div className="space-y-2">
        {filteredSegments.length === 0 ? (
          <div className="text-center py-12 text-stone-500 dark:text-stone-400">
            هیچ عبارتی منطبق با جستجوی شما یافت نشد.
          </div>
        ) : (
          filteredSegments.map((segment) => {
            const isActive = activeSegment?.id === segment.id;

            return (
              <div
                key={segment.id}
                ref={isActive ? activeRowRef : null}
                className={`group flex items-start gap-3 p-3 sm:p-3.5 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 dark:border-amber-700 shadow-md ring-1 ring-amber-400/20'
                    : 'bg-white dark:bg-stone-900/40 border-stone-200/80 dark:border-stone-800/80 hover:border-amber-300 dark:hover:border-stone-700 hover:bg-stone-50/50 dark:hover:bg-stone-800/20'
                }`}
              >
                {/* Timestamp & Play button */}
                <button
                  onClick={() => onJumpToTime(segment.seconds)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 group-hover:bg-amber-100 group-hover:text-amber-900 dark:group-hover:bg-amber-900/50 dark:group-hover:text-amber-200'
                  }`}
                  title="پخش از این ثانیه"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{segment.time}</span>
                </button>

                {/* Segment Text */}
                <div 
                  onClick={() => onJumpToTime(segment.seconds)}
                  className={`flex-1 text-right leading-relaxed cursor-pointer select-text ${getFontSizeClass()} ${
                    isActive ? 'font-semibold text-amber-950 dark:text-amber-100' : 'text-stone-800 dark:text-stone-200'
                  } ${segment.isVerseOrHadith ? 'font-quran text-emerald-900 dark:text-emerald-300 text-base sm:text-lg' : ''}`}
                >
                  {highlightText(segment.text)}
                </div>

                {/* Single Segment Copy button */}
                <button
                  onClick={() => onCopyText(segment.text, `seg-${segment.id}`)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-opacity cursor-pointer shrink-0"
                  title="کپی این جمله"
                >
                  {copiedId === `seg-${segment.id}` ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
