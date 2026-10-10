/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-emerald-800 text-emerald-50 px-5 py-3 rounded-xl shadow-2xl border border-emerald-600/30 text-sm font-medium animate-bounce backdrop-blur-md">
      <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
      <span>{message}</span>
    </div>
  );
};
