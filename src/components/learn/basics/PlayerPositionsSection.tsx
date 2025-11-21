import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function PlayerPositionsSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Player Positions</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              S
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Setter</h4>
              <p className="text-gray-600 text-sm">
                Runs the offense by setting the ball to hitters
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              O
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Outside Hitter</h4>
              <p className="text-gray-600 text-sm">
                Primary attacker from the left side and key passer
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              M
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Middle Blocker</h4>
              <p className="text-gray-600 text-sm">
                Quick attacker and primary blocker in the middle
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              RS
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Right Side</h4>
              <p className="text-gray-600 text-sm">
                Right side attacker and blocker, backup setter
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

