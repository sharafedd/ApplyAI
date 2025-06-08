import link from 'next/link';
import Navbar from '@/components/layout/navbar';

export default function PreferencesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
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
      </main>
    </div>
  );
}

