import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="page-width site-footer">
      &copy; {new Date().getFullYear()} Plasgain. All rights reserved.
    </footer>
  );
};
