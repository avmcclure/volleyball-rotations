import { GlossaryTerm } from '@/lib/rotations/types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: '5-1 Rotation',
    definition:
      'A rotation system with 5 hitters and 1 setter across 6 service rotations. The setter sets from all rotations.',
    category: 'system',
    relatedTerms: ['6-2 Rotation', 'Setter', 'Rotation'],
  },
  {
    term: '6-2 Rotation',
    definition:
      'A rotation system with 6 hitters and 2 setters. The setter in the back row sets while the front row setter acts as a hitter.',
    category: 'system',
    relatedTerms: ['5-1 Rotation', 'Setter'],
  },
  {
    term: 'Zone',
    definition:
      'Court positions labeled with Roman numerals (I-VI) that correspond to service order.',
    category: 'zone',
    relatedTerms: ['Service Order', 'Home'],
  },
  {
    term: 'Home',
    definition:
      'The starting position based on service order. Where players must be before the serve.',
    category: 'arrangement',
    relatedTerms: ['Zone', 'Service Order', 'Rotation'],
  },
  {
    term: 'Base Defense',
    definition: 'The defensive formation where players take their standard defensive positions.',
    category: 'arrangement',
    relatedTerms: ['Home', 'Serve', 'Receive'],
  },
  {
    term: 'Serve',
    definition:
      'The arrangement when your team is serving. Players position for optimal attack after the serve.',
    category: 'arrangement',
    relatedTerms: ['Serve Receive', 'Base', 'Home'],
  },
  {
    term: 'Serve Receive',
    definition:
      "The arrangement when your team is receiving the opponent's serve. Focuses on 3-person passing formation.",
    category: 'arrangement',
    relatedTerms: ['Serve', 'Base', 'Home'],
  },
  {
    term: 'Setter',
    definition:
      'The player responsible for setting the ball to hitters. In a 5-1, there is one setter who sets from all rotations.',
    category: 'position',
    relatedTerms: ['5-1 Rotation', 'Outside', 'Middle'],
  },
  {
    term: 'Outside Hitter',
    definition:
      'A primary hitter who attacks from the left side (Zone IV). Typically a primary passer.',
    category: 'position',
    relatedTerms: ['Middle', 'Right Side', 'Zone IV'],
  },
  {
    term: 'Middle Blocker',
    definition: 'A player who hits quick sets in the middle and is the primary blocker at the net.',
    category: 'position',
    relatedTerms: ['Outside', 'Zone III', 'Zone VI'],
  },
  {
    term: 'Right Side',
    definition:
      'The hitter who attacks from the right side (Zone II). Often acts as a backup setter.',
    category: 'position',
    relatedTerms: ['Outside', 'Middle', 'Setter'],
  },
  {
    term: 'Opposites',
    definition:
      'Players who are directly across from each other on the court (3 rotations apart). Example: Zone I and Zone IV.',
    category: 'concept',
    relatedTerms: ['Rotation', 'Zone'],
  },
  {
    term: 'Rotation',
    definition:
      'A set of 4 arrangements (Home, Serve, Receive, Base) that defines where players position themselves.',
    category: 'concept',
    relatedTerms: ['Home', 'Serve', 'Receive', 'Base'],
  },
  {
    term: 'Service Order',
    definition:
      'The order in which players serve, determined by their home zone (I, II, III, IV, V, VI).',
    category: 'concept',
    relatedTerms: ['Zone', 'Home', 'Rotation'],
  },
];

export function getGlossaryTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.category === category);
}

export function searchGlossary(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery)
  );
}
