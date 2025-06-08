import Link from "next/link";
import Navbar from "@/components/layout/navbar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-10">
        <section id="profile" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <div className="bg-white p-6 rounded shadow max-w-md">
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <p>John Doe</p>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <p>john.doe@example.com</p>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Resume</label>
              <a href="#" className="text-blue-600 hover:underline">View / Edit Resume</a>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">LinkedIn</label>
              <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/johndoe</a>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">GitHub</label>
              <a href="#" className="text-blue-600 hover:underline">github.com/johndoe</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Edit Profile</button>
          </div>
        </section>
      </main>
    </div>
  );
}

