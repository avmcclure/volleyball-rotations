import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function OverlapRulesSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Overlap Rules</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          An <strong>overlap</strong> is a rotation violation that occurs when players are not in
          their correct relative positions at the moment the server contacts the ball. Understanding
          overlap rules helps you avoid costly penalties.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">What Happens When an Overlap Occurs?</p>
          <p className="text-gray-700">
            The referee calls a violation. Your team loses the point, and the other team gets the
            serve.
          </p>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">The Three Overlap Rules</h3>
        <p className="text-gray-700 mb-3">
          These rules apply <strong>only at the moment of serve contact</strong>. After the ball
          is served, players can move anywhere!
        </p>

        <div className="space-y-4 mb-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">
              1. Front row must be in front of back row
            </h4>
            <p className="text-gray-700 text-sm mb-1">
              Each front row player must be closer to the net than their corresponding back row
              player.
            </p>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Zone II must be in front of Zone I</li>
              <li>Zone III must be in front of Zone VI</li>
              <li>Zone IV must be in front of Zone V</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">
              2. Maintain left-to-right order within each row
            </h4>
            <p className="text-gray-700 text-sm mb-1">
              Players in the same row must keep their correct order from left to right (from the
              team's perspective).
            </p>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>
                <strong>Front row:</strong> Zone IV (left) → Zone III (middle) → Zone II (right)
              </li>
              <li>
                <strong>Back row:</strong> Zone V (left) → Zone VI (middle) → Zone I (right)
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">
              3. Rules only apply at serve contact
            </h4>
            <p className="text-gray-700 text-sm">
              You only need to be in legal positions when the server hits the ball. Before and
              after that moment, you can position yourself anywhere on your side of the court to
              prepare for the play.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-300 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-green-600">✓</span> Legal Example
          </h4>
          <p className="text-gray-700 text-sm">
            Zone IV is to the left of Zone III, Zone III is to the left of Zone II. Zone IV is
            in front of Zone V. No overlap!
          </p>
        </div>

        <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-red-600">✗</span> Illegal Example
          </h4>
          <p className="text-gray-700 text-sm">
            If Zone II is to the left of Zone III at serve contact, that's an overlap violation
            because they're out of left-to-right order.
          </p>
        </div>

        <p className="text-gray-700 text-sm italic">
          <strong>Pro Tip:</strong> You can stand very close to the boundary between zones—even
          inches apart—as long as you maintain the correct relative positions. Many teams use this
          to get a head start on moving to their next arrangement!
        </p>
      </CardContent>
    </Card>
  );
}
