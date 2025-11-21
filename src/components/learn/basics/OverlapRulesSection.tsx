import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { OverlapExample } from './OverlapExample';
import { Color } from '@/lib/rotations/types';
import {
  createM1,
  createM2,
  createO1,
  createO2,
  createRS,
  createS,
} from '@/lib/rotations/playerFactory';

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

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="font-semibold text-gray-900 mb-2">What happens when an overlap occurs?</p>
          <p className="text-gray-700">
            The referee calls a rotation violation. Your team loses the point, and the other team gets the
            serve.
          </p>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">The Three Overlap Rules</h3>
        <p className="text-gray-700 mb-4">
          These rules apply <strong>only at the moment of serve contact</strong>. After the ball is
          served, players can move anywhere!
        </p>

        <div className="space-y-4 mb-6">
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
              You only need to be in legal positions when the server hits the ball. After
              that moment, you can position yourself anywhere on your side of the court to prepare
              for the play.
            </p>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 mb-4">Visual Examples</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Legal Example - No Overlap (Rotation 3 Home) */}
          <OverlapExample
            title="Basis: Rotation 3 Home"
            isLegal={true}
            players={[
              { id: 'M1', zone: 'I', x: 83, y: 75, color: Color.BLUE },
              { id: 'RS', zone: 'II', x: 83, y: 25, color: Color.YELLOW },
              { id: 'O2', zone: 'III', x: 50, y: 25, color: Color.RED },
              { id: 'M2', zone: 'IV', x: 17, y: 25, color: Color.ORANGE },
              { id: 'S', zone: 'V', x: 17, y: 75, color: Color.CYAN },
              { id: 'O1', zone: 'VI', x: 50, y: 75, color: Color.GREEN },
            ]}
            explanation="This shows Rotation 3's home arrangement. All players maintain correct positions: front row is in front of back row, and left-to-right order is correct in both rows."
          />
          <OverlapExample
            title="Legal: No Overlap"
            isLegal={true}
            players={[
              { id: 'M1', zone: 'I', x: 80, y: 78, color: Color.BLUE },
              { id: 'RS', zone: 'II', x: 84, y: 28, color: Color.YELLOW },
              { id: 'O2', zone: 'III', x: 19, y: 72, color: Color.RED },
              { id: 'M2', zone: 'IV', x: 10, y: 8, color: Color.ORANGE },
              { id: 'S', zone: 'V', x: 44, y: 16, color: Color.CYAN },
              { id: 'O1', zone: 'VI', x: 50, y: 78, color: Color.GREEN },
            ]}
            explanation="This shows Rotation 3's serve receive arrangement. All players maintain correct positions: front row is in front of back row, and left-to-right order is correct in both rows. Note that only players in the same row need to keep left/right ordering."
          />

          {/* Illegal Example - Front/Back Overlap */}
          <OverlapExample
            title="Illegal: Front/Back Overlap"
            isLegal={false}
            players={[
              { id: 'M1', zone: 'I', x: 80, y: 78, color: Color.BLUE },
              { id: 'RS', zone: 'II', x: 84, y: 28, color: Color.YELLOW },
              { id: 'O2', zone: 'III', x: 19, y: 72, color: Color.RED },
              { id: 'M2', zone: 'IV', x: 10, y: 16, color: Color.ORANGE },
              { id: 'S', zone: 'V', x: 44, y: 8, color: Color.CYAN },
              { id: 'O1', zone: 'VI', x: 50, y: 78, color: Color.GREEN },
            ]}
            relevantPlayerIds={['S', 'M2']}
            explanation="OVERLAP! The player in Zone V (S) is in front of the player in Zone IV (M2). The back row player is not behind the front row player."
          />

          {/* Illegal Example - Left/Right Overlap in Front Row */}
          <OverlapExample
            title="Illegal: Left/Right Overlap"
            isLegal={false}
            players={[
              { id: 'M1', zone: 'I', x: 80, y: 78, color: Color.BLUE },
              { id: 'RS', zone: 'II', x: 84, y: 28, color: Color.YELLOW },
              { id: 'O2', zone: 'III', x: 19, y: 72, color: Color.RED },
              { id: 'M2', zone: 'IV', x: 10, y: 16, color: Color.ORANGE },
              { id: 'S', zone: 'V', x: 50, y: 8, color: Color.CYAN },
              { id: 'O1', zone: 'VI', x: 44, y: 78, color: Color.GREEN },
            ]}
            relevantPlayerIds={['S', 'O1']}
            explanation="OVERLAP! The player in Zone V (S) is to the right of the player in Zone IV (O1). Two back row players are out of left-to-right order."
          />
        </div>

        <p className="text-gray-700 text-sm italic bg-blue-50 border-l-4 border-blue-500 p-4">
          <strong>Tip:</strong> You can stand very close to the boundary between zones—even
          inches apart—as long as you maintain the correct relative positions. Many teams use this
          to get a head start on moving to their next arrangement!
        </p>
      </CardContent>
    </Card>
  );
}
