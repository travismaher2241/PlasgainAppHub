export interface AppLauncherItem {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  githubUrl?: string;
  icon: 'TrendingUp' | 'Users' | 'BarChart3' | 'Briefcase' | 'Database' | 'Layers';
  status: 'active' | 'beta' | 'maintenance';
  theme: {
    accent: string;          // e.g. "blue", "teal", "indigo"
    gradient: string;        // Tailwind gradient string for subtle card highlights
    badgeColor: string;
    iconBg: string;
    iconColor: string;
    buttonBg: string;
    buttonHover: string;
    cardBorderHover: string;
  };
}

/**
 * Plasgain Applications Central Configuration
 * To add a new application to the launcher, simply append a new object to this array.
 */
export const PLASGAIN_APPS: AppLauncherItem[] = [
  {
    id: 'sales-intelligence',
    name: 'Sales Intelligence',
    category: 'Market & Revenue Insights',
    description:
      'Explore sales performance metrics, pipeline forecasts, and revenue analytics across Plasgain market sectors.',
    url: 'https://sales-intelligence-lyart.vercel.app/',
    githubUrl: 'https://github.com/travismaher2241/SalesIntelligence',
    icon: 'TrendingUp',
    status: 'active',
    theme: {
      accent: 'blue',
      gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 text-blue-600 ring-1 ring-blue-500/20',
      iconColor: 'text-blue-600',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20',
      buttonHover: 'hover:bg-blue-700',
      cardBorderHover: 'hover:border-blue-400 hover:shadow-blue-500/10',
    },
  },
  {
    id: 'contact-tracker',
    name: 'Contact Tracker',
    category: 'Relationship & Lead Management',
    description:
      'Manage key client relationships, stakeholder communication history, and interaction touchpoints in one place.',
    url: 'https://contacttracker-gamma.vercel.app/',
    githubUrl: 'https://github.com/travismaher2241/ContactTracker',
    icon: 'Users',
    status: 'active',
    theme: {
      accent: 'emerald',
      gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/20',
      iconColor: 'text-emerald-600',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20',
      buttonHover: 'hover:bg-emerald-700',
      cardBorderHover: 'hover:border-emerald-400 hover:shadow-emerald-500/10',
    },
  },
];
