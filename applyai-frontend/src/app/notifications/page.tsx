import Navbar from '@/components/layout/navbar';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        <section id="notifications" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">New Job Match Found!</p>
                <p className="text-sm text-gray-600">We found a new job that matches your preferences.</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
            </div>
            <div className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">Application Status Update</p>
                <p className="text-sm text-gray-600">Your application for Frontend Developer has been viewed.</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
            </div>
            <div className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">Reminder: Complete Your Profile</p>
                <p className="text-sm text-gray-600">A complete profile increases your chances of getting hired.</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

