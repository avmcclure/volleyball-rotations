import { Player, PlayerId, Position, CourtPosition, Color } from './types';

/**
 * Factory functions for creating Player objects with consistent id, position, and color.
 * Each function takes coordinates and automatically assigns the correct id, position, and color.
 */

// Setter helpers
export function createS(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.S,
    position: Position.SETTER,
    color: Color.CYAN,
    coordinates,
  };
}

export function createS1(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.S1,
    position: Position.SETTER,
    color: Color.CYAN,
    coordinates,
  };
}

// Right Side helpers
export function createRS(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.RS,
    position: Position.RIGHT_SIDE,
    color: Color.YELLOW,
    coordinates,
  };
}

export function createRS1(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.RS1,
    position: Position.RIGHT_SIDE,
    color: Color.YELLOW,
    coordinates,
  };
}

// Middle helpers
export function createM1(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.M1,
    position: Position.MIDDLE,
    color: Color.BLUE,
    coordinates,
  };
}

export function createM2(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.M2,
    position: Position.MIDDLE,
    color: Color.ORANGE,
    coordinates,
  };
}

// Outside helpers
export function createO1(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.O1,
    position: Position.OUTSIDE,
    color: Color.GREEN,
    coordinates,
  };
}

export function createO2(coordinates: CourtPosition): Player {
  return {
    id: PlayerId.O2,
    position: Position.OUTSIDE,
    color: Color.RED,
    coordinates,
  };
}

/**
 * Generic player creation function that takes all parameters
 */
export function createPlayer(
  id: PlayerId,
  position: Position,
  color: Color,
  coordinates: CourtPosition
): Player {
  return {
    id,
    position,
    color,
    coordinates,
  };
}
