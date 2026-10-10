/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipBack, 
  SkipForward, 
  LocateFixed
} from 'lucide-react';
import { TranscriptSegment } from '../data/transcriptData';

interface AudioSimulatorPlayerProps {
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  currentSegment: TranscriptSegment | null;
  onPrevSegment: () => void;
  onNextSegment: () => void;
  autoScroll: boolean;
  setAutoScroll: (val: boolean) => void;
  totalDuration: number;
}

// -------------------------------------------------------------
// آدرس فایل صوتی:
// اگر فایل را در پوشه public گذاشته‌اید، نام آن را بنویسید (مثلاً "./audio.mp3")
// یا اگر روی هاست دانلود است، لینک مستقیم را قرار دهید.
// -------------------------------------------------------------
const AUDIO_SRC = "./audio.mp3"; 

export const AudioSimulatorPlayer: React.FC<AudioSimulatorPlayerProps> = ({
  currentTime,
  setCurrentTime,
  isPlaying,
  setIsPlaying,
  playbackSpeed,
  setPlaybackSpeed,
  currentSegment,
  onPrevSegment,
  onNextSegment,
  autoScroll,
  setAutoScroll,
  totalDuration,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // قالب‌بندی زمان به صورت MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // کنترل پخش و توقف از روی وضعیت isPlaying
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  // اعمال تغییر سرعت صوت روی المنت صوتی واقعی
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // به‌روزرسانی زمان استیت برنامه هنگام پخش صوت واقعی
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // جابه‌جایی دستی اسلایدر زمان
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // پرش به زمان مشخص (مثل بازگشت به شروع)
  const jumpToTime = (timeInSec: number) => {
    setCurrentTime(timeInSec);
    if (audioRef.current) {
      audioRef.current.currentTime = timeInSec;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 shadow-2xl py-2.5 px-4">
      {/* تگ صوتی واقعی HTML5 که در پشت صحنه صدا را مدیریت می‌کند */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* عنوان و بخش در حال خوانده شدن */}
        <div className="w-full md:w-1/3 flex items-center gap-3 overflow-hidden text-right">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
          <div className="truncate">
            <div className="text-xs font-semibold text-amber-700 dark:text-amber-400 truncate">
              {currentSegment ? currentSegment.sectionTitle : 'آغاز سخنرانی'}
            </div>
            <div className="text-xs text-stone-700 dark:text-stone-300 truncate">
              {currentSegment ? currentSegment.text : 'روی دکمه پخش کلیک کنید تا صوت همراه با متن پخش شود'}
            </div>
          </div>
        </div>

        {/* دکمه‌های کنترل پلیر و اسلایدر زمان */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => jumpToTime(26)}
              className="p-1 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100 transition-colors cursor-pointer"
              title="بازگشت به ابتدای صوت (00:26)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onPrevSegment();
                // اگر روی جمله قبلی کلیک شد، زمان صوت هم همگام شود
                setTimeout(() => {
                  if (audioRef.current) audioRef.current.currentTime = currentTime;
                }, 50);
              }}
              className="p-1 text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors cursor-pointer"
              title="جمله قبلی"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title={isPlaying ? 'توقف' : 'پخش صوت واقعی'}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>

            <button
              onClick={() => {
                onNextSegment();
                // اگر روی جمله بعدی کلیک شد، زمان صوت هم همگام شود
                setTimeout(() => {
                  if (audioRef.current) audioRef.current.currentTime = currentTime;
                }, 50);
              }}
              className="p-1 text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors cursor-pointer"
              title="جمله بعدی"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const speeds = [1, 1.25, 1.5, 2];
                const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                setPlaybackSpeed(speeds[nextIdx]);
              }}
              className="px-2 py-0.5 rounded text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer"
              title="سرعت پخش"
            >
              {playbackSpeed}x
            </button>
          </div>

          {/* اسلایدر زمان و نمایش دقیق دقیقه:ثانیه */}
          <div className="w-full flex items-center gap-2 text-[11px] font-mono text-stone-500 dark:text-stone-400">
            <span className="w-10 text-left">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={totalDuration}
              step={0.5}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <span className="w-10 text-right">{formatTime(totalDuration)}</span>
          </div>
        </div>

        {/* کلید اسکرول خودکار */}
        <div className="w-full md:w-auto flex items-center justify-end gap-3 text-xs">
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              autoScroll 
                ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-medium' 
                : 'text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
            title="پیمایش خودکار به بند در حال خواندن"
          >
            <LocateFixed className="w-3.5 h-3.5" />
            <span>اسکرول خودکار: {autoScroll ? 'روشن' : 'خاموش'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
