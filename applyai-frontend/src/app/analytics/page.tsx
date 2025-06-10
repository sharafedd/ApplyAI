import Navbar from "@/components/layout/navbar";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Applications Over Time */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Applications Over Time</h2>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Placeholder for chart */}
              <span className="text-gray-500">[Chart]</span>
            </div>
          </div>

          {/* Success Rate */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Success Rate</h2>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Placeholder for chart */}
              <span className="text-gray-500">[Chart]</span>
            </div>
          </div>

          {/* Top Job Sources */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Top Job Sources</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>LinkedIn - 45%</li>
              <li>Indeed - 30%</li>
              <li>Company Websites - 15%</li>
              <li>Referrals - 10%</li>
            </ul>
          </div>

          {/* Average Application Score */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Average Application Score</h2>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Placeholder for chart */}
              <span className="text-gray-500">[Chart]</span>
            </div>
          </div>

          {/* Time Spent per Application */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Time Spent per Application</h2>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              {/* Placeholder for chart */}
              <span className="text-gray-500">[Chart]</span>
            </div>
            </div>
        </div>
      </main>
    </div>
  );
}

