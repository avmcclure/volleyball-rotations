import { Arrangement, PlayerId, Rotation, RotationSystem, Zone } from '@/lib/rotations/types';
import {
  createS,
  createRS,
  createM1,
  createM2,
  createO1,
  createO2,
} from '@/lib/rotations/playerFactory';

export const systems: Partial<Record<RotationSystem, Rotation[]>> = {
  [RotationSystem.FIVE_ONE]: [
    // ROTATION 1 - Setter in Zone I
    {
      id: 1,
      name: 'Rotation 1',
      description:
        'Setter in Zone I (serving position). This is the first rotation in the service order.',
      playerZones: {
        [Zone.I]: PlayerId.S,
        [Zone.II]: PlayerId.O1,
        [Zone.III]: PlayerId.M1,
        [Zone.IV]: PlayerId.RS,
        [Zone.V]: PlayerId.O2,
        [Zone.VI]: PlayerId.M2,
      },

      arrangements: {
        [Arrangement.HOME]: {
          type: Arrangement.HOME,
          description: 'Starting positions based on service order',
          players: [
            createS({ x: 83, y: 75 }),
            createO1({ x: 83, y: 25 }),
            createM1({ x: 50, y: 25 }),
            createRS({ x: 17, y: 25 }),
            createO2({ x: 17, y: 75 }),
            createM2({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.SERVE]: {
          type: Arrangement.SERVE,
          description: 'Positions when your team is serving',
          setupSteps: [
            'Move server back',
            'Move front row middle to base',
            'Set up front row to switch',
            'Set up back row to switch',
          ],
          players: [
            createS({ x: 82, y: 92 }),
            createO1({ x: 57, y: 17 }),
            createM1({ x: 50, y: 9 }),
            createRS({ x: 43, y: 22 }),
            createM2({ x: 39, y: 44 }),
            createO2({ x: 32, y: 88 }),
          ],
        },
        [Arrangement.RECEIVE]: {
          type: Arrangement.RECEIVE,
          description: 'Positions when receiving serve',
          setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
          players: [
            createS({ x: 90, y: 20 }),
            createO1({ x: 90, y: 7 }),
            createM1({ x: 51, y: 27 }),
            createRS({ x: 18, y: 71 }),
            createO2({ x: 48, y: 76 }),
            createM2({ x: 83, y: 76 }),
          ],
        },
        [Arrangement.BASE]: {
          type: Arrangement.BASE,
          description: 'Base defensive positions',
          players: [
            createS({ x: 90, y: 44 }),
            createO1({ x: 11, y: 12 }),
            createM1({ x: 51, y: 11 }),
            createRS({ x: 89, y: 12 }),
            createO2({ x: 50, y: 86 }),
            createM2({ x: 11, y: 45 }),
          ],
        },
      },
    },

    // ROTATION 2 - Setter in Zone VI
    {
      id: 2,
      name: 'Rotation 2',
      description: 'Setter in Zone VI (middle back). Second rotation in the service order.',
      playerZones: {
        [Zone.I]: PlayerId.O1,
        [Zone.II]: PlayerId.M1,
        [Zone.III]: PlayerId.RS,
        [Zone.IV]: PlayerId.O2,
        [Zone.V]: PlayerId.M2,
        [Zone.VI]: PlayerId.S,
      },

      arrangements: {
        [Arrangement.HOME]: {
          type: Arrangement.HOME,
          description: 'Starting positions based on service order',
          players: [
            createO1({ x: 83, y: 75 }),
            createM1({ x: 83, y: 25 }),
            createRS({ x: 50, y: 25 }),
            createO2({ x: 17, y: 25 }),
            createM2({ x: 17, y: 75 }),
            createS({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.SERVE]: {
          type: Arrangement.SERVE,
          description: 'Positions when your team is serving',
          setupSteps: [
            'Move server back',
            'Move front row middle to base',
            'Set up front row to switch',
            'Set up back row to switch',
          ],
          players: [
            createO1({ x: 84, y: 92 }),
            createS({ x: 90, y: 44 }),
            createM1({ x: 52, y: 7 }),
            createRS({ x: 42, y: 16 }),
            createO2({ x: 13, y: 8 }),
            createM2({ x: 12, y: 42 }),
          ],
        },
        [Arrangement.RECEIVE]: {
          type: Arrangement.RECEIVE,
          description: 'Positions when receiving serve',
          setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
          players: [
            createO2({ x: 82, y: 77 }),
            createM1({ x: 91, y: 30 }),
            createRS({ x: 85, y: 9 }),
            createS({ x: 74, y: 17 }),
            createO1({ x: 21, y: 65 }),
            createM2({ x: 48, y: 77 }),
          ],
        },
        [Arrangement.BASE]: {
          type: Arrangement.BASE,
          description: 'Base defensive positions',
          players: [
            createO1({ x: 51, y: 90 }),
            createM1({ x: 51, y: 10 }),
            createRS({ x: 89, y: 11 }),
            createO2({ x: 15, y: 11 }),
            createM2({ x: 13, y: 45 }),
            createS({ x: 89, y: 45 }),
          ],
        },
      },
    },

    // ROTATION 3 - Setter in Zone V
    {
      id: 3,
      name: 'Rotation 3',
      description: 'Setter in Zone V (left back). Third rotation in the service order.',
      playerZones: {
        [Zone.I]: PlayerId.M1,
        [Zone.II]: PlayerId.RS,
        [Zone.III]: PlayerId.O2,
        [Zone.IV]: PlayerId.M2,
        [Zone.V]: PlayerId.S,
        [Zone.VI]: PlayerId.O1,
      },

      arrangements: {
        [Arrangement.HOME]: {
          type: Arrangement.HOME,
          description: 'Starting positions based on service order',
          players: [
            createM1({ x: 83, y: 75 }),
            createRS({ x: 83, y: 25 }),
            createO2({ x: 50, y: 25 }),
            createM2({ x: 17, y: 25 }),
            createS({ x: 17, y: 75 }),
            createO1({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.SERVE]: {
          type: Arrangement.SERVE,
          description: 'Positions when your team is serving',
          setupSteps: [
            'Move server back',
            'Move front row middle to base',
            'Set up front row to switch',
            'Set up back row to switch',
          ],
          players: [
            createM1({ x: 86, y: 93 }),
            createRS({ x: 86, y: 9 }),
            createO2({ x: 55, y: 20 }),
            createM2({ x: 50, y: 8 }),
            createS({ x: 39, y: 43 }),
            createO1({ x: 51, y: 85 }),
          ],
        },
        [Arrangement.RECEIVE]: {
          type: Arrangement.RECEIVE,
          description: 'Positions when receiving serve',
          setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
          players: [
            createM1({ x: 83, y: 75 }),
            createRS({ x: 82, y: 30 }),
            createO2({ x: 12, y: 71 }),
            createM2({ x: 8, y: 7 }),
            createS({ x: 43, y: 15 }),
            createO1({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.BASE]: {
          type: Arrangement.BASE,
          description: 'Base defensive positions',
          players: [
            createM1({ x: 13, y: 45 }),
            createRS({ x: 87, y: 9 }),
            createO2({ x: 12, y: 9 }),
            createM2({ x: 51, y: 9 }),
            createS({ x: 87, y: 44 }),
            createO1({ x: 51, y: 90 }),
          ],
        },
      },
    },

    // ROTATION 4 - Setter in Zone IV
    {
      id: 4,
      name: 'Rotation 4',
      description: 'Setter in Zone IV (left front). Fourth rotation in the service order.',
      playerZones: {
        [Zone.I]: PlayerId.RS,
        [Zone.II]: PlayerId.O2,
        [Zone.III]: PlayerId.M2,
        [Zone.IV]: PlayerId.S,
        [Zone.V]: PlayerId.O1,
        [Zone.VI]: PlayerId.M1,
      },

      arrangements: {
        [Arrangement.HOME]: {
          type: Arrangement.HOME,
          description: 'Starting positions based on service order',
          players: [
            createRS({ x: 83, y: 75 }),
            createO2({ x: 83, y: 25 }),
            createM2({ x: 50, y: 25 }),
            createS({ x: 17, y: 25 }),
            createO1({ x: 17, y: 75 }),
            createM1({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.SERVE]: {
          type: Arrangement.SERVE,
          description: 'Positions when your team is serving',
          setupSteps: [
            'Move server back',
            'Move front row middle to base',
            'Set up front row to switch',
            'Set up back row to switch',
          ],
          players: [
            createRS({ x: 82, y: 94 }),
            createO2({ x: 57, y: 18 }),
            createM2({ x: 49, y: 7 }),
            createS({ x: 43, y: 26 }),
            createO1({ x: 28, y: 88 }),
            createM1({ x: 34, y: 45 }),
          ],
        },
        [Arrangement.RECEIVE]: {
          type: Arrangement.RECEIVE,
          description: 'Positions when receiving serve',
          setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
          players: [
            createRS({ x: 83, y: 75 }),
            createO2({ x: 83, y: 25 }),
            createM2({ x: 50, y: 25 }),
            createS({ x: 17, y: 25 }),
            createO1({ x: 17, y: 75 }),
            createM1({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.BASE]: {
          type: Arrangement.BASE,
          description: 'Base defensive positions',
          players: [
            createRS({ x: 83, y: 75 }),
            createO2({ x: 18, y: 26 }),
            createM2({ x: 13, y: 17 }),
            createS({ x: 8, y: 7 }),
            createO1({ x: 17, y: 75 }),
            createM1({ x: 50, y: 75 }),
          ],
        },
      },
    },

    // ROTATION 5 - Setter in Zone III
    {
      id: 5,
      name: 'Rotation 5',
      description: 'Setter in Zone III (middle front). Fifth rotation in the service order.',
      playerZones: {
        [Zone.I]: PlayerId.O2,
        [Zone.II]: PlayerId.M2,
        [Zone.III]: PlayerId.S,
        [Zone.IV]: PlayerId.O1,
        [Zone.V]: PlayerId.M1,
        [Zone.VI]: PlayerId.RS,
      },

      arrangements: {
        [Arrangement.HOME]: {
          type: Arrangement.HOME,
          description: 'Starting positions based on service order',
          players: [
            createO2({ x: 83, y: 75 }),
            createM2({ x: 83, y: 25 }),
            createS({ x: 50, y: 25 }),
            createO1({ x: 17, y: 25 }),
            createM1({ x: 17, y: 75 }),
            createRS({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.SERVE]: {
          type: Arrangement.SERVE,
          description: 'Positions when your team is serving',
          setupSteps: [
            'Move server back',
            'Move front row middle to base',
            'Set up front row to switch',
            'Set up back row to switch',
          ],
          players: [
            createO2({ x: 83, y: 75 }),
            createM2({ x: 91, y: 28 }),
            createS({ x: 75, y: 8 }),
            createO1({ x: 16, y: 72 }),
            createM1({ x: 50, y: 76 }),
            createRS({ x: 70, y: 90 }),
          ],
        },
        [Arrangement.RECEIVE]: {
          type: Arrangement.RECEIVE,
          description: 'Positions when receiving serve',
          setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
          players: [
            createO2({ x: 83, y: 75 }),
            createM2({ x: 83, y: 25 }),
            createS({ x: 50, y: 25 }),
            createO1({ x: 17, y: 25 }),
            createM1({ x: 17, y: 75 }),
            createRS({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.BASE]: {
          type: Arrangement.BASE,
          description: 'Base defensive positions',
          players: [
            createO2({ x: 53, y: 92 }),
            createM2({ x: 52, y: 10 }),
            createS({ x: 91, y: 11 }),
            createO1({ x: 11, y: 10 }),
            createM1({ x: 11, y: 43 }),
            createRS({ x: 91, y: 43 }),
          ],
        },
      },
    },

    // ROTATION 6 - Setter in Zone II
    {
      id: 6,
      name: 'Rotation 6',
      description: 'Setter in Zone II (right front). Sixth rotation in the service order.',
      playerZones: {
        [Zone.I]: PlayerId.M2,
        [Zone.II]: PlayerId.S,
        [Zone.III]: PlayerId.O1,
        [Zone.IV]: PlayerId.M1,
        [Zone.V]: PlayerId.RS,
        [Zone.VI]: PlayerId.O2,
      },

      arrangements: {
        [Arrangement.HOME]: {
          type: Arrangement.HOME,
          description: 'Starting positions based on service order',
          players: [
            createM2({ x: 83, y: 75 }),
            createS({ x: 83, y: 25 }),
            createO1({ x: 50, y: 25 }),
            createM1({ x: 17, y: 25 }),
            createRS({ x: 17, y: 75 }),
            createO2({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.SERVE]: {
          type: Arrangement.SERVE,
          description: 'Positions when your team is serving',
          setupSteps: [
            'Move server back',
            'Move front row middle to base',
            'Set up front row to switch',
            'Set up back row to switch',
          ],
          players: [
            createM2({ x: 82, y: 99 }),
            createS({ x: 84, y: 6 }),
            createO1({ x: 57, y: 18 }),
            createM1({ x: 50, y: 8 }),
            createRS({ x: 90, y: 43 }),
            createO2({ x: 47, y: 88 }),
          ],
        },
        [Arrangement.RECEIVE]: {
          type: Arrangement.RECEIVE,
          description: 'Positions when receiving serve',
          setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
          players: [
            createM2({ x: 83, y: 75 }),
            createS({ x: 76, y: 8 }),
            createO1({ x: 15, y: 73 }),
            createM1({ x: 7, y: 24 }),
            createRS({ x: 38, y: 92 }),
            createO2({ x: 50, y: 75 }),
          ],
        },
        [Arrangement.BASE]: {
          type: Arrangement.BASE,
          description: 'Base defensive positions',
          players: [
            createO2({ x: 53, y: 92 }),
            createM2({ x: 52, y: 10 }),
            createS({ x: 91, y: 11 }),
            createO1({ x: 11, y: 10 }),
            createM1({ x: 11, y: 43 }),
            createRS({ x: 91, y: 43 }),
          ],
        },
      },
    },
  ],
};

export function getRotation(id: number): Rotation | undefined {
  return Object.values(systems)
    .flat()
    .find((r) => r.id === id);
}

export function getAllSystems(): (Rotation & { system: RotationSystem })[] {
  return Object.entries(systems).flatMap(([system, rotations]) =>
    rotations.map((rotation) => ({ ...rotation, system: system as RotationSystem }))
  );
}
