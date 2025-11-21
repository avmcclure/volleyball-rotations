import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function NextStepsSection() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn Rotations?</h2>
      <Link href="/learn/1">
        <Button size="lg" variant="primary">
          Start with Rotation 1
        </Button>
      </Link>
    </div>
  );
}

