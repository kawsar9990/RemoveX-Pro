"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { UploadCloud } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md ${
        isScrolled
          ? "shadow-sm py-3 border-b border-gray-100"
          : "shadow-none py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          

          <div className="flex items-center justify-between w-full">

            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:scale-105 transition-transform duration-200">
                <span>R</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-gray-900">
                Remove<span className="text-blue-600">X</span>
              </span>
            </Link>

              <Link
                href="/upload"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 transition-colors cursor-pointer"
              >
                <UploadCloud className="w-4 h-4 text-blue-600" />
                <span>Upload</span>
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}