import { Player, Position, CourtPosition, Color } from './types';

/**
 * Factory functions for creating Player objects with consistent id, position, and color.
 * These functions take coordinates and automatically assign the correct id, position, and color.
 */

export function createSetter(coordinates: CourtPosition): Player {
  return {
    id: 'S1',
    position: Position.SETTER,
    color: Color.CYAN,
    coordinates,
  };
}

export function createRightSide(coordinates: CourtPosition): Player {
  return {
    id: 'RS1',
    position: Position.RIGHT_SIDE,
    color: Color.YELLOW,
    coordinates,
  };
}

export function createMiddle1(coordinates: CourtPosition): Player {
  return {
    id: 'M1',
    position: Position.MIDDLE,
    color: Color.BLUE,
    coordinates,
  };
}

export function createMiddle2(coordinates: CourtPosition): Player {
  return {
    id: 'M2',
    position: Position.MIDDLE,
    color: Color.ORANGE,
    coordinates,
  };
}

export function createOutside1(coordinates: CourtPosition): Player {
  return {
    id: 'O1',
    position: Position.OUTSIDE,
    color: Color.GREEN,
    coordinates,
  };
}

export function createOutside2(coordinates: CourtPosition): Player {
  return {
    id: 'O2',
    position: Position.OUTSIDE,
    color: Color.RED,
    coordinates,
  };
}

/**
 * Generic player creation function that takes all parameters
 */
export function createPlayer(
  id: string,
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
