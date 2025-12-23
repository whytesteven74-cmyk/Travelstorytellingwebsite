# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is perfect for this React + Vite project and offers free hosting.

### Steps:

1. **Push your code to GitHub** (if not already done):
```bash
git add .
git commit -m "Initial commit - Unspoken Truths UK website"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

That's it! Your site will be live in 2-3 minutes.

### Custom Domain

To add your custom domain:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Alternative: Deploy to Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repo for auto-deployments

---

## Alternative: Deploy to GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/unspoken-truths-uk"
}
```

3. **Deploy**:
```bash
npm run deploy
```

---

## Environment Variables

If you add any API keys or sensitive data later:

### Vercel:
- Go to Project Settings → Environment Variables
- Add variables with `VITE_` prefix
- Redeploy

### Local Development:
Create `.env` file in root:
```
VITE_API_KEY=your_key_here
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## Performance Tips

### Image Optimization
- Use WebP format where possible
- Compress images before uploading
- Consider using a CDN for images

### Code Splitting
The current setup already uses Vite's automatic code splitting.

### Caching
Vercel and Netlify handle caching automatically.

---

## Monitoring & Analytics

### Add Google Analytics
1. Get your GA4 tracking ID
2. Add to index.html `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
Enable in Vercel dashboard → Analytics tab (free tier available)

---

## SSL/HTTPS

Both Vercel and Netlify provide free SSL certificates automatically. Your site will be HTTPS by default.

---

## Continuous Deployment

Once connected to GitHub:
- Any push to `main` branch auto-deploys
- Pull requests create preview deployments
- Rollback to previous versions anytime

---

## Troubleshooting

### Build Fails
- Check Node version (should be 18+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` locally first

### 404 on Refresh
- For Vercel: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Slow Load Times
- Enable Vercel/Netlify CDN
- Optimize images
- Check bundle size with `npm run build`

---

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify social media links work
- [ ] Check mobile responsiveness
- [ ] Test TikTok and YouTube embeds
- [ ] Verify contact email works
- [ ] Test smooth scrolling
- [ ] Check all images load
- [ ] Test on different browsers
- [ ] Add to Google Search Console
- [ ] Submit sitemap
- [ ] Share on social media!

---

## Custom Domain Setup Example

### For Vercel with Custom Domain:

1. Add domain in Vercel dashboard
2. Add these DNS records at your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

3. Wait for DNS propagation (up to 48 hours, usually minutes)
4. Vercel will automatically provision SSL

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Issues: Create an issue in your repo
- Vite Docs: https://vitejs.dev

---

**Remember**: After each deployment, test the live site to ensure everything works as expected!
