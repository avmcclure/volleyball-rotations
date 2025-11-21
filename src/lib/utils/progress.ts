/**
 * Learning progress tracking utilities
 * Manages user progress through rotations using localStorage
 */

export interface LearningProgress {
  completedRotations: number[]; // Rotations marked as completed
  viewedRotations: number[]; // Rotations that have been viewed
  currentRotation: number; // Last viewed rotation
  lastVisited: string; // ISO timestamp
}

const STORAGE_KEY = 'volleyball-rotations-progress';
const TOTAL_ROTATIONS = 6;

/**
 * Get the current learning progress from localStorage
 */
export function getProgress(): LearningProgress {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getDefaultProgress();
    }
    return JSON.parse(stored) as LearningProgress;
  } catch {
    return getDefaultProgress();
  }
}

/**
 * Save learning progress to localStorage
 */
export function saveProgress(progress: LearningProgress): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
}

/**
 * Mark a rotation as viewed
 */
export function markRotationViewed(rotationId: number): void {
  const progress = getProgress();

  if (!progress.viewedRotations.includes(rotationId)) {
    progress.viewedRotations.push(rotationId);
    progress.viewedRotations.sort((a, b) => a - b);
  }

  progress.currentRotation = rotationId;
  progress.lastVisited = new Date().toISOString();

  saveProgress(progress);
}

/**
 * Mark a rotation as completed
 */
export function markRotationCompleted(rotationId: number): void {
  const progress = getProgress();

  // Ensure it's also marked as viewed
  if (!progress.viewedRotations.includes(rotationId)) {
    progress.viewedRotations.push(rotationId);
    progress.viewedRotations.sort((a, b) => a - b);
  }

  if (!progress.completedRotations.includes(rotationId)) {
    progress.completedRotations.push(rotationId);
    progress.completedRotations.sort((a, b) => a - b);
  }

  progress.currentRotation = rotationId;
  progress.lastVisited = new Date().toISOString();

  saveProgress(progress);
}

/**
 * Toggle completion status for a rotation
 */
export function toggleRotationCompleted(rotationId: number): boolean {
  const progress = getProgress();
  const isCompleted = progress.completedRotations.includes(rotationId);

  if (isCompleted) {
    progress.completedRotations = progress.completedRotations.filter((id) => id !== rotationId);
  } else {
    progress.completedRotations.push(rotationId);
    progress.completedRotations.sort((a, b) => a - b);

    // Ensure it's also marked as viewed
    if (!progress.viewedRotations.includes(rotationId)) {
      progress.viewedRotations.push(rotationId);
      progress.viewedRotations.sort((a, b) => a - b);
    }
  }

  progress.lastVisited = new Date().toISOString();
  saveProgress(progress);

  return !isCompleted;
}

/**
 * Check if a rotation is completed
 */
export function isRotationCompleted(rotationId: number): boolean {
  const progress = getProgress();
  return progress.completedRotations.includes(rotationId);
}

/**
 * Check if a rotation has been viewed
 */
export function isRotationViewed(rotationId: number): boolean {
  const progress = getProgress();
  return progress.viewedRotations.includes(rotationId);
}

/**
 * Get completion percentage (0-100)
 */
export function getCompletionPercentage(): number {
  const progress = getProgress();
  return Math.round((progress.completedRotations.length / TOTAL_ROTATIONS) * 100);
}

/**
 * Get number of completed rotations
 */
export function getCompletedCount(): number {
  const progress = getProgress();
  return progress.completedRotations.length;
}

/**
 * Check if all rotations are completed
 */
export function isAllCompleted(): boolean {
  return getCompletedCount() === TOTAL_ROTATIONS;
}

/**
 * Reset all progress
 */
export function resetProgress(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to reset progress:', error);
  }
}

/**
 * Get default/initial progress state
 */
function getDefaultProgress(): LearningProgress {
  return {
    completedRotations: [],
    viewedRotations: [],
    currentRotation: 1,
    lastVisited: new Date().toISOString(),
  };
}

/**
 * Get the next recommended rotation to learn
 */
export function getNextRotation(): number | null {
  const progress = getProgress();

  // Find the first rotation not completed
  for (let i = 1; i <= TOTAL_ROTATIONS; i++) {
    if (!progress.completedRotations.includes(i)) {
      return i;
    }
  }

  // All completed
  return null;
}
