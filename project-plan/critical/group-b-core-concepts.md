# Group B: Core Concepts & Rules

**Priority:** 🔴 Critical
**Category:** Volleyball Accuracy
**Total Tasks:** 4

---

## Overview

The Basics page currently explains zones and arrangements well, but is missing critical volleyball rules and concepts that learners need to understand WHY rotations work the way they do. These fundamental concepts are referenced throughout the site but never clearly explained.

---

## Tasks

### B1: Add Overlap Rules Explanation

**User Story:**
As a **beginner volleyball player**,
I want to understand what an overlap is and how to avoid it,
So that I don't cause a rotation violation during a match.

**Acceptance Criteria:**
- [ ] Define "overlap" in clear, beginner-friendly language
- [ ] Explain the three overlap rules:
  - [ ] Front row players must be in front of corresponding back row players
  - [ ] Players must maintain left-to-right order within rows
  - [ ] Rules only apply at the moment of serve contact
- [ ] Include visual diagram showing:
  - [ ] ✅ Legal positioning (no overlap)
  - [ ] ❌ Illegal positioning (overlap examples)
- [ ] Explain what happens when an overlap occurs (point + serve to opponent)
- [ ] Add example: "Zone IV must be left of Zone III, and Zone II must be right of Zone III"
- [ ] Clarify that after serve contact, players can move anywhere

**Technical Notes:**
- Add to: `src/app/learn/basics/page.tsx`
- Create new Card component after "4 Arrangements" section
- Consider adding to glossary with cross-reference
- May want interactive diagram (hover to see violations)

**Estimated Effort:** Small-Medium (2-3 hours)

**References:**
- Glossary already has overlap definition (src/data/glossary.ts:124-129)
- Can expand and visualize this concept

---

### B2: Add Attack Line / 10-Foot Line Explanation

**User Story:**
As a **beginner volleyball player**,
I want to understand what the attack line is and why it matters,
So that I know the rules for back row attacking.

**Acceptance Criteria:**
- [ ] Define attack line (10-foot line / 3-meter line)
- [ ] Explain visual appearance on court (dashed line parallel to net)
- [ ] Explain the rule: back row players must jump from behind this line when attacking above net height
- [ ] Clarify what "attacking" means in this context
- [ ] Show diagram with attack line clearly marked
- [ ] Explain why this rule exists (fairness/balance)
- [ ] Note that back row players can land in front of the line (jump location matters)

**Technical Notes:**
- Add to: `src/app/learn/basics/page.tsx`
- Add to Court diagram component? (`src/components/court/CourtDiagram.tsx` or similar)
- Should appear on all court visualizations as subtle line
- Link to "Back Row" glossary term

**Estimated Effort:** Small-Medium (2-3 hours)

**Visual Enhancement:**
Consider adding the attack line to all court diagrams site-wide for reference

---

### B3: Add Front Row vs Back Row Restrictions

**User Story:**
As a **volleyball learner**,
I want to understand the differences between front row and back row positions,
So that I know what each position can and cannot do.

**Acceptance Criteria:**
- [ ] Create comparison table/section:

| Aspect | Front Row (II, III, IV) | Back Row (I, VI, V) |
|--------|------------------------|---------------------|
| Attacking | Can attack at any height | Must jump behind attack line for attacks above net |
| Blocking | Can block at the net | Cannot block |
| Setting | Can set from anywhere | Can set from anywhere |
| Zones | Zones II, III, IV | Zones I, VI, V |

- [ ] Explain why setter position (front vs back row) matters
  - [ ] Front row setter = 2 attackers available
  - [ ] Back row setter = 3 attackers available
- [ ] Explain "libero" concept briefly (back row specialist)
- [ ] Show visual highlighting front vs back row zones

**Technical Notes:**
- Add to: `src/app/learn/basics/page.tsx`
- Insert after "Court Zones" section or as new "Position Rules" section
- Consider colored overlay on court diagram (front row vs back row)
- Cross-reference with glossary terms "Front Row" and "Back Row"

**Estimated Effort:** Small (1-2 hours)

---

### B4: Explain Tactical Reasoning for Switching Positions

**User Story:**
As a **volleyball learner**,
I want to understand WHY players switch from HOME to other arrangements,
So that rotations make strategic sense rather than seeming arbitrary.

**Acceptance Criteria:**
- [ ] Add "Why Do We Switch?" section to Basics page
- [ ] Explain the core philosophy:
  - [ ] Service order (HOME) is required by rules but not optimal for play
  - [ ] We move to better positions as soon as the serve is contacted
  - [ ] Goal: Get specialists into their best positions
- [ ] Explain each arrangement's purpose:
  - [ ] **SERVE:** Position for offensive transition after our serve
  - [ ] **RECEIVE:** Optimize passing formation with best passers
  - [ ] **BASE:** Defensive coverage based on opponent's attack
- [ ] Give concrete examples:
  - [ ] "Setter moves to front right to be close to target"
  - [ ] "Front row middle moves to center for blocking"
  - [ ] "Best passers form triangle for serve receive"
- [ ] Tie back to "3 Main Goals" already mentioned:
  - [ ] Have 3 primary passers ✓
  - [ ] Get setter to the setter spot ✓
  - [ ] Have front row middle hitting middle ✓

**Technical Notes:**
- Add to: `src/app/learn/basics/page.tsx`
- Consider expanding the existing "Philosophy" section (lines 14-26)
- Or create new section "Why Do We Switch Positions?"
- Should appear early in the page (before "4 Arrangements")
- Use simple, visual examples with diagrams

**Estimated Effort:** Small-Medium (2-3 hours)

**Enhancement Idea:**
Add side-by-side comparison showing HOME (suboptimal) vs RECEIVE (optimized) with arrows and annotations explaining why each player moved

---

## Testing Checklist

After adding each concept:
- [ ] Explanation is clear for 12U-JV level players
- [ ] Diagrams/visuals support the text
- [ ] Cross-references to glossary are added
- [ ] Content flows logically within Basics page
- [ ] Mobile formatting looks good
- [ ] No jargon used without definition

---

## Dependencies

- Primary file: `src/app/learn/basics/page.tsx`
- May need to update: `src/components/court/CourtDiagram.tsx`
- Cross-references: `src/data/glossary.ts`

---

## Impact

These additions will:
- Reduce confusion about rotation rules
- Help players avoid common violations
- Provide "why" behind the "what"
- Create foundation for understanding advanced concepts
- Support the learning goal: move from memorization to understanding

---

**Status:** ⬜ Not Started