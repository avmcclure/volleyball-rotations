/**
 * Player colors for visual distinction
 */
export enum Color {
  CYAN = '#22D3EE',
  GREEN = '#4ADE80',
  BLUE = '#60A5FA',
  YELLOW = '#FCD34D',
  RED = '#F87171',
  ORANGE = '#FB923C',
}

/**
 * Court zones using Roman numeral notation
 */
export enum Zone {
  I = 'I', // Right back
  II = 'II', // Right front
  III = 'III', // Middle front
  IV = 'IV', // Left front
  V = 'V', // Left back
  VI = 'VI', // Middle back
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
 * Player identifiers
 */
export enum PlayerId {
  S = 'S',
  RS = 'RS',
  M1 = 'M1',
  M2 = 'M2',
  O1 = 'O1',
  O2 = 'O2',
}

/**
 * The 4 arrangements in a rotation
 */
export enum Arrangement {
  HOME = 'Home',
  BASE = 'Base Defense',
  SERVE = 'Serve',
  RECEIVE = 'Serve Receive',
}

/**
 * Offensive system type
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
  zone?: Zone; // Optional: can be inferred from rotation-level playerZones
}

/**
 * Individual player instance in an arrangement
 */
export interface Player {
  id: PlayerId; // Unique identifier (e.g., PlayerId.S, PlayerId.O1, PlayerId.M1)
  position: Position; // Player's role
  color: Color; // Color for visual distinction
  coordinates: CourtPosition; // Exact position on court (includes zone)
}

/**
 * Player position metadata and responsibilities
 */
export interface PositionInfo {
  position: Position;
  abbreviation: string; // "S", "O", "M", "RS", "L"
  color: Color;
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
  id: number; // 1-6
  name: string; // "Rotation 1"
  description: string; // Overview of this rotation
  arrangements: {
    [Arrangement.HOME]: ArrangementConfig;
    [Arrangement.BASE]: ArrangementConfig;
    [Arrangement.SERVE]: ArrangementConfig;
    [Arrangement.RECEIVE]: ArrangementConfig;
  };
  playerZones: Record<Zone, PlayerId>; // Player ID assigned to each zone
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
  playerPlacements: Map<PlayerId, CourtPosition>; // player ID -> position
  isComplete: boolean;
  correctCount: number;
  hintsUsed: number;
}

/**
 * Validation result for player placement
 */
export interface ValidationResult {
  playerId: PlayerId;
  isCorrect: boolean;
  correctZone: Zone;
  actualZone: Zone;
  message?: string;
}
