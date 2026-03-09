

## Implementation Plan: Enjoy Maranhao Landing Page

### Overview
Convert the 1800+ line HTML/CSS/JS landing page into a React + Tailwind project with componentized structure, maintaining all visual design, animations, and interactions.

---

### 1. Update Global Styles (src/index.css)

Add CSS custom properties for the brand colors and gradients:
- Colors: preto (#0D0D0D), areia (#EDEAE3), azul (#1B7BB4), azul-c (#7AC4E2), laranja (#F5A623), coral (#E85C4A), verde (#1A7875), roxo (#6B1E4E)
- Gradients: horizontal, diagonal, and vertical with 6 color stops
- Google Fonts: Playfair Display + DM Sans
- Custom cursor styles and animations
- Scroll reveal animation classes

### 2. Create Hook: useScrollReveal.ts
Custom hook using IntersectionObserver to animate elements when they enter the viewport (fade-up effect).

### 3. Create Components

| Component | Description |
|-----------|-------------|
| **CustomCursor** | Fixed cursor + ring following mouse with mix-blend-mode and hover expansion |
| **Navbar** | Fixed nav with blur on scroll, logo SVG, links, and gradient CTA button |
| **Hero** | Background dots grid, decorative number "01", floating symbol SVG, gradient line animation, title with italic gradient, CTA buttons, scroll indicator |
| **Stats** | Sand background, 4-column grid with large numbers (gradient text), hover gradient bar |
| **Destinations** | Asymmetric grid (1.6fr 1fr 1fr), 5 destination cards with SVG artistic backgrounds, overlays, hover effects, gradient bars |
| **Experiences** | 6 cards with emoji icons, numbered headings, hover elevation + gradient bar |
| **Manifesto** | Centered quote with decorative quotation mark in gradient, italic Playfair text |
| **Gallery** | Horizontal drag-to-scroll container with 6 items, SVG backgrounds, labels |
| **Packages** | 3 package cards (light, dark/featured, light) with prices, bullet lists, CTA buttons |
| **CTASection** | Final CTA with logo SVG, gradient title, primary + secondary buttons |
| **Footer** | 4-column grid with logo, description, link columns, bottom copyright bar |

### 4. Update Index Page
Compose all components in order on the Index page.

### 5. Key Animations & Interactions

- **Float animation**: Symbol in hero floats vertically (6s infinite)
- **Line reveal**: Horizontal gradient line scales from 0 to 1
- **Scroll reveal**: Elements fade-up when entering viewport
- **Custom cursor**: Mouse tracking with expansion on hover
- **Gallery drag-to-scroll**: Mouse drag to scroll horizontally
- **Nav scroll effect**: Background blur when scrolled
- **Card hovers**: Gradient bars scaleX, translateY elevation, overlay darkening

### 6. Mobile Responsiveness (max-width: 1024px)
- Hide nav links
- Collapse grids to 1-2 columns
- Reduce padding
- Stack CTA buttons vertically
- Adjust footer to 2 columns

---

### Technical Notes

- All SVG assets (logo, floating symbol, destination backgrounds, gallery items) will be inline SVGs matching the original artistic placeholders
- Tailwind `@apply` directives for reusable utility classes
- Custom keyframes added to tailwind.config.ts
- useEffect hooks for cursor tracking and scroll listeners
- Ref-based drag handling for gallery scroll

