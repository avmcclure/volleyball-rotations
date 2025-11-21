import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { CourtDiagram } from '@/components/court/CourtDiagram';

export function CourtZonesSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Court Zones</h2>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <CourtDiagram className="max-w-md mx-auto" />
        </div>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Labeled with Roman Numerals:</strong> I, II, III, IV, V, VI
          </li>
          <li>
            <strong>Service Order:</strong> I is the first server, II is second, etc.
          </li>
          <li>
            <strong>Layout:</strong> Zones II, III, IV are front row. Zones I, VI, V are back row.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
