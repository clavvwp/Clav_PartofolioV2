# 🎨 CLAV PREMIUM PORTFOLIO v2.0 - SETUP GUIDE

**Edition:** Multi-page Premium  
**Status:** Production Ready ✅  
**Created:** May 5, 2026

---

## 🚀 QUICK START (5 MENIT)

### 1. Edit Project Data (PALING PENTING!)

Buka **`script.js`** → cari `const projects = [`

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project Name",    // ← UBAH NAMA
        category: "design",            // ← design atau development
        year: "2024",                  // ← UBAH TAHUN
        image: "img/project1.jpg",     // ← Nama file gambar
        description: "...",            // ← UBAH DESKRIPSI
        role: "Design & Dev"           // ← UBAH ROLE
    },
    // Tambah/kurangi sesuai project Anda
];
```

### 2. Tambah Gambar

1. Siapkan 6 gambar (JPG/PNG, min 400x300px)
2. Rename: `project1.jpg`, `project2.jpg`, dst...
3. Copy ke folder `/img/`

### 3. Edit Teks Halaman

**Home:** Edit di `index.html` (hero title, subtitle)  
**About:** Edit di `about.html` (story, skills)  
**Contact:** Edit di `contact.html` (email, phone)

### 4. Ubah Warna

Buka **`style.css`** → `:root {` → ganti warna

```css
--text-accent: #00ff00;    /* Highlight color */
--bg-primary: #0a0a0a;    /* Background */
```

### 5. Test!

Buka `index.html` di browser → cek semua berfungsi ✓

---

## 📁 STRUKTUR FILE

```
Clav-Portofolio/
├── index.html          ← HOME page
├── work.html           ← WORK page (all projects)
├── project.html        ← PROJECT detail page
├── about.html          ← ABOUT page
├── contact.html        ← CONTACT page
├── style.css           ← ALL styling
├── script.js           ← ALL logic & PROJECT DATA
└── img/                ← Gambar project (project1.jpg, dst...)
```

---

## 🎯 HALAMAN-HALAMAN

| Halaman | Fungsi | Edit? |
|---------|--------|-------|
| **index.html** | Home - hero + featured projects | ✅ Hero text |
| **work.html** | Semua projects + filter | ❌ Auto dari script.js |
| **project.html** | Detail project | ❌ Auto dari script.js |
| **about.html** | About & skills | ✅ Teks about |
| **contact.html** | Contact form + info | ✅ Email, phone |

---

## 🎨 CUSTOMIZATION

### UBAH WARNA (Most Common)

File: `style.css` → `:root {`

```css
/* Background */
--bg-primary: #0a0a0a;      /* Warna latar utama (gelap) */
--bg-secondary: #111111;    /* Warna latar secondary */

/* Text */
--text-primary: #ffffff;    /* Teks utama (putih) */
--text-accent: #00ff00;     /* Warna highlight/accent (PENTING!) */
--text-secondary: #999999;  /* Teks secondary (abu) */

/* Borders */
--border-color: #222222;    /* Warna garis/border */
```

**Rekomendasi warna accent:** `#00ff00` (hijau), `#ffd700` (gold), `#00d9ff` (cyan), `#ff6b6b` (merah)

### UBAH ANIMASI SPEED

File: `script.js` → `const animConfig = {`

```javascript
cursorSpeed: 0.12,              // 0.05 = very smooth, 0.3 = snappy
cursorFollowerSpeed: 0.06,      // Slower = more lag effect
lenisSmoothness: 1.2,          // 1-2 range
hoverScaleAmount: 1.05,        // 1.05 = 5% zoom, 1.1 = 10%
magneticForce: 0.3             // 0.1-0.5 range
```

### UBAH LOGO/BRAND NAME

Cari "CLAV" di semua file HTML dan ganti dengan brand Anda:
- `index.html`
- `work.html`
- `about.html`
- `contact.html`
- `project.html`

### UBAH HERO TITLE

File: `index.html` → `<h1 class="hero-title">`

```html
<span class="text-reveal-word">Creating</span>
<span class="text-reveal-word">Digital</span>
<span class="text-reveal-word">Experiences</span>
```

### UBAH CONTACT INFO

File: `contact.html`

```html
<a href="mailto:your-email@domain.com">your-email@domain.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

---

## ⚡ KEY FEATURES

✅ **Multi-page Navigation** - Home, Work, About, Contact  
✅ **Smooth Scroll** - Lenis integration  
✅ **Custom Cursor** - Lerp-based smooth follower  
✅ **Project Filtering** - By category (Design/Development)  
✅ **Project Details** - Dedicated detail page for each project  
✅ **Loading Screen** - 2-second auto-hide  
✅ **Magnetic Buttons** - Buttons attracted to mouse  
✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **Contact Form** - Simple form handling  
✅ **Premium Animations** - GSAP + CSS animations  
✅ **Dark Theme** - Professional dark styling  
✅ **All Editable** - Project data, colors, text, animations

---

## 🐛 TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| **Images not showing** | Check filename in `/img/` matches `script.js` EXACTLY |
| **Project not visible on work page** | Edit `const projects` in `script.js` |
| **Animations slow** | Lower `cursorSpeed` in `animConfig` |
| **Smooth scroll not working** | Refresh page (Ctrl+F5) |
| **Navbar not showing** | Check `navbar` div in HTML |
| **Form not submitting** | Check console (F12) for errors |
| **Mobile layout broken** | Clear cache (Ctrl+Shift+Del) |
| **Cursor not visible** | Check CSS and console for errors |

### Debug:
Open F12 → Console tab, run:
```javascript
console.log('Projects:', projects);
console.log('Current Page:', currentPage);
console.log('Loaded:', window.Lenis ? 'Yes' : 'No');
```

---

## 📱 RESPONSIVE

Website responsive untuk:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (480px - 768px)

Test dengan F12 → Toggle Device Toolbar (Ctrl+Shift+M)

---

## 🚀 DEPLOYMENT

### **Netlify (Recommended)**
1. Zip folder
2. Go to https://app.netlify.com/drop
3. Drag & drop
4. Live! ✅

### **Vercel**
1. Create account at vercel.com
2. Connect with GitHub or upload
3. Auto-deploy

### **Traditional Hosting**
1. Upload via FTP
2. Ensure `index.html` in root
3. Live!

---

## ✅ PRE-DEPLOY CHECKLIST

- [ ] All images in `/img/` folder
- [ ] Image filenames match `script.js`
- [ ] No typos in text
- [ ] Email/phone/address updated
- [ ] Colors look good
- [ ] Mobile responsive OK
- [ ] No console errors (F12)
- [ ] Loading screen works
- [ ] All links functional
- [ ] Form works
- [ ] Smooth scroll works
- [ ] Custom cursor works

---

## 💡 PRO TIPS

1. **Backup first** → Copy folder before editing
2. **Edit one thing at a time** → Test each change
3. **Clear cache** → Ctrl+Shift+Del if changes don't show
4. **Compress images** → Use TinyPNG for smaller files
5. **Test on real devices** → Not just emulator
6. **Mobile first** → Test mobile before desktop
7. **Keep it fast** → Aim for < 3s load time

---

## 📚 CUSTOMIZATION REFERENCE

### CSS Variables (:root in style.css)

```css
/* Colors - edit these for theme change */
--bg-primary: #0a0a0a;
--text-primary: #ffffff;
--text-accent: #00ff00;
--border-color: #222222;

/* Spacing */
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;

/* Border Radius */
--radius-md: 1rem;
--radius-lg: 1.5rem;

/* Transitions */
--transition-normal: 0.3s ease-out;
```

### Project Object (script.js)

```javascript
{
    id: 1,                           // Unique ID
    title: "Project Name",           // Display name
    category: "design",              // design or development
    year: "2024",                    // Year
    image: "img/project1.jpg",      // Main image path
    description: "Project desc",    // Long description
    gallery: [...],                 // Gallery images array
    role: "Design & Dev"            // Your role
}
```

---

## 📞 SUPPORT

1. Read error messages in F12 console
2. Check if filenames match exactly
3. Verify all images in `/img/` folder
4. Ensure no typos in code

---

## ✨ YOU'RE READY!

Website is fully customizable and production-ready. Enjoy building! 🎉

**Last Updated:** May 5, 2026
