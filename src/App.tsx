import React from 'react';
import { Header } from './components/Header';
import { AppCard } from './components/AppCard';
import { Footer } from './components/Footer';
import { PLASGAIN_APPS } from './config/apps';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-slate-50 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Delicate background pattern and ambient gradient lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-blue-100/60 via-indigo-50/40 to-transparent blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Header />

          {/* Application Grid */}
          <main className="mt-2 sm:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PLASGAIN_APPS.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
