import { getAllSystems } from '@/data/systems';
import { LearnPageClient } from '@/components/learning/LearnPageClient';

export default function LearnPage() {
  const rotations = getAllSystems();

  return <LearnPageClient rotations={rotations} />;
}
