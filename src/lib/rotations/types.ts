/**
 * Court zones using Roman numeral notation
 */
export enum Zone {
  I = 'I',     // Right back
  II = 'II',   // Right front
  III = 'III', // Middle front
  IV = 'IV',   // Left front
  V = 'V',     // Left back
  VI = 'VI',   // Middle back
}

/**
 * Player positions/roles
 */
export enum Position {
  SETTER = 'Setter',
  OUTSIDE = 'Outside',
  MIDDLE = 'Middle',
  RIGHT_SIDE = 'Right Side',
  LIBERO = 'Libero',
}

/**
 * The 4 arrangements in a rotation
 */
export enum Arrangement {
  HOME = 'Home',
  BASE = 'Base',
  SERVE = 'Serve',
  RECEIVE = 'Receive',
}

/**
 * Rotation system type
 */
export enum RotationSystem {
  FIVE_ONE = '5-1',
  SIX_TWO = '6-2',
}

/**
 * Coordinate system for player positioning
 * Values are percentages (0-100) for responsive positioning
 */
export interface CourtPosition {
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  zone: Zone;
}

/**
 * Individual player instance in an arrangement
 */
export interface Player {
  id: string;           // Unique identifier (e.g., "S1", "O1", "M1")
  position: Position;   // Player's role
  color: string;        // Hex color for visual distinction
  zone: Zone;          // Which zone they're in
  coordinates: CourtPosition; // Exact position on court
}

/**
 * Player position metadata and responsibilities
 */
export interface PositionInfo {
  position: Position;
  abbreviation: string; // "S", "O", "M", "RS", "L"
  color: string;
  description: string;
  responsibilities: {
    [Arrangement.HOME]: string[];
    [Arrangement.SERVE]: string[];
    [Arrangement.RECEIVE]: string[];
    [Arrangement.BASE]: string[];
  };
}

/**
 * Single arrangement within a rotation
 */
export interface ArrangementConfig {
  type: Arrangement;
  players: Player[];
  description: string;
  setupSteps?: string[]; // For Serve/Receive arrangements
}

/**
 * Complete rotation configuration
 */
export interface Rotation {
  id: number;              // 1-6
  system: RotationSystem;  // 5-1 or 6-2
  name: string;            // "Rotation 1"
  description: string;     // Overview of this rotation
  arrangements: {
    [Arrangement.HOME]: ArrangementConfig;
    [Arrangement.BASE]: ArrangementConfig;
    [Arrangement.SERVE]: ArrangementConfig;
    [Arrangement.RECEIVE]: ArrangementConfig;
  };
  serverZone: Zone;        // Which zone is serving
  setterZone: Zone;        // Which zone setter is in (for 5-1)
  frontRow: Position[];    // Which positions are in front row
  backRow: Position[];     // Which positions are in back row
}

/**
 * Glossary term
 */
export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'position' | 'zone' | 'arrangement' | 'concept' | 'system';
  relatedTerms?: string[];
  visualExample?: string; // Path to image/diagram
}

/**
 * Quiz/practice session
 */
export interface PracticeSession {
  rotationId: number;
  arrangement: Arrangement;
  playerPlacements: Map<string, CourtPosition>; // player ID -> position
  isComplete: boolean;
  correctCount: number;
  hintsUsed: number;
}

/**
 * Validation result for player placement
 */
export interface ValidationResult {
  playerId: string;
  isCorrect: boolean;
  correctZone: Zone;
  actualZone: Zone;
  message?: string;
}
