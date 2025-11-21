import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function KeyConceptsSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Key Concepts</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Opposites</h3>
            <p className="text-gray-600">
              Players who are directly across from each other on the court (3 rotations apart).
              You will always be opposite the other player in your position.
            </p>
            <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
              <li>I - IV (Right back and left front)</li>
              <li>II - V (Right front and left back)</li>
              <li>III - VI (Middle front and middle back)</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

