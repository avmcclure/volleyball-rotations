# Group J: Accessibility & Polish

**Priority:** 🟢 Nice to Have
**Category:** Accessibility, UX Polish, Professional Features
**Total Tasks:** 5

---

## Overview

Accessibility features ensure the site is usable by everyone, including people with disabilities. Polish features add professional touches that improve overall user experience and make the site feel complete and production-ready.

**Principle:** Inclusive design benefits everyone, not just those with disabilities. Keyboard navigation, clear focus states, and semantic HTML improve usability for all users.

---

## Tasks

### J1: Add Keyboard Navigation for Court Diagrams

**User Story:**
As a **keyboard-only user** (or someone with mobility impairments),
I want to navigate and interact with court diagrams using only my keyboard,
So that I can access all features without a mouse.

**Acceptance Criteria:**
- [ ] Court diagram and player tokens are keyboard focusable
- [ ] Keyboard shortcuts:
  - [ ] Tab: Navigate between players
  - [ ] Enter/Space: Activate player (show info modal)
  - [ ] Arrow keys: Move focus between adjacent players
  - [ ] Escape: Close modals/tooltips
  - [ ] Number keys (1-6): Jump to specific rotation (on index page)
- [ ] Visual focus indicators:
  - [ ] Clear outline around focused element
  - [ ] High contrast (not just subtle shadow)
  - [ ] Distinct from hover state
- [ ] Focus management:
  - [ ] Focus trapped in modals (can't tab out)
  - [ ] Focus returns to trigger element when modal closes
  - [ ] Logical tab order (left to right, top to bottom)
- [ ] Skip links:
  - [ ] "Skip to main content" at top of page
  - [ ] "Skip to court diagram"
  - [ ] Hidden until focused

**Technical Notes:**
- Make interactive elements use semantic HTML (`<button>`, not `<div onClick>`)
- Add `tabIndex={0}` to custom interactive elements
- Use `aria-label` for buttons without text
- Implement focus trap for modals (library: `focus-trap-react`)
- CSS: `:focus-visible` for focus outlines (avoid on mouse clicks)
- Test with screen reader (VoiceOver on Mac, NVDA on Windows)

**Estimated Effort:** Medium (3-4 hours)

**Testing:**
- [ ] Navigate entire site using only keyboard
- [ ] Verify focus is always visible
- [ ] Check tab order is logical
- [ ] Test with screen reader
- [ ] Test in Chrome, Firefox, Safari

---

### J2: Add Screen Reader Improvements (ARIA Labels)

**User Story:**
As a **blind or visually impaired user**,
I want the site to work well with my screen reader,
So that I can learn volleyball rotations through audio descriptions.

**Acceptance Criteria:**
- [ ] All interactive elements have accessible names
- [ ] Court diagram accessible description:
  - [ ] `aria-label="Volleyball court showing Rotation 1 HOME positions"`
  - [ ] Or use `aria-describedby` pointing to text description
- [ ] Player tokens announce:
  - [ ] Player position and location
  - [ ] "Setter in Zone I, position 83% right, 75% back"
- [ ] Arrangement cards have clear headings:
  - [ ] Use semantic heading tags (`<h2>`, `<h3>`)
  - [ ] Logical heading hierarchy (no skipped levels)
- [ ] Images have alt text:
  - [ ] Descriptive, not just "court diagram"
  - [ ] "Court diagram showing Rotation 2 SERVE arrangement with setter in Zone VI moving toward front right"
- [ ] Status messages announce:
  - [ ] Quiz feedback: `aria-live="polite"`
  - [ ] Error messages: `aria-live="assertive"`
  - [ ] Progress updates: "3 of 6 rotations complete"
- [ ] Landmarks for navigation:
  - [ ] `<nav>`, `<main>`, `<aside>`, `<footer>`
  - [ ] Or ARIA roles: `role="navigation"`, `role="main"`
- [ ] Forms are properly labeled:
  - [ ] `<label>` associated with `<input>`
  - [ ] Error messages linked with `aria-describedby`

**Technical Notes:**
- ARIA attributes to add:
  - `aria-label`: Accessible name
  - `aria-labelledby`: Reference to labeling element
  - `aria-describedby`: Reference to description
  - `aria-live`: Announce dynamic content
  - `aria-expanded`: For collapsible sections
  - `aria-current`: For current page in navigation
- Use semantic HTML first, ARIA second (ARIA is polyfill)
- Test with screen readers:
  - VoiceOver (Mac/iOS): Cmd+F5
  - NVDA (Windows): Free download
  - JAWS (Windows): Industry standard, paid
- Use axe DevTools or WAVE browser extension to audit

**Estimated Effort:** Medium-Large (4-6 hours)

**Screen Reader Description Example:**
```html
<div
  role="img"
  aria-label="Volleyball court diagram showing Rotation 1, HOME arrangement.
              Setter in Zone 1 (right back), Outside Hitter 1 in Zone 2 (right front),
              Middle 1 in Zone 3 (middle front), Right Side in Zone 4 (left front),
              Outside Hitter 2 in Zone 5 (left back), Middle 2 in Zone 6 (middle back)."
>
  {/* Visual court diagram */}
</div>
```

---

### J3: Add Zoom Functionality for Court Diagrams on Mobile

**User Story:**
As a **mobile user** (or user with low vision),
I want to zoom in on court diagrams to see details more clearly,
So that I can study positioning without straining my eyes.

**Acceptance Criteria:**
- [ ] Pinch-to-zoom enabled on court diagrams (mobile)
- [ ] Zoom controls for desktop:
  - [ ] Zoom in/out buttons (+ / -)
  - [ ] Reset zoom button
  - [ ] Keyboard shortcuts (Ctrl +/-, Ctrl 0)
- [ ] Zoom levels: 50%, 75%, 100%, 150%, 200%
- [ ] Pan when zoomed:
  - [ ] Touch drag on mobile
  - [ ] Click-and-drag on desktop
  - [ ] Scrollable container
- [ ] Zoom state persists:
  - [ ] While navigating between arrangements
  - [ ] Optional: Save zoom preference in localStorage
- [ ] Visual indicator:
  - [ ] Show current zoom level (e.g., "150%")
  - [ ] Mini-map showing visible area (optional)
- [ ] Smooth transitions when zooming

**Technical Notes:**
- Library options:
  - `react-zoom-pan-pinch`: Full-featured, touch-friendly
  - `react-pinch-zoom-pan`: Lightweight
  - Custom: CSS `transform: scale()` + pan logic
- Enable pinch gestures: `touch-action: manipulation`
- For desktop: Mouse wheel zoom or buttons
- Consider: Zoom focuses on center of screen or pointer location
- Performance: Use CSS transforms (GPU-accelerated)

**Estimated Effort:** Medium (3-4 hours)

**Implementation Pattern:**
```typescript
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

<TransformWrapper
  initialScale={1}
  minScale={0.5}
  maxScale={2}
>
  <TransformComponent>
    <CourtDiagram />
  </TransformComponent>
</TransformWrapper>
```

---

### J4: Add Print-Friendly Rotation Cards

**User Story:**
As a **coach or player**,
I want to print rotation cards to reference during practice,
So that I can have physical copies without wasting paper or ink.

**Acceptance Criteria:**
- [ ] Print stylesheet optimized for paper:
  - [ ] Remove navigation, footer, unnecessary UI
  - [ ] Black and white friendly (or minimal color)
  - [ ] Proper page breaks (one rotation per page)
  - [ ] Margins optimized for standard paper
- [ ] Print options:
  - [ ] "Print This Rotation" button on each rotation page
  - [ ] "Print All Rotations" button on index
  - [ ] "Print Blank Court" for practice/notes
- [ ] Print layout:
  - [ ] Rotation name and number at top
  - [ ] All 4 arrangements on one page
  - [ ] Court diagrams large enough to be readable
  - [ ] Setup steps as bullet list
  - [ ] Optional: Empty court for notes
- [ ] File export (alternative to print):
  - [ ] "Download as PDF" button
  - [ ] Generates PDF with all rotations (requires library)

**Technical Notes:**
- CSS: `@media print { }` for print-specific styles
- Hide elements: `@media print { .no-print { display: none; } }`
- Page breaks: `page-break-before: always;`
- Use `window.print()` for print button
- PDF generation: `jsPDF`, `react-pdf`, or server-side with Puppeteer
- Consider: QR code linking back to site on printed page

**Estimated Effort:** Small-Medium (2-3 hours)

**Print CSS Example:**
```css
@media print {
  /* Hide UI elements */
  nav, footer, button, .no-print {
    display: none !important;
  }

  /* Optimize for paper */
  body {
    margin: 0;
    padding: 20px;
    font-size: 12pt;
    color: black;
  }

  /* Page breaks */
  .rotation-page {
    page-break-before: always;
  }

  /* High contrast for readability */
  .court-diagram {
    border: 2px solid black;
  }
}
```

---

### J5: Add Dark Mode Support

**User Story:**
As a **user who prefers dark mode** (or practices late at night),
I want a dark theme option,
So that the site is comfortable to view in low-light environments.

**Acceptance Criteria:**
- [ ] Dark mode toggle:
  - [ ] Button in navigation or settings
  - [ ] Icon: Sun ☀️ (for light mode) / Moon 🌙 (for dark mode)
  - [ ] Keyboard accessible
- [ ] Dark theme colors:
  - [ ] Background: Dark gray/black (#0f172a, #1e293b)
  - [ ] Text: Light gray/white (#f1f5f9, #e2e8f0)
  - [ ] Accents: Adjust primary colors for dark background
  - [ ] Sufficient contrast (WCAG AA: 4.5:1 ratio)
- [ ] Theme persistence:
  - [ ] Save preference in localStorage
  - [ ] Remember across sessions
  - [ ] Respect system preference: `prefers-color-scheme: dark`
- [ ] Smooth transition:
  - [ ] CSS transitions when switching themes
  - [ ] No flash of wrong theme on page load
- [ ] All components styled:
  - [ ] Court diagrams (adjust colors for dark background)
  - [ ] Cards, buttons, inputs
  - [ ] Modals, tooltips
  - [ ] Syntax highlighting (if any code samples)

**Technical Notes:**
- Implementation approaches:
  - CSS variables + data attribute: `data-theme="dark"`
  - Tailwind dark mode: `dark:` prefix
  - CSS-in-JS theming (Styled Components, Emotion)
- Recommended: CSS variables for easy switching
- Detect system preference: `window.matchMedia('(prefers-color-scheme: dark)')`
- Toggle logic: React Context or state management
- Avoid: Inline styles (hard to theme)

**Estimated Effort:** Medium-Large (4-6 hours)

**Implementation Pattern:**
```typescript
// ThemeContext.tsx
const ThemeContext = createContext<ThemeContextType>(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

```css
/* CSS Variables */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  --accent: #4f46e5;
}

[data-theme='dark'] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  --accent: #818cf8;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s, color 0.3s;
}
```

---

## Implementation Strategy

**Recommended Order:**
1. J1 - Keyboard navigation (foundation for accessibility)
2. J2 - Screen reader improvements (builds on J1)
3. J4 - Print styles (quick win, useful feature)
4. J3 - Zoom functionality (enhances mobile)
5. J5 - Dark mode (polish, nice-to-have)

**Dependencies:**
- J1 and J2 work together (keyboard + screen reader)
- J3, J4, J5 are independent

---

## Accessibility Testing Checklist

**Automated Testing:**
- [ ] axe DevTools (browser extension)
- [ ] WAVE (web accessibility evaluation tool)
- [ ] Lighthouse accessibility audit (Chrome DevTools)

**Manual Testing:**
- [ ] Navigate site using only keyboard
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)
- [ ] Test on actual mobile devices
- [ ] Try with screen zoomed to 200% (browser zoom)
- [ ] Check color contrast (Contrast Checker tool)
- [ ] Test print preview

**User Testing:**
- [ ] Recruit users with disabilities for feedback
- [ ] Test with users of different ages (vision changes)
- [ ] Get feedback from screen reader users

---

## WCAG 2.1 Guidelines Reference

### Level A (Must Have)
- ✅ Text alternatives for images
- ✅ Keyboard accessible
- ✅ Sufficient color contrast

### Level AA (Should Have)
- ✅ Contrast ratio 4.5:1 for normal text
- ✅ Contrast ratio 3:1 for large text
- ✅ No keyboard trap
- ✅ Resize text up to 200%

### Level AAA (Nice to Have)
- Contrast ratio 7:1
- No timing requirements
- Sign language interpretation

**Target: Full WCAG 2.1 AA compliance**

---

## Impact

Accessibility and polish will:
- Make site usable by 15-20% more people (disability statistics)
- Improve SEO (search engines favor accessible sites)
- Demonstrate professionalism and care
- Reduce legal risk (accessibility lawsuits)
- Improve experience for all users (not just those with disabilities)
- Enable use in more contexts (dark environments, printing, etc.)
- Build trust and credibility

**Accessibility is not optional - it's a fundamental right.**

---

**Status:** ⬜ Not Started