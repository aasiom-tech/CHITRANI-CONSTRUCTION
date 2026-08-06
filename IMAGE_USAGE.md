# CHITRANI CONSTRUCTION — IMAGE ASSET USAGE MAP

## 1. Global Image Asset Inventory & Usage Rules

| Asset Filename | Format & Size | Current Usage / Component | Approved Page & Context | Classification | Reuse Rules |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `chitrani-construction-hero.png` | PNG (520 KB) | `Hero.tsx` | Home Hero background ONLY | Real Representative Photo | **Exclusive to Home Hero.** Never reuse in other sections. |
| `chitrani-construction-capability.png` | PNG (881 KB) | `CompanyIntroPreview.tsx`, `About.tsx` | About preview / Company Overview ONLY | Real Representative Photo | Allowed ONLY on About page/section. |
| `construction-contracting-capability.png` | PNG (881 KB) | `BusinessAreas.tsx` | Home "Construction Contracting" card ONLY | Real Representative Photo | **Exclusive to Contracting Capability.** |
| `concrete-boom-placer-rental-capability.png` | PNG (1,090 KB) | `BusinessAreas.tsx` | Home "Concrete Boom Placer Rental" card ONLY | Real Representative Photo | **Exclusive to Boom Placer Capability Card.** |
| `putzmeister-m42-boom-placer.jpeg` | JPEG (1,090 KB) | `EquipmentPage.tsx`, `EquipmentDetailPage.tsx` | Equipment Showcase & Putzmeister M42-5 Detail Page | Real Machinery Photo | Reused ONLY between equipment showcase and Putzmeister M42-5 detail page. |
| `construction-company-about.jpeg` | JPEG (388 KB) | `AboutPage.tsx` | About Page header / company structure | Real Representative Photo | Exclusive to About page body. |

---

## 2. Image Rendering & Performance Standards

1. **Lazy Loading & Decoding:**
   All non-hero images MUST declare `loading="lazy"` and `decoding="async"`.
2. **Explicit Dimensions:**
   All image containers MUST define explicit aspect ratio or height (`h-60 sm:h-64`, `aspect-[4/3]`) with `overflow: hidden`.
3. **Responsive Object Positioning:**
   - Hero background: `object-fit: cover; object-position: center center;`
   - Capability helmet: `object-fit: cover; object-position: 42% 70%;` (Mobile scale `1.03`, Desktop scale `1.06`)
   - Boom placer machine: `object-fit: cover; object-position: center center;`
4. **Descriptive Accessibility Alt Text:**
   Every `<img>` element MUST have specific, descriptive alt text explaining the scene (e.g. *"Chitrani Construction safety helmet, structural blueprints and digital building model at an active construction site"*).

---

## 3. Duplicate Image Usage Audit Summary

- ✅ **Home Hero:** `chitrani-construction-hero.png` used strictly on Home Hero.
- ✅ **Capability 1:** `construction-contracting-capability.png` used strictly on Contracting card.
- ✅ **Capability 2:** `concrete-boom-placer-rental-capability.png` used strictly on Boom Placer card.
- ✅ **Equipment Showcase:** `putzmeister-m42-boom-placer.jpeg` used strictly on Putzmeister M42-5 equipment pages.
- ✅ **No Generic Placeholders:** Zero broken imports, zero generic placeholder stock images reused across unrelated sections.
