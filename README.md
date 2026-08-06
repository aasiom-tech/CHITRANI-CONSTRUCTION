# Chitrani Construction - Heavy Civil Engineering & Equipment Rental

Production-ready, mobile-first website for **Chitrani Construction**, built with React 19, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 How to Run and Build the Project

### Development
```bash
npm run dev
```
Runs the application on `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates production assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Update Company Information

All corporate details, phone numbers, WhatsApp contact raw numbers, email addresses, office locations, tax IDs (GSTIN/CIN), map embeds, and stats metrics are centralized in one single configuration file:

📁 **`src/config/companyConfig.ts`**

```typescript
export const companyConfig = {
  name: "Chitrani Construction",
  shortName: "CHITRANI",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "contracts@chitraniconstruction.com",
  address: "Chitrani Infrastructure House, Plot 42, Civil Lines Corridor",
  // ...
};
```
Modifying this single file instantly updates all header links, contact cards, call buttons, WhatsApp actions, and footer disclosures across the entire website.

---

## 🖼️ How to Replace Images

1. Place authentic company images in the `public/images/` directory structure:
   - `public/images/hero/`
   - `public/images/services/`
   - `public/images/equipment/`
   - `public/images/projects/`
   - `public/images/gallery/`

2. Update image paths in the corresponding data files:
   - 📁 `src/data/equipment.ts`
   - 📁 `src/data/projects.ts`
   - 📁 `src/data/gallery.ts`

---

## 🔗 How to Connect Forms to a Backend

The application contains three interactive form components:
1. **Multi-Step Quote Request**: `src/components/QuoteForm.tsx`
2. **General Contact Enquiry**: `src/components/ContactForm.tsx`
3. **Career Applications**: `src/components/Careers.tsx`

To integrate with your backend (e.g. Firebase, Express API, Zoho CRM, SendGrid/Email):
Replace the simulated timeout handler inside `handleSubmit` in each component with an `async` call to your endpoint:

```typescript
// Example integration pattern for QuoteForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    setReferenceNumber(result.referenceNumber);
    setIsSubmitted(true);
  } catch (error) {
    // Handle error state
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 📌 Placeholder Values Log

The following fields contain clearly marked placeholders awaiting final company verification:

- **Phone & WhatsApp Hotline**: `+91 98765 43210` (Update in `src/config/companyConfig.ts`)
- **GSTIN**: `[GSTIN Pending Verification]`
- **CIN**: `[CIN Pending Verification]`
- **Project Case Studies**: Identified with `[Capability Visual / Pending Verification]` in `src/data/projects.ts`
