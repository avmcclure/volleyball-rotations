import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function FiveOneSystemSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">5-1 Offensive System</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          The 5-1 offensive system has <strong>5 hitters and 1 setter</strong> across all 6 rotations.
          The single setter sets from every rotation, whether they're in the front row or back row.
          This is the most common system used in competitive volleyball from high school through
          professional levels.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">How It Works</h3>
        <p className="text-gray-700 mb-4">
          The team has one dedicated setter who runs the entire offense throughout all six rotations.
          When the setter rotates to the front row, the team has 2 front row attackers. When the
          setter rotates to the back row, the team has 3 front row attackers. The setter always
          moves to their target position (usually front right) to set, regardless of which zone they
          start in.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">Strengths of the 5-1:</p>
          <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
            <li>
              <strong>Consistency:</strong> Same setter handles all plays, creating better timing and
              chemistry with hitters
            </li>
            <li>
              <strong>Strong back row rotations:</strong> Three front row attackers give excellent
              offensive options
            </li>
            <li>
              <strong>Better setting quality:</strong> The best setter is always setting, never
              hitting
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">Weaknesses of the 5-1:</p>
          <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
            <li>
              <strong>Weak front row rotations:</strong> Only 2 attackers when setter is front row,
              limiting offensive options
            </li>
            <li>
              <strong>Setter workload:</strong> One player must set the entire match, which is
              physically and mentally demanding
            </li>
            <li>
              <strong>No backup:</strong> If the setter gets injured or struggles, the team typically has to go to a less experienced replacement
            </li>
            <li>
              <strong>Height disadvantage:</strong> Setters are often shorter than dedicated right sides, creating a weak spot in
              the front row for blocking
            </li>
          </ul>
        </div>

        <p className="text-gray-700 text-sm italic bg-blue-50 border-l-4 border-blue-500 p-4">
          <strong>Why 5-1 is Popular:</strong> Despite the challenges of having only 2 attackers in
          half the rotations, the consistency of one setter and the power of 3-attacker rotations
          make the 5-1 the preferred system for most competitive teams. Teams work hard to minimize
          weaknesses in rotations 4-6 through strategic positioning and plays.
        </p>
      </CardContent>
    </Card>
  )
}

