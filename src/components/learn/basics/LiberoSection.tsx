import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function LiberoSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Libero (Specialized Back Row Player)</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          A libero is a defensive specialist who wears a different colored jersey. They have
          special substitution privileges but also significant playing restrictions.
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">Libero Playing Restrictions:</p>
          <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
            <li>
              <strong>Back row only:</strong> Cannot play in front row positions (zones II, III, IV)
            </li>
            <li>
              <strong>No attacking:</strong> Cannot attack the ball above net height from anywhere
              on the court
            </li>
            <li>
              <strong>No blocking:</strong> Cannot block or attempt to block at the net
            </li>
            <li>
              <strong>Setting restriction:</strong> If they set the ball with overhand finger action
              while in front of the attack line, teammates cannot attack that set above net height
            </li>
          </ul>
        </div>

        <p className="text-gray-700 text-sm">
          <strong>Substitution privilege:</strong> Liberos can substitute freely for any back row
          player without counting against the team's substitution limits, making them ideal for
          replacing players who are weaker at defense or passing.
        </p>
      </CardContent>
    </Card>
  );
}
