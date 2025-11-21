import { GlossaryTerm } from '@/lib/rotations/types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: '5-1 Rotation',
    definition:
      'An offensive system using 5 attackers and 1 setter. The same setter sets from all six rotations, providing consistency in tempo and decision-making. When the setter is front row, the team has 2 attackers; when back row, the team has 3 front row attackers. This is the most common system at higher competitive levels.',
    category: 'system',
    relatedTerms: ['6-2 Rotation', 'Setter', 'Front Row', 'Back Row'],
  },
  {
    term: '6-2 Rotation',
    definition:
      'An rotation system using 2 setters who are positioned opposite each other. The back row setter sets while the front row setter acts as a right side attacker. This gives the team 3 front row attackers at all times. Common at intermediate levels where having an extra attacker is more valuable than setter consistency.',
    category: 'system',
    relatedTerms: ['5-1 Rotation', 'Setter', 'Opposite'],
  },
  {
    term: 'Zone',
    definition:
      'The six court positions numbered with Roman numerals (I-VI) that determine service order and rotational movement. Zone I is back right (serving position), then counter-clockwise: II (front right), III (front middle), IV (front left), V (back left), VI (back middle). Players must maintain their relative zone positions until the ball is contacted on serve.',
    category: 'zone',
    relatedTerms: ['Service Order', 'Home', 'Overlap'],
  },
  {
    term: 'Home Position',
    definition:
      'The starting positions players must be in at the moment of serve, based on service order and overlap rules. Players must maintain correct front-to-back and left-to-right positioning relative to adjacent players. After the serve is contacted, players transition to their serve or receive positions.',
    category: 'arrangement',
    relatedTerms: ['Zone', 'Service Order', 'Overlap'],
  },
  {
    term: 'Base Defense',
    definition:
      'The defensive formation players move into after the opponent has transitioned to offense. Positions are optimized for court coverage based on where the attack is coming from. Players spread out to cover tips, rolls, and hard-driven attacks. Common formations include rotational defense and perimeter defense.',
    category: 'arrangement',
    relatedTerms: ['Home Position', 'Serve', 'Receive'],
  },
  {
    term: 'Serve Arrangement',
    definition:
      'The positions players move to immediately after your team serves. Players transition from home positions to optimize offensive setup. The setter moves toward the net (usually right front), passers spread to receive any return, and hitters position for attack approaches. This is also called "offensive transition."',
    category: 'arrangement',
    relatedTerms: ['Receive Arrangement', 'Base Defense', 'Home Position'],
  },
  {
    term: 'Receive Arrangement',
    definition:
      'The positions players take when receiving the opponent\'s serve. Typically features a 3-person passing formation (W-formation or cup formation) with best passers in zones V, VI, and I. The setter positions near the net to run the offense, while non-passers prepare to approach for attack. Also called "serve receive" or "reception."',
    category: 'arrangement',
    relatedTerms: ['Serve Arrangement', 'Base Defense', 'Passing'],
  },
  {
    term: 'Setter',
    definition:
      'The primary playmaker who delivers the second contact to set up attackers. Requires excellent ball control, court awareness, and decision-making. The setter calls plays, reads the defense, and distributes sets to create offensive opportunities. In a 5-1, one setter runs the entire offense; in a 6-2, the back row setter sets.',
    category: 'position',
    relatedTerms: ['5-1 Rotation', '6-2 Rotation', 'Front Row', 'Back Row'],
  },
  {
    term: 'Outside Hitter',
    definition:
      'Primary attacker who hits from the left side (Zone IV area). Typically one of the team\'s most well-rounded players, responsible for hitting, passing serve receive, and playing defense. Outside hitters must be able to hit high sets, attack from the back row, and handle pressure situations. Often the team\'s most consistent offensive weapon.',
    category: 'position',
    relatedTerms: ['Middle Blocker', 'Right Side', 'Passing'],
  },
  {
    term: 'Middle Blocker',
    definition:
      'Specializes in quick tempo attacks from the middle (Zone III area) and blocking. The middle blocker is critical to the team\'s block, reading the setter and moving laterally to form double blocks on the opponent\'s attacks. On offense, they hit fast 1-sets and slides to spread the defense. Often substituted out in back row by a defensive specialist (libero).',
    category: 'position',
    relatedTerms: ['Outside Hitter', 'Right Side', 'Libero'],
  },
  {
    term: 'Right Side',
    definition:
      'Attacks from the right side (Zone II area) and is positioned opposite the setter in a 5-1 system. Right sides must hit left-handed sets (opposite perspective from outside), block the opponent\'s outside hitter, and sometimes set if the setter takes the first contact. Often plays a more defensive role than outside hitters and must be comfortable attacking on the opponent\'s serve receive.',
    category: 'position',
    relatedTerms: ['Outside Hitter', 'Middle Blocker', 'Opposite'],
  },
  {
    term: 'Opposite',
    definition:
      'In a 5-1 system, the player positioned directly across from the setter (3 rotations apart). When the setter is in Zone I, the opposite is in Zone IV, etc. The opposite is typically the right side hitter who is in the front row when the setter is back row, making them the primary right side attacker. This positioning ensures balanced team distribution.',
    category: 'concept',
    relatedTerms: ['5-1 Rotation', 'Right Side', 'Service Order'],
  },
  {
    term: 'Rotation',
    definition:
      'The clockwise movement of players through the six zones after winning a rally while the opponent was serving. Each rotation represents one of six unique alignments in the service order. A "rotation" can also refer to a complete set of 4 arrangements (Home, Serve, Receive, Base) that define player positioning for that specific zone alignment.',
    category: 'concept',
    relatedTerms: ['Service Order', 'Zone', 'Overlap'],
  },
  {
    term: 'Service Order',
    definition:
      'The sequence in which players serve as they rotate through the six zones. Once established at the start of a set, this order never changes. Players rotate clockwise: I→VI→V→IV→III→II→I. Understanding service order is crucial because it determines which rotation you\'re in and helps players anticipate their upcoming positions.',
    category: 'concept',
    relatedTerms: ['Zone', 'Rotation', 'Home Position'],
  },
  {
    term: 'Front Row',
    definition:
      'Players positioned in Zones II, III, and IV. Front row players may attack the ball at any height and participate in blocking at the net. They must be positioned in front of their respective back row players at the moment of serve. A 5-1 has 2 or 3 front row attackers depending on whether the setter is front or back row.',
    category: 'concept',
    relatedTerms: ['Back Row', 'Attack Line', 'Zone'],
  },
  {
    term: 'Back Row',
    definition:
      'Players positioned in Zones V, VI, and I. Back row players may attack the ball if they jump from behind the 10-foot attack line (3-meter line). They cannot block or attack the ball above net height while in front of the attack line. Back row setters and attackers add offensive options but must follow these restrictions.',
    category: 'concept',
    relatedTerms: ['Front Row', 'Attack Line', 'Zone'],
  },
  {
    term: 'Attack Line',
    definition:
      'The line 10 feet (3 meters) from the net that divides the front and back court. Back row players must jump from behind this line when attacking a ball above net height. Also called the "10-foot line" or "3-meter line." This rule prevents back row players from having an unfair advantage by attacking from close to the net.',
    category: 'concept',
    relatedTerms: ['Back Row', 'Front Row'],
  },
  {
    term: 'Overlap',
    definition:
      'A rotational violation that occurs when players are not in their correct relative positions at the moment of serve. Front row players must be in front of their corresponding back row players, and players must be left-to-right in order. For example, Zone IV must be left of Zone III, and Zone III left of Zone II. An overlap results in a point and service for the opponent.',
    category: 'concept',
    relatedTerms: ['Zone', 'Home Position', 'Service Order'],
  },
  {
    term: 'Libero',
    definition:
      'A defensive specialist who wears a contrasting jersey and can substitute freely for back row players without counting against substitution limits. The libero cannot attack above net height, block, or serve in most rule sets. They typically replace middle blockers in the back row, allowing teams to have strong passers and defenders on the court at all times.',
    category: 'position',
    relatedTerms: ['Middle Blocker', 'Back Row', 'Passing'],
  },
  {
    term: 'Passing',
    definition:
      'The act of receiving the opponent\'s serve using a forearm pass (bump). Good passing is fundamental to running an effective offense. In serve receive, usually 3 players form the passing formation, with the best passers taking the majority of serves. Passes are rated on a scale where a "3-pass" allows the setter all attacking options.',
    category: 'concept',
    relatedTerms: ['Receive Arrangement', 'Outside Hitter', 'Libero'],
  },
];
