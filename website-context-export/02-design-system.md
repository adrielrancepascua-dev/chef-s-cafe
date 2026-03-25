# Design System & Styling

The site uses Tailwind CSS with customized theme variables for Chef's Café.

## Color Palette (tailwind.config.js)
The palette is extended under `theme.colors.brand`:
- **brand-base** (`#F9F7F2`): Warm Ivory (Background)
- **brand-primary** (`#2A1B15`): Deep Espresso (Text/Headings, primary buttons)
- **brand-accent** (`#CCA43B`): Muted Gold (Highlights, call-to-actions)
- **brand-secondary** (`#8F9779`): Soft Sage (Subtle accents)

## Typography
- **Headings (Font Serif)**: "Playfair Display", serif. Use for `h1`, `h2`, `h3`, `menu items`.
- **Body Content (Font Sans)**: "Lato", sans-serif. Use for `p`, `button`, description text.

## Tone of Voice
- **Adjectives:** Premium, Handcrafted, Rich, Fresh, Indulgent.
- **Example Copy:** "Freshly baked, richly brewed, made to crave."
- **Imagery:** High quality food photography (Brunch, Coffee, Pastries).
- **Style:** Minimalist, ample whitespace, sharp corners (gourmet feel), understated luxury.

## Common Components
1. **Buttons:**
   - Primary: `bg-brand-accent text-white`
   - Secondary: `bg-transparent border border-brand-accent text-brand-accent`
   - Foodpanda: `bg-white text-brand-primary border border-white`
2. **Sections:** usually `py-16` or `py-24`, often alternating background (`bg-brand-base`, `bg-brand-light`).
3. **Icons:** Typically `lucide-react`, styled with `text-brand-accent` or `text-brand-primary` depending on context.
