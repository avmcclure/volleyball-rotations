import { Position, Arrangement, PositionInfo } from '@/lib/rotations/types';

export const positionInfo: PositionInfo[] = [
  {
    position: Position.SETTER,
    abbreviation: 'S',
    color: '#22D3EE',
    description: 'Orchestrates the offense by setting the ball to hitters',
    responsibilities: {
      [Arrangement.HOME]: [
        'Stand in designated service order zone',
        'Prepare to transition to setting position',
      ],
      [Arrangement.SERVE]: [
        'Positioned near right side for easy transition',
        'Ready to move to setter spot after serve contact',
      ],
      [Arrangement.RECEIVE]: [
        'Move up to net on right side',
        'Get to setter spot (right front area)',
        'Ready to set from Zone II area',
      ],
      [Arrangement.BASE]: [
        'Play right back defense',
        'Cover tips and off-speed shots',
        'Transition to setting position on dig',
      ],
    },
  },
  {
    position: Position.OUTSIDE,
    abbreviation: 'O',
    color: '#4ADE80',
    description: 'Primary attacker from the left side and key passer',
    responsibilities: {
      [Arrangement.HOME]: ['Stand in designated service order zone'],
      [Arrangement.SERVE]: [
        'Front row: Set up for left side attack',
        'Back row: Position for defense and potential back row attack',
      ],
      [Arrangement.RECEIVE]: [
        'Primary passer in serve receive formation',
        'Cover left and left-center zones',
        'Transition to left side approach after pass',
      ],
      [Arrangement.BASE]: [
        'Front row: Left front defense and attack',
        'Back row: Middle back defense, cover deep shots',
      ],
    },
  },
  {
    position: Position.MIDDLE,
    abbreviation: 'M',
    color: '#60A5FA',
    description: 'Quick attacker and primary blocker in the middle',
    responsibilities: {
      [Arrangement.HOME]: ['Stand in designated service order zone'],
      [Arrangement.SERVE]: [
        'Front row: Move to middle for quick attack threat',
        'Back row: Drop back to base defense position',
      ],
      [Arrangement.RECEIVE]: [
        'Front row: Stay middle for quick sets',
        'Back row: May help as 3rd passer or stay out',
      ],
      [Arrangement.BASE]: [
        'Front row: Middle block, read opposing setter',
        'Back row: Left back defense, dig line shots',
      ],
    },
  },
  {
    position: Position.RIGHT_SIDE,
    abbreviation: 'RS',
    color: '#FCD34D',
    description: 'Right side attacker and blocker, often sets when setter digs',
    responsibilities: {
      [Arrangement.HOME]: ['Stand in designated service order zone'],
      [Arrangement.SERVE]: [
        'Front row: Set up for right side attack',
        'Back row: Position for right back defense',
      ],
      [Arrangement.RECEIVE]: [
        'Front row: Set up for right side attack, possible emergency setter',
        'Back row: Usually does not pass, positions for transition',
      ],
      [Arrangement.BASE]: [
        'Front row: Right side block and attack',
        'Back row: Right back defense',
      ],
    },
  },
];

export function getPositionInfo(position: Position): PositionInfo | undefined {
  return positionInfo.find((p) => p.position === position);
}

export function getPositionColor(position: Position): string {
  const info = getPositionInfo(position);
  return info?.color || '#6B7280';
}
