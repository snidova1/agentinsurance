# AgentInsurance - Deployment Guide

**Created:** May 23, 2026 08:32 UTC  
**GitHub Repo:** https://github.com/snidova1/agentinsurance  
**Status:** ✅ Code pushed, ready for deployment

---

## 🚀 Deploy to Vercel (2 minutes)

### Step 1: Go to Vercel
Open: **https://vercel.com/new**

### Step 2: Import Repository
1. Click **"Import Git Repository"**
2. If not connected, click **"Connect GitHub"** and authorize
3. Search for: **snidova1/agentinsurance**
4. Click **"Import"**

### Step 3: Configure Project
- **Framework Preset:** Next.js (auto-detected ✅)
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (auto)
- **Output Directory:** `.next` (auto)
- **Install Command:** `npm install` (auto)

**Environment Variables:** None needed

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait ~2 minutes for build
3. Get your live URL: `https://agentinsurance.vercel.app`

---

## 🔗 Expected URLs

**Production:**
- Primary: `https://agentinsurance.vercel.app`
- GitHub: `https://github.com/snidova1/agentinsurance`

**Custom Domain (Optional):**
- Buy domain: agentinsurance.xyz
- Add in Vercel dashboard → Settings → Domains
- Update DNS records (Vercel provides instructions)

---

## ✅ Post-Deployment Checklist

After deployment completes:

- [ ] Visit live URL and verify all sections load
- [ ] Test mobile responsiveness
- [ ] Check animations work (Framer Motion)
- [ ] Verify all 6 sections render:
  - [ ] Hero with animated background
  - [ ] Problem section (3 cards)
  - [ ] Solution section (6 features)
  - [ ] How It Works (4 steps)
  - [ ] Stats section (animated counters)
  - [ ] CTA section (waitlist form)
- [ ] Test form inputs (email field)
- [ ] Check footer links

---

## 🎯 YZi Labs Application

Once deployed, use the live URL in your application:

**Application Form:** wkf.ms/3IA5iBk  
**Deadline:** June 21, 2026 23:59 GMT-7

**Key Fields:**
- **Project Name:** AgentInsurance
- **Website:** https://agentinsurance.vercel.app
- **GitHub:** https://github.com/snidova1/agentinsurance
- **Demo Video:** (optional, can use Dungki Studio teaser as template)
- **Pitch Deck:** See `/tmp/agentpay/docs/pitch-deck.md` for structure

---

## 🐛 Troubleshooting

### Build fails on Vercel

**Error:** `Module not found: Can't resolve 'framer-motion'`

**Fix:**
```bash
cd /tmp/agentinsurance
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

Then redeploy on Vercel.

### Animations not working

**Issue:** Framer Motion not loading

**Check:**
1. Open browser console (F12)
2. Look for errors
3. Verify `framer-motion` in `package.json`

### TypeScript errors

**Error:** Type errors during build

**Fix:** Already configured in `tsconfig.json`, should auto-resolve

---

## 📊 Deployment Stats

**Build Time:** ~90 seconds  
**Bundle Size:** ~500KB (estimated)  
**Lighthouse Score:** 95+ (expected)

---

## 🔄 Update Workflow

After deployment, to make changes:

```bash
# Make edits locally
cd /tmp/agentinsurance

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Vercel auto-deploys on push
# Check deployment status at vercel.com/dashboard
```

---

## 📱 Share Links

Once deployed, share:

**For YZi Labs:**
- Live site: https://agentinsurance.vercel.app
- GitHub: https://github.com/snidova1/agentinsurance
- Pitch: "First parametric insurance for AI agents"

**For Social Media:**
- "Just launched AgentInsurance - the first insurance protocol for AI agents 🤖🛡️"
- "Applying to @yzilabs EASY Residency S4 with a novel DeFi primitive"
- Link: https://agentinsurance.vercel.app

---

## 🎬 Next Steps

1. ✅ Deploy to Vercel (2 min)
2. ⏳ Fill YZi Labs application (30 min)
3. ⏳ Create pitch deck (optional, 1 hour)
4. ⏳ Record demo video (optional, 30 min)
5. ⏳ Submit application (wkf.ms/3IA5iBk)

**Time to submission:** ~2-4 hours total

---

**Questions?** Check:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Repo: https://github.com/snidova1/agentinsurance

---

*Built by Kiro AI Agent*  
*May 23, 2026*
