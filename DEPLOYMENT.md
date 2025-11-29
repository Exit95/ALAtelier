# Deployment Guide - ATELIER KL

This guide covers deploying the ATELIER KL website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Domain name (optional, Vercel provides a free subdomain)

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ATELIER KL website"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/atelier-kl.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Click "Deploy"

## Step 3: Configure Environment Variables

In Vercel dashboard, go to Settings > Environment Variables and add:

```
PUBLIC_SITE_URL=https://your-domain.com
```

For email functionality (when implemented):
```
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=noreply@atelier-kl.de
EMAIL_TO=info@atelier-kl.de
```

## Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `PUBLIC_SITE_URL` environment variable

## Step 5: Configure Vercel Settings

### Performance Optimizations

- **Edge Network**: Enabled by default
- **Image Optimization**: Enabled via @astrojs/vercel
- **Caching**: Automatic for static assets

### Security Headers

Add to `vercel.json` (create if doesn't exist):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Step 6: Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test navigation and links
- [ ] Verify images load properly
- [ ] Test lightbox functionality
- [ ] Check filter functionality on gallery page
- [ ] Verify SEO meta tags (use browser dev tools)
- [ ] Submit sitemap to Google Search Console
- [ ] Test accessibility with screen reader
- [ ] Run Lighthouse audit (target: >90 score)

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

## Rollback Strategy

If issues occur:
1. Go to Vercel dashboard > Deployments
2. Find the last working deployment
3. Click "..." menu > "Promote to Production"

## Monitoring

- **Analytics**: Enable Vercel Analytics in dashboard
- **Logs**: View in Vercel dashboard > Logs
- **Performance**: Monitor via Vercel Speed Insights

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Test build locally: `npm run build`

### Images Not Loading

- Ensure images are in `public/` directory
- Check image paths are correct
- Verify Vercel Image Optimization is enabled

### Contact Form Not Working

- Check API route is deployed: `/api/contact`
- Verify environment variables are set
- Check function logs in Vercel dashboard

## Support

For issues, check:
- [Astro Documentation](https://docs.astro.build)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

