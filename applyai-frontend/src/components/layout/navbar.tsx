'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Moon, Sun, User, LogOut, Settings } from 'lucide-react';
import Image from 'next/image';
import NotificationBell from './notificationBell';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="w-full bg-white px-6 py-4 shadow flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold text-black flex items-center gap-2">
          <span className="bg-black text-white px-2 py-1 rounded">A</span>
          <span>ApplyAI</span>
        </Link>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700">
        <Link href="/batches" className="hover:text-blue-600">Batches</Link>
        <Link href="/analytics" className="hover:text-blue-600">Analytics</Link>
        <Link href="/preferences" className="hover:text-blue-600">Preferences</Link>
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 relative">
        <button onClick={() => setDarkMode(!darkMode)} className="hover:bg-gray-100 p-2 rounded-full">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          {/* NotificationBell */}
          <NotificationBell />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2">
            <Image src="/avatar.jpg" alt="profile" width={32} height={32} className="rounded-full" />
            <span className="font-medium">John Smith</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-50">
              <div className="p-4 border-b">
                <div className="font-semibold">John Smith</div>
                <div className="text-sm text-gray-500">johnson@nextadmin.com</div>
              </div>
              <ul className="p-2">
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/profile" className="flex items-center gap-2 w-full">
                    <User size={16} /> View Profile
                  </Link>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <Link href="/settings" className="flex items-center gap-2 w-full">
                    <Settings size={16} /> Account Settings
                  </Link>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <button className="flex items-center gap-2 w-full text-left">
                    <LogOut size={16} /> Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
