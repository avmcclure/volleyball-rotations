# Group E: Interactive Quizzes

**Priority:** 🟡 High Impact
**Category:** Learning Experience - Active Learning
**Total Tasks:** 4

---

## Overview

The site is currently passive (read and view only). Adding interactive quizzes transforms it into an active learning platform. Quizzes provide retrieval practice, immediate feedback, and help learners assess their understanding.

**Learning Principle:** Active recall and retrieval practice are proven to enhance long-term retention far more than passive review.

---

## Tasks

### E1: Add Zone Identification Quiz

**User Story:**
As a **volleyball learner**,
I want to practice identifying court zones by clicking on them,
So that I can memorize the zone layout and numbering system.

**Acceptance Criteria:**
- [ ] Create interactive court diagram where zones are clickable
- [ ] Quiz flow:
  - [ ] Question: "Click on Zone III" (or random zone)
  - [ ] User clicks on court area
  - [ ] Immediate feedback: ✅ Correct! or ❌ Try again
  - [ ] If incorrect: Show where Zone III actually is
  - [ ] Progress through all 6 zones randomly
- [ ] Score tracking: "5 of 6 correct"
- [ ] Option to retry quiz
- [ ] Celebration on 100% correct
- [ ] Add to `/learn/basics` page or create `/learn/basics/quiz`
- [ ] Mobile-friendly tap targets

**Technical Notes:**
- Create: `src/components/quiz/ZoneQuiz.tsx`
- Leverage: Existing court diagram components
- Add click handlers to zone areas
- Track state: current question, score, completed zones
- Consider: SVG with clickable regions vs HTML grid with buttons
- Feedback: Use modal or inline message with animation

**Estimated Effort:** Medium (3-4 hours)

**Enhancement Ideas:**
- Timed mode (speed challenge)
- Visual highlighting of zones on hover
- Sound effects for correct/incorrect
- Leaderboard or personal best tracking

---

### E2: Add Position Identification Quiz

**User Story:**
As a **volleyball learner**,
I want to identify where specific players should be positioned,
So that I understand rotations and can recognize correct positioning.

**Acceptance Criteria:**
- [ ] Quiz format: Multiple choice or click-based
- [ ] Question types:
  - [ ] "In Rotation 3, which zone is the Setter in?" → User selects zone
  - [ ] "Where is the Outside Hitter (O1) in Rotation 2, Serve Receive?" → Click position
  - [ ] "Which player is in Zone IV for Rotation 5?" → Select from list
- [ ] Cover different rotations and arrangements
- [ ] Immediate feedback with explanation
- [ ] Show correct answer with visual diagram if wrong
- [ ] Track accuracy: "8 of 10 correct"
- [ ] Option to quiz specific rotation or random mix

**Technical Notes:**
- Create: `src/components/quiz/PositionQuiz.tsx`
- Question bank: Generate from `src/data/systems.ts` data
- Display court diagram with question
- Highlight correct position on feedback
- Consider difficulty levels:
  - Easy: HOME positions only
  - Medium: SERVE and RECEIVE
  - Hard: All arrangements mixed

**Estimated Effort:** Medium-Large (4-6 hours)

**Question Bank Examples:**
```typescript
{
  question: "In Rotation 1, where is the Setter for HOME?",
  rotation: 1,
  arrangement: "HOME",
  correctAnswer: "Zone I",
  explanation: "The setter starts in Zone I for Rotation 1"
}
```

---

### E3: Add Rotation Number Identification Quiz

**User Story:**
As a **volleyball learner**,
I want to identify which rotation I'm looking at based on player positions,
So that I can quickly recognize rotations during a real game.

**Acceptance Criteria:**
- [ ] Show court diagram with HOME positions
- [ ] Question: "What rotation is this?"
- [ ] User selects: Rotation 1, 2, 3, 4, 5, or 6
- [ ] Hint option: "Where is the Setter?" (shows setter position)
- [ ] Immediate feedback with explanation
- [ ] If incorrect: Explain why (e.g., "Setter is in Zone VI, so this is Rotation 2")
- [ ] Quiz covers all 6 rotations in random order
- [ ] Advanced mode: Show SERVE or RECEIVE arrangements instead of HOME
- [ ] Score and progress tracking

**Technical Notes:**
- Create: `src/components/quiz/RotationIdentificationQuiz.tsx`
- Use data from `src/data/systems.ts`
- Display court with player tokens
- Multiple choice buttons (1-6)
- Highlight setter position in feedback
- Randomize rotation order for each quiz attempt

**Estimated Effort:** Medium (3-4 hours)

**Learning Tip to Include:**
"Pro tip: The quickest way to identify a rotation is to find the Setter's zone. Rotation 1 = Setter in Zone I, Rotation 2 = Setter in Zone VI, etc."

---

### E4: Implement Basic Scoring and Feedback System

**User Story:**
As a **volleyball learner**,
I want to see my quiz scores and receive encouraging feedback,
So that I feel motivated to improve and understand my progress.

**Acceptance Criteria:**
- [ ] Score display during quiz:
  - [ ] Current question: "Question 3 of 6"
  - [ ] Running score: "2 correct, 1 incorrect"
  - [ ] Streak indicator: "🔥 3 in a row!"
- [ ] End-of-quiz summary:
  - [ ] Final score: "5 out of 6 (83%)"
  - [ ] Performance message:
    - 100%: "Perfect! You've mastered this!" 🎉
    - 80-99%: "Great job! Almost perfect!" ⭐
    - 60-79%: "Good work! Keep practicing!" 👍
    - 40-59%: "You're learning! Try again!" 💪
    - 0-39%: "Keep studying! You'll get there!" 📚
  - [ ] "Try Again" button
  - [ ] "Review Material" link to relevant learning page
- [ ] Store quiz history in localStorage:
  - [ ] Best scores per quiz type
  - [ ] Total quizzes taken
  - [ ] Overall accuracy percentage
- [ ] Optional: Display personal best and improvement over time

**Technical Notes:**
- Create: `src/lib/quiz/scoring.ts` (utility functions)
- Create: `src/components/quiz/QuizResults.tsx` (results display)
- Create: `src/components/quiz/QuizProgress.tsx` (in-quiz progress)
- localStorage schema for quiz stats
- Reusable across all quiz types (E1, E2, E3)
- Consider animations for score reveals

**Estimated Effort:** Small-Medium (2-3 hours)

**localStorage Schema:**
```typescript
interface QuizStats {
  zoneQuiz: {
    attempts: number;
    bestScore: number;
    lastScore: number;
    averageScore: number;
  };
  positionQuiz: { /* same structure */ };
  rotationQuiz: { /* same structure */ };
  totalQuizzesTaken: number;
  overallAccuracy: number;
  lastUpdated: string;
}
```

---

## Implementation Strategy

**Recommended Order:**
1. E4 - Scoring system (foundation for all quizzes)
2. E1 - Zone quiz (simplest, builds confidence)
3. E3 - Rotation identification (builds on zone knowledge)
4. E2 - Position quiz (most complex, requires understanding of E1 + E3)

**Shared Components to Create:**
- `QuizContainer` - Wrapper with consistent styling and layout
- `QuizProgress` - Progress bar and score display
- `QuizResults` - End-of-quiz summary screen
- `FeedbackMessage` - Animated correct/incorrect feedback
- `CourtQuizDiagram` - Interactive court for quizzes

---

## Quiz Design Principles

### Immediate Feedback
- Never make users wait to know if they're right
- Explain WHY an answer is correct/incorrect
- Use visual cues (color, icons, animations)

### Encouraging, Not Punitive
- Celebrate correct answers enthusiastically
- Be gentle with incorrect answers
- Frame mistakes as learning opportunities
- Allow unlimited retries

### Spaced Repetition
- Randomize question order
- Bring back missed questions
- Review before moving to new material

### Mobile-First
- Large touch targets
- Clear, readable text
- Minimal scrolling during quiz
- Haptic feedback (vibration) on mobile

---

## Testing Checklist

For each quiz:
- [ ] Questions randomize correctly
- [ ] Feedback is immediate and clear
- [ ] Scoring calculates accurately
- [ ] localStorage saves/loads correctly
- [ ] Mobile touch targets are easy to tap
- [ ] Animations are smooth and not distracting
- [ ] Accessible via keyboard navigation
- [ ] Screen reader compatible

---

## Integration Points

### Link from Learning Pages
- Add "Test Your Knowledge" button on Basics page → Zone Quiz
- Add "Quiz Yourself" on each rotation detail → Position Quiz for that rotation
- Add "Rotation Challenge" button on Learn index → Rotation ID Quiz

### Navigation
- Create `/practice` or `/quiz` route structure:
  - `/practice/zones`
  - `/practice/positions`
  - `/practice/rotations`
- Update homepage "Practice Now" button (currently placeholder)

---

## Impact

Interactive quizzes will:
- Transform passive site into active learning platform
- Increase engagement and time on site
- Improve knowledge retention (retrieval practice)
- Provide immediate feedback for faster learning
- Make learning fun and game-like
- Help learners identify knowledge gaps
- Fulfill homepage promise of "Practice Now"

**This is one of the highest-impact additions possible.**

---

**Status:** ⬜ Not Started