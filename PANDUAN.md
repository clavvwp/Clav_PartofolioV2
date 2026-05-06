# PANDUAN EDIT CLAV PREMIUM PORTFOLIO (VERSI 2.0)

**Kualitas:** Premium / Awwwards Level  
**Struktur:** Multi-page (5 halaman)  
**Teknologi:** HTML + CSS + Vanilla JavaScript + GSAP + Lenis

---

## 📋 QUICK START - MULAI DALAM 15 MENIT

Website ini **SIAP JALAN!** Tinggal ubah data project dan gambar Anda.

### Langkah Cepat:
1. Buka `index.html` di browser (double-click)
2. Buka `script.js` → ubah data project (lihat section 1 di bawah)
3. Copy gambar ke folder `/img/` (lihat section 2 di bawah)
4. Refresh browser (Ctrl+F5)
5. Done! ✅

---

## 🎯 YANG HARUS DIUBAH TERLEBIH DAHULU (PRIORITAS)

### 1️⃣ **PROJECT DATA** (PALING PENTING!)
   
   Buka: **`script.js`** → cari `// ===== EDITABLE: PROJECT DATA =====`
   
   ```javascript
   const projects = [
       {
           id: 1,                                    // ID unik (tidak boleh sama)
           title: "Project Name",                    // ← UBAH: Nama project
           year: "2024",                             // ← UBAH: Tahun project
           category: "design",                       // ← UBAH: "design" atau "development"
           image: "img/project1.jpg",                // ← UBAH: nama file gambar
           description: "Project description here",  // ← UBAH: Deskripsi singkat
           role: "Designer & Developer",             // ← UBAH: Role Anda
           tags: ["tag1", "tag2"]                   // ← UBAH: Tag/skill yang digunakan
       },
       {
           id: 2,
           title: "Another Project",
           year: "2023",
           category: "development",
           image: "img/project2.jpg",
           description: "Another project description",
           role: "Full Stack Developer",
           tags: ["React", "Node.js"]
       },
       // ← Tambah/kurangi sesuai kebutuhan
   ];
   ```

   **Cara tambah project:**
   - Copy-paste blok object `{...}` di atas
   - Ubah id, title, year, category, image, description, role, tags
   - Jangan delete tanda koma `,` di akhir setiap object kecuali yang terakhir

   **Catatan penting:**
   - `id` harus unik (1, 2, 3, dst)
   - `category` hanya boleh: `"design"` atau `"development"`
   - `image` harus match dengan file di folder `/img/`
   - Minimum 3 project, recommended 6+ project



### 2️⃣ **GAMBAR PROJECT** (IMPORTANT!)

   **Lokasi folder:** `/img/` (dalam folder Clav-Portofolio)
   
   **Yang harus diubah:**
   - Ganti file gambar dengan gambar project Anda
   - Nama file **HARUS PERSIS SAMA** dengan di `script.js`
   
   **Contoh:**
   ```
   script.js: image: "img/project1.jpg"  →  File: /img/project1.jpg  ✅
   script.js: image: "img/mywork.png"    →  File: /img/mywork.png    ✅
   ```
   
   **Format gambar yang disarankan:**
   - Format: JPG atau PNG
   - Ukuran: minimal 400x300px, recommended 1200x800px
   - Ukuran file: kurang dari 500KB (penting untuk loading cepat!)
   
   **CARA COMPRESS GAMBAR (GRATIS):**
   1. Buka https://tinypng.com
   2. Upload gambar
   3. Download yang sudah di-compress
   4. Gambar lebih kecil, tapi kualitas tetap bagus
   
   **Pro tip:** Gunakan perbandingan aspect ratio 3:2 untuk hasil terbaik di grid

### 3️⃣ **TEKS & KONTEN** 

   Website ini punya **5 halaman:**

   #### A. HOME PAGE (`index.html`)
   ```html
   <!-- ===== EDITABLE: HERO TEXT ===== -->
   <h1>Creating next level digital products</h1>
   
   <!-- ===== EDITABLE: ABOUT SECTION ===== -->
   <p>Bio text, skills, dan call-to-action</p>
   ```

   #### B. WORK PAGE (`work.html`)
   - Otomatis menampilkan semua projects dari `script.js`
   - Filter berdasarkan kategori: All, Design, Development
   - Hover effect: gambar zoom in

   #### C. PROJECT DETAIL PAGE (`project.html`)
   ```html
   <!-- ===== EDITABLE: PROJECT DETAILS ===== -->
   <p>Project description, role, tags, dan gallery</p>
   ```

   #### D. ABOUT PAGE (`about.html`)
   ```html
   <!-- ===== EDITABLE: BIO TEXT ===== -->
   <p>Cerita, pengalaman, dan skill Anda</p>
   ```

   #### E. CONTACT PAGE (`contact.html`)
   ```html
   <!-- ===== EDITABLE: CONTACT FORM ===== -->
   <form>
       <input placeholder="Your Name">
       <input type="email" placeholder="Your Email">
       <textarea placeholder="Your Message"></textarea>
   </form>
   
   <!-- ===== EDITABLE: CONTACT INFO ===== -->
   <a href="mailto:your-email@domain.com">Email</a>
   <a href="tel:+1234567890">Phone</a>
   ```

   **Cara edit:**
   - Buka file HTML masing-masing
   - Cari komentar `<!-- ===== EDITABLE ===== -->`
   - Ubah text yang ada di dalam section tersebut
   - Jangan ubah class/tag, hanya text content



---

## 🎨 CARA UBAH WARNA THEME

Buka: **`style.css`** → cari `/* ===== EDITABLE: COLORS & VARIABLES ===== */`

Di bagian `:root { ... }` Anda akan melihat:

```css
:root {
    /* Warna Background */
    --bg-primary: #0a0a0a;              /* Warna latar utama (gelap) */
    --bg-secondary: #111111;            /* Warna background nomor 2 */
    
    /* Warna Text */
    --text-primary: #ffffff;            /* Warna text utama (putih) */
    --text-secondary: #999999;          /* Warna text secondary (abu) */
    --text-accent: #00ff00;             /* WARNA HIGHLIGHT (ini yang terlihat) ← UBAH INI! */
    
    /* Warna Lainnya */
    --border-color: #333333;            /* Warna garis/border */
    --cursor-color: #ffffff;            /* Warna custom cursor */
}
```

**Cara mengubah warna:**
1. Pilih warna yang Anda suka dari https://colorhexa.com atau https://coolors.co
2. Copy kode HEX warna (contoh: `#ff6b6b`)
3. Paste di nilai variable yang ingin diubah
4. Simpan file dan refresh browser (Ctrl+F5)

**Rekomendasi warna accent (text-accent):**
- `#00ff00` - Neon green (sekarang)
- `#ffd700` - Gold (elegant)
- `#00d9ff` - Cyan (modern)
- `#ff6b6b` - Red (energetic)
- `#00ff88` - Mint (soft)
- `#7c3aed` - Purple (premium)

**Penting:** Pastikan text cukup kontras dengan background untuk readability!

---

## ⚡ CARA UBAH ANIMASI & INTERAKSI

Buka: **`script.js`** → cari `// ===== EDITABLE: ANIMATION CONFIG =====`

```javascript
const animConfig = {
    cursorSpeed: 0.12,              // Seberapa cepat cursor mengikuti mouse
    cursorFollowerSpeed: 0.06,      // Kecepatan lingkaran follower
    lenisSmoothness: 1.2,           // Intensitas smooth scroll
    loadingDuration: 2000,          // Durasi loading screen (ms)
    hoverScaleAmount: 1.05,         // Zoom saat hover (1.05 = 5%)
    magneticForce: 0.3              // Kekuatan magnetic button
};
```

**Penjelasan & cara mengubah:**

| Opsi | Range | Penjelasan |
|------|-------|-----------|
| `cursorSpeed` | 0.05 - 0.3 | **0.05** = super smooth, **0.12** = smooth, **0.3** = snappy |
| `cursorFollowerSpeed` | 0.02 - 0.15 | Semakin kecil = semakin lag/delay |
| `lenisSmoothness` | 1.0 - 2.0 | **1.0** = normal, **1.5** = super smooth |
| `loadingDuration` | 1000 - 3000 | Durasi loading screen dalam millisecond |
| `hoverScaleAmount` | 1.01 - 1.2 | **1.05** = zoom 5%, **1.1** = zoom 10% |
| `magneticForce` | 0 - 0.5 | **0** = no effect, **0.3** = normal |

**Tips animasi:**
- Jika lag, naikkan `cursorSpeed` ke 0.15-0.2
- Jika terlalu cepat, turunkan ke 0.08-0.1
- Untuk scroll yang lebih smooth, naik `lenisSmoothness` ke 1.5


3. Done!

---

## 💡 TIPS CUSTOMIZE DENGAN BAIK

1. **Backup dulu** → Copy folder sebelum edit
2. **Edit satu per satu** → Jangan ubah banyak hal sekaligus
3. **Test di browser** → Buka `index.html` di browser setelah edit
4. **Refresh page** → Jika tidak berubah, tekan Ctrl+F5 (hard refresh)
5. **Check console** → Tekan F12 → Console tab untuk lihat error

---

## 📞 CONTACT UNTUK BANTUAN

Jika ada pertanyaan:
- Cek console browser (F12)
- Baca error message
- Pastikan nama file & path benar

---

**Selamat customize! 🎉**

Terakhir update: May 5, 2026
