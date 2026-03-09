
## Admin Panel — Enjoy Maranhão

### Approach
Build a client-side admin panel at route `/admin` with a password-protected login (simple password stored in a context/state, no backend needed since this is a landing page CMS). The admin stores all editable content in a React Context + localStorage, so changes persist and the landing page reads from that context.

### Architecture

**State Management: `SiteContentContext`**
A single context that holds all editable content with defaults matching the current hardcoded values. Components read from this context instead of local constants. The admin writes to it and persists to localStorage.

```text
src/
  contexts/
    SiteContentContext.tsx     ← All editable content + localStorage persistence
  pages/
    Admin.tsx                  ← Main admin layout with sidebar + tabs
  components/
    admin/
      AdminLogin.tsx            ← Password gate
      AdminSidebar.tsx          ← Section nav (Hero, Stats, Destinos, etc.)
      sections/
        HeroEditor.tsx
        StatsEditor.tsx
        DestinationsEditor.tsx
        ExperiencesEditor.tsx
        ManifestoEditor.tsx
        PackagesEditor.tsx
        CTAEditor.tsx
        FooterEditor.tsx
```

### Content Sections Editable

| Section | Fields |
|---------|--------|
| **Hero** | Tag line, title, subtitle, CTA button text |
| **Stats** | 4 stats: number, suffix, label |
| **Destinations** | 5 cards: name, tag, subtitle |
| **Experiences** | 6 cards: icon (emoji), title, description |
| **Manifesto** | Quote text, author line |
| **Packages** | 3 packages: name, subtitle, price, button text, items list |
| **CTA Section** | Title, description, primary/secondary button text |
| **Footer** | Description, contact info (email, phone, address) |

### Routes
- `/` → Landing page (reads from context)
- `/admin` → Admin panel (password protected)

### Admin Panel UI
- **Left sidebar** with section list (Hero, Stats, Destinos, Experiências, Manifesto, Pacotes, CTA, Rodapé)
- **Main area** with form fields for the selected section
- **Live preview link** to open `/` in new tab
- **Save button** persists to localStorage via context
- **Reset button** resets section to defaults
- **Password gate**: Simple password check (`enjoy2024`) stored in sessionStorage

### Files to create/edit
1. **Create** `src/contexts/SiteContentContext.tsx` — defaults + localStorage sync
2. **Create** `src/pages/Admin.tsx` — layout
3. **Create** `src/components/admin/AdminLogin.tsx`
4. **Create** `src/components/admin/sections/HeroEditor.tsx`
5. **Create** `src/components/admin/sections/StatsEditor.tsx`
6. **Create** `src/components/admin/sections/DestinationsEditor.tsx`
7. **Create** `src/components/admin/sections/ExperiencesEditor.tsx`
8. **Create** `src/components/admin/sections/ManifestoEditor.tsx`
9. **Create** `src/components/admin/sections/PackagesEditor.tsx`
10. **Create** `src/components/admin/sections/CTAEditor.tsx`
11. **Create** `src/components/admin/sections/FooterEditor.tsx`
12. **Edit** `src/App.tsx` — add `/admin` route
13. **Edit** `src/components/Hero.tsx` — read from context
14. **Edit** `src/components/Stats.tsx` — read from context
15. **Edit** `src/components/Destinations.tsx` — read from context
16. **Edit** `src/components/Experiences.tsx` — read from context
17. **Edit** `src/components/Manifesto.tsx` — read from context
18. **Edit** `src/components/Packages.tsx` — read from context
19. **Edit** `src/components/CTASection.tsx` — read from context
20. **Edit** `src/components/Footer.tsx` — read from context

### Admin UI Design
- Dark theme matching the landing page brand colors
- Input fields with border-[rgba(255,255,255,0.1)] style
- Gradient accent on active sidebar item
- Tabs for sub-sections (e.g., each stat card, each package)
- Toast notifications on save
