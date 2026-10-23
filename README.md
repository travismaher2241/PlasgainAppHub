# Plasgain App Hub

A modern, standalone application launcher and portal for Plasgain business tools.

This repository is completely independent and provides direct, convenient access to:
- **Sales Intelligence** (`https://sales-intelligence-lyart.vercel.app/`)
- **Contact Tracker** (`https://contacttracker-gamma.vercel.app/`)

---

## Features

- **Direct Launch**: One-click opening of each application in a new browser tab.
- **Centralized Configuration**: Add or edit applications easily in `src/config/apps.ts`.
- **Zero Overhead**: Fully static client-side application with no backend or database dependencies.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop screens with keyboard navigation support.
- **Independent & Isolated**: Completely standalone — does not modify or integrate into the existing codebases or databases.

---

## Adding New Applications

To add or modify applications, edit [`src/config/apps.ts`](file:///src/config/apps.ts):

```typescript
export const PLASGAIN_APPS: AppLauncherItem[] = [
  // Add new applications to this list:
  {
    id: 'new-app',
    name: 'New Application',
    category: 'Operations',
    description: 'Description of the application functionality.',
    url: 'https://newapp.vercel.app',
    githubUrl: 'https://github.com/travismaher2241/NewApp',
    icon: 'Briefcase',
    status: 'active',
    theme: {
      accent: 'indigo',
      gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconBg: 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/20',
      iconColor: 'text-indigo-600',
      buttonBg: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20',
      buttonHover: 'hover:bg-indigo-700',
      cardBorderHover: 'hover:border-indigo-400 hover:shadow-indigo-500/10',
    },
  },
];
```

---

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## Deployment to Vercel (Standalone)

Follow these steps to deploy **Plasgain App Hub** as its own separate project:

### Step 1: Create a New GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Repository name: `PlasgainAppHub` (or your preferred name).
3. Set to **Public** or **Private** as desired.
4. Do not initialize with README, .gitignore, or license (these already exist locally).
5. Click **Create repository**.

### Step 2: Push Local Code to GitHub
Run the following commands in the `Plasgain App Hub` root directory:
```bash
git init
git add .
git commit -m "Initial commit: Plasgain App Hub standalone launcher"
git branch -M main
git remote add origin https://github.com/<your-username>/PlasgainAppHub.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Import the newly created `PlasgainAppHub` GitHub repository.
4. Configure Project settings (Vercel automatically detects Vite):
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

Vercel will build and assign a unique URL (e.g., `plasgain-app-hub.vercel.app`). Your existing `SalesIntelligence` and `ContactTracker` Vercel projects and GitHub repositories remain completely untouched.
