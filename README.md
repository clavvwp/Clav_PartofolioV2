# Clav Premium Portfolio Website

**Version:** 2.0 (Multi-page Premium Edition)  
**Status:** Production Ready ✅  
**Quality:** Awwwards Inspiration Level

A professional, multi-page portfolio website with premium animations, smooth interactions, and mobile-responsive design. Built with vanilla HTML, CSS, and JavaScript with GSAP and Lenis.

---

## 🌟 Features

### ✨ **Core Features**
- 🖱️ Custom cursor with lerp-based smooth following
- 📜 Smooth scroll with Lenis library integration
- 🎬 Premium loading screen (2-second auto-hide)
- 🧭 Sticky navbar with active link indicators
- 🎨 Dark theme with accent color customization
- ⚡ Fast load times & optimized performance
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Semantic HTML for accessibility

### 📄 **Multi-Page Structure**
- **Home Page** - Hero section with featured projects
- **Work Page** - All projects with filter system (Design/Development)
- **Project Detail** - Full project showcase with gallery
- **About Page** - Team story and skills section
- **Contact Page** - Contact form with business info
- **Smooth Page Transitions** - Fade & scale animations between pages

### 🎯 **Interactive Elements**
- Magnetic buttons attracted to mouse cursor
- Hover image zoom animations
- Text reveal animations on page load
- Scroll reveal animations with GSAP ScrollTrigger
- Smooth project filtering
- Contact form with validation
- Mobile-responsive navigation menu

### 🎨 **Design & Animation**
- Premium dark theme (customizable)
- Accent color highlight system
- CSS Variables for easy theming
- Staggered text animations
- Parallax effects (light)
- Smooth transitions & easing
- No heavy animations - performance focused

---

## 📁 Project Structure

```
Clav-Portofolio/
├── 📄 index.html           # Home page
├── 📄 work.html            # Work/Projects page
├── 📄 project.html         # Project detail page
├── 📄 about.html           # About page
├── 📄 contact.html         # Contact page
├── 🎨 style.css            # All styling (CSS variables)
├── ⚙️ script.js            # All logic & project data
├── 📁 img/                 # Project images
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
├── 📄 SETUP-GUIDE.md       # Quick setup instructions
├── 📄 CHECKLIST.md         # Pre-deployment checklist
└── 📄 README.md            # This file
```

---

## 🚀 Quick Start (5 Minutes)

### 1. Edit Project Data

**File:** `script.js` (Line ~32)

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",      // ← Edit
        category: "design",              // design or development
        year: "2024",                    // ← Edit
        image: "img/project1.jpg",       // ← Edit
        description: "Project description...", // ← Edit
        role: "Your Role"                // ← Edit
    },
    // Add/remove projects as needed
];
```

### 2. Add Images

1. Prepare 6+ images (JPG/PNG, min 400x300px)
2. Rename to: `project1.jpg`, `project2.jpg`, etc.
3. Copy to `/img/` folder

### 3. Edit Text

**Home Page:** `index.html`
- Hero title: `<span class="text-reveal-word">`
- Hero subtitle: `<p class="hero-subtitle">`

**About Page:** `about.html`
- Update story, approach, skills sections

**Contact Page:** `contact.html`
- Update email, phone, address, hours

### 4. Customize Colors

**File:** `style.css` (Line ~16)

```css
:root {
    --text-accent: #00ff00;         /* Primary accent color */
    --bg-primary: #0a0a0a;          /* Background */
    --text-primary: #ffffff;        /* Text color */
}
```

### 5. Open & Test

```bash
# Simply open in browser
index.html
```

---

## 🎨 Customization Guide

### Change Colors

Edit CSS variables in `style.css` (`:root {`)

```css
/* Main theme colors */
--bg-primary: #0a0a0a;              /* Background - dark */
--text-primary: #ffffff;            /* Text - white */
--text-accent: #00ff00;             /* Highlight - neon green */
--text-secondary: #999999;          /* Secondary text - gray */

/* Or use these popular accents:
   #ffd700 (gold)
   #00d9ff (cyan)
   #ff6b6b (red)
   #00ff88 (mint green)
*/
```

### Change Animation Speed

Edit `script.js` (`const animConfig = {`)

```javascript
const animConfig = {
    cursorSpeed: 0.12,              // 0.05=smooth, 0.3=snappy
    cursorFollowerSpeed: 0.06,      // Lower=more lag
    lenisSmoothness: 1.2,          // 1-2 range
    loadingDuration: 2000,         // ms
    hoverScaleAmount: 1.05,        // 1.05=5% zoom
    magneticForce: 0.3             // 0.1-0.5
};
```

### Change Logo/Brand

Find and replace "CLAV" in all HTML files:
- `index.html`
- `work.html`
- `project.html`
- `about.html`
- `contact.html`

### Change Contact Info

**File:** `contact.html`

```html
<a href="mailto:your-email@domain.com">your-email@domain.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<p>Your Address<br>City, Country</p>
```

### Change Fonts

**File:** `style.css` (`:root {`)

```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

## 📱 Responsive Design

Optimized for all screen sizes:

| Device | Breakpoint | Status |
|--------|-----------|--------|
| Desktop | 1920px+ | ✅ Optimized |
| Tablet | 768px-1024px | ✅ Optimized |
| Mobile | 480px-768px | ✅ Optimized |
| Small Mobile | <480px | ✅ Optimized |

**Test:** Press F12 → Toggle Device Toolbar (Ctrl+Shift+M)

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not loading | Ensure filename in `script.js` EXACTLY matches file in `/img/` |
| Project missing on work page | Add to `const projects` array in `script.js` |
| Animations slow | Lower `cursorSpeed` in `animConfig` |
| Text not visible | Check CSS color contrast |
| Smooth scroll broken | Refresh page (Ctrl+F5), check internet |
| Form not working | Open F12 Console for errors |
| Mobile layout broken | Clear cache (Ctrl+Shift+Del) |

**Debug:** Open F12 → Console and run:
```javascript
console.log('Projects:', projects);
console.log('Page:', currentPage);
```

---

## ⚡ Performance Tips

1. **Optimize Images**
   - Use TinyPNG.com to compress
   - Target: < 500KB per image
   - Recommended: 1200x900px resolution

2. **Keep Loading Fast**
   - Load time target: < 3 seconds
   - Use CSS transform & opacity only
   - Lazy load images if needed

3. **Mobile First**
   - Test on real devices
   - Check touch targets are > 44px
   - Test on slow 3G connection

4. **Monitor Performance**
   - Use Chrome DevTools Lighthouse
   - Check Network tab for large files
   - Monitor Console for errors

---

## 🚀 Deployment

### **Netlify (Recommended)**
```
1. Zip folder
2. Go to app.netlify.com/drop
3. Drag & drop
4. Live! ✅
```

### **Vercel**
```
1. vercel.com
2. Connect GitHub
3. Auto-deploy on push
```

### **GitHub Pages**
```
1. Create GitHub repo
2. Push files
3. Settings → Pages
4. Select main branch
```

### **Traditional Hosting**
```
1. Upload via FTP
2. Ensure index.html in root
3. Live!
```

---

## ✅ Pre-Deployment Checklist

- [ ] All images in `/img/`
- [ ] Image filenames match `script.js`
- [ ] No typos in text
- [ ] Email/phone updated
- [ ] Colors look good
- [ ] Mobile responsive ✓
- [ ] No console errors (F12)
- [ ] All links work
- [ ] Form works
- [ ] Load time < 3s

See `CHECKLIST.md` for complete list.

---

## 📚 File Reference

| File | Purpose | Editable? |
|------|---------|-----------|
| `index.html` | Home page | ✅ Hero text |
| `work.html` | Work page | ❌ Auto |
| `project.html` | Project detail | ❌ Auto |
| `about.html` | About page | ✅ Text |
| `contact.html` | Contact page | ✅ Info |
| `style.css` | Styling | ✅ Colors |
| `script.js` | Logic & Data | ✅ Projects |

---

## 💡 Pro Tips

1. **Quality First** - High-res images make huge difference
2. **Color Consistency** - Use 2-3 colors max
3. **Fast Loading** - Compress images, minimize animations
4. **Mobile Testing** - Test on real devices, not just browser
5. **Keep It Simple** - Don't overuse animations

---

## 🔧 Project Data Structure

```javascript
{
    id: 1,                           // Unique ID
    title: "Project Name",           // Display name
    category: "design",              // design or development
    year: "2024",                    // Year
    image: "img/project1.jpg",      // Main image path
    description: "Project desc",    // Long description
    gallery: ["img1.jpg", "img2.jpg"],  // Gallery images
    role: "Design & Development"    // Your role
}
```

---

## 📞 Support & Help

- **Check Console:** F12 → Console tab
- **Verify Filenames:** Must match exactly
- **Clear Cache:** Ctrl+Shift+Del
- **Read Docs:** SETUP-GUIDE.md & CHECKLIST.md

---

## 📄 License

This portfolio template is provided as-is for personal use.

---

## 🎉 You're Ready!

Website is production-ready. Customize, test, and deploy!

**Questions?** Check SETUP-GUIDE.md or CHECKLIST.md

---

**Created:** May 5, 2026  
**Version:** 2.0 Premium Multi-page  
**Status:** Production Ready ✅

**Built with:** HTML | CSS | JavaScript | GSAP | Lenis
