# Group D: Progressive Learning Path

**Priority:** 🟡 High Impact
**Category:** Learning Experience
**Total Tasks:** 5

---

## Overview

Currently, the site shows all 6 rotations at once, which overwhelms beginners. A progressive learning path guides learners through rotations one at a time, reveals complexity gradually, and provides clear navigation through the learning journey.

**Key Principle:** Chunking and scaffolding - break complex topics into digestible pieces and build on prior knowledge.

---

## Tasks

### D1: Create Guided Learning Sequence

**User Story:**
As a **beginner volleyball player**,
I want to learn rotations one at a time in a logical order,
So that I'm not overwhelmed by seeing all 6 rotations at once.

**Acceptance Criteria:**
- [ ] Modify `/learn` page to show progress-based view:
  - [ ] First visit: Show only Rotation 1 as "Start Here"
  - [ ] Show other rotations as "locked" or grayed out
  - [ ] After viewing Rotation 1: Unlock Rotation 2
  - [ ] Progressive unlock as user completes each rotation
- [ ] Add "Recommended Learning Order" section:
  - [ ] Rotation 1 → Rotation 2 → Rotation 3 → Rotation 4 → Rotation 5 → Rotation 6
  - [ ] Explanation: "Learn rotations in service order for easier understanding"
- [ ] Option to "Unlock All" for advanced users
- [ ] Store progress in localStorage
- [ ] Visual indicator showing "X of 6 rotations completed"

**Technical Notes:**
- File: `src/app/learn/page.tsx` (lines 6-76)
- Add progress state management (React Context or localStorage)
- Consider new component: `<ProgressTracker />`
- Add lock icon to cards for incomplete rotations
- Style completed rotations with checkmark or badge

**Estimated Effort:** Medium-Large (4-6 hours)

**Alternative Approach:**
Instead of locking, use visual emphasis - highlight "Next Up" rotation, dim completed ones, gray out "not yet recommended" ones

---

### D2: Add "Next Rotation" and "Previous Rotation" Navigation

**User Story:**
As a **volleyball learner**,
I want easy navigation between rotations without returning to the index,
So that I can flow through the learning sequence smoothly.

**Acceptance Criteria:**
- [ ] Add navigation buttons at bottom of each rotation detail page:
  - [ ] "← Previous: Rotation X" (disabled on Rotation 1)
  - [ ] "Next: Rotation X →" (or "Complete! →" on Rotation 6)
- [ ] Add floating navigation or breadcrumbs at top:
  - [ ] "← Back to All Rotations"
  - [ ] Current position indicator: "Rotation 3 of 6"
- [ ] Keyboard shortcuts (optional):
  - [ ] Left arrow: Previous rotation
  - [ ] Right arrow: Next rotation
- [ ] Mobile-friendly navigation (large touch targets)

**Technical Notes:**
- File: `src/app/learn/[id]/page.tsx`
- Create new component: `<RotationNavigation />`
- Pass current rotation ID and total count
- Use Next.js Link for client-side navigation
- Consider sticky positioning for always-visible nav

**Estimated Effort:** Small-Medium (2-3 hours)

---

### D3: Implement Progressive Arrangement Reveal

**User Story:**
As a **volleyball learner**,
I want to learn arrangements one at a time starting with HOME,
So that I understand each arrangement before adding complexity.

**Acceptance Criteria:**
- [ ] Initial view shows only HOME arrangement
- [ ] Add "Learn Next: Serve" button to reveal SERVE arrangement
- [ ] Progressive reveal sequence:
  1. HOME (always visible)
  2. "Show Serve" → reveals SERVE with explanation
  3. "Show Serve Receive" → reveals RECEIVE with explanation
  4. "Show Base Defense" → reveals BASE with explanation
- [ ] Each reveal includes:
  - [ ] Animated transition (smooth expand)
  - [ ] Brief explanation of when to use this arrangement
  - [ ] Visual difference highlighted (arrows showing movement?)
- [ ] "Show All" option for users who want full view
- [ ] State persists: once revealed, stays revealed for that rotation

**Technical Notes:**
- File: Modify `src/components/court/CourtGrid.tsx` or create new wrapper
- Use React state to track revealed arrangements
- CSS transitions for smooth reveal
- Consider accordion-style or tab-style UI
- localStorage to persist preference per rotation

**Estimated Effort:** Medium (3-5 hours)

**Design Consideration:**
Alternative: Use tabbed interface (Home | Serve | Receive | Base) instead of progressive reveal

---

### D4: Add Completion Checkmarks for Learned Rotations

**User Story:**
As a **volleyball learner**,
I want to see which rotations I've already studied,
So that I can track my progress and feel accomplishment.

**Acceptance Criteria:**
- [ ] Mark rotation as "viewed" when user spends time on detail page
- [ ] Show checkmark or completion badge on:
  - [ ] Rotation card on `/learn` page
  - [ ] Progress indicator/breadcrumb
- [ ] Display completion stats:
  - [ ] "3 of 6 rotations completed"
  - [ ] Progress bar showing percentage
- [ ] Allow user to manually mark as complete
- [ ] Store completion state in localStorage
- [ ] Optional: "Reset Progress" button in settings/menu

**Technical Notes:**
- Update: `src/app/learn/page.tsx` to show checkmarks
- Create progress utility functions (utils/progress.ts)
- localStorage key: `rotations-progress` (JSON object)
- Consider completion criteria:
  - Option A: Just viewing (automatic)
  - Option B: Viewing all 4 arrangements
  - Option C: Manual "Mark Complete" button
  - Option D: Passing quiz (requires Group E)

**Estimated Effort:** Small-Medium (2-3 hours)

---

### D5: Create "Learning Path" Progress Indicator

**User Story:**
As a **volleyball learner**,
I want to see my overall learning progress at a glance,
So that I feel motivated and know how far I've come.

**Acceptance Criteria:**
- [ ] Add progress indicator to `/learn` page header:
  - [ ] Visual progress bar (0-100%)
  - [ ] "X of 6 Rotations Complete"
  - [ ] Optional: Estimated time remaining
- [ ] Show progress in navigation/header across all learn pages
- [ ] Celebrate completion:
  - [ ] Special message when all 6 complete
  - [ ] "You've mastered all rotations!" badge
  - [ ] Encourage practice: "Ready to test yourself?"
- [ ] Progress visualization options:
  - [ ] Linear progress bar
  - [ ] Circular progress ring
  - [ ] Step-by-step breadcrumb trail
- [ ] Mobile responsive (compact view on small screens)

**Technical Notes:**
- Create: `src/components/learning/ProgressIndicator.tsx`
- Use in: `src/app/learn/page.tsx` and layout
- Read from localStorage progress data
- Consider animating progress changes
- Celebrate milestones (25%, 50%, 75%, 100%)

**Estimated Effort:** Small-Medium (2-3 hours)

**Design Inspiration:**
- Duolingo-style progress circles
- Khan Academy progress bars
- Simple percentage with visual bar

---

## Implementation Strategy

**Recommended Order:**
1. D4 - Completion checkmarks (foundation for progress tracking)
2. D5 - Progress indicator (builds on D4)
3. D2 - Next/Previous navigation (improves flow)
4. D1 - Guided sequence (enhances with progress)
5. D3 - Progressive reveal (most complex, optional enhancement)

**Dependencies:**
- D4 and D5 work together (progress tracking)
- D1 depends on D4 (needs completion tracking)
- D2 is independent (can be done anytime)
- D3 is independent but enhances D1

---

## Testing Checklist

After implementing progressive learning:
- [ ] First-time user sees only Rotation 1
- [ ] Progress persists across page reloads
- [ ] Navigation works on mobile and desktop
- [ ] Completion states save correctly
- [ ] "Unlock All" option works for advanced users
- [ ] Progress indicator updates in real-time
- [ ] Celebration/completion message displays correctly

---

## localStorage Schema

```typescript
interface LearningProgress {
  completedRotations: number[];      // [1, 2, 3]
  viewedRotations: number[];         // [1, 2, 3, 4]
  currentRotation: number;           // 4
  unlockedRotations: number[];       // [1, 2, 3, 4]
  allUnlocked: boolean;              // false
  lastVisited: string;               // ISO timestamp
  arrangementsRevealed: {            // per-rotation state
    [rotationId: number]: string[];  // ['HOME', 'SERVE']
  };
}
```

---

## Impact

Progressive learning will:
- Reduce cognitive overload for beginners
- Provide clear learning path (reduce confusion)
- Increase engagement through gamification
- Improve completion rates
- Give sense of accomplishment and progress
- Make complex topic feel approachable

---

**Status:** ⬜ Not Started