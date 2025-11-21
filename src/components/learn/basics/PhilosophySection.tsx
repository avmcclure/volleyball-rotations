import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function PhilosophySection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Philosophy</h2>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-gray-900 mb-3">The Starting Point</h3>
        <p className="text-gray-700 mb-4">
          Volleyball rules require players to start each rally in a specific order called the{' '}
          <strong>service order</strong> or <strong>Home arrangement</strong>. This order
          determines where each player must be positioned when the serve is contacted.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">The Problem</h3>
        <p className="text-gray-700 mb-4">
          The service order is rarely the best setup for playing effectively. Your setter might be
          in the back corner, your best passer stuck in the front row, or your middle blocker on
          the wrong side of the court.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">The Solution:</p>
          <p className="text-gray-700">
            As soon as the server contacts the ball, players are free to move anywhere on their
            side of the court. We take advantage of this by switching to better positions that help
            our team succeed.
          </p>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">The Goal</h3>
        <p className="text-gray-700 mb-4">
          Get specialist players into their optimal positions as quickly as possible after the serve
          is contacted. This maximizes our ability to attack effectively by having each player in
          the arrangement where they can best fill their role.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">Different Situations, Different Arrangements</h3>
        <p className="text-gray-700 mb-3">
          Teams use different arrangements depending on whether they're serving or receiving the serve:
        </p>
        <div className="space-y-3 mb-4">
          <div>
            <strong>Home:</strong>
            <span className="text-gray-700">
              {' '}
              Required starting position based on service order.
            </span>
          </div>
          <div>
            <strong>Serve Receive:</strong>
            <span className="text-gray-700">
              {' '}
              Optimize passing formation with your best passers in position to handle the serve.
            </span>
          </div>
          <div>
            <strong>Serve:</strong>
            <span className="text-gray-700">
              {' '}
              Positioning for getting the team into to base defense as quickly as possible.
            </span>
          </div>
          <div>
            <strong>Base Defense:</strong>
            <span className="text-gray-700">
              {' '}
              Defensive starting position, from here we will move into different arrangements based on where the opponent's attack is coming from.
            </span>
          </div>
          <div>
            <strong>Free Ball:</strong>
            <span className="text-gray-700">
              {' '}
              A setup for the team to have the most offensive firepower as possible. The setter (if back row) leaves the back row and all blockers transition to get ready to hit. The remaining back row players split the passing responsibility between the two of them.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
