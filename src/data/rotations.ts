import { Arrangement, Position, Rotation, RotationSystem, Zone } from '@/lib/rotations/types';
import {
  createS,
  createRS,
  createM1,
  createM2,
  createO1,
  createO2,
} from '@/lib/rotations/playerFactory';

export const rotations: Rotation[] = [
  // ROTATION 1 - Setter in Zone I
  {
    id: 1,
    system: RotationSystem.FIVE_ONE,
    name: 'Rotation 1',
    description:
      'Setter in Zone I (serving position). This is the first rotation in the service order.',
    serverZone: Zone.I,
    setterZone: Zone.I,
    frontRow: [Position.OUTSIDE, Position.MIDDLE, Position.RIGHT_SIDE],
    backRow: [Position.RIGHT_SIDE, Position.MIDDLE, Position.SETTER],

    arrangements: {
      [Arrangement.HOME]: {
        type: Arrangement.HOME,
        description: 'Starting positions based on service order',
        players: [
          createS({ x: 83, y: 75, zone: Zone.I }),
          createO1({ x: 83, y: 25, zone: Zone.II }),
          createM1({ x: 50, y: 25, zone: Zone.III }),
          createRS({ x: 17, y: 25, zone: Zone.IV }),
          createO2({ x: 17, y: 75, zone: Zone.V }),
          createM2({ x: 50, y: 75, zone: Zone.VI }),
        ],
      },
      [Arrangement.SERVE]: {
        type: Arrangement.SERVE,
        description: 'Positions when your team is serving',
        setupSteps: [
          'Move server back',
          'Move middle to base',
          'Set up front row to switch',
          'Set up back row to switch',
        ],
        players: [
          createS({ x: 84, y: 92, zone: Zone.I }),
          createO1({ x: 43, y: 24, zone: Zone.II }),
          createM1({ x: 50, y: 7, zone: Zone.III }),
          createRS({ x: 57, y: 16, zone: Zone.IV }),
          createO2({ x: 48, y: 44, zone: Zone.V }),
          createM2({ x: 38, y: 87, zone: Zone.VI }),
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          createS({ x: 90, y: 20, zone: Zone.I }),
          createO1({ x: 90, y: 7, zone: Zone.II }),
          createM1({ x: 51, y: 27, zone: Zone.III }),
          createRS({ x: 18, y: 71, zone: Zone.IV }),
          createO2({ x: 48, y: 76, zone: Zone.V }),
          createM2({ x: 83, y: 76, zone: Zone.VI }),
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          createS({ x: 85, y: 50, zone: Zone.I }),
          createO1({ x: 80, y: 11, zone: Zone.II }),
          createM1({ x: 53, y: 11, zone: Zone.III }),
          createRS({ x: 18, y: 12, zone: Zone.IV }),
          createO2({ x: 53, y: 87, zone: Zone.VI }),
          createM2({ x: 15, y: 50, zone: Zone.VI }),
        ],
      },
    },
  },

  // ROTATION 2 - Setter in Zone VI
  {
    id: 2,
    system: RotationSystem.FIVE_ONE,
    name: 'Rotation 2',
    description: 'Setter in Zone VI (middle back). Second rotation in the service order.',
    serverZone: Zone.VI,
    setterZone: Zone.VI,
    frontRow: [Position.RIGHT_SIDE, Position.OUTSIDE, Position.MIDDLE],
    backRow: [Position.MIDDLE, Position.SETTER, Position.RIGHT_SIDE],

    arrangements: {
      [Arrangement.HOME]: {
        type: Arrangement.HOME,
        description: 'Starting positions based on service order',
        players: [
          createO1({ x: 83, y: 75, zone: Zone.I }),
          createM1({ x: 83, y: 25, zone: Zone.II }),
          createRS({ x: 50, y: 25, zone: Zone.III }),
          createO2({ x: 17, y: 25, zone: Zone.IV }),
          createM2({ x: 17, y: 75, zone: Zone.V }),
          createS({ x: 50, y: 75, zone: Zone.VI }),
        ],
      },
      [Arrangement.SERVE]: {
        type: Arrangement.SERVE,
        description: 'Positions when your team is serving',
        setupSteps: [
          'Move server back',
          'Move middle to base',
          'Set up front row to switch',
          'Set up back row to switch',
        ],
        players: [
          createO1({ x: 84, y: 92, zone: Zone.I }),
          createM1({ x: 75, y: 25, zone: Zone.II }),
          createRS({ x: 50, y: 25, zone: Zone.III }),
          createO2({ x: 17, y: 15, zone: Zone.IV }),
          createM2({ x: 17, y: 65, zone: Zone.V }),
          createS({ x: 83, y: 65, zone: Zone.VI }),
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          createO1({ x: 84, y: 92, zone: Zone.I }),
          createM1({ x: 83, y: 25, zone: Zone.II }),
          createRS({ x: 90, y: 15, zone: Zone.III }),
          createO2({ x: 40, y: 85, zone: Zone.IV }),
          createM2({ x: 60, y: 85, zone: Zone.V }),
          createS({ x: 75, y: 25, zone: Zone.VI }),
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          createO1({ x: 84, y: 92, zone: Zone.I }),
          createM1({ x: 75, y: 15, zone: Zone.II }),
          createRS({ x: 50, y: 15, zone: Zone.III }),
          createO2({ x: 17, y: 15, zone: Zone.IV }),
          createM2({ x: 15, y: 50, zone: Zone.V }),
          createS({ x: 85, y: 50, zone: Zone.VI }),
        ],
      },
    },
  },

  // ROTATION 3 - Setter in Zone V
  {
    id: 3,
    system: RotationSystem.FIVE_ONE,
    name: 'Rotation 3',
    description: 'Setter in Zone V (left back). Third rotation in the service order.',
    serverZone: Zone.V,
    setterZone: Zone.V,
    frontRow: [Position.MIDDLE, Position.RIGHT_SIDE, Position.OUTSIDE],
    backRow: [Position.SETTER, Position.RIGHT_SIDE, Position.MIDDLE],

    arrangements: {
      [Arrangement.HOME]: {
        type: Arrangement.HOME,
        description: 'Starting positions based on service order',
        players: [
          createM1({ x: 83, y: 75, zone: Zone.I }),
          createRS({ x: 83, y: 25, zone: Zone.II }),
          createO2({ x: 50, y: 25, zone: Zone.III }),
          createM2({ x: 17, y: 25, zone: Zone.IV }),
          createS({ x: 17, y: 75, zone: Zone.V }),
          createO1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.SERVE]: {
        type: Arrangement.SERVE,
        description: 'Positions when your team is serving',
        setupSteps: [
          'Move server back',
          'Move middle to base',
          'Set up front row to switch',
          'Set up back row to switch',
        ],
        players: [
          createM1({ x: 83, y: 75, zone: Zone.I }),
          createRS({ x: 83, y: 25, zone: Zone.II }),
          createO2({ x: 50, y: 25, zone: Zone.III }),
          createM2({ x: 17, y: 25, zone: Zone.IV }),
          createS({ x: 17, y: 75, zone: Zone.V }),
          createO1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          createM1({ x: 83, y: 75, zone: Zone.I }),
          createRS({ x: 83, y: 25, zone: Zone.II }),
          createO2({ x: 50, y: 25, zone: Zone.III }),
          createM2({ x: 17, y: 25, zone: Zone.IV }),
          createS({ x: 17, y: 75, zone: Zone.V }),
          createO1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          createM1({ x: 83, y: 75, zone: Zone.I }),
          createRS({ x: 83, y: 25, zone: Zone.II }),
          createO2({ x: 50, y: 25, zone: Zone.III }),
          createM2({ x: 17, y: 25, zone: Zone.IV }),
          createS({ x: 17, y: 75, zone: Zone.V }),
          createO1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
    },
  },

  // ROTATION 4 - Setter in Zone IV
  {
    id: 4,
    system: RotationSystem.FIVE_ONE,
    name: 'Rotation 4',
    description: 'Setter in Zone IV (left front). Fourth rotation in the service order.',
    serverZone: Zone.IV,
    setterZone: Zone.IV,
    frontRow: [Position.SETTER, Position.MIDDLE, Position.RIGHT_SIDE],
    backRow: [Position.RIGHT_SIDE, Position.MIDDLE, Position.OUTSIDE],

    arrangements: {
      [Arrangement.HOME]: {
        type: Arrangement.HOME,
        description: 'Starting positions based on service order',
        players: [
          createRS({ x: 83, y: 75, zone: Zone.I }),
          createO2({ x: 83, y: 25, zone: Zone.II }),
          createM2({ x: 50, y: 25, zone: Zone.III }),
          createS({ x: 17, y: 25, zone: Zone.IV }),
          createO1({ x: 17, y: 75, zone: Zone.V }),
          createM1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.SERVE]: {
        type: Arrangement.SERVE,
        description: 'Positions when your team is serving',
        setupSteps: [
          'Move server back',
          'Move middle to base',
          'Set up front row to switch',
          'Set up back row to switch',
        ],
        players: [
          createRS({ x: 83, y: 75, zone: Zone.I }),
          createO2({ x: 83, y: 25, zone: Zone.II }),
          createM2({ x: 50, y: 25, zone: Zone.III }),
          createS({ x: 17, y: 25, zone: Zone.IV }),
          createO1({ x: 17, y: 75, zone: Zone.V }),
          createM1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          createRS({ x: 83, y: 75, zone: Zone.I }),
          createO2({ x: 83, y: 25, zone: Zone.II }),
          createM2({ x: 50, y: 25, zone: Zone.III }),
          createS({ x: 17, y: 25, zone: Zone.IV }),
          createO1({ x: 17, y: 75, zone: Zone.V }),
          createM1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          createRS({ x: 83, y: 75, zone: Zone.I }),
          createO2({ x: 83, y: 25, zone: Zone.II }),
          createM2({ x: 50, y: 25, zone: Zone.III }),
          createS({ x: 17, y: 25, zone: Zone.IV }),
          createO1({ x: 17, y: 75, zone: Zone.V }),
          createM1({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
    },
  },

  // ROTATION 5 - Setter in Zone III
  {
    id: 5,
    system: RotationSystem.FIVE_ONE,
    name: 'Rotation 5',
    description: 'Setter in Zone III (middle front). Fifth rotation in the service order.',
    serverZone: Zone.III,
    setterZone: Zone.III,
    frontRow: [Position.RIGHT_SIDE, Position.SETTER, Position.MIDDLE],
    backRow: [Position.MIDDLE, Position.OUTSIDE, Position.RIGHT_SIDE],

    arrangements: {
      [Arrangement.HOME]: {
        type: Arrangement.HOME,
        description: 'Starting positions based on service order',
        players: [
          createO2({ x: 83, y: 75, zone: Zone.I }),
          createM2({ x: 83, y: 25, zone: Zone.II }),
          createS({ x: 50, y: 25, zone: Zone.III }),
          createO1({ x: 17, y: 25, zone: Zone.IV }),
          createM1({ x: 17, y: 75, zone: Zone.V }),
          createRS({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.SERVE]: {
        type: Arrangement.SERVE,
        description: 'Positions when your team is serving',
        setupSteps: [
          'Move server back',
          'Move middle to base',
          'Set up front row to switch',
          'Set up back row to switch',
        ],
        players: [
          createO2({ x: 83, y: 75, zone: Zone.I }),
          createM2({ x: 83, y: 25, zone: Zone.II }),
          createS({ x: 50, y: 25, zone: Zone.III }),
          createO1({ x: 17, y: 25, zone: Zone.IV }),
          createM1({ x: 17, y: 75, zone: Zone.V }),
          createRS({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          createO2({ x: 83, y: 75, zone: Zone.I }),
          createM2({ x: 83, y: 25, zone: Zone.II }),
          createS({ x: 50, y: 25, zone: Zone.III }),
          createO1({ x: 17, y: 25, zone: Zone.IV }),
          createM1({ x: 17, y: 75, zone: Zone.V }),
          createRS({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          createO2({ x: 83, y: 75, zone: Zone.I }),
          createM2({ x: 83, y: 25, zone: Zone.II }),
          createS({ x: 50, y: 25, zone: Zone.III }),
          createO1({ x: 17, y: 25, zone: Zone.IV }),
          createM1({ x: 17, y: 75, zone: Zone.V }),
          createRS({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
    },
  },

  // ROTATION 6 - Setter in Zone II
  {
    id: 6,
    system: RotationSystem.FIVE_ONE,
    name: 'Rotation 6',
    description: 'Setter in Zone II (right front). Sixth rotation in the service order.',
    serverZone: Zone.II,
    setterZone: Zone.II,
    frontRow: [Position.MIDDLE, Position.RIGHT_SIDE, Position.SETTER],
    backRow: [Position.OUTSIDE, Position.RIGHT_SIDE, Position.MIDDLE],

    arrangements: {
      [Arrangement.HOME]: {
        type: Arrangement.HOME,
        description: 'Starting positions based on service order',
        players: [
          createM2({ x: 83, y: 75, zone: Zone.I }),
          createS({ x: 83, y: 25, zone: Zone.II }),
          createO1({ x: 50, y: 25, zone: Zone.III }),
          createM1({ x: 17, y: 25, zone: Zone.IV }),
          createRS({ x: 17, y: 75, zone: Zone.V }),
          createO2({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.SERVE]: {
        type: Arrangement.SERVE,
        description: 'Positions when your team is serving',
        setupSteps: [
          'Move server back',
          'Move middle to base',
          'Set up front row to switch',
          'Set up back row to switch',
        ],
        players: [
          createM2({ x: 83, y: 75, zone: Zone.I }),
          createS({ x: 83, y: 25, zone: Zone.II }),
          createO1({ x: 50, y: 25, zone: Zone.III }),
          createM1({ x: 17, y: 25, zone: Zone.IV }),
          createRS({ x: 17, y: 75, zone: Zone.V }),
          createO2({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          createM2({ x: 83, y: 75, zone: Zone.I }),
          createS({ x: 83, y: 25, zone: Zone.II }),
          createO1({ x: 50, y: 25, zone: Zone.III }),
          createM1({ x: 17, y: 25, zone: Zone.IV }),
          createRS({ x: 17, y: 75, zone: Zone.V }),
          createO2({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          createM2({ x: 83, y: 75, zone: Zone.I }),
          createS({ x: 83, y: 25, zone: Zone.II }),
          createO1({ x: 50, y: 25, zone: Zone.III }),
          createM1({ x: 17, y: 25, zone: Zone.IV }),
          createRS({ x: 17, y: 75, zone: Zone.V }),
          createO2({ x: 50, y: 25, zone: Zone.IV }),
        ],
      },
    },
  },
];

export function getRotation(id: number): Rotation | undefined {
  return rotations.find((r) => r.id === id);
}

export function getAllRotations(): Rotation[] {
  return rotations;
}
