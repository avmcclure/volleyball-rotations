import { Card, CardHeader, CardContent } from '@/components/ui/Card';

export function FiveOneSystemSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">5-1 Rotation System</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          The 5-1 system has <strong>5 hitters and 1 setter</strong> across 6 service rotations.
          The single setter sets from all rotations.
        </p>

        <h3 className="font-semibold text-gray-900 mt-4 mb-2">Three Main Goals:</h3>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>Have 3 primary passers</li>
          <li>Get setter to the setter spot</li>
          <li>Have our front row middle hitting middle</li>
        </ul>

        <h3 className="font-semibold text-gray-900 mt-4 mb-2">Rotation Numbering:</h3>
        <p className="text-gray-700">
          Rotations are numbered based on the setter's position. When the setter is in Zone I,
          it's Rotation 1. When the setter is in Zone VI, it's Rotation 2, and so on.
        </p>
      </CardContent>
    </Card>
  )
}

