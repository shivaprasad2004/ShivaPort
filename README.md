# Gubba Shiva Prasad - Portfolio

A modern, dark-themed personal portfolio website built with Next.js and CSS Modules.

## Features

- 🎨 Modern dark theme with smooth animations
- 📱 Fully responsive design (mobile + desktop)
- ⚡ Built with Next.js and React
- 🎯 Clean component structure
- 🚀 Vercel-ready deployment

## Tech Stack

- Next.js (Pages Router)
- React
- CSS Modules
- No external UI libraries

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Option 1: Deploy to Vercel (Recommended - Easiest for Next.js)

Vercel is the creators of Next.js and offers the easiest deployment experience.

#### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to your project → Settings → Domains
   - Add your custom domain

**Your site will be live at:** `https://your-project-name.vercel.app`

---

### Option 2: Deploy to Netlify

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

---

### Option 3: Deploy to GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "export": "next export",
     "deploy": "npm run build && npm run export && touch out/.nojekyll && gh-pages -d out"
   }
   ```

3. Update `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     // ... rest of config
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

### Before Deploying - Test Your Build

Always test your production build locally first:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

---

### Environment Variables (if needed)

If you add environment variables later:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment Variables

## Project Structure

```
portfolio/
├── components/          # React components
├── pages/               # Next.js pages
├── styles/              # CSS Modules
├── public/              # Static assets
└── package.json
```

## Customization

Update the content in each component file to personalize your portfolio:
- `components/Hero.jsx` - Hero section
- `components/About.jsx` - About section
- `components/Skills.jsx` - Skills section
- `components/Projects.jsx` - Projects section
- `components/Experience.jsx` - Experience section
- `components/Certifications.jsx` - Certifications section
- `components/Contact.jsx` - Contact section

## License

MIT


