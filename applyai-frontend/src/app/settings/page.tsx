import Link from 'next/link';
import Navbar from '@/components/layout/navbar';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        <section id="settings" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <form className="space-y-4 bg-white p-6 rounded shadow max-w-md">
            <div>
              <label htmlFor="email-notifications" className="flex items-center space-x-3">
                <input type="checkbox" id="email-notifications" className="h-5 w-5" />
                <span className="font-semibold">Email Notifications</span>
              </label>
            </div>
            <div>
              <label htmlFor="sms-notifications" className="flex items-center space-x-3">
                <input type="checkbox" id="sms-notifications" className="h-5 w-5" />
                <span className="font-semibold">SMS Notifications</span>
              </label>
            </div>
            <div>
              <label htmlFor="privacy-settings" className="block font-semibold mb-1">Privacy Settings</label>
              <select id="privacy-settings" className="w-full p-2 border rounded">
                <option>Public Profile</option>
                <option>Private Profile</option>
                <option>Custom</option>
              </select>
            </div>
            <div>
              <label htmlFor="theme" className="block font-semibold mb-1">Theme</label>
              <select id="theme" className="w-full p-2 border rounded">
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Save Settings</button>
          </form>
        </section>
      </main>
    </div>
  );
}

