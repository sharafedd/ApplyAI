import Link from 'next/link';
import Navbar from '@/components/layout/navbar';

export default function BatchesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">Batches</h1>

        <div className="space-y-6">
          {[1, 2, 3].map((batch) => (
            <div key={batch} className="bg-white p-6 rounded shadow">
              <h2 className="text-2xl font-semibold mb-2">Batch {batch}</h2>
              <p className="text-gray-600 mb-4">Created on: 2024-01-0{batch}</p>
              <div className="space-x-4">
                <Link
                  href={`/batches/${batch}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Process Batch</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

