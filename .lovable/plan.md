

## Mobile UI/UX Improvements - Enjoy Maranhão

### Current Issues Identified
1. **Navbar**: Missing hamburger menu on mobile, nav links hidden but no alternative navigation
2. **Custom Cursor**: Shows on touch devices (should be hidden)
3. **Hero**: Padding and CTA sizes need mobile optimization
4. **Stats**: Numbers too large on small screens
5. **Cards**: Padding excessive for mobile, touch targets too small
6. **Gallery**: "Arraste para explorar" instruction not touch-friendly
7. **Footer**: Column layout not optimal for mobile
8. **Touch Targets**: Some buttons smaller than recommended 44px minimum

---

### Implementation Plan

#### 1. Mobile Navigation with Hamburger Menu
- Add hamburger icon visible on `lg:hidden`
- Create Sheet/Drawer component for mobile menu
- Include all nav links + CTA inside drawer
- Smooth slide-in animation

#### 2. Hide Custom Cursor on Touch Devices
- Detect touch device via media query or JS
- Show system cursor on mobile
- Remove `cursor: none` from body on touch devices

#### 3. Hero Section Mobile Adjustments
- Reduce padding: `px-5` instead of `px-8`
- Adjust title font size with better mobile clamp
- Stack description and CTA vertically with proper spacing
- Full-width CTA button on mobile
- Better scroll indicator visibility

#### 4. Stats Section
- Smaller font sizes on mobile for numbers
- Better vertical padding between items
- Remove border issues on 2-column grid

#### 5. Destinations Grid
- Better card heights on mobile
- Larger touch targets for cards
- Improved spacing between cards

#### 6. Experiences Cards
- Reduce padding: `p-6` on mobile vs `p-10` on desktop
- Smaller icon containers
- Better line heights for readability

#### 7. Gallery Section
- Change instruction to "Deslize para explorar" (swipe-friendly)
- Add touch scroll momentum
- Snap points for better mobile UX

#### 8. Packages Cards
- Reduce padding on mobile
- Full-width buttons with proper touch height (min 48px)
- Better price typography scaling

#### 9. CTA Section
- Reduce vertical padding on mobile
- Full-width stacked buttons
- Better logo sizing

#### 10. Footer
- Single column layout on mobile with proper spacing
- Larger touch targets for links
- Better visual hierarchy

---

### Technical Details

**Touch Detection CSS:**
```css
@media (hover: none) and (pointer: coarse) {
  body { cursor: auto; }
  .custom-cursor, .cursor-ring { display: none; }
}
```

**Mobile Breakpoints:**
- `sm:` (640px) - Small tablets
- `md:` (768px) - Tablets  
- `lg:` (1024px) - Desktop (current breakpoint)

**Touch Target Sizes:**
- Minimum 44x44px (Apple HIG)
- Prefer 48x48px for primary actions

**New Component:**
- `MobileMenu.tsx` - Sheet-based drawer with nav links

