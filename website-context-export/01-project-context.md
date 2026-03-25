# Chef's Café Website - Project Overview & Context

## Project Goals
- Transform the "Stay Awhile" template into a branded site for *Chef's Café* in Calasiao.
- Tone: Gourmet, Premium, Handcrafted, "More than just coffee".

## Tech Stack
- **Framework:** React + TypeScript + Vite (`src/main.tsx`, `vite.config.ts`)
- **Styling:** Tailwind CSS (`tailwind.config.js`)
- **Routing:** React Router DOM v7 (`src/App.tsx`, `layouts/Layout.tsx`)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Business Details
- **Name:** Chef’s Café
- **Location:** Averin Strip Building, Old De Venecia Highway, Banaoang, Calasiao, Pangasinan.
- **Hours:** 
  - Mon–Thu & Sun: 11 AM–9:30 PM
  - Fri–Sat: 11 AM–10:30 PM
- **Contact:** 0938 721 5527
- **Socials:**
  - Facebook: https://www.facebook.com/chefscafe2025
  - Instagram: https://www.instagram.com/chefs.cafeph/
  - Foodpanda: https://www.foodpanda.ph/restaurant/wnaf/chefs-cafe-banaoang

## Key Features Implemented
1. **Dynamic Menu:** Categorized food/drink items (brunch, pasta, coffee, etc.) - `src/pages/Menu.tsx`.
2. **Gourmet Branding:** Custom color palette (Ivory/Espresso/Gold) and typography (Playfair Display/Lato).
3. **Contact Integration:** Functional links for calling, maps, and social media.
4. **SEO:** Local business schema added to `index.html`.

## File Structure
- `src/`: Source code
  - `components/`: UI components (Navbar, Footer, Hero)
  - `pages/`: Page content (Home, About, Menu, Contact)
  - `layouts/`: Global layout wrapper
