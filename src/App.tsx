import React from 'react';
import { Header } from './components/Header';
import { AppCard } from './components/AppCard';
import { Footer } from './components/Footer';
import { PLASGAIN_APPS } from './config/apps';

export const App: React.FC = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-width app-main" aria-labelledby="page-title">
        <div className="page-intro">
          <h1 id="page-title">Your Applications</h1>
          <p>Access your Plasgain business applications from one place.</p>
        </div>
        <div className="app-grid">
          {PLASGAIN_APPS.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
