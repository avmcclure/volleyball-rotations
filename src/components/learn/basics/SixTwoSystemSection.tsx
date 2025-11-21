import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function SixTwoSystemSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">6-2 Offensive System</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          The 6-2 offensive system has <strong>6 hitters and 2 setters</strong> across all 6 rotations.
          The two setters are positioned opposite each other in the rotation, and each setter only
          sets when they rotate to the back row. This means there are always 3 front row attackers.
          This system is common in youth, recreational, and some college programs.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">How It Works</h3>
        <p className="text-gray-700 mb-4">
          The team has two setters who are opposite each other in the rotation (3 rotations apart).
          When a setter is in the back row, they run the offense. When that setter rotates to the
          front row, they become a hitter, and the other setter (now in back row) takes over setting
          duties. This creates a constant rotation of setting responsibilities, but ensures all six
          positions have an attacker available when in the front row.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">Strengths of the 6-2:</p>
          <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
            <li>
              <strong>Three attackers always:</strong> Every rotation has 3 front row attackers,
              maximizing offensive options
            </li>
            <li>
              <strong>Better blocking:</strong> Ability to sub in dedicated right sides for the setters in front row
            </li>
            <li>
              <strong>Versatile players:</strong> Setters develop both setting and hitting skills
            </li>
            <li>
              <strong>Built-in backup:</strong> Two setters means automatic backup (switching to a 5-1 system) if one is injured
              or struggling
            </li>
            <li>
              <strong>Shared workload:</strong> Setting duties are split between two players,
              reducing physical and mental fatigue
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">Weaknesses of the 6-2:</p>
          <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
            <li>
              <strong>Inconsistent setting:</strong> Two different setters means hitters must adjust
              to different setting styles and tempos
            </li>
            <li>
              <strong>Communication challenges:</strong> Hitters work with different setters in
              different rotations
            </li>
            <li>
              <strong>Lower setting quality:</strong> Having two setters often means neither is as
              specialized or skilled as a dedicated 5-1 setter
            </li>
          </ul>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">When Teams Use 6-2</h3>
        <p className="text-gray-700 mb-4">
          The 6-2 is popular in situations where:
        </p>
        <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside mb-4">
          <li>Teams don't have one dominant setter but have multiple capable players</li>
          <li>Teams want maximum offensive firepower with 3 attackers in every rotation</li>
          <li>Players are still developing and benefit from learning multiple positions</li>
          <li>Teams have tall, athletic setters who are strong hitters</li>
        </ul>

        <p className="text-gray-700 text-sm italic bg-blue-50 border-l-4 border-blue-500 p-4">
          <strong>Why 5-1 is Usually Preferred:</strong> As teams advance to higher levels, most
          transition from 6-2 to 5-1 because the consistency of one setter outweighs the advantage
          of having three attackers. However, the 6-2 remains valuable for development and in
          situations where a team has multiple capable setters but no clear standout.
        </p>
      </CardContent>
    </Card>
  );
}
