import React from 'react';
import { Layers } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="pt-8 pb-10 sm:pt-14 sm:pb-14 text-center">
      {/* Brand mark / pill badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1.5 text-xs font-semibold text-blue-800 shadow-xs mb-5">
        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
        <span>Plasgain Ecosystem</span>
        <span className="text-blue-300">•</span>
        <span className="text-blue-600 font-medium">Application Portal</span>
      </div>

      {/* Main Title */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 text-white shadow-md shadow-slate-900/10">
          <Layers className="h-6 w-6 text-blue-400" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Plasgain App Hub
        </h1>
      </div>

      {/* Subtitle */}
      <p className="mx-auto max-w-xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
        Fast, direct access to Plasgain’s internal enterprise tools and analytics dashboards.
      </p>
    </header>
  );
};
