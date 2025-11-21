# Group G: Inline Help & Tooltips

**Priority:** 🟡 High Impact
**Category:** Learning Experience - Contextual Support
**Total Tasks:** 4

---

## Overview

New learners encounter unfamiliar terms and concepts throughout the site. Inline help (tooltips, glossary links, help buttons) provides just-in-time learning without disrupting flow or forcing users to navigate away.

**Learning Principle:** Contextual help reduces cognitive load by providing information exactly when and where it's needed.

---

## Tasks

### G1: Add Tooltips for Zone Labels

**User Story:**
As a **beginner volleyball player**,
I want to hover or tap on zone labels to see what they mean,
So that I can learn zone names and locations without leaving the page.

**Acceptance Criteria:**
- [ ] Make zone labels interactive (hover on desktop, tap on mobile)
- [ ] Tooltip content for each zone:
  - [ ] **Zone I:** "Right Back - Serving Position"
  - [ ] **Zone II:** "Right Front - Front Row Right"
  - [ ] **Zone III:** "Middle Front - Center Front"
  - [ ] **Zone IV:** "Left Front - Outside Position"
  - [ ] **Zone V:** "Left Back - Back Row Left"
  - [ ] **Zone VI:** "Middle Back - Back Row Center"
- [ ] Tooltip styling:
  - [ ] Dark background with white text
  - [ ] Positioned near zone label (smart positioning)
  - [ ] Fade in/out animation
  - [ ] Arrow pointing to zone
- [ ] Accessible:
  - [ ] Keyboard focusable
  - [ ] Announce to screen readers
  - [ ] Close on Escape key
- [ ] Mobile: Tap to show, tap outside or X button to close

**Technical Notes:**
- Update: `src/components/court/CourtDiagram.tsx` or zone label components
- Library options:
  - Radix UI Tooltip (accessible, unstyled)
  - Tippy.js (feature-rich)
  - Custom with CSS (lightweight)
- Props: `<ZoneLabel zone="I" tooltip="Right Back - Serving Position" />`
- Consider `title` attribute as fallback (basic tooltip)

**Estimated Effort:** Small-Medium (2-3 hours)

**Design Pattern:**
```typescript
<Tooltip content="Right Back - Serving Position">
  <ZoneLabel>I</ZoneLabel>
</Tooltip>
```

---

### G2: Add Tooltips for Position Abbreviations

**User Story:**
As a **new user**,
I want to hover or tap on player tokens (S, O1, M1, RS, etc.) to see full position names,
So that I can learn what each abbreviation means without memorizing them all first.

**Acceptance Criteria:**
- [ ] Interactive player tokens with tooltip on hover/tap
- [ ] Tooltip content for each position:
  - [ ] **S:** "Setter - Runs the offense"
  - [ ] **O1:** "Outside Hitter 1 - Left side attacker"
  - [ ] **O2:** "Outside Hitter 2 - Left side attacker"
  - [ ] **M1:** "Middle Blocker 1 - Quick attacker and blocker"
  - [ ] **M2:** "Middle Blocker 2 - Quick attacker and blocker"
  - [ ] **RS:** "Right Side - Right side attacker, opposite the setter"
- [ ] Tooltip shows:
  - [ ] Full position name
  - [ ] Brief role description (one line)
  - [ ] Optional: Link to full position glossary entry
- [ ] Consistent styling with zone tooltips (G1)
- [ ] Mobile-friendly (large touch target, easy to dismiss)

**Technical Notes:**
- Update: `src/components/court/PlayerToken.tsx`
- Reuse tooltip component from G1
- Add hover state to player tokens
- Consider delay (300ms) before showing tooltip (avoid flashing)
- Store position descriptions in data file or constants

**Estimated Effort:** Small-Medium (2-3 hours)

**Enhancement:**
Include small icon or emoji in tooltip for visual interest:
- Setter: 🏐 "Setter - Runs the offense"
- Outside: 💪 "Outside Hitter 1 - Left side attacker"

---

### G3: Add Inline Glossary Links from Content

**User Story:**
As a **volleyball learner**,
I want to click on unfamiliar terms in explanations to see their definitions,
So that I can understand concepts without navigating away from the page.

**Acceptance Criteria:**
- [ ] Identify key volleyball terms in content pages
- [ ] Make terms clickable links to glossary
- [ ] Visual styling:
  - [ ] Subtle underline or dotted underline
  - [ ] Different color (e.g., purple/blue)
  - [ ] Hover effect (underline darkens)
- [ ] Link behavior options:
  - [ ] Option A: Open glossary page in new tab (simpler)
  - [ ] Option B: Show definition in modal/popover (better UX)
  - [ ] Option C: Inline expansion (definition appears below)
- [ ] Priority terms to link:
  - [ ] Service order, overlap, attack line
  - [ ] Front row, back row, rotation
  - [ ] Setter, outside hitter, middle blocker
  - [ ] Base defense, serve receive, home position
- [ ] Apply to pages:
  - [ ] Learn basics page
  - [ ] All rotation detail pages
  - [ ] Homepage descriptions

**Technical Notes:**
- Create: `<GlossaryLink term="overlap">overlap</GlossaryLink>` component
- Or: Create utility to auto-link terms in markdown/text
- Fetch glossary data: Use `src/data/glossary.ts`
- Modal option: Create `<GlossaryModal />` component
- Consider: First occurrence only vs every occurrence

**Estimated Effort:** Medium (3-4 hours)

**Implementation Pattern:**
```typescript
// Option 1: Manual linking
<p>
  Players must maintain correct positions to avoid an{' '}
  <GlossaryLink term="Overlap">overlap</GlossaryLink> violation.
</p>

// Option 2: Auto-linking (more complex)
<GlossaryText>
  Players must maintain correct positions to avoid an overlap violation.
</GlossaryText>
// Automatically detects and links "overlap"
```

---

### G4: Add "What's This?" Help Buttons for Key Concepts

**User Story:**
As a **confused learner**,
I want to click a help button next to complex concepts to get more explanation,
So that I can deepen my understanding when I need it.

**Acceptance Criteria:**
- [ ] Add help icon (ℹ️ or ❓) next to key concepts:
  - [ ] "4 Arrangements" section - What are arrangements?
  - [ ] "Overlaps" - Why do overlap rules exist?
  - [ ] "Service Order" - How is service order determined?
  - [ ] "Front Row vs Back Row" - Why does it matter?
- [ ] Click help icon → Show explanation:
  - [ ] Modal with detailed explanation
  - [ ] "Learn More" link to full page if available
  - [ ] Diagram or visual if helpful
  - [ ] "Got it" button to close
- [ ] Help button styling:
  - [ ] Subtle, not intrusive (small, gray)
  - [ ] Highlights on hover
  - [ ] Clear it's clickable (cursor pointer)
- [ ] Mobile: Ensure help buttons are tappable (not too small)

**Technical Notes:**
- Create: `src/components/ui/HelpButton.tsx`
- Props: `<HelpButton title="What are Arrangements?" content={...} />`
- Use modal component for explanation
- Position: Inline next to heading or term
- Icon: Info circle (ℹ️) or question mark (❓)
- Content: Store help explanations in data file or component props

**Estimated Effort:** Small-Medium (2-3 hours)

**Help Content Examples:**
```typescript
const helpContent = {
  arrangements: {
    title: "What are Arrangements?",
    content: "An arrangement is a specific positioning of all 6 players on the court. Each rotation has 4 arrangements (Home, Serve, Receive, Base) that players move through during play. Think of them as different formations optimized for different game situations.",
    learnMoreLink: "/learn/basics#arrangements"
  },
  overlaps: {
    title: "Why Do Overlap Rules Exist?",
    content: "Overlap rules ensure fairness by maintaining the service order. Without these rules, teams could put their best hitters in front row positions all the time. The rules force rotation, giving all players equal time in each position.",
    learnMoreLink: "/learn/basics#overlaps"
  }
}
```

---

## Implementation Strategy

**Recommended Order:**
1. G2 - Player token tooltips (most visible, immediate impact)
2. G1 - Zone tooltips (builds on G2, same component)
3. G4 - Help buttons (independent, quick wins)
4. G3 - Glossary links (most complex, requires content audit)

**Dependencies:**
- G1 and G2 share tooltip component (build once, use twice)
- G3 and G4 can share modal/popover component
- All are relatively independent

---

## Shared Components to Create

### Tooltip Component
```typescript
// src/components/ui/Tooltip.tsx
interface TooltipProps {
  content: string | React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}
```

### GlossaryLink Component
```typescript
// src/components/glossary/GlossaryLink.tsx
interface GlossaryLinkProps {
  term: string;  // Matches term in glossary.ts
  children?: React.ReactNode;
  showModal?: boolean;  // true = modal, false = navigate
}
```

### HelpButton Component
```typescript
// src/components/ui/HelpButton.tsx
interface HelpButtonProps {
  title: string;
  content: string | React.ReactNode;
  learnMoreLink?: string;
}
```

---

## Content Audit for Glossary Links

Pages to audit for linkable terms:
- [ ] `src/app/page.tsx` - Homepage
- [ ] `src/app/learn/basics/page.tsx` - Basics page
- [ ] `src/app/learn/[id]/page.tsx` - Rotation details
- [ ] Arrangement descriptions in `src/data/systems.ts`

Terms to prioritize (high-value, frequently used):
1. Overlap
2. Service order
3. Front row / back row
4. Attack line
5. Rotation
6. Setter
7. Base defense
8. Serve receive

---

## Accessibility Checklist

- [ ] Tooltips are keyboard accessible (focus trigger)
- [ ] Tooltips announce to screen readers (aria-describedby)
- [ ] Tooltips close on Escape key
- [ ] Help buttons have accessible labels (aria-label)
- [ ] Modal dialogs trap focus
- [ ] Modal dialogs have proper ARIA roles
- [ ] Color is not the only indicator (underlines for links)
- [ ] Touch targets are at least 44x44px on mobile

---

## Design System Consistency

**Tooltip Styling:**
- Background: `bg-gray-900` (dark)
- Text: `text-white`
- Border radius: `rounded-lg`
- Padding: `px-3 py-2`
- Font size: `text-sm`
- Shadow: `shadow-lg`
- Arrow: 8px triangle matching background

**Link Styling:**
- Color: `text-indigo-600` (matches site theme)
- Hover: `text-indigo-800`
- Underline: `underline decoration-dotted`
- Visited: Slightly muted (optional)

**Help Button:**
- Size: 20x20px (small but tappable)
- Color: `text-gray-400` default
- Hover: `text-gray-600`
- Icon: `<InfoIcon />` from icon library

---

## Testing Checklist

- [ ] Tooltips appear on hover (desktop)
- [ ] Tooltips appear on tap (mobile)
- [ ] Tooltips position correctly (don't overflow screen)
- [ ] Tooltips are readable on all backgrounds
- [ ] Glossary links navigate/open correctly
- [ ] Help buttons trigger modals
- [ ] All interactions work with keyboard
- [ ] Screen readers announce content appropriately
- [ ] Performance: No lag when hovering over many elements

---

## Impact

Inline help will:
- Reduce barrier to entry for beginners
- Eliminate need to memorize everything upfront
- Support self-directed learning
- Reduce navigation friction (less page switching)
- Increase confidence for new learners
- Make complex concepts approachable
- Improve accessibility and discoverability

**Just-in-time learning is proven to be more effective than front-loading all information.**

---

**Status:** ⬜ Not Started