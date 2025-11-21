# Group H: Advanced Interactivity

**Priority:** 🟢 Nice to Have
**Category:** Polish & Advanced Features
**Total Tasks:** 4

---

## Overview

These advanced interactive features transform the site from a learning tool into a comprehensive practice platform. While not essential for basic learning, they significantly increase engagement and provide opportunities for mastery through deliberate practice.

---

## Tasks

### H1: Implement Drag-and-Drop Practice Mode

**User Story:**
As a **volleyball learner**,
I want to drag players to their correct positions on the court,
So that I can practice positioning hands-on and get immediate feedback.

**Acceptance Criteria:**
- [ ] Practice mode page at `/practice/positioning`
- [ ] Game flow:
  - [ ] Show rotation number and arrangement type (e.g., "Rotation 3, Serve Receive")
  - [ ] Display empty court with zone outlines
  - [ ] Show 6 player tokens in a "player bank" to the side
  - [ ] User drags each token to correct position on court
  - [ ] Drop validation: Accepts if close enough to correct position
  - [ ] Immediate feedback: ✅ Correct! or ❌ Try again with hint
- [ ] Feedback system:
  - [ ] Correct placement: Token locks in place with success animation
  - [ ] Incorrect: Token bounces back or shows correct location
  - [ ] Hint button: Highlights the correct zone for selected player
  - [ ] Show remaining players to place
- [ ] Completion:
  - [ ] Celebrate when all 6 placed correctly
  - [ ] Show time taken and accuracy
  - [ ] "Try Another" button for new random scenario
- [ ] Difficulty options:
  - [ ] Easy: HOME positions only
  - [ ] Medium: SERVE and RECEIVE
  - [ ] Hard: Random arrangement from any rotation

**Technical Notes:**
- Library options:
  - `@dnd-kit` (modern, accessible)
  - `react-beautiful-dnd` (popular, feature-rich)
  - `react-dnd` (flexible, lower-level)
- Drag source: Player token bank
- Drop targets: Court zones or specific coordinate areas
- Validation: Calculate distance from correct position (tolerance: 50-100px)
- Mobile: Support touch drag (ensure library supports touch)
- State: Track placed players, remaining players, score

**Estimated Effort:** Large (8-10 hours)

**Validation Logic:**
```typescript
const isCorrectPosition = (
  droppedPosition: { x: number; y: number },
  correctPosition: { x: number; y: number },
  tolerance: number = 75
): boolean => {
  const distance = Math.sqrt(
    Math.pow(droppedPosition.x - correctPosition.x, 2) +
    Math.pow(droppedPosition.y - correctPosition.y, 2)
  );
  return distance <= tolerance;
};
```

---

### H2: Add "Test Yourself" Mode - Random Rotation/Arrangement Quiz

**User Story:**
As a **volleyball player preparing for games**,
I want to be quizzed on random rotations and arrangements,
So that I can quickly recognize any situation during actual play.

**Acceptance Criteria:**
- [ ] "Test Yourself" mode at `/practice/test`
- [ ] Quiz flow:
  - [ ] Randomly select rotation (1-6) and arrangement (HOME/SERVE/RECEIVE/BASE)
  - [ ] Show court with player positions
  - [ ] Ask question (random from pool):
    - "What rotation is this?"
    - "Which arrangement is shown?"
    - "Where should the setter move from here?"
    - "Which zone is [Player] in?"
  - [ ] Multiple choice or interactive answer
  - [ ] Immediate feedback with explanation
- [ ] Settings/options:
  - [ ] Number of questions (5, 10, 15, 20)
  - [ ] Rotation filter (practice specific rotations)
  - [ ] Arrangement filter (focus on SERVE or RECEIVE)
  - [ ] Difficulty: Include advanced questions
- [ ] Results screen:
  - [ ] Score breakdown by question type
  - [ ] Identify weak areas (e.g., "Struggle with Rotations 4-6")
  - [ ] Recommendations: "Review Rotation 5 SERVE"
  - [ ] Option to review incorrect answers

**Technical Notes:**
- Generate questions dynamically from rotation data
- Question types:
  - Identification (what rotation/arrangement)
  - Positioning (where should X be)
  - Movement (where does X go next)
  - Rules (is this legal positioning)
- Track user performance by:
  - Rotation number
  - Arrangement type
  - Question type
- Store results in localStorage for progress tracking

**Estimated Effort:** Large (6-8 hours)

**Question Generation Example:**
```typescript
const generateQuestion = (rotation: Rotation): Question => {
  const type = random(['rotation_id', 'arrangement_id', 'player_zone', 'movement']);

  switch (type) {
    case 'rotation_id':
      return {
        type,
        prompt: "What rotation is shown?",
        court: rotation.arrangements.HOME,
        correctAnswer: rotation.id,
        options: [1, 2, 3, 4, 5, 6]
      };
    // ... more question types
  }
};
```

---

### H4: Implement Practice Statistics Dashboard

**User Story:**
As a **motivated learner**,
I want to see my practice statistics and progress over time,
So that I can track improvement and identify areas to work on.

**Acceptance Criteria:**
- [ ] Dashboard at `/practice/stats` or on homepage widget
- [ ] Display metrics:
  - [ ] **Overall:**
    - Total quizzes taken
    - Overall accuracy percentage
    - Time spent practicing
    - Current streak (days in a row)
  - [ ] **By Rotation:**
    - Accuracy per rotation (1-6)
    - Visual heatmap or bar chart
    - "Strongest" and "Needs Work" rotations
  - [ ] **By Arrangement:**
    - Performance on HOME, SERVE, RECEIVE, BASE
    - Identify weak arrangement types
  - [ ] **Progress Over Time:**
    - Line graph showing improvement
    - Weekly/monthly summaries
    - Milestones achieved
- [ ] Visualizations:
  - [ ] Charts (Chart.js, Recharts, or Victory)
  - [ ] Progress circles (% mastery per rotation)
  - [ ] Achievement badges (100% on all rotations, etc.)
- [ ] Insights and recommendations:
  - [ ] "You're 85% accurate on Rotations 1-3. Practice 4-6 to improve!"
  - [ ] "Great work! You've improved 15% this week!"
  - [ ] Suggested next practice: Focus areas

**Technical Notes:**
- Data source: localStorage quiz history
- Schema: Extend quiz stats from Group E task E4
- Charting library options:
  - Recharts (React-specific, declarative)
  - Chart.js with react-chartjs-2
  - Victory (flexible, customizable)
- Calculate trends: Compare week-over-week, month-over-month
- Export feature: Download stats as CSV or PDF (optional)

**Estimated Effort:** Large (6-8 hours)

**localStorage Stats Schema:**
```typescript
interface PracticeStats {
  quizzes: {
    zoneQuiz: QuizHistory[];
    positionQuiz: QuizHistory[];
    rotationQuiz: QuizHistory[];
    dragDropPractice: PracticeHistory[];
    timedChallenge: ChallengeHistory[];
  };
  byRotation: {
    [rotationId: number]: {
      attempts: number;
      correct: number;
      accuracy: number;
    };
  };
  byArrangement: {
    HOME: { attempts: number; correct: number; };
    SERVE: { attempts: number; correct: number; };
    RECEIVE: { attempts: number; correct: number; };
    BASE: { attempts: number; correct: number; };
  };
  overall: {
    totalAttempts: number;
    totalCorrect: number;
    overallAccuracy: number;
    timeSpent: number;  // minutes
    streak: number;     // days
    lastPracticed: string;  // ISO date
  };
}
```

---

## Implementation Strategy

**Recommended Order:**

1. H1 - Drag-and-drop (most complex, standalone feature)
2. H2 - Test yourself mode (builds on existing quiz infrastructure)


**Dependencies:**
- H2 builds on quiz components from Group E
- H1 is independent

---

## Testing Checklist

- [ ] Drag-and-drop works smoothly on desktop and mobile
- [ ] Touch gestures work on tablets and phones
- [ ] Timers are accurate and don't drift
- [ ] Statistics calculate correctly
- [ ] Charts render properly at all screen sizes
- [ ] Performance is good (no lag during drag operations)
- [ ] Data persists across sessions (localStorage)
- [ ] Edge cases handled (no data, corrupted data, etc.)

---

## Gamification Elements

To maximize engagement, consider:
- **Achievements/Badges:**
  - "Perfect Score" - 100% on any quiz
  - "Speed Demon" - Complete challenge in record time
  - "Consistent" - Practice 7 days in a row
  - "Rotation Master" - Master all 6 rotations
- **Progress Bars:** Visual representation of mastery
- **Levels:** Beginner → Intermediate → Advanced → Expert
- **Challenges:** Weekly challenges with unique conditions

---

## Impact

Advanced interactivity will:
- Increase engagement and time on site
- Provide varied practice modalities (visual, kinesthetic, timed)
- Support skill progression from beginner to advanced
- Add competitive/game elements for motivation
- Enable true mastery through deliberate practice
- Differentiate site from passive learning resources
- Create "stickiness" - reason to return regularly

**These features transform the site into a true practice platform, not just a reference.**

---

**Status:** ⬜ Not Started