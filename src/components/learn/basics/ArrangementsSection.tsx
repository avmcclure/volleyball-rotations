import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function ArrangementsSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">The 4 Arrangements</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          A rotation consists of 4 different arrangements where players position themselves:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">1. Home</h3>
            <p className="text-gray-600">
              Where you are in the service order. Your starting position before the serve.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">2. Serve</h3>
            <p className="text-gray-600">
              Spot when your team is serving. Optimized for attacking after the serve.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">3. Serve Receive</h3>
            <p className="text-gray-600">
              Spot when the other team is serving. Focuses on passing the serve.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">4. Base (Defense)</h3>
            <p className="text-gray-600">Where you play defense. Standard defensive positions.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
