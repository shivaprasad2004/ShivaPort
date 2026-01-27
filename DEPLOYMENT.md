# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Quick Start - Vercel (Recommended)

### Prerequisites
- GitHub account
- Code pushed to a GitHub repository

### Step-by-Step Instructions

1. **Create a GitHub Repository**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., "shiva-portfolio")
   - Make it public or private
   - Don't initialize with README (you already have one)

2. **Push Your Code to GitHub**
   ```bash
   # If you haven't initialized git yet
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   
   # Add your GitHub repository
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub
   - Click "Add New Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build` (auto-detected)
     - Output Directory: `.next` (auto-detected)
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site is live! 🎉

4. **Access Your Site**
   - Your site URL will be: `https://your-project-name.vercel.app`
   - You can find it in the Vercel dashboard

5. **Custom Domain (Optional)**
   - In Vercel dashboard → Your Project → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

---

## Alternative Platforms

### Netlify Deployment

1. **Push code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Render Deployment

1. **Push code to GitHub**

2. **Deploy to Render:**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New" → "Web Service"
   - Connect your repository
   - Settings:
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`
   - Click "Create Web Service"

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Test your build locally: `npm run build && npm start`
- [ ] All images are loading correctly
- [ ] All links work (GitHub, LinkedIn, etc.)
- [ ] Contact form works (if applicable)
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Google Drive images are publicly accessible

---

## Troubleshooting

### Build Fails

1. **Check build logs** in your deployment platform
2. **Common issues:**
   - Missing dependencies → Run `npm install` locally and commit `package-lock.json`
   - Environment variables missing → Add them in platform settings
   - Image loading issues → Check Google Drive sharing settings

### Images Not Loading

- Ensure Google Drive files are set to "Anyone with the link can view"
- Check image URLs in your components
- Verify `next.config.js` has correct image domains

### 404 Errors

- Check all internal links
- Verify route structure matches Next.js Pages Router
- Ensure all components are properly exported

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments
- No manual deployment needed!

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Netlify Docs: https://docs.netlify.com


