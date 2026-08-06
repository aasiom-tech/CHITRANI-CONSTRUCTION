# CHITRANI CONSTRUCTION — DESIGN SYSTEM SPECIFICATION

## 1. Color System & Palette Tokens

| Token Name | Hex Code | Role & Percentage Allocation | Usage Guidelines |
| :--- | :--- | :--- | :--- |
| **Warm Ivory** | `#F9F7F2` | **Background (60%)** | Page background canvas, full-width section backdrops |
| **White** | `#FFFFFF` | **Surface (60%)** | Card surfaces, container background, modal cards |
| **Dark Text** | `#2D2D2D` | **Headings & Primary Text (20%)** | H1-H6 headings, active navigation text, primary button text |
| **Steel Gray** | `#7D7D7D` | **Subtext & Icons (20%)** | Icons, metadata text, border subtle lines |
| **Body Text** | `#5D5D5D` | **Body Content (20%)** | Paragraphs, list items, description copy |
| **Primary Orange** | `#FFB300` | **Brand Accent (15%)** | Primary CTA buttons, active tab indicators, key badges |
| **Primary Hover** | `#E59A00` | **Accent Hover (15%)** | Hover state for primary buttons and interactive links |
| **Construction Yellow** | `#F9C40F` | **Accent Highlight (5%)** | Subtle status dots, badge highlights, equipment accents |
| **Concrete Gray** | `#CFCFCF` | **Secondary Neutral** | Disabled elements, scrollbar thumb, secondary borders |
| **Light Border** | `#E7E7E7` | **Card & Section Dividers** | Card outlines, section dividing borders, table headers |
| **Input Border** | `#D9D9D9` | **Form Input Borders** | Text input outlines, select dropdown borders |
| **Placeholder** | `#999999` | **Input Placeholders** | Form field placeholder text |
| **Footer Link** | `#D0D0D0` | **Footer Link Text** | Footer links and copyright metadata |

---

## 2. Typography System

### Font Families
- **Headings (`--font-heading`):** `Space Grotesk`, sans-serif (Weights: 500, 600, 700)
- **Display Accents (`--font-display`):** `Bebas Neue`, sans-serif (Weight: 400, used for industrial badges, numbers)
- **Body & Controls (`--font-body`):** `Manrope`, `Inter`, sans-serif (Weights: 400, 500, 600, 700)

### Type Scale & Hierarchy

| Level | Size (Mobile / Desktop) | Font / Weight | Tracking / Leading | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **H1 Hero** | 38px / 64px | Space Grotesk 600 | `-0.02em` / `1.05` | Main page hero titles |
| **H2 Section** | 28px / 40px | Space Grotesk 600 | `-0.015em` / `1.15` | Section titles across all pages |
| **H3 Card** | 20px / 24px | Space Grotesk 600 | `-0.01em` / `1.25` | Capability, service, project card titles |
| **Sub-heading** | 16px / 18px | Space Grotesk 500 | `0.0em` / `1.4` | Modal headers, feature labels |
| **Body Large** | 16px / 18px | Manrope 400 | `0.0em` / `1.7` | Hero description, lead paragraphs |
| **Body Standard** | 14px / 16px | Manrope 400 | `0.0em` / `1.65` | Standard content paragraphs, card body |
| **Display Badge** | 11px / 12px | Bebas Neue 400 | `0.08em` uppercase | Short industrial badges, equipment model tags |
| **Button Text** | 12px / 14px | Space Grotesk 600 | `0.05em` uppercase | Interactive CTA buttons, link buttons |
| **Caption / Small** | 11px / 12px | Manrope 500 | `0.02em` | Timestamps, metadata, breadcrumbs |

---

## 3. Button System

### 1. Primary Button (`.btn-primary`)
- **Background:** `#FFB300` (Primary Orange)
- **Hover Background:** `#E59A00`
- **Text Color:** `#2D2D2D` (Dark text for WCAG AAA contrast ratio compliance)
- **Border Radius:** `12px`
- **Height / Padding:** Minimum `44px` touch target, `12px 24px` padding
- **Focus State:** `outline: 2px solid #FFB300`, `outline-offset: 2px`
- **Shadow:** `0 4px 14px rgba(255, 179, 0, 0.25)`

### 2. Secondary Button (`.btn-secondary`)
- **Background:** `#FFFFFF` (White)
- **Border:** `2px solid #FFB300`
- **Text Color:** `#2D2D2D`
- **Hover Background:** `#FFB300` (Text `#2D2D2D`)
- **Border Radius:** `12px`
- **Height / Padding:** Minimum `44px` touch target, `10px 24px` padding

### 3. Text Link Button (`.btn-text`)
- **Background:** `transparent`
- **Text Color:** `#2D2D2D`
- **Hover Color:** `#FFB300`
- **Icon:** Arrow or chevron right, moves `+4px` right on hover.

---

## 4. Card System (`.card-ds`)

- **Surface:** `#FFFFFF` (White)
- **Border:** `1px solid #E7E7E7` (Light Border)
- **Border Radius:** `20px`
- **Shadow:** `0 10px 30px rgba(45, 45, 45, 0.05)`
- **Hover Lift:** `translateY(-4px)` with shadow `0 20px 40px rgba(45, 45, 45, 0.1)` and border `#FFB300`
- **Image Container:** `overflow: hidden`, `border-radius: 20px 20px 0 0`, max image zoom `scale(1.055)`
- **Touch Devices:** Hover lift disabled on touch-only devices via `@media (hover: hover) and (pointer: fine)`

---

## 5. Spacing System

- **Desktop Section Padding:** `80px` to `112px` (`py-20 sm:py-28`)
- **Tablet Section Padding:** `56px` to `80px`
- **Mobile Section Padding:** `40px` to `56px`
- **Container Max-Width:** `max-w-7xl` (`1280px`) with responsive horizontal padding `px-4 sm:px-6 lg:px-8`

---

## 6. Accessibility & Motion Rules

- **WCAG Target:** AA/AAA compliance across all interactive elements.
- **Focus Rings:** `outline: 2px solid #FFB300`, `outline-offset: 2px` on all interactive links, buttons, and inputs.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables scale transforms and reduces transition duration to `0.01ms`.

---

## 7. Smart Header System

### Header States & Scroll Thresholds
- `type HeaderState = "expanded" | "compact" | "hidden"`

1. **Expanded State (`scrollY <= 60px`):**
   - Centered floating bar (`w-[94%] max-w-[1440px]`, `top-[18px]`, `rounded-[18px]`, `h-[88px]`).
   - White surface (`#FFFFFF`), neutral border (`#E7E7E7`), soft shadow (`0 10px 30px rgba(45,45,45,0.06)`).
   - Shows orange logo mark, `CHITRANI CONSTRUCTION` title, `CONTRACTING & BOOM PLACER RENTAL` subtitle, full desktop nav, and `Request Quote` CTA button (height `46px`).

2. **Compact State (`60px < scrollY <= 180px` or scrolling upward):**
   - Full-width pinned bar (`w-full`, `top-0`, `rounded-none rounded-b-[16px]`, `h-[64px]`).
   - Desktop brand collapse: Logo mark collapses smoothly (`opacity-0 max-w-0 scale-90`), subtitle collapses smoothly (`opacity-0 max-h-0`), keeping `CHITRANI CONSTRUCTION` clearly visible.
   - Request Quote CTA button reduces to height `40px`.

3. **Hidden State (`scrollY > 180px` and downward scroll delta > 10px):**
   - Hides smooth via `transform: translateY(-110%)` with a `320ms cubic-bezier(0.22, 1, 0.36, 1)` transition.

### Interaction Overrides & Focus Management
- **Interaction Keep-Alive:** Header remains visible (compact or expanded) whenever the mobile drawer is open, mouse pointer is hovering over the header, or keyboard focus enters any element inside the header (`onFocus` / `onBlur`).
- **Route Navigation:** On location change, the header automatically restores to visible state (`expanded` if at top, `compact` otherwise) and closes the mobile drawer.
- **Accessibility:** Active nav link marked with `aria-current="page"` and a smooth animated `#FFB300` bottom underline. Keyboard focus instantly reveals the header.

### Header Layout Tokens
- `--header-expanded-height: 88px;`
- `--header-compact-height: 64px;`
- `--header-expanded-offset: 124px;`
- `--header-compact-offset: 76px;`
- `scroll-padding-top: var(--header-expanded-offset);`

