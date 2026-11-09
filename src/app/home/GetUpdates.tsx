"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Send } from "lucide-react";

export default function GetUpdates() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };


return (
<section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
<div className="max-w-8xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
          

<div className="w-full px-5 md:px-0">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
    Get Updates
  </h2>
  <p className="text-sm sm:text-[12px] text-gray-600 leading-relaxed max-w-lg">
    Sign up for our mailing list to receive news and updates about Remove<span className="text-blue-600 font-semibold">X</span> products and services. You can unsubscribe at any time.
  </p>
</div>

      
<div className="w-full">
  <form onSubmit={handleSubmit} className="px-5 md:px-0">
    <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-300 rounded-2xl p-1.5 shadow-sm hover:border-gray-400 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 transition-all duration-200">
              
  <input
    type="email"
    value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  required
  className="w-full px-4 py-3 bg-transparent text-gray-900 placeholder-gray-400 text-sm sm:text-base outline-none border-none focus:ring-0"
/>
          
<Button
  type="submit"
  className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 px-6 py-5 rounded-xl bg-black hover:bg-gray-800 text-white font-semibold text-sm transition-all duration-200 active:scale-95 shadow-md"
>
  <span>Subscribe</span>
  <Send className="w-4 h-4" />
</Button>
</div>

              
<p className="text-xs text-gray-500 mt-3 ml-2">
  To learn more about how RemoveX handles your personal data, check our{" "}
  <Link 
    href="/privacy-policy" 
    className="text-gray-900 underline hover:text-blue-600 font-medium transition-colors"
  >
    Privacy Policy
  </Link>
  .
</p>

          
{submitted && (
<p className="text-xs font-semibold text-green-600 mt-2 ml-2 animate-fadeIn">
  🎉 Thank you for subscribing to RemoveX updates!
  </p>
)}
</form>
</div>
        </div>
      </div>
    </section>
  );
}