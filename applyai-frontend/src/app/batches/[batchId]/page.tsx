import Navbar from "@/components/layout/navbar";

export default function Page({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const { batchId } = params;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">Batch {batchId} Details</h1>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Batch {batchId}</h2>
          <p className="text-gray-600 mb-4">Created on: 2024-01-0{batchId}</p>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Process Batch
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

