# Group C: Terminology Consistency

**Priority:** 🔴 Critical
**Category:** Volleyball Accuracy
**Total Tasks:** 3

---

## Overview

The site currently uses inconsistent terminology for the same concepts, which can confuse learners. Standardizing terminology throughout the codebase, UI, and content will improve clarity and learning outcomes.

---

## Tasks

### C1: Standardize "Receive" vs "Serve Receive" Terminology ✅

**User Story:**
As a **volleyball learner**,
I want consistent terminology for the arrangement when receiving serve,
So that I'm not confused by different terms meaning the same thing.

**Acceptance Criteria:**
- [x] Audit all instances of "Receive" and "Serve Receive" across:
  - [x] Code (type definitions, variable names)
  - [x] UI text (page headings, labels, buttons)
  - [x] Glossary definitions
  - [x] User-facing explanations
- [x] Choose ONE standard term: **"Serve Receive"** (selected)
  - [x] Rationale: "Serve Receive" is more descriptive and commonly used in coaching
  - [x] "Receive" alone could be confused with receiving an attack
- [x] Update all instances to use chosen term
- [x] Update Arrangement enum: `Arrangement.RECEIVE = 'Serve Receive'`
- [x] Display names are consistent across all UI components

**Completed Work:**
- `src/lib/rotations/types.ts:55` - Updated enum value from `'Receive'` to `'Serve Receive'`
- `src/components/learn/basics/PhilosophySection.tsx:50` - Updated from "RECEIVE:" to "SERVE RECEIVE:"
- `src/data/glossary.ts:47` - Changed glossary term from "Receive Arrangement" to "Serve Receive"
- `src/data/glossary.ts:44` - Updated related term reference in "Serve Arrangement"
- Components using `Arrangement.RECEIVE` now automatically display "Serve Receive"

**Estimated Effort:** Small (1-2 hours) ✓ **Actual:** ~1 hour

---

### C2: Standardize "Base" vs "Base Defense" Terminology ✅

**User Story:**
As a **volleyball learner**,
I want consistent terminology for the defensive arrangement,
So that I understand when to use this positioning.

**Acceptance Criteria:**
- [x] Audit all instances of "Base", "Base Defense", and "Defense" across:
  - [x] Code (type definitions, variable names)
  - [x] UI text (page headings, labels, buttons)
  - [x] Glossary definitions
  - [x] User-facing explanations
- [x] Choose ONE standard term: **"Base Defense"** (selected)
  - [x] Rationale: "Base Defense" is more descriptive
  - [x] "Base" alone might be unclear to beginners
  - [x] Clearly indicates this is defensive positioning
- [x] Update all instances to use chosen term
- [x] Arrangement.BASE displays consistently as "Base Defense"

**Completed Work:**
- `src/lib/rotations/types.ts:53` - Updated enum value from `'Base'` to `'Base Defense'`
- `src/components/learn/basics/PhilosophySection.tsx:57` - Updated from "BASE:" to "BASE DEFENSE:"
- `src/components/learn/basics/ArrangementsSection.tsx:33` - Changed from "Base (Defense)" to "Base Defense"
- Glossary already used "Base Defense" consistently

**Estimated Effort:** Small (1 hour) ✓ **Actual:** ~30 minutes

---

### C3: Add Target Audience Level Indicators ✅

**User Story:**
As a **site visitor**,
I want to know what skill level the content is designed for,
So that I can determine if this site is appropriate for my needs.

**Acceptance Criteria:**
- [x] Add skill level indicator to homepage
  - [x] Clearly state target audience: "Designed for middle school to high school players (ages 12-18)"
- [x] Add skill level badges/tags to content:
  - [x] Basics page: "✓ Beginner Friendly" badge with green styling
  - [x] Descriptive subtitle: "This guide is designed for players ages 12-18 who are new to rotations"
- [x] Remove conflicting messaging:
  - [x] Homepage now clearly states ages 12-18, beginner to intermediate
  - [x] Aligns with full volleyball terminology used throughout

**Completed Work:**
- `src/app/page.tsx:21-24` - Added two-paragraph description clearly stating target audience (ages 12-18, beginner to intermediate)
- `src/app/learn/basics/page.tsx:14-27` - Added "✓ Beginner Friendly" badge and age-appropriate subtitle
- Resolved conflict between "perfect for beginners" and advanced terminology

**Decision Made:**
- **Target Audience:** Middle school to high school (ages 12-18), beginner to intermediate players
- **Rationale:** Content uses proper volleyball terminology while explaining concepts clearly for learners
- **Approach:** Simple badges and text statements (Option B) rather than complex level selectors

**Estimated Effort:** Small-Medium (2-3 hours) ✓ **Actual:** ~1.5 hours

---

## Bonus: Additional Terminology Standardization ✅

### Phased Out "Rotation System" in Favor of "Offensive System"

**Rationale:** "Offensive system" is more accurate coaching terminology. "Rotation" refers to the movement through zones, while "offensive system" (5-1, 6-2) refers to the team's strategic formation.

**Files Updated:**
- `src/data/glossary.ts:7,14` - Updated 5-1 and 6-2 definitions to use "offensive system"
- `src/app/page.tsx:19` - Changed to "5-1 offensive system"
- `src/lib/rotations/types.ts:59` - Updated comment from "Rotation system type" to "Offensive system type"
- `src/app/layout.tsx:11` - Updated meta description
- `src/components/learn/basics/FiveOneSystemSection.tsx:7,11` - Updated heading and content
- `README.md:3` - Updated project description
- `IMPLEMENTATION.md:5,155` - Updated documentation
- `stories.md:8,17-20` - Updated user stories

---

## Testing Checklist

After completing terminology updates:
- [x] Search codebase for old terms (grep)
- [x] Verify UI displays consistent terminology
- [x] Check that glossary matches usage throughout site
- [x] Ensure no conflicting terms in user-facing content
- [x] Test that arrangement labels display correctly on all pages
- [x] Build succeeded with no TypeScript errors (2 successful builds)

---

## Files Audited & Updated

### Type Definitions
- ✅ `src/lib/rotations/types.ts` - Updated Arrangement enum values

### Data
- ✅ `src/data/systems.ts` - No changes needed (uses enum values)
- ✅ `src/data/glossary.ts` - Updated term names and definitions

### Pages
- ✅ `src/app/page.tsx` - Added target audience description
- ✅ `src/app/learn/basics/page.tsx` - Added beginner-friendly badge
- ✅ `src/app/layout.tsx` - Updated meta description

### Components
- ✅ `src/components/rotation/RotationDisplay.tsx` - Uses enum (auto-updated)
- ✅ `src/components/rotation/ArrangementCard.tsx` - Uses enum (auto-updated)
- ✅ `src/components/learn/basics/ArrangementsSection.tsx` - Updated arrangement names
- ✅ `src/components/learn/basics/PhilosophySection.tsx` - Updated arrangement names
- ✅ `src/components/learn/basics/FiveOneSystemSection.tsx` - Updated to "offensive system"

### Documentation
- ✅ `README.md` - Updated to "offensive system"
- ✅ `IMPLEMENTATION.md` - Updated to "offensive system"
- ✅ `stories.md` - Updated to "offensive system"

---

## Impact

Terminology consistency achieved:
- ✅ Reduced learner confusion with consistent terms
- ✅ Created professional, polished impression
- ✅ Made content easier to search and reference
- ✅ Aligned with standard volleyball coaching terminology
- ✅ Improved SEO with consistent keywords
- ✅ Clear target audience eliminates confusion about skill level

---

## Final Decisions

**Terminology Choices:**
- ✅ "Serve Receive" (more descriptive than "Receive")
- ✅ "Base Defense" (clearer than just "Base")
- ✅ "Offensive System" (more accurate than "Rotation System")
- ✅ Target audience: Middle School to High School (ages 12-18), beginner to intermediate

**Implementation Approach:**
- Updated enum values directly so all references automatically use new terminology
- Added visual badges and descriptive text for skill levels
- Phased out ambiguous terminology across entire codebase

---

**Status:** ✅ Complete

**Completed:** 2025-01-20

**Build Status:** ✅ All builds passing, no TypeScript errors
