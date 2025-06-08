'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell } from 'lucide-react';

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const notifications = [
    "Interview with XYZ Corp tomorrow",
    "Application to ABC Inc. viewed",
    "New match: Backend at DevCo",
    "Profile updated successfully",
    "Cover letter generated for Job123",
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="hover:bg-gray-100 p-2 rounded-full"
      >
        <Bell size={20} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg z-50">
          <div className="p-3 border-b font-semibold">Notifications</div>
          <ul className="max-h-60 overflow-auto">
            {notifications.slice(0, 5).map((note, idx) => (
              <li
                key={idx}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {note}
              </li>
            ))}
          </ul>
          <div className="p-2 border-t text-center">
            <Link href="/notifications" className="text-blue-600 hover:underline text-sm">
              View more
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
