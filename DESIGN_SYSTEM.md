# CHITRANI CONSTRUCTION — TERRACOTTA DESIGN SYSTEM SPECIFICATION

## 1. Color System & Palette Tokens

| Token Name | Hex Code | CSS Custom Property | Usage & Component Role |
| :--- | :--- | :--- | :--- |
| **Primary Terracotta** | `#C96F1B` | `--color-primary` | Primary CTA buttons, brand icon backgrounds, highlighted heading accents ("Maharashtra"), active navigation indicators, key icons |
| **Primary Hover** | `#B35E17` | `--color-primary-hover` | Interactive hover states for primary buttons and CTA links |
| **Warm Cream** | `#EADBC8` | `--color-background` | Global body background canvas, Hero overlay tint, Business Areas backdrop, Featured Equipment backdrop |
| **Sandstone** | `#D1C5B0` | `--color-background-alt` | Alternate section background, neutral structural fill |
| **Earth Brown** | `#6B5E4E` | `--color-secondary` / `--color-body` | Primary body text, descriptions, technical specification labels, subheadings |
| **Charcoal** | `#3D352D` | `--color-heading` | Main section headings (H1, H2, H3), logo title text, Footer background canvas |
| **Pure White** | `#FFFFFF` | `--color-surface` | Card background containers, Company Intro section, Why Chitrani section, Featured Project section, Industries section |
| **Soft Cream** | `#F5EEE5` | `--color-surface-soft` | Core Services backdrop, Safety & Quality backdrop, technical specification panel background |
| **Border Soft** | `#E8DDD0` | `--color-border` | Global card borders, section dividing lines, table boundaries |
| **Input Border** | `#D8CCBC` | `--color-input-border` | Form input borders, select dropdown outlines |
| **Placeholder / Muted** | `#9D9287` | `--color-placeholder` | Input placeholder text, metadata captions, inactive scrollbar thumb |
| **Footer Secondary Text**| `#D8CCBC` | `--color-footer-text` | Footer body text, office address text, secondary footer links |
| **Success Background** | `#E8F4EA` | `--color-success-background` | Success alert containers, verified badge background |
| **Success Text** | `#2E7D32` | `--color-success-text` | Success text labels and checkmarks |

---

## 2. Typography System

### Font Families
- **Headings (`--font-heading`):** `Space Grotesk`, sans-serif (Weights: 600, 700) — Used for H1-H6 headings, section titles, card titles, nav links.
- **Body & Controls (`--font-body`):** `Inter`, sans-serif (Weights: 400, 500, 600) — Used for body copy, paragraphs, form controls, button labels.
- **Equipment Values (`--font-specs`):** `Manrope`, sans-serif (Weights: 600, 700) — Used specifically for numerical technical specifications (reach, capacity, tonnage).

### Type Scale & Hierarchy

| Level | Size (Mobile / Desktop) | Font / Weight | Tracking / Leading | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **H1 Hero** | 36px / 58px | Space Grotesk 600 | `-0.02em` / `1.1` | Main page hero titles (Max width: 760px) |
| **H2 Section** | 24px / 36px | Space Grotesk 600 | `-0.015em` / `1.15` | Section titles across all pages |
| **H3 Card** | 20px / 24px | Space Grotesk 600 | `-0.01em` / `1.25` | Capability, service, project card titles |
| **Sub-heading** | 16px / 18px | Space Grotesk 600 | `0.0em` / `1.4` | Modal headers, feature labels |
| **Body Large** | 15px / 18px | Inter 400 | `0.0em` / `1.7` | Hero description, lead paragraphs |
| **Body Standard** | 14px / 16px | Inter 400 | `0.0em` / `1.65` | Standard content paragraphs, card body |
| **Equipment Specs** | 14px / 16px | Manrope 700 | `0.01em` | Technical numerical values |
| **Button Text** | 12px / 14px | Space Grotesk 600 | `0.05em` uppercase | Interactive CTA buttons, link buttons |
| **Caption / Small** | 11px / 12px | Inter 500 | `0.02em` | Timestamps, metadata, category tags |

---

## 3. Button System

### 1. Primary Button (`.btn-primary`)
- **Background:** `#C96F1B` (Primary Terracotta)
- **Hover Background:** `#B35E17`
- **Text Color:** `#FFFFFF` (Pure White for high contrast compliance)
- **Border Radius:** `12px`
- **Height / Padding:** Minimum `44px` touch target, `12px 24px` padding
- **Focus State:** `outline: 2px solid #C96F1B`, `outline-offset: 2px`
- **Shadow:** `0 10px 30px rgba(201, 111, 27, 0.25)`

### 2. Secondary Button (`.btn-secondary`)
- **Background:** `#FFFFFF` (White) or `transparent`
- **Border:** `2px solid #C96F1B`
- **Text Color:** `#C96F1B`
- **Hover Background:** `#C96F1B` (Text `#FFFFFF`)
- **Border Radius:** `12px`
- **Height / Padding:** Minimum `44px` touch target, `10px 24px` padding

### 3. Text Link Button (`.btn-text`)
- **Background:** `transparent`
- **Text Color:** `#C96F1B`
- **Hover Color:** `#B35E17`
- **Icon:** Arrow or chevron right, moves `+4px` right on hover.

---

## 4. Card System (`.card-ds`)

- **Surface:** `#FFFFFF` (White)
- **Border:** `1px solid #E8DDD0` (Soft Border)
- **Border Radius:** `18px` – `20px`
- **Shadow:** `0 10px 30px rgba(61, 53, 45, 0.05)`
- **Hover State:** `translateY(-4px)` with shadow `0 16px 38px rgba(61, 53, 45, 0.11)` and border `rgba(201, 111, 27, 0.55)`
- **Image Container:** `overflow: hidden`, `border-radius: 18px 18px 0 0`, max image zoom `scale(1.055)`
- **Touch Devices:** Hover lift disabled on touch-only devices via `@media (hover: hover) and (pointer: fine)`

---

## 5. Home Section Visual Color Rhythm

| Section # | Section Name | Background Color | Surface / Card Color | Accents & Key Colors |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Hero** | Warm Cream Overlay (`#EADBC8` gradient) | `#F5EEE5` Category Badge | `#3D352D` Heading, `#C96F1B` Highlight, `#6B5E4E` Body |
| **02** | **Company Intro** | Pure White (`#FFFFFF`) | `#F5EEE5` Label / `#FFFFFF` Frame | `#3D352D` Heading, `#6B5E4E` Body, `#C96F1B` Button |
| **03** | **Two Core Capabilities** | Warm Cream (`#EADBC8`) | Pure White (`#FFFFFF`) | `#3D352D` Heading, `#6B5E4E` Body, `#C96F1B` Hover Border & Buttons |
| **04** | **Why Chitrani** | Pure White (`#FFFFFF`) | Pure White (`#FFFFFF`) Lighter Feature Style | `#C96F1B` Top Accent Line, `#F5EEE5` Icon Circle, `#3D352D` Heading |
| **05** | **Core Services Preview** | Soft Cream (`#F5EEE5`) | Pure White (`#FFFFFF`) | `#C96F1B` Small Labels, `#3D352D` Headings, `#C96F1B` Buttons |
| **06** | **Featured Project** | Pure White (`#FFFFFF`) | `#F5EEE5` Spec Panel / `#3D352D` Technical Panel | `#F6E7D4` / `#C96F1B` Badge, `#3D352D` Heading, `#C96F1B` Button |
| **07** | **Featured Equipment** | Warm Cream (`#EADBC8`) | Pure White (`#FFFFFF`) Card / `#F5EEE5` Specs | `Manrope 700` `#3D352D` Numbers, `#6B5E4E` Labels, `#C96F1B` Button |
| **08** | **Industries Preview** | Pure White (`#FFFFFF`) | Pure White (`#FFFFFF`) | `#C96F1B` Icons & Hover Border, `#3D352D` Heading |
| **09** | **Safety & Quality** | Soft Cream (`#F5EEE5`) | Pure White (`#FFFFFF`) / `#F5EEE5` Principles | `#C96F1B` Checkmarks, `#3D352D` Heading, `#6B5E4E` Copy |
| **10** | **Final CTA** | Pure White (`#FFFFFF`) | `#C96F1B` Prominent Feature Panel | `#FFFFFF` Heading & Primary Button, Transparent `#FFFFFF` Call Button |
| **Footer** | **Global Footer** | Charcoal (`#3D352D`) | `rgba(201,111,27,0.14)` GST Badge | `#FFFFFF` Headings, `#D8CCBC` Text, `#C96F1B` Link Hover |

---

## 6. Shared Smart Header System

### Header States & Scroll Thresholds
- `type HeaderState = "expanded" | "compact" | "hidden"`

1. **Expanded State (`scrollY <= 60px`):**
   - Centered floating bar (`w-[94%] max-w-[1440px]`, `top-[18px]`, `rounded-[18px]`, `h-[88px]`).
   - White surface (`bg-white/94 backdrop-blur-md`), soft border (`#E8DDD0`), soft shadow (`0 10px 30px rgba(61,53,45,0.08)`).
   - Shows `#C96F1B` logo mark, `#3D352D` title, `#6B5E4E` subtitle, desktop nav, and `#C96F1B` Request Quote CTA button.

2. **Compact State (`60px < scrollY <= 180px` or scrolling upward):**
   - Full-width pinned bar (`w-full`, `top-0`, `rounded-none rounded-b-[16px]`, `h-[64px]`).
   - Desktop brand collapse: Logo mark collapses smoothly (`opacity-0 max-w-0 scale-90`), subtitle collapses smoothly (`opacity-0 max-h-0`), keeping `CHITRANI CONSTRUCTION` clearly visible.
   - Request Quote CTA button reduces to height `40px`.

3. **Hidden State (`scrollY > 180px` and downward scroll delta > 10px):**
   - Hides smoothly via `transform: translateY(-110%)` with a `320ms cubic-bezier(0.22, 1, 0.36, 1)` transition.

### Interaction Overrides & Focus Management
- **Interaction Keep-Alive:** Header remains visible (compact or expanded) whenever the mobile drawer is open, mouse pointer is hovering over the header, or keyboard focus enters any element inside the header (`onFocus` / `onBlur`).
- **Route Navigation:** On location change, the header automatically restores to visible state (`expanded` if at top, `compact` otherwise) and closes the mobile drawer.
- **Accessibility:** Active nav link marked with `aria-current="page"` and a smooth animated `#C96F1B` bottom underline. Keyboard focus instantly reveals the header.

---

## 7. Accessibility & Motion Rules

- **WCAG Target:** AA/AAA compliance across all interactive elements.
- **Focus Rings:** `outline: 2px solid #C96F1B`, `outline-offset: 2px` on all interactive links, buttons, and inputs.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables scale transforms and reduces transition duration to `0.01ms`.


