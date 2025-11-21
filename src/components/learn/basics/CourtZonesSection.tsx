import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { USAVLineupSheet } from '@/components/court/USAVLineupSheet';

export function CourtZonesSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Court Zones</h2>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <USAVLineupSheet className="max-w-lg mx-auto" />
        </div>
        <div className="mt-6 space-y-3 text-gray-700">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold text-gray-900 mb-1">Key Points:</p>
            <ul className="space-y-1 text-sm">
              <li>• Zone <strong>I</strong> is the serving position (back right)</li>
              <li>• Players rotate <strong>clockwise</strong> through all 6 zones</li>
              <li>• Front row zones: <strong>II, III, IV</strong></li>
              <li>• Back row zones: <strong>I, V, VI</strong></li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
