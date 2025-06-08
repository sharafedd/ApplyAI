import Link from 'next/link';
import Navbar from '@/components/layout/navbar';

export default function PositionDetailsPage({
  params,
}: {
  params: { positionId: string };
}) {
  const { positionId } = params;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">Position {positionId} Details</h1>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Position Title {positionId}</h2>
          <p className="text-gray-600 mb-4">Company XYZ - Location</p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
              Save Position
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

