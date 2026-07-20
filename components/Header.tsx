"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [searchValue, setSearchValue] = useState("John");

  return (
    <>
      {/* ─── DESKTOP HEADER (width >= 860px) ─────────────────────────────────── */}
      <div className="hidden min-[860px]:block h-[68px] w-full bg-white border-b border-[#E4E7EC] fixed top-0 left-0 right-0 z-50">
        <div className="hdr-wrapper">
          
          {/* Logo */}
          <Link href="/" className="hdr-logo flex items-center hover:opacity-85 transition-opacity">
            <Image
              src="/logo.png"
              alt="Hi JOB"
              width={153}
              height={24}
              priority
              className="object-contain"
            />
          </Link>

          {/* Back button (Only visible on medium mid size: 860px to 1439px) */}
          <button className="hdr-back-btn hidden min-[860px]:max-[1439px]:flex items-center justify-center hover:bg-[#E5E7EB] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4D5A68" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          {/* Search Box */}
          <div className="hdr-search-container flex items-center bg-[#F0F2F6] border border-[#E4E7EC] rounded-[10px] px-3 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
            <Image
              src="/search.png"
              alt="Search"
              width={16}
              height={16}
              className="flex-shrink-0 opacity-55"
            />
            <input
              type="text"
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-[13px] text-[#4D5A68] placeholder:text-[#b0bac6] ml-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search…"
            />
            <div className="w-px h-[18px] bg-[#E4E7EC] flex-shrink-0 mx-2" />
            <Image
              src="/author.png"
              alt="Author"
              width={65}
              height={18}
              className="flex-shrink-0 object-contain"
            />
          </div>

          {/* Feed (Hidden on 860px - 1439px screen) */}
          <a
            href="#"
            className="hdr-feed hidden min-[1440px]:flex items-center justify-center hover:opacity-85 transition-opacity"
          >
            <Image
              src="/feed.png"
              alt="Feed"
              width={80}
              height={40}
              className="object-contain w-full h-full"
            />
          </a>

          {/* My Profile Analytics (Hidden on 860px - 1439px screen) */}
          <a
            href="#"
            className="hdr-analytics hidden min-[1440px]:flex items-center justify-center bg-[#F0F2F6] rounded-[10px] hover:bg-[#e4e8ef] transition-colors"
          >
            <div className="flex items-center gap-2 px-3 justify-center w-full">
              <Image src="/health.png" alt="" width={16} height={16} />
              <span className="text-[12px] font-medium text-[#4D5A68] whitespace-nowrap">
                My Profile Analytics
              </span>
            </div>
          </a>

          {/* Notification Box (Hidden on 860px - 1439px screen) */}
          <a
            href="#"
            className="hdr-notifications hidden min-[1440px]:flex items-center justify-center bg-[#F0F2F6] rounded-[10px] hover:bg-[#e4e8ef] transition-colors"
          >
            <div className="flex items-center gap-2 px-3 justify-center w-full">
              <Image src="/notification.png" alt="" width={16} height={16} />
              <span className="text-[12px] font-medium text-[#4D5A68] whitespace-nowrap">
                Notifications
              </span>
            </div>
          </a>

          {/* Percent Box (Hidden on 860px - 1439px screen) */}
          <div className="hdr-percent-badge hidden min-[1440px]:flex items-center justify-center relative">
            <Image src="/percent.png" alt="70%" width={50} height={50} className="w-full h-full" />
            <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-[#4D5A68]">
              70%
            </span>
          </div>

          {/* Profile Picture with gradient border (Hidden on 860px - 1439px screen) */}
          <div className="hdr-profile-pic hidden min-[1440px]:block p-[1.5px] rounded-[13.62px] bg-gradient-to-r from-[#2688FA] to-[#02DEDD]">
            <div className="w-full h-full rounded-[12.12px] overflow-hidden bg-white">
              <Image
                src="/image 1910.png"
                alt="Profile"
                width={49}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ─── MOBILE HEADER (width < 860px) ───────────────────────────────────── */}
      <div className="block min-[860px]:hidden h-[56px] w-full bg-white border-b border-[#E4E7EC] fixed top-0 left-0 right-0 z-50">
        <div className="relative w-full h-full px-4 flex items-center gap-3">
          
          {/* Profile Picture (32x32) on top header left */}
          <div className="w-8 h-8 p-[0.92px] rounded-[8.31px] bg-gradient-to-r from-[#2688FA] to-[#02DEDD] flex-shrink-0">
            <div className="w-full h-full rounded-[7.39px] overflow-hidden bg-white">
              <Image
                src="/image 1910.png"
                alt="Profile"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Search bar (stretches dynamically) next to it */}
          <div className="flex-1 h-8 flex items-center bg-[#F0F2F6] border border-[#E4E7EC] rounded-[10px] px-2 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
            <Image
              src="/search.png"
              alt="Search"
              width={14}
              height={14}
              className="flex-shrink-0 opacity-55"
            />
            <input
              type="text"
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-[12px] text-[#4D5A68] placeholder:text-[#b0bac6] ml-1.5 font-[Inter,sans-serif]"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search…"
            />
            <div className="w-px h-[14px] bg-[#E4E7EC] flex-shrink-0 mx-1.5" />
            <Image
              src="/author.png"
              alt="Author"
              width={55}
              height={16}
              className="flex-shrink-0 object-contain"
            />
          </div>

        </div>
      </div>

      {/* ─── MOBILE BOTTOM NAVIGATION (width < 860px) ────────────────────────── */}
      <div className="block min-[860px]:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E4E7EC] rounded-t-2xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] w-full h-[89px] pb-[20px]">
        <nav className="flex justify-around items-center h-full px-2" aria-label="Mobile Navigation">
          
          {/* Feed (Active state, styled premium blue like third image) */}
          <a href="#" className="flex flex-col items-center justify-center flex-1 gap-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#2688FA]/10 text-[#2688FA]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="9"></line>
                <line x1="9" y1="13" x2="15" y2="13"></line>
                <line x1="9" y1="17" x2="13" y2="17"></line>
              </svg>
            </div>
            <span className="text-[10px] font-semibold text-[#2688FA]">Feed</span>
          </a>

          {/* Analytics */}
          <a href="#" className="flex flex-col items-center justify-center flex-1 gap-1">
            <div className="w-8 h-8 flex items-center justify-center text-[#4D5A68]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <span className="text-[10px] font-medium text-[#4D5A68]">Analytics</span>
          </a>

          {/* Notification */}
          <a href="#" className="flex flex-col items-center justify-center flex-1 gap-1">
            <div className="w-8 h-8 flex items-center justify-center text-[#4D5A68]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <span className="text-[10px] font-medium text-[#4D5A68]">Notification</span>
          </a>

          {/* Profile */}
          <a href="#" className="flex flex-col items-center justify-center flex-1 gap-1">
            <div className="w-8 h-8 flex items-center justify-center text-[#4D5A68]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <span className="text-[10px] font-medium text-[#4D5A68]">Profile</span>
          </a>

        </nav>
      </div>
    </>
  );
}
