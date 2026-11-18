import React from 'react';
import {
  TrendingUp,
  Users,
  BarChart3,
  Briefcase,
  Database,
  Layers,
  ExternalLink,
} from 'lucide-react';
import type { AppLauncherItem } from '../config/apps';

const ICON_MAP: Record<AppLauncherItem['icon'], React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Users,
  BarChart3,
  Briefcase,
  Database,
  Layers,
};

const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface AppCardProps {
  app: AppLauncherItem;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const IconComponent = ICON_MAP[app.icon] || Layers;

  const handleCardClick = (e: React.MouseEvent) => {
    // Avoid double triggering if user clicked directly on an anchor or button
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    window.open(app.url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(app.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`Open ${app.name}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      className="app-card"
    >
      <div className="card-heading">
        <span className="card-icon" aria-hidden="true">
          <IconComponent className="h-5 w-5" />
        </span>
        <div className="card-labels">
          <h2>{app.name}</h2>
          <p>{app.category}</p>
        </div>
        <span className="card-status">Active</span>
      </div>

      <p className="card-description">{app.description}</p>

      <div className="card-actions">
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="launch-link"
        >
          <span>Open Application</span>
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>

        {app.githubUrl && (
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${app.name} GitHub Repository`}
            onClick={(e) => e.stopPropagation()}
            className="repository-link"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  );
};
