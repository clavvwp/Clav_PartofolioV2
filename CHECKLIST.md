# ✅ CLAV PREMIUM PORTFOLIO v2.0 - DEPLOYMENT CHECKLIST

## 🎯 SETUP & CUSTOMIZATION CHECKLIST

Before launching, ensure you complete all these steps:

---

## STEP 1: PROJECT DATA (CRITICAL!)
- [ ] Open `script.js`
- [ ] Edit `const projects = [...]` array
- [ ] Update all project titles
- [ ] Set correct categories (design/development)
- [ ] Update years
- [ ] Prepare image filenames

## STEP 2: IMAGES (CRITICAL!)
- [ ] Prepare 6 images (JPG/PNG)
- [ ] Rename: `project1.jpg`, `project2.jpg`, etc.
- [ ] Copy to `/img/` folder
- [ ] Minimum size: 400x300px
- [ ] File size: < 500KB each (TinyPNG)

## STEP 3: HOME PAGE (index.html)
- [ ] Edit hero title (text-reveal-word spans)
- [ ] Edit hero subtitle
- [ ] Update CTA button text if needed
- [ ] Edit about preview section

## STEP 4: ABOUT PAGE (about.html)
- [ ] Update story section
- [ ] Update approach section
- [ ] Update skills list
- [ ] Update team description

## STEP 5: CONTACT PAGE (contact.html)
- [ ] Update email address
- [ ] Update phone number
- [ ] Update office address
- [ ] Update business hours
- [ ] Update social media links

## STEP 6: BRANDING
- [ ] Change "CLAV" logo in all 5 HTML files
- [ ] Update footer copyright year
- [ ] Update footer links

## STEP 7: COLORS & STYLING
- [ ] Open `style.css` → `:root {`
- [ ] Change `--text-accent` (primary highlight color)
- [ ] Change `--bg-primary` if needed
- [ ] Change other colors to match branding

## STEP 8: ANIMATIONS (OPTIONAL)
- [ ] Open `script.js` → `const animConfig = {`
- [ ] Adjust `cursorSpeed` if desired (0.05-0.3)
- [ ] Adjust `lenisSmoothness` if desired (1-2)
- [ ] Adjust `magneticForce` if desired (0.1-0.5)

## STEP 9: BROWSER TESTING
- [ ] Open `index.html` in Chrome
- [ ] Verify all images load
- [ ] Check all text is correct
- [ ] Test smooth scroll
- [ ] Test custom cursor
- [ ] Test hover effects
- [ ] Test buttons/links

## STEP 10: MOBILE TESTING
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar (Ctrl+Shift+M)
- [ ] Test iPhone 12/14 view
- [ ] Test iPad view
- [ ] Test Android view
- [ ] Check layout, spacing, touch targets

## STEP 11: PAGE NAVIGATION TESTING
- [ ] Test Home → Work navigation
- [ ] Test Work → Project Detail
- [ ] Test Project Detail → Work
- [ ] Test About page load
- [ ] Test Contact page load & form
- [ ] Test all navbar links

## STEP 12: CONSOLE ERRORS
- [ ] Open F12 → Console tab
- [ ] Refresh page (F5)
- [ ] Check for red errors
- [ ] Fix any errors found
- [ ] Verify no warnings related to missing files

## STEP 13: PERFORMANCE
- [ ] Check loading screen appears
- [ ] Check loading screen disappears after 2s
- [ ] Open Network tab in F12
- [ ] Check total load time < 3 seconds
- [ ] Compress images if > 500KB

## STEP 14: CROSS-BROWSER
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test in Mobile Chrome

---

## 🐛 COMMON MISTAKES & FIXES

| Problem | Cause | Solution |
|---------|-------|----------|
| Images not loading | Wrong filename | Filename in `script.js` must EXACTLY match file in `/img/` |
| Project not on work page | Forgot to add to projects array | Edit `const projects` in `script.js` |
| Text invisible | Color matches background | Edit CSS variables for contrast |
| Animations slow | Animation config too high | Lower `cursorSpeed` in `animConfig` |
| Form not working | JavaScript error | Check F12 console for errors |
| Smooth scroll broken | Lenis not loading | Refresh page, check internet |
| Mobile layout broken | Browser cache | Clear cache (Ctrl+Shift+Del) |
| Links not working | Wrong paths | Ensure paths start with `index.html`, `work.html`, etc. |

---

## 📋 FILE CHECKLIST

| File | Status | Notes |
|------|--------|-------|
| `index.html` | ✅ Ready | Edit hero text only |
| `work.html` | ✅ Ready | Auto-generated from project data |
| `project.html` | ✅ Ready | Auto-generated from project data |
| `about.html` | ✅ Ready | Edit text sections |
| `contact.html` | ✅ Ready | Edit email/phone/address |
| `style.css` | ✅ Ready | Edit colors only |
| `script.js` | ✅ Ready | Edit project data & animations |
| `/img/` folder | ⚠️ Required | Add 6+ project images |

---

## 🚀 DEPLOYMENT OPTIONS

### Option 1: Netlify (RECOMMENDED)
```
1. Zip entire Clav-Portofolio folder
2. Go to app.netlify.com/drop
3. Drag & drop the zip file
4. Website is LIVE! ✅
```

### Option 2: Vercel
```
1. Create account at vercel.com
2. Connect GitHub account
3. Push folder to GitHub
4. Auto-deploys on push
```

### Option 3: GitHub Pages
```
1. Create repo on GitHub
2. Push to GitHub
3. Enable Pages in Settings
4. Select main branch
```

### Option 4: Traditional Hosting
```
1. Connect via FTP
2. Upload all files to root
3. Ensure index.html is in root
4. Website is LIVE!
```

---

## ✨ PRO TIPS FOR QUALITY

1. **Image Quality**
   - Use high-res screenshots (1200x900px minimum)
   - Compress before upload (TinyPNG.com)
   - Consistent aspect ratio

2. **Color Scheme**
   - Choose 2-3 accent colors maximum
   - Ensure high contrast for readability
   - Use coolors.co for palette inspiration

3. **Performance**
   - Keep total load time under 3 seconds
   - Compress all images
   - Minimize custom fonts

4. **Testing**
   - Test on real devices, not just emulator
   - Test all pages and transitions
   - Test contact form submission
   - Test on slow internet (3G)

5. **Backup**
   - Keep local backup
   - Use Git for version control
   - Test changes on staging before deploy

---

## ✅ FINAL PRE-DEPLOYMENT CHECKLIST

### Content
- [ ] All project data entered in `script.js`
- [ ] All images present in `/img/` folder
- [ ] No typos in any text
- [ ] Email/phone/address correct
- [ ] Social media links valid
- [ ] All pages tested and working

### Design
- [ ] Colors match branding
- [ ] Mobile layout looks good
- [ ] Responsive on all screen sizes
- [ ] No layout shifts or glitches
- [ ] Buttons properly positioned

### Functionality
- [ ] All links work
- [ ] Navigation smooth
- [ ] Custom cursor visible
- [ ] Smooth scroll working
- [ ] Animations play
- [ ] Contact form works
- [ ] No console errors

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images optimized
- [ ] No broken assets
- [ ] Loading screen appears and disappears

### Cross-Browser
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Works on mobile browsers

---

## 📞 QUICK DEBUG

If something isn't working:

1. **Open DevTools:** F12
2. **Check Console:** Look for red errors
3. **Check Network:** Look for 404 errors on images
4. **Clear Cache:** Ctrl+Shift+Del
5. **Refresh:** Ctrl+F5 (hard refresh)
6. **Copy error:** Share error message for help

---

## 🎉 YOU'RE READY TO DEPLOY!

Once all checkboxes are complete, your website is production-ready!

**Deployment Time:** < 5 minutes  
**Expected Result:** Live professional portfolio website  
**Next:** Monitor performance and gather feedback

---

**Last Updated:** May 5, 2026  
**Version:** 2.0 Premium  
**Status:** Production Ready ✅
