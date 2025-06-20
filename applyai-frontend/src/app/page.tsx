import Link from 'next/link';
import Navbar from '@/components/layout/navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        {/* Dashboard Section */}
        <section id="dashboard" className="mb-12 border-b pb-4">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Overview of your current job applications and stats.</p>
        </section>

        {/* Job Matches Section */}
        <section id="job-matches" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Job Matches</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-lg">Frontend Developer at XYZ Corp</h3>
              <p className="text-sm">Score: 88% | Remote, Full-Time</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-lg">Backend Engineer at Acme Inc.</h3>
              <p className="text-sm">Score: 82% | On-site, Contract</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
            </div>
          </div>
        </section>

        {/* Preferences Form */}
        <section id="preferences" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Set Your Job Preferences</h2>
          <form className="space-y-4 bg-white p-6 rounded shadow">
            <div>
              <label htmlFor="job-title" className="block font-semibold mb-1">Job Title / Keywords</label>
              <input type="text" id="job-title" className="w-full p-2 border rounded" placeholder="e.g., Full-Stack Developer" />
            </div>
            <div>
              <label htmlFor="location" className="block font-semibold mb-1">Location</label>
              <input type="text" id="location" className="w-full p-2 border rounded" placeholder="e.g., London, Remote" />
            </div>
            <div>
              <label htmlFor="salary" className="block font-semibold mb-1">Salary Range</label>
              <input type="text" id="salary" className="w-full p-2 border rounded" placeholder="e.g., 40k-60k" />
            </div>
            <div>
              <label htmlFor="employment-type" className="block font-semibold mb-1">Employment Type</label>
              <select id="employment-type" className="w-full p-2 border rounded">
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Save Preferences</button>
          </form>
        </section>

        {/* Call to Action */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4">Ready to stop applying manually?</h2>
          <Link href="/dashboard" className="inline-block px-8 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Start Using ApplyAI
          </Link>
        </section>
      </main>
    </div>
  );
}
