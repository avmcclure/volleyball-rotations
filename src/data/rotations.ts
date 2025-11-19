import { Arrangement, Position, Rotation, RotationSystem, Zone } from '@/lib/rotations/types';

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
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 83, y: 75, zone: Zone.I },
          },
          {
            id: 'RS1',
            position: Position.OUTSIDE,
            color: '#FCD34D',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 25, zone: Zone.III },
          },
          {
            id: 'O1',
            position: Position.RIGHT_SIDE,
            color: '#4ADE80',
            coordinates: { x: 17, y: 25, zone: Zone.IV },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 75, zone: Zone.V },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 50, y: 75, zone: Zone.VI },
          },
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
          {
            id: 'S',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 84, y: 92, zone: Zone.I },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 42, y: 29, zone: Zone.III },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 15, zone: Zone.III },
          },
          {
            id: 'RS',
            position: Position.RIGHT_SIDE,
            color: '#FCD34D',
            coordinates: { x: 57, y: 21, zone: Zone.III },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 48, y: 44, zone: Zone.III },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 38, y: 87, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 83, y: 76, zone: Zone.I },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 90, y: 20, zone: Zone.II },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 90, y: 7, zone: Zone.II },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 51, y: 27, zone: Zone.III },
          },
          {
            id: 'RS',
            position: Position.RIGHT_SIDE,
            color: '#4ADE80',
            coordinates: { x: 18, y: 71, zone: Zone.V },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 48, y: 76, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 85, y: 50, zone: Zone.I },
          },
          {
            id: 'RS1',
            position: Position.RIGHT_SIDE,
            color: '#FCD34D',
            coordinates: { x: 25, y: 15, zone: Zone.II },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 15, zone: Zone.III },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 75, y: 15, zone: Zone.IV },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 50, y: 75, zone: Zone.V },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 15, y: 50, zone: Zone.VI },
          },
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
          {
            id: 'RS1',
            position: Position.RIGHT_SIDE,
            color: '#FCD34D',
            coordinates: { x: 83, y: 75, zone: Zone.I },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 25, zone: Zone.III },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 25, zone: Zone.IV },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 17, y: 75, zone: Zone.V },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 50, y: 75, zone: Zone.VI },
          },
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
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 75, y: 25, zone: Zone.II },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 25, zone: Zone.III },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 15, zone: Zone.IV },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 17, y: 65, zone: Zone.V },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 83, y: 65, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 90, y: 15, zone: Zone.III },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 40, y: 85, zone: Zone.IV },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 60, y: 85, zone: Zone.V },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 75, y: 25, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 75, y: 15, zone: Zone.II },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 15, zone: Zone.III },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 15, zone: Zone.IV },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 15, y: 50, zone: Zone.V },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 85, y: 50, zone: Zone.VI },
          },
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
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 83, y: 75, zone: Zone.I },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 50, y: 25, zone: Zone.III },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 17, y: 25, zone: Zone.IV },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 17, y: 75, zone: Zone.V },
          },
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
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 83, y: 95, zone: Zone.I },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 50, y: 20, zone: Zone.III },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 30, y: 25, zone: Zone.IV },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 50, y: 65, zone: Zone.V },
          },
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 17, y: 15, zone: Zone.I },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 90, y: 20, zone: Zone.II },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 40, y: 85, zone: Zone.III },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 70, y: 85, zone: Zone.IV },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 75, y: 25, zone: Zone.V },
          },
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 15, y: 50, zone: Zone.I },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 75, y: 15, zone: Zone.II },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 15, zone: Zone.III },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 50, y: 15, zone: Zone.IV },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 85, y: 50, zone: Zone.V },
          },
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
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 83, y: 75, zone: Zone.I },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 50, y: 25, zone: Zone.III },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 17, y: 25, zone: Zone.IV },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 75, zone: Zone.VI },
          },
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
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 85, zone: Zone.I },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 75, y: 25, zone: Zone.II },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 50, y: 15, zone: Zone.III },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 60, y: 25, zone: Zone.IV },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 70, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 30, y: 85, zone: Zone.I },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 75, y: 25, zone: Zone.II },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 50, y: 25, zone: Zone.III },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 83, y: 15, zone: Zone.IV },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 85, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 75, zone: Zone.I },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 15, zone: Zone.II },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 50, y: 15, zone: Zone.III },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 85, y: 15, zone: Zone.IV },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 15, y: 50, zone: Zone.VI },
          },
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
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 83, y: 75, zone: Zone.I },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 50, y: 25, zone: Zone.III },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 17, y: 75, zone: Zone.V },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 75, zone: Zone.VI },
          },
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
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 65, zone: Zone.I },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 75, y: 25, zone: Zone.II },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 60, y: 25, zone: Zone.III },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 17, y: 65, zone: Zone.V },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 17, y: 25, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 25, zone: Zone.I },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 85, y: 15, zone: Zone.III },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 35, y: 85, zone: Zone.V },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 30, y: 85, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 15, zone: Zone.I },
          },
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 50, y: 15, zone: Zone.II },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 85, y: 15, zone: Zone.III },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 15, y: 50, zone: Zone.V },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 75, zone: Zone.VI },
          },
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
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 83, y: 75, zone: Zone.I },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 83, y: 25, zone: Zone.II },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 17, y: 25, zone: Zone.IV },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 17, y: 75, zone: Zone.V },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 50, y: 75, zone: Zone.VI },
          },
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
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 83, y: 95, zone: Zone.I },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 83, y: 15, zone: Zone.II },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 15, zone: Zone.IV },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 65, zone: Zone.V },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 50, y: 25, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.RECEIVE]: {
        type: Arrangement.RECEIVE,
        description: 'Positions when receiving serve',
        setupSteps: ['Push setter up', 'Pull passer back', 'Shift back row passers'],
        players: [
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 70, y: 85, zone: Zone.I },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 90, y: 15, zone: Zone.II },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 17, y: 25, zone: Zone.IV },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 30, y: 85, zone: Zone.V },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 50, y: 85, zone: Zone.VI },
          },
        ],
      },
      [Arrangement.BASE]: {
        type: Arrangement.BASE,
        description: 'Base defensive positions',
        players: [
          {
            id: 'M2',
            position: Position.MIDDLE,
            color: '#FB923C',
            coordinates: { x: 15, y: 50, zone: Zone.I },
          },
          {
            id: 'S1',
            position: Position.SETTER,
            color: '#22D3EE',
            coordinates: { x: 85, y: 15, zone: Zone.II },
          },
          {
            id: 'M1',
            position: Position.MIDDLE,
            color: '#60A5FA',
            coordinates: { x: 50, y: 15, zone: Zone.IV },
          },
          {
            id: 'O1',
            position: Position.OUTSIDE,
            color: '#4ADE80',
            coordinates: { x: 50, y: 75, zone: Zone.V },
          },
          {
            id: 'O2',
            position: Position.OUTSIDE,
            color: '#F87171',
            coordinates: { x: 17, y: 15, zone: Zone.VI },
          },
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
