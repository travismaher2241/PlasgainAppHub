import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="page-width header-content">
        <img className="brand-logo" src="/plasgain-wordmark.svg" alt="Plasgain" width={112} height={19} />
        <span className="header-title">App Hub</span>
      </div>
    </header>
  );
};
