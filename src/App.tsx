/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header, TabType, FontSize } from './components/Header';
import { ContinuousTextView } from './components/ContinuousTextView';
import { TimestampedListView } from './components/TimestampedListView';
import { PropositionsView } from './components/PropositionsView';
import { ReferencesView } from './components/ReferencesView';
import { AudioSimulatorPlayer } from './components/AudioSimulatorPlayer';
import { Toast } from './components/Toast';
import { 
  TRANSCRIPT_SEGMENTS, 
  FULL_VERBATIM_TEXT, 
  TranscriptSegment 
} from './data/transcriptData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('continuous');
  const [currentTime, setCurrentTime] = useState<number>(26);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [autoScroll, setAutoScroll] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const totalDuration = 2555; // 42 minutes 35 seconds

  // Handle dark mode toggle on root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Back to top listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute current active segment
  const currentSegment: TranscriptSegment | null = useMemo(() => {
    let matched = TRANSCRIPT_SEGMENTS[0];
    for (const seg of TRANSCRIPT_SEGMENTS) {
      if (currentTime >= seg.seconds) {
        matched = seg;
      } else {
        break;
      }
    }
    return matched;
  }, [currentTime]);

  // Jump to specific timestamp
  const handleJumpToTime = (seconds: number) => {
    setCurrentTime(seconds);
    setIsPlaying(true);
  };

  // Next and Previous segment navigation
  const handlePrevSegment = () => {
    if (!currentSegment) return;
    const currentIndex = TRANSCRIPT_SEGMENTS.findIndex(s => s.id === currentSegment.id);
    if (currentIndex > 0) {
      setCurrentTime(TRANSCRIPT_SEGMENTS[currentIndex - 1].seconds);
    }
  };

  const handleNextSegment = () => {
    if (!currentSegment) return;
    const currentIndex = TRANSCRIPT_SEGMENTS.findIndex(s => s.id === currentSegment.id);
    if (currentIndex < TRANSCRIPT_SEGMENTS.length - 1) {
      setCurrentTime(TRANSCRIPT_SEGMENTS[currentIndex + 1].seconds);
    }
  };

  // Copy text helper
  const handleCopyText = (text: string, title?: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(title || 'general');
      setToastMessage(title ? `«${title}» در کلیپ‌بورد کپی شد.` : 'متن با موفقیت کپی شد.');
      setTimeout(() => {
        setCopiedId(null);
        setToastMessage(null);
      }, 3000);
    });
  };

  // Copy all transcript text verbatim
  const handleCopyAll = () => {
    handleCopyText(FULL_VERBATIM_TEXT, 'متن کامل سخنرانی (دست‌نخورده)');
  };

  // Download entire transcript as a UTF-8 .txt file
  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `بسم الله الرحمن الرحیم\n\nپیاده‌سازی دقیق و دست‌نخورده متن سخنرانی (اوصاف امیرالمؤمنین ع، مراتب بهشت و گزاره‌های نهج‌البلاغه)\nمدت صوت: ۴۲:۳۵\n\n${FULL_VERBATIM_TEXT}`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'matn-kamel-sokhanrani-verbatim.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setToastMessage('فایل متن کامل سخنرانی (TXT) دانلود شد.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Word count calculation
  const totalWords = useMemo(() => {
    return FULL_VERBATIM_TEXT.trim().split(/\s+/).length;
  }, []);

  return (
    <div className="min-h-screen pb-28 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors">
      {/* Header bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCopyAll={handleCopyAll}
        onDownloadTxt={handleDownloadTxt}
        copied={copiedId === 'متن کامل سخنرانی (دست‌نخورده)'}
        totalWords={totalWords}
      />

      {/* Main Content Area */}
      <main className="transition-all">
        {activeTab === 'continuous' && (
          <ContinuousTextView
            fontSize={fontSize}
            searchQuery={searchQuery}
            currentTime={currentTime}
            onJumpToTime={handleJumpToTime}
            onCopyText={handleCopyText}
            copiedId={copiedId}
          />
        )}

        {activeTab === 'timeline' && (
          <TimestampedListView
            fontSize={fontSize}
            searchQuery={searchQuery}
            currentTime={currentTime}
            onJumpToTime={handleJumpToTime}
            onCopyText={handleCopyText}
            copiedId={copiedId}
            autoScroll={autoScroll}
          />
        )}

        {activeTab === 'propositions' && (
          <PropositionsView
            onJumpToTime={handleJumpToTime}
            onCopyText={handleCopyText}
            copiedId={copiedId}
          />
        )}

        {activeTab === 'references' && (
          <ReferencesView
            onCopyText={handleCopyText}
            copiedId={copiedId}
          />
        )}
      </main>

      {/* Persistent Audio / Timeline Synchronizer Bar */}
      <AudioSimulatorPlayer
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        playbackSpeed={playbackSpeed}
        setPlaybackSpeed={setPlaybackSpeed}
        currentSegment={currentSegment}
        onPrevSegment={handlePrevSegment}
        onNextSegment={handleNextSegment}
        autoScroll={autoScroll}
        setAutoScroll={setAutoScroll}
        totalDuration={totalDuration}
      />

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-30 p-2.5 rounded-full bg-stone-800/80 hover:bg-stone-900 text-white dark:bg-stone-700/80 dark:hover:bg-stone-600 shadow-xl backdrop-blur-xs transition-all cursor-pointer"
          title="بازگشت به ابتدای صفحه"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Toast Feedback */}
      <Toast message={toastMessage} />
    </div>
  );
}
