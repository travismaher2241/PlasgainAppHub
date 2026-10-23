import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-slate-200/80 py-8 text-center text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <span className="flex items-center gap-1.5 font-medium text-slate-600">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          Direct Access Launcher
        </span>
        <span className="hidden sm:inline text-slate-300">•</span>
        <span>Standalone Portal for Plasgain Applications</span>
        <span className="hidden sm:inline text-slate-300">•</span>
        <span>&copy; {new Date().getFullYear()} Plasgain. All rights reserved.</span>
      </div>
    </footer>
  );
};
