# Group A: Rotation Data Verification & Fixes

**Priority:** 🔴 Critical
**Category:** Volleyball Accuracy
**Total Tasks:** 6

---

## Overview

The rotation position data in `src/data/systems.ts` needs verification and correction. Some rotations have placeholder data (identical HOME/RECEIVE/BASE positions) or unusual positioning that doesn't match proper 5-1 system conventions.

**Key Issue:** Rotation 4 has identical positions for RECEIVE and BASE arrangements (lines 278-301), which is incorrect. Other rotations need expert review.

---

## Tasks

### A1: Verify and Fix Rotation 1 Arrangements

**User Story:**
As a **volleyball coach**,
I want Rotation 1 position data to be accurate for all arrangements,
So that players learn correct positioning when the setter is in Zone I.

**Acceptance Criteria:**
- [ ] HOME arrangement matches service order rules (no overlaps)
- [ ] SERVE arrangement shows proper transition positions
  - [ ] Setter moves toward front right to set
  - [ ] Server moves back to serve
  - [ ] Front row prepares to switch
  - [ ] Back row positions for defensive coverage
- [ ] RECEIVE arrangement shows proper serve receive formation
  - [ ] 3-person passing formation (typically W or cup)
  - [ ] Setter positioned near net (usually front right)
  - [ ] Non-passers ready to approach
- [ ] BASE arrangement shows proper defensive positions
  - [ ] Setter in defensive position (typically back right)
  - [ ] Front row spread for blocking
  - [ ] Back row positioned for dig coverage

**Technical Notes:**
- File: `src/data/systems.ts`, lines 13-85
- Uses factory functions from `src/lib/rotations/playerFactory.ts`
- Coordinates are percentage-based (x: 0-100, y: 0-100)
- Y=0 is net, Y=100 is back line
- X=0 is left, X=100 is right

**Estimated Effort:** Medium (2-4 hours)

---

### A2: Verify and Fix Rotation 2 Arrangements

**User Story:**
As a **volleyball coach**,
I want Rotation 2 position data to be accurate for all arrangements,
So that players learn correct positioning when the setter is in Zone VI (middle back).

**Acceptance Criteria:**
- [ ] HOME arrangement matches service order (Setter in Zone VI)
- [ ] SERVE arrangement shows back row setter positioning
  - [ ] Setter penetrates from middle back
  - [ ] Server positioned appropriately
  - [ ] 3 front row attackers ready
- [ ] RECEIVE arrangement optimized for passing
  - [ ] Setter pushes forward from Zone VI
  - [ ] Passing formation accounts for setter movement
- [ ] BASE arrangement has setter in back middle defensive position

**Technical Notes:**
- File: `src/data/systems.ts`, lines 88-158
- Setter is back row, so team has 3 front row attackers
- Setter penetration from middle back is different angle than from corners

**Estimated Effort:** Medium (2-4 hours)

---

### A3: Verify and Fix Rotation 3 Arrangements

**User Story:**
As a **volleyball coach**,
I want Rotation 3 position data to be accurate for all arrangements,
So that players learn correct positioning when the setter is in Zone V (left back).

**Acceptance Criteria:**
- [ ] HOME arrangement matches service order (Setter in Zone V)
- [ ] SERVE arrangement shows left back setter penetration
  - [ ] Setter path to front right from left back
  - [ ] Appropriate spacing for overlap prevention
- [ ] RECEIVE arrangement accounts for setter starting left back
- [ ] BASE arrangement has setter in left back defensive position

**Technical Notes:**
- File: `src/data/systems.ts`, lines 161-231
- Setter in Zone V typically has longer path to target position
- Need to ensure no overlaps with Zone IV player (front left)

**Estimated Effort:** Medium (2-4 hours)

---

### A4: Fix Rotation 4 Arrangements (CRITICAL)

**User Story:**
As a **volleyball coach**,
I want Rotation 4 to have distinct RECEIVE and BASE arrangements,
So that players see proper positioning instead of placeholder data.

**Acceptance Criteria:**
- [ ] HOME arrangement verified (Setter in Zone IV, front left)
- [ ] SERVE arrangement shows front row setter positioning
  - [ ] Setter already near net (front row advantage)
  - [ ] 2 front row attackers (middle and right side)
- [ ] RECEIVE arrangement is DIFFERENT from HOME (currently identical)
  - [ ] Setter positioned near net in front row
  - [ ] 3 back row passers in formation
  - [ ] Front row ready to approach
- [ ] BASE arrangement is DIFFERENT from HOME (currently identical)
  - [ ] Front row setter in appropriate defensive position
  - [ ] Defensive coverage spread

**Technical Notes:**
- File: `src/data/systems.ts`, lines 234-304
- **CRITICAL BUG:** Lines 278-301 show RECEIVE and BASE as copies of HOME
- This is clearly placeholder data that was never updated
- Setter is front row, so only 2 attackers available

**Estimated Effort:** Medium (2-4 hours)

---

### A5: Verify and Fix Rotation 5 Arrangements

**User Story:**
As a **volleyball coach**,
I want Rotation 5 position data to be accurate for all arrangements,
So that players learn correct positioning when the setter is in Zone III (middle front).

**Acceptance Criteria:**
- [ ] HOME arrangement matches service order (Setter in Zone III)
- [ ] SERVE arrangement reviewed for proper positioning
  - [ ] Current positions at lines 333-349 look unusual
  - [ ] Setter should be near net (already front row)
  - [ ] Verify M2 and RS positioning makes sense
- [ ] RECEIVE arrangement verified (currently same as HOME at lines 351-362)
  - [ ] Should be different from HOME for passing formation
- [ ] BASE arrangement shows middle front setter defensive role

**Technical Notes:**
- File: `src/data/systems.ts`, lines 307-377
- SERVE positions need review - some coordinates look off
- RECEIVE is identical to HOME (lines 351-362) - likely needs differentiation
- Setter in middle front is less common but valid

**Estimated Effort:** Medium-Large (3-5 hours)

---

### A6: Verify and Fix Rotation 6 Arrangements

**User Story:**
As a **volleyball coach**,
I want Rotation 6 position data to be accurate for all arrangements,
So that players learn correct positioning when the setter is in Zone II (right front).

**Acceptance Criteria:**
- [ ] HOME arrangement matches service order (Setter in Zone II)
- [ ] SERVE arrangement shows right front setter positioning
  - [ ] Setter already at target position (Zone II = right front)
  - [ ] Review coordinates at lines 406-422
- [ ] RECEIVE arrangement optimized for setter in front right
  - [ ] Most natural setter position for 5-1
  - [ ] 3 back row passers
- [ ] BASE arrangement has setter in right front defensive/coverage position
  - [ ] Note: Lines 437-447 identical to Rotation 5 base - verify if correct

**Technical Notes:**
- File: `src/data/systems.ts`, lines 380-450
- Zone II (right front) is ideal setter position - closest to target
- BASE positions (lines 437-447) are identical to Rotation 5 BASE (lines 364-374)
  - This might be intentional if defensive system is the same, but worth verifying
- SERVE M2 position at (82, 99) seems very far back - verify

**Estimated Effort:** Medium (2-4 hours)

---

## Dependencies

- All tasks use: `src/lib/rotations/playerFactory.ts`
- All tasks modify: `src/data/systems.ts`
- Visual verification requires running the dev server

## Testing Checklist

After fixing each rotation:
- [ ] No overlap violations in HOME arrangement
- [ ] SERVE arrangement shows logical movement from HOME
- [ ] RECEIVE arrangement differs from HOME and optimizes for passing
- [ ] BASE arrangement differs from HOME and shows defensive spread
- [ ] Visual check on court diagram looks correct
- [ ] setupSteps descriptions match actual position changes

---

## Notes

**Coordinate System Reference:**
- Court dimensions: 100 x 100 (percentage-based)
- Y-axis: 0 (net) to 100 (back line)
- X-axis: 0 (left sideline) to 100 (right sideline)
- Approximate zones:
  - Zone II: x: 70-100, y: 0-30 (right front)
  - Zone III: x: 35-65, y: 0-30 (middle front)
  - Zone IV: x: 0-30, y: 0-30 (left front)
  - Zone I: x: 70-100, y: 70-100 (right back)
  - Zone VI: x: 35-65, y: 70-100 (middle back)
  - Zone V: x: 0-30, y: 70-100 (left back)

**Status:** 🔵 Assigned to Coach Ace for expert review and corrections