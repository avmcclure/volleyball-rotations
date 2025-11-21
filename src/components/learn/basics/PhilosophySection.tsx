import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function PhilosophySection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Philosophy</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          The goal of running rotations is to maximize our ability to have an attack against the
          other team by having players who play dedicated roles (positions) set up in an
          arrangement that they can most effectively fill those roles.
        </p>

        <h3 className="font-semibold text-gray-900 mt-6 mb-3">Why Do We Switch Positions?</h3>
        <p className="text-gray-700 mb-4">
          The service order (HOME arrangement) is required by volleyball rules, but it's rarely
          the best setup for playing effectively. As soon as the server contacts the ball,
          players are free to move anywhere on the court. We take advantage of this by switching
          to better positions that help our team succeed.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">The Core Idea:</p>
          <p className="text-gray-700">
            Get specialist players into their optimal positions as quickly as possible after the
            serve is contacted.
          </p>
        </div>

        <h4 className="font-semibold text-gray-900 mb-2">Each Arrangement Has a Purpose:</h4>
        <div className="space-y-3 mb-4">
          <div>
            <span className="font-semibold text-gray-900">HOME:</span>
            <span className="text-gray-700">
              {' '}
              Required starting position based on service order. Not optimized for play.
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">SERVE:</span>
            <span className="text-gray-700">
              {' '}
              Position for offensive transition after your team serves. Ready to attack when the
              ball comes back.
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">SERVE RECEIVE:</span>
            <span className="text-gray-700">
              {' '}
              Optimize passing formation with your best passers in position to handle the serve.
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-900">BASE DEFENSE:</span>
            <span className="text-gray-700">
              {' '}
              Defensive coverage positions based on where the opponent's attack is coming from.
            </span>
          </div>
        </div>

        <h4 className="font-semibold text-gray-900 mb-2">Common Examples:</h4>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>Setter moves to the front right (near Zone II) to be close to their target spot</li>
          <li>Front row middle blocker shifts to center for quick attacks and blocking</li>
          <li>Best passers form a line or triangle to receive serves effectively</li>
          <li>Players not passing get out of the way and prepare to attack or defend</li>
        </ul>
      </CardContent>
    </Card>
  );
}
