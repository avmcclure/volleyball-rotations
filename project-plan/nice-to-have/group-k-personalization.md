# Group K: Personalization

**Priority:** 🟢 Nice to Have
**Category:** User Experience - Customization
**Total Tasks:** 4

---

## Overview

Personalization features allow users to tailor the learning experience to their specific needs, skill level, and learning style. These features increase engagement by making the site feel like it was built specifically for each individual user.

---

## Tasks

### K1: Add Skill Level Selector

**User Story:**
As a **user at a specific skill level**,
I want to set my volleyball experience level,
So that content is appropriately simplified or advanced for me.

**Acceptance Criteria:**
- [ ] Skill level options:
  - [ ] **Beginner (10U-12U):** Just starting, learning basics
  - [ ] **Intermediate (JV/13U-15U):** Understand basics, learning systems
  - [ ] **Advanced (Varsity/16U-18U):** Experienced, refining execution
  - [ ] **Elite (College+):** Mastery, tactical depth
- [ ] Selection UI:
  - [ ] Prompt on first visit: "What's your skill level?"
  - [ ] Save selection in localStorage
  - [ ] Change anytime in settings/profile
  - [ ] Visual selector (cards, dropdown, or slider)
- [ ] Content adapts based on level:
  - [ ] Explanation complexity adjusts
  - [ ] Terminology adjusts (simpler for beginners)
  - [ ] Example scenarios change
  - [ ] Quiz difficulty adapts
- [ ] Visual indicator:
  - [ ] Badge showing current level
  - [ ] Option to view content at different level

**Technical Notes:**
- Store: `localStorage.setItem('skillLevel', level)`
- Context: Create `SkillLevelContext` for app-wide access
- Content variants: Store multiple explanation versions
- Component: `<AdaptiveContent level={skillLevel}>`
- Default: Medium-high (JV/Intermediate) if not selected

**Estimated Effort:** Medium-Large (4-6 hours)

**Content Adaptation Examples:**

**Beginner Explanation:**
> "The setter runs the offense. They touch the ball second and pass it to a hitter."

**Advanced Explanation:**
> "The setter orchestrates offensive strategy by distributing sets to attackers based on defensive positioning, block formation, and play calling. In a 5-1, setter consistency across all rotations provides tempo control and tactical flexibility."

---

### K2: Adjust Explanation Complexity Based on Skill Level

**User Story:**
As a **learner at my chosen skill level**,
I want explanations that match my understanding,
So that I'm neither bored by oversimplification nor confused by complexity.

**Acceptance Criteria:**
- [ ] Dynamic content based on skill level (from K1)
- [ ] Adaptive elements:
  - [ ] **Vocabulary:**
    - Beginner: "front row" → "players near the net"
    - Advanced: Use full volleyball terminology
  - [ ] **Sentence structure:**
    - Beginner: Short, simple sentences
    - Advanced: Complex sentences with nuance
  - [ ] **Depth:**
    - Beginner: What and where
    - Intermediate: What, where, and when
    - Advanced: What, where, when, why, and how
  - [ ] **Examples:**
    - Beginner: Simple scenarios
    - Advanced: Game situation analysis
- [ ] Toggle complexity:
  - [ ] "Show Advanced Explanation" button
  - [ ] "Simplify" button for advanced users needing review
- [ ] Glossary terms:
  - [ ] Beginner: More linked terms, simpler definitions
  - [ ] Advanced: Fewer links, assume knowledge

**Technical Notes:**
- Content structure:
```typescript
interface AdaptiveContent {
  beginner: string;
  intermediate: string;
  advanced: string;
  elite: string;
}
```
- Helper function: `getContentForLevel(content, level)`
- Update: All rotation descriptions, arrangement explanations
- Consider: AI-generated variations (future enhancement)

**Estimated Effort:** Large (8-12 hours for content rewriting + 2-3 hours implementation)

**Rotation Description Example:**

```typescript
{
  name: "Rotation 1",
  descriptions: {
    beginner: "The setter is in the back right corner (Zone I). When your team serves, the setter will move toward the front right to set the ball.",

    intermediate: "Setter starts in Zone I (right back, serving position). On serve, the setter penetrates to the right front to run the offense. This rotation has the setter in the back row, so your team has 3 front row attackers.",

    advanced: "Rotation 1 positions the setter in Zone I, providing a natural transition path to the right front target position. With the setter back row, the team maximizes offensive options with three front row attackers (OH, MB, RS). The setter's serve allows immediate transition to setting position.",

    elite: "R1 optimizes for setter efficiency with a short penetration path from Zone I. Back row setter positioning enables full offensive spread with three front row options. Strategic considerations include setter serve placement to create offensive transition advantages and coordinated switching to prevent overlap violations during penetration."
  }
}
```

---

### K3: Add "Save My Progress" Feature

**User Story:**
As a **regular user of the site**,
I want my progress and preferences to be saved,
So that I can pick up where I left off on any device.

**Acceptance Criteria:**
- [ ] Save to localStorage (no account required):
  - [ ] Completed rotations
  - [ ] Quiz scores and history
  - [ ] Skill level preference
  - [ ] Theme preference (dark mode)
  - [ ] Last visited page
  - [ ] Arrangement reveal states
- [ ] Optional: Account-based sync (future enhancement)
  - [ ] Sign up with email
  - [ ] Sync progress across devices
  - [ ] Stored in database (requires backend)
- [ ] Data export:
  - [ ] "Download My Data" (JSON file)
  - [ ] Import data from another device
- [ ] Privacy:
  - [ ] Clear explanation of what's stored
  - [ ] "Clear All Data" button
  - [ ] No tracking without consent
- [ ] Welcome back message:
  - [ ] "Welcome back! You're on Rotation 3."
  - [ ] "Continue where you left off?"

**Technical Notes:**
- localStorage schema (see Group D, Task D4 for full schema)
- Utility functions:
  - `saveProgress(key, data)`
  - `loadProgress(key)`
  - `clearProgress()`
  - `exportProgress()` (download JSON)
  - `importProgress(file)` (upload JSON)
- Account sync (future):
  - Auth: NextAuth, Clerk, or Supabase
  - Database: Firebase, Supabase, or PostgreSQL
  - API endpoints for sync

**Estimated Effort:** Small (localStorage only: 2-3 hours) OR Large (with accounts: 10-15 hours)

**localStorage Keys:**
```typescript
const STORAGE_KEYS = {
  SKILL_LEVEL: 'vb-skill-level',
  PROGRESS: 'vb-learning-progress',
  QUIZ_STATS: 'vb-quiz-stats',
  THEME: 'vb-theme',
  LAST_VISITED: 'vb-last-visited',
  NOTES: 'vb-user-notes'
};
```

---

### K4: Add Custom Note-Taking for Each Rotation

**User Story:**
As a **player or coach studying rotations**,
I want to add my own notes to each rotation,
So that I can remember insights, questions, or team-specific adjustments.

**Acceptance Criteria:**
- [ ] Notes interface on each rotation page:
  - [ ] "Add Note" button or expandable text area
  - [ ] Rich text editor (optional: bold, italic, lists)
  - [ ] Markdown support (optional, for power users)
- [ ] Note features:
  - [ ] One note per rotation
  - [ ] Separate notes per arrangement (optional)
  - [ ] Timestamp: "Last edited 2 hours ago"
  - [ ] Character limit: 500-1000 characters
- [ ] Storage:
  - [ ] localStorage (per device)
  - [ ] Optional: Sync with account (future)
- [ ] Note management:
  - [ ] Edit/delete notes
  - [ ] Search across all notes
  - [ ] Export notes (download as text/PDF)
- [ ] Privacy indicator:
  - [ ] "Your notes are private and stored on your device"
- [ ] Use cases:
  - [ ] "Remember: Our team's M1 struggles with Zone V serves"
  - [ ] "Coach's tip: Call 'Switch!' loud during R2 SERVE"
  - [ ] "Question: Why does O2 move here instead of there?"

**Technical Notes:**
- Component: `<RotationNotes rotationId={1} />`
- Storage: `localStorage.setItem('vb-notes-r1', note)`
- Rich text options:
  - Simple: `<textarea>` with plain text
  - Medium: Markdown with preview (react-markdown)
  - Advanced: Rich editor (Draft.js, Slate, TipTap)
- Export: Compile all notes to text file or PDF
- Consider: Print notes with rotation cards (Group J, Task J4)

**Estimated Effort:** Small-Medium (3-4 hours for basic, 6-8 hours for rich text)

**UI Mockup:**
```
┌────────────────────────────────────────┐
│ Rotation 1 - HOME                      │
│ [Court Diagram]                        │
│                                        │
│ 📝 My Notes                           │
│ ┌──────────────────────────────────┐ │
│ │ Remember to call "Switch!" early  │ │
│ │ Coach says to watch for overlap   │ │
│ │                                    │ │
│ └──────────────────────────────────┘ │
│ [Save] [Cancel]                       │
│ Last edited: 2 hours ago              │
└────────────────────────────────────────┘
```

---

## Implementation Strategy

**Recommended Order:**
1. K1 - Skill level selector (foundation)
2. K3 - Save progress (localStorage only, simple version)
3. K4 - Note-taking (builds engagement)
4. K2 - Content adaptation (most work, highest impact)

**Dependencies:**
- K2 depends on K1 (needs skill level to adapt)
- K3 stores data from K1, D4, E4
- K4 is independent but uses storage from K3

---

## Content Development

**Task K2 Requires:**
- Rewriting all rotation descriptions at 4 skill levels
- Rewriting arrangement explanations at 4 skill levels
- Creating level-appropriate quiz questions
- Writing level-appropriate coaching tips (if Group I done)

**Estimated Content Work:**
- 6 rotations × 4 arrangements × 4 levels = 96 pieces of content
- Glossary: 4 versions of key definitions
- Quizzes: 3-4 difficulty variants

**Content Strategy:**
- Start with Beginner and Advanced (cover extremes)
- Intermediate can be a blend
- Elite can be Advanced + tactical depth

---

## Testing Checklist

- [ ] Skill level persists across sessions
- [ ] Content adapts correctly for each level
- [ ] Progress saves and loads without errors
- [ ] Notes save and are editable
- [ ] Export/import functions work
- [ ] Clear data removes all stored info
- [ ] No data loss on localStorage limits (5-10MB)
- [ ] Privacy: No data sent to server (if localStorage-only)

---

## Privacy Considerations

- **Data Collection:** Be transparent about what's stored
- **No Accounts:** localStorage-only respects privacy
- **With Accounts:** Comply with GDPR, CCPA
- **Analytics:** If added, make optional and disclose
- **Third-party:** Avoid unnecessary tracking scripts

**Privacy Policy** (if accounts added):
- What data is collected (email, progress)
- How it's used (sync, personalization only)
- Not sold or shared with third parties
- User can delete account and all data

---

## Future Enhancements (Beyond Scope)

- **Social Features:**
  - Share progress with team/coach
  - Team leaderboards
  - Coach can assign rotations to study

- **AI Personalization:**
  - Adaptive learning paths based on quiz performance
  - Personalized recommendations
  - AI-generated explanations at user's level

- **Multi-language Support:**
  - Translate content to Spanish, Portuguese, etc.
  - Volleyball is global sport

---

## Impact

Personalization will:
- Make site feel custom-built for each user
- Increase engagement through relevance
- Support wider range of users (beginners to elite)
- Enable long-term relationship (progress tracking)
- Differentiate from generic resources
- Support team/coach use cases (notes, customization)
- Create reason to return regularly

**Personalization transforms a learning tool into a learning companion.**

---

**Status:** ⬜ Not Started