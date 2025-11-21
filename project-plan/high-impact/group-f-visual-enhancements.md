# Group F: Visual Enhancements

**Priority:** 🟡 High Impact
**Category:** Learning Experience - Visual Learning
**Total Tasks:** 5

---

## Overview

Many learners are visual thinkers. Adding arrows, animations, legends, and improved mobile visuals will help users understand movement and positioning more intuitively than text alone.

**Learning Principle:** Visual representations with directional cues support spatial understanding and reduce cognitive load.

---

## Tasks

### F1: Add Movement Arrows Showing HOME → SERVE Transitions

**User Story:**
As a **volleyball learner**,
I want to see arrows showing how players move from HOME to SERVE positions,
So that I understand the transition and can visualize the movement path.

**Acceptance Criteria:**
- [ ] On rotation detail pages, show both HOME and SERVE side-by-side
- [ ] Draw arrows from each player's HOME position to their SERVE position
- [ ] Arrow styling:
  - [ ] Different color per player (match player token color)
  - [ ] Curved or straight depending on movement path
  - [ ] Arrowhead clearly points to destination
  - [ ] Semi-transparent to avoid cluttering
- [ ] Option to toggle arrows on/off
- [ ] Hover over arrow highlights both start and end positions
- [ ] Mobile: Ensure arrows are visible and not too cluttered
- [ ] Animation option: Arrows draw progressively (optional enhancement)

**Technical Notes:**
- Modify: `src/components/court/CourtGrid.tsx` or create overlay component
- Use SVG for arrow drawing (paths with markers)
- Calculate arrow paths based on player coordinates
- CSS: `stroke`, `stroke-width`, `marker-end` for arrowheads
- Consider library: `react-xarrows` or custom SVG paths
- Toggle state: React state or button to show/hide arrows

**Estimated Effort:** Medium (3-4 hours)

**Technical Challenge:**
Calculating smooth, non-overlapping arrow curves that look good

---

### F2: Add Movement Arrows Showing HOME → RECEIVE Transitions

**User Story:**
As a **volleyball learner**,
I want to see arrows showing how players move from HOME to SERVE RECEIVE positions,
So that I understand serve receive formation setup.

**Acceptance Criteria:**
- [ ] Side-by-side view of HOME and RECEIVE arrangements
- [ ] Arrows showing transition paths for each player
- [ ] Arrow styling consistent with F1 (same design system)
- [ ] Highlight the 3 primary passers' movements
- [ ] Show setter's penetration path clearly
- [ ] Toggle on/off capability
- [ ] Explain movement purpose in annotation:
  - [ ] "Setter pushes forward to target position"
  - [ ] "Passers form triangle for optimal coverage"

**Technical Notes:**
- Same technical approach as F1
- Reuse arrow component/utility
- Add text labels or tooltips explaining key movements
- Consider different arrow styles for different movement types:
  - Solid arrow: Primary movement
  - Dashed arrow: Adjustment movement
  - Thick arrow: Setter movement (most important)

**Estimated Effort:** Small-Medium (2-3 hours if F1 is done first)

---

### F3: Add Animation/Transitions Between Arrangements

**User Story:**
As a **visual learner**,
I want to see players smoothly move from one arrangement to another,
So that I understand the flow and timing of position transitions.

**Acceptance Criteria:**
- [ ] Add "Play Transition" button on rotation detail pages
- [ ] Animation sequence:
  1. Show HOME positions (2 seconds)
  2. Animate players moving to SERVE (2 seconds)
  3. Pause at SERVE (2 seconds)
  4. Continue to RECEIVE or BASE (user choice)
- [ ] Smooth CSS transitions (ease-in-out)
- [ ] Player tokens slide from start to end position
- [ ] Optional: Fade in movement arrows during transition
- [ ] Controls:
  - [ ] Play/Pause button
  - [ ] Speed control (0.5x, 1x, 2x)
  - [ ] Skip forward/backward
  - [ ] Loop option
- [ ] Mobile-friendly (works on touch devices)

**Technical Notes:**
- Use CSS `transition` or animation library (Framer Motion, React Spring)
- Calculate intermediate positions for smooth movement
- Component: `<ArrangementAnimator rotation={rotation} />`
- State management: Track current frame/arrangement
- Consider using requestAnimationFrame for smooth 60fps
- Accessibility: Provide "Skip animation" option for motion-sensitive users

**Estimated Effort:** Large (6-8 hours)

**Alternative Approach:**
Instead of full animation, use "step-through" with manual next/previous buttons (simpler, faster to implement)

---

### F4: Add Court Diagram Legend Showing Position Colors

**User Story:**
As a **new user**,
I want a legend explaining what each colored token represents,
So that I can quickly identify player positions on the court diagram.

**Acceptance Criteria:**
- [ ] Create legend component displaying:
  - [ ] 🔵 S = Setter
  - [ ] 🟢 O1 = Outside Hitter 1
  - [ ] 🟢 O2 = Outside Hitter 2
  - [ ] 🔵 M1 = Middle Blocker 1
  - [ ] 🔵 M2 = Middle Blocker 2
  - [ ] 🟡 RS = Right Side
- [ ] Position legend:
  - [ ] Near court diagram (right side or below)
  - [ ] Sticky positioning (stays visible on scroll)
  - [ ] Collapsible on mobile to save space
- [ ] Interactive legend:
  - [ ] Hover over legend item → Highlights that player on court
  - [ ] Click legend item → Shows player info modal
- [ ] Consistent across all court views site-wide

**Technical Notes:**
- Create: `src/components/court/CourtLegend.tsx`
- Use same color scheme as player tokens (src/components/court/PlayerToken.tsx)
- Props: `positions` array with { id, label, color }
- Responsive: Horizontal layout on mobile, vertical on desktop
- CSS: `position: sticky` for always-visible legend
- Add to all pages with court diagrams

**Estimated Effort:** Small (1-2 hours)

**Design Mockup:**
```
┌─────────────────┐
│ Player Key:     │
│ 🔵 S  - Setter  │
│ 🟢 O1 - Outside │
│ 🟢 O2 - Outside │
│ 🔵 M1 - Middle  │
│ 🔵 M2 - Middle  │
│ 🟡 RS - Right   │
└─────────────────┘
```

---

### F5: Improve Mobile Touch Targets for Player Tokens

**User Story:**
As a **mobile user**,
I want larger, easier-to-tap player tokens on my phone,
So that I can interact with the court diagram without frustration.

**Acceptance Criteria:**
- [ ] Increase player token size on mobile (< 768px):
  - [ ] Current: Likely 30-40px
  - [ ] Mobile: 48-60px (minimum recommended touch target)
- [ ] Add touch padding (invisible hit area extends beyond visual element)
- [ ] Prevent accidental double-taps
- [ ] Haptic feedback on tap (mobile vibration)
- [ ] Visual feedback: Scale up slightly on touch (active state)
- [ ] Ensure tokens don't overlap even when enlarged
- [ ] Test on actual mobile devices (iOS and Android)

**Technical Notes:**
- File: `src/components/court/PlayerToken.tsx`
- Responsive sizing: Use CSS media queries or Tailwind breakpoints
- Touch padding: `::before` pseudo-element or wrapper div
- Haptic: `navigator.vibrate(50)` on tap (progressive enhancement)
- CSS: `:active` state for touch feedback
- Consider: Adjust court scaling on mobile to accommodate larger tokens

**Current Implementation Check:**
```typescript
// Check src/components/court/PlayerToken.tsx for current sizes
// Look for className with w-* and h-* (Tailwind size classes)
```

**Estimated Effort:** Small (1-2 hours)

**Testing:**
- Test on iPhone SE (smallest common screen)
- Test on various Android devices
- Test with gloves (winter use case)
- Test with larger fingers/thumbs

---

## Implementation Strategy

**Recommended Order:**
1. F4 - Court legend (quickest win, high impact)
2. F5 - Mobile touch targets (improves usability immediately)
3. F1 - HOME → SERVE arrows (visual learning foundation)
4. F2 - HOME → RECEIVE arrows (builds on F1)
5. F3 - Animations (most complex, optional enhancement)

**Dependencies:**
- F1 and F2 can share arrow-drawing utilities
- F3 can incorporate arrows from F1/F2
- F4 and F5 are independent

---

## Shared Components to Create

### ArrowComponent
```typescript
// src/components/court/Arrow.tsx
interface ArrowProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
  curved?: boolean;
  label?: string;
}
```

### AnimationControls
```typescript
// src/components/court/AnimationControls.tsx
interface ControlsProps {
  onPlay: () => void;
  onPause: () => void;
  onSpeedChange: (speed: number) => void;
  isPlaying: boolean;
}
```

---

## Design Considerations

### Arrow Styling
- **Color:** Match player token colors for clarity
- **Width:** 2-3px (not too thick, not too thin)
- **Style:** Solid for direct moves, dashed for adjustments
- **Arrowhead:** Clear, proportional (10-15px)
- **Curve:** Use quadratic or cubic Bezier for natural paths

### Animation Timing
- **Duration:** 1.5-2 seconds per transition (not too fast, not too slow)
- **Easing:** `ease-in-out` for natural movement
- **Pause:** 1.5 seconds between arrangements (time to observe)
- **Loop:** Option to auto-repeat for continuous study

### Mobile Optimization
- **Simplify:** Fewer arrows on small screens if cluttered
- **Stack:** Consider vertical stacking of HOME/SERVE views on mobile
- **Touch:** Ensure animations don't interfere with touch scrolling

---

## Testing Checklist

- [ ] Arrows are visible and not cluttered on desktop
- [ ] Arrows are visible and not cluttered on mobile (320px width)
- [ ] Animations run smoothly at 60fps
- [ ] Controls work with mouse and touch
- [ ] Legend is visible and doesn't obstruct court
- [ ] Player tokens are easily tappable on phone
- [ ] Colors are accessible (sufficient contrast)
- [ ] Works on Chrome, Safari, Firefox
- [ ] Works on iOS and Android

---

## Accessibility Considerations

- Provide text alternatives for visual arrows (describe movement in text)
- Allow disabling animations (respect `prefers-reduced-motion`)
- Ensure color is not the only way to convey information
- Keyboard navigation for animation controls
- Screen reader announcements for animation state changes

---

## Impact

Visual enhancements will:
- Make abstract concepts concrete and visible
- Support visual learners (estimated 65% of population)
- Reduce cognitive load through visual processing
- Make mobile experience more intuitive
- Increase engagement through dynamic content
- Help users understand movement and flow, not just static positions

**Visual learning is especially important for spatial concepts like rotations.**

---

**Status:** ⬜ Not Started