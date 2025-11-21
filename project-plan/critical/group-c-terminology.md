# Group C: Terminology Consistency

**Priority:** 🔴 Critical
**Category:** Volleyball Accuracy
**Total Tasks:** 3

---

## Overview

The site currently uses inconsistent terminology for the same concepts, which can confuse learners. Standardizing terminology throughout the codebase, UI, and content will improve clarity and learning outcomes.

---

## Tasks

### C1: Standardize "Receive" vs "Serve Receive" Terminology

**User Story:**
As a **volleyball learner**,
I want consistent terminology for the arrangement when receiving serve,
So that I'm not confused by different terms meaning the same thing.

**Acceptance Criteria:**
- [ ] Audit all instances of "Receive" and "Serve Receive" across:
  - [ ] Code (type definitions, variable names)
  - [ ] UI text (page headings, labels, buttons)
  - [ ] Glossary definitions
  - [ ] User-facing explanations
- [ ] Choose ONE standard term (recommendation: "Serve Receive")
  - [ ] Rationale: "Serve Receive" is more descriptive and commonly used in coaching
  - [ ] "Receive" alone could be confused with receiving an attack
- [ ] Update all instances to use chosen term
- [ ] Update Arrangement enum if needed (`Arrangement.RECEIVE` → `Arrangement.SERVE_RECEIVE`?)
- [ ] Ensure display names are consistent even if internal enum differs

**Technical Notes:**
- Files to check:
  - `src/lib/rotations/types.ts` - Arrangement enum definition
  - `src/data/systems.ts` - All arrangement descriptions
  - `src/data/glossary.ts` - Glossary entries (lines 47-52)
  - `src/app/learn/basics/page.tsx` - Arrangement explanations
  - All components that display arrangement names
- Consider: Keep enum as `Arrangement.RECEIVE` for brevity in code, but display as "Serve Receive" in UI

**Estimated Effort:** Small (1-2 hours)

**Decision Point:**
Which term should we use?
- Option A: "Serve Receive" (more descriptive, coaching standard)
- Option B: "Receive" (shorter, already in enum)
- Option C: "Reception" (formal term, less common in US)

---

### C2: Standardize "Base" vs "Base Defense" Terminology

**User Story:**
As a **volleyball learner**,
I want consistent terminology for the defensive arrangement,
So that I understand when to use this positioning.

**Acceptance Criteria:**
- [ ] Audit all instances of "Base", "Base Defense", and "Defense" across:
  - [ ] Code (type definitions, variable names)
  - [ ] UI text (page headings, labels, buttons)
  - [ ] Glossary definitions
  - [ ] User-facing explanations
- [ ] Choose ONE standard term (recommendation: "Base Defense")
  - [ ] Rationale: "Base Defense" is more descriptive
  - [ ] "Base" alone might be unclear to beginners
  - [ ] Clearly indicates this is defensive positioning
- [ ] Update all instances to use chosen term
- [ ] Ensure Arrangement.BASE displays consistently

**Technical Notes:**
- Files to check:
  - `src/lib/rotations/types.ts` - Arrangement enum
  - `src/data/systems.ts` - Arrangement descriptions (currently says "Base defensive positions")
  - `src/data/glossary.ts` - Line 34 says "Base Defense"
  - `src/app/learn/basics/page.tsx` - Line 80 says "Base (Defense)"
- Currently mixing terms - need to pick one

**Estimated Effort:** Small (1 hour)

**Decision Point:**
Which term should we use?
- Option A: "Base Defense" (most descriptive)
- Option B: "Base" (shorter, common coaching term)
- Option C: "Defense" (too generic, could mean anything)

---

### C3: Add Target Audience Level Indicators

**User Story:**
As a **site visitor**,
I want to know what skill level the content is designed for,
So that I can determine if this site is appropriate for my needs.

**Acceptance Criteria:**
- [ ] Add skill level indicator to homepage
  - [ ] Clearly state target audience (e.g., "Designed for ages 10-18, beginner to intermediate")
- [ ] Consider adding skill level badges/tags to content:
  - [ ] Basics page: "Beginner friendly" badge
  - [ ] Rotations: Difficulty indicators (Beginner / Intermediate)
  - [ ] Glossary: Mark advanced terms
- [ ] Update meta description and about text
- [ ] Decide on ONE target audience or implement level selector
- [ ] Remove conflicting messaging:
  - [ ] Homepage says "Perfect for beginners" (implies 10U-12U)
  - [ ] Content uses full terminology (suggests JV-Varsity)
  - [ ] Need to align these

**Technical Notes:**
- Files to update:
  - `src/app/page.tsx` - Homepage hero and feature descriptions
  - `src/app/learn/basics/page.tsx` - Add level indicator
  - `src/components/ui/Badge.tsx` or create new badge component
  - Consider adding metadata to rotation objects in `src/data/systems.ts`
- Decision needed: Single target audience vs multi-level content

**Estimated Effort:** Small-Medium (2-3 hours)

**Decision Points:**
1. **Who is the primary target audience?**
   - Option A: 10U-12U beginners (simplify all content)
   - Option B: Middle school JV (12U-14U) (current sweet spot)
   - Option C: High school JV-Varsity (14U-18U) (more advanced)
   - Option D: All levels with selector (more work, better long-term)

2. **How to indicate levels?**
   - Option A: Simple statement on homepage only
   - Option B: Badges on each piece of content
   - Option C: Interactive skill level selector (see Group K)

---

## Testing Checklist

After completing terminology updates:
- [ ] Search codebase for old terms (grep)
- [ ] Verify UI displays consistent terminology
- [ ] Check that glossary matches usage throughout site
- [ ] Ensure no conflicting terms in user-facing content
- [ ] Test that arrangement labels display correctly on all pages

---

## Files to Audit

### Type Definitions
- `src/lib/rotations/types.ts`

### Data
- `src/data/systems.ts` (all rotation descriptions)
- `src/data/glossary.ts` (all term definitions)

### Pages
- `src/app/page.tsx` (homepage)
- `src/app/learn/page.tsx`
- `src/app/learn/basics/page.tsx`
- `src/app/learn/[id]/page.tsx`
- `src/app/learn/glossary/page.tsx`

### Components
- `src/components/rotation/RotationDisplay.tsx`
- `src/components/rotation/ArrangementCard.tsx`
- Any component that displays arrangement names

---

## Impact

Terminology consistency will:
- Reduce learner confusion
- Create professional, polished impression
- Make content easier to search and reference
- Align with standard volleyball coaching terminology
- Improve SEO (consistent keywords)

---

## Recommendations

**Priority order:**
1. C2 - Base vs Base Defense (quickest fix)
2. C1 - Receive vs Serve Receive (slightly more work)
3. C3 - Target audience indicators (requires decision)

**Suggested Decisions:**
- Use "Serve Receive" (more descriptive than "Receive")
- Use "Base Defense" (clearer than just "Base")
- Target audience: Middle School JV (12U-14U) with note that content scales to high school

---

**Status:** ⬜ Not Started