import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function FrontRowBackRowSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Front Row vs Back Row</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Front row and back row positions have different rules about what they can and cannot
          do. Understanding these differences is key to grasping why rotations matter.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                  Aspect
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                  Front Row (II, III, IV)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                  Back Row (I, VI, V)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">
                  Attacking
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700">
                  Can attack at any height from anywhere
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700">
                  Must jump from behind the attack line when attacking above net height
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">
                  Blocking
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700">
                  Can block at the net
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700">
                  Cannot block at all
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-gray-900 mb-3">The Attack Line (10-Foot Line)</h4>
        <p className="text-gray-700 mb-3">
          The <strong>attack line</strong> (also called the <strong>10-foot line</strong> or{' '}
          <strong>3-meter line</strong>) is a dashed line that runs parallel to the net, about 10
          feet (3 meters) away. It divides the front and back zones of the court.
        </p>

        <div className="bg-gray-50 border border-gray-300 rounded p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">The Rule:</p>
          <p className="text-gray-700 mb-2">
            When a back row player attacks the ball <em>above net height</em>, they must jump
            from behind the attack line. "Attacking" means hitting or tipping the ball toward the
            opponent's court.
          </p>
          <p className="text-gray-700 text-sm italic">
            Important: Players can land in front of the line—it's where they take off that
            matters!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
