import {
  Rotation,
  Arrangement,
  CourtPosition,
  ValidationResult,
  Player,
  PracticeSession,
  Zone,
  PlayerId,
} from './types';

/**
 * Validates if a player placement is correct
 */
export function validatePlayerPlacement(
  playerId: PlayerId,
  actualPosition: CourtPosition,
  correctRotation: Rotation,
  arrangement: Arrangement
): ValidationResult {
  const correctPlayer = correctRotation.arrangements[arrangement].players.find(
    (p) => p.id === playerId
  );

  // Get the zone for this player from the rotation's playerZones mapping
  const playerZone = Object.entries(correctRotation.playerZones).find(
    ([_, id]) => id === playerId
  )?.[0] as Zone | undefined;

  if (!correctPlayer || !playerZone) {
    return {
      playerId,
      isCorrect: false,
      correctZone: (playerZone || actualPosition.zone || Zone.I) as Zone,
      actualZone: (actualPosition.zone || Zone.I) as Zone,
      message: 'Player not found in rotation',
    };
  }

  const tolerance = 15; // 15% tolerance for position
  const xDiff = Math.abs(actualPosition.x - correctPlayer.coordinates.x);
  const yDiff = Math.abs(actualPosition.y - correctPlayer.coordinates.y);

  const isCorrect = xDiff <= tolerance && yDiff <= tolerance;

  return {
    playerId,
    isCorrect,
    correctZone: playerZone,
    actualZone: (actualPosition.zone || playerZone) as Zone,
    message: isCorrect ? 'Correct!' : `Should be in ${playerZone}`,
  };
}

/**
 * Validates all player placements for a session
 */
export function validateAllPlacements(
  session: PracticeSession,
  correctRotation: Rotation
): ValidationResult[] {
  const results: ValidationResult[] = [];

  session.playerPlacements.forEach((position, playerId) => {
    const result = validatePlayerPlacement(
      playerId,
      position,
      correctRotation,
      session.arrangement
    );
    results.push(result);
  });

  return results;
}

/**
 * Gets a hint (reveals one correct position)
 */
export function getHint(session: PracticeSession, rotation: Rotation): Player | null {
  const arrangement = rotation.arrangements[session.arrangement];
  const placedPlayerIds = Array.from(session.playerPlacements.keys());

  // Find first unplaced or incorrectly placed player
  for (const player of arrangement.players) {
    if (!placedPlayerIds.includes(player.id)) {
      return player;
    }

    const placement = session.playerPlacements.get(player.id);
    if (placement) {
      const validation = validatePlayerPlacement(
        player.id,
        placement,
        rotation,
        session.arrangement
      );
      if (!validation.isCorrect) {
        return player;
      }
    }
  }

  return null;
}

/**
 * Calculates the distance between two court positions
 */
export function calculateDistance(pos1: CourtPosition, pos2: CourtPosition): number {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Finds the closest valid position on the court
 */
export function findClosestPosition(
  clickPosition: { x: number; y: number },
  rotation: Rotation,
  arrangement: Arrangement
): Player | null {
  const players = rotation.arrangements[arrangement].players;
  let closest: Player | null = null;
  let minDistance = Infinity;

  for (const player of players) {
    const distance = calculateDistance(
      { x: clickPosition.x, y: clickPosition.y },
      player.coordinates
    );

    if (distance < minDistance) {
      minDistance = distance;
      closest = player;
    }
  }

  return closest;
}
