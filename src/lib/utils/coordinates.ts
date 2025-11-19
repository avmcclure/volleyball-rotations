import { Zone, CourtPosition } from '../rotations/types';

/**
 * Converts pixel coordinates to percentage coordinates
 */
export function pixelsToPercentage(
  x: number,
  y: number,
  containerWidth: number,
  containerHeight: number
): { x: number; y: number } {
  return {
    x: (x / containerWidth) * 100,
    y: (y / containerHeight) * 100
  };
}

/**
 * Converts percentage coordinates to pixel coordinates
 */
export function percentageToPixels(
  x: number,
  y: number,
  containerWidth: number,
  containerHeight: number
): { x: number; y: number } {
  return {
    x: (x / 100) * containerWidth,
    y: (y / 100) * containerHeight
  };
}

/**
 * Gets zone boundaries as percentages
 */
export function getZoneBoundaries(zone: Zone): { xMin: number; xMax: number; yMin: number; yMax: number } {
  const boundaries = {
    [Zone.I]: { xMin: 66, xMax: 100, yMin: 50, yMax: 100 },
    [Zone.II]: { xMin: 66, xMax: 100, yMin: 0, yMax: 50 },
    [Zone.III]: { xMin: 33, xMax: 66, yMin: 0, yMax: 50 },
    [Zone.IV]: { xMin: 0, xMax: 33, yMin: 0, yMax: 50 },
    [Zone.V]: { xMin: 0, xMax: 33, yMin: 50, yMax: 100 },
    [Zone.VI]: { xMin: 33, xMax: 66, yMin: 50, yMax: 100 }
  };

  return boundaries[zone];
}

/**
 * Determines which zone a coordinate falls into
 */
export function getZoneFromCoordinates(x: number, y: number): Zone {
  // x and y are percentages (0-100)
  const isLeft = x < 33;
  const isMiddle = x >= 33 && x < 66;
  const isRight = x >= 66;
  const isFront = y < 50;
  const isBack = y >= 50;

  if (isLeft && isFront) return Zone.IV;
  if (isMiddle && isFront) return Zone.III;
  if (isRight && isFront) return Zone.II;
  if (isLeft && isBack) return Zone.V;
  if (isMiddle && isBack) return Zone.VI;
  if (isRight && isBack) return Zone.I;

  return Zone.VI; // Default to middle back
}

/**
 * Snaps a coordinate to the nearest grid position
 */
export function snapToGrid(
  x: number,
  y: number,
  gridSize: number = 10
): { x: number; y: number } {
  return {
    x: Math.round(x / gridSize) * gridSize,
    y: Math.round(y / gridSize) * gridSize
  };
}
