"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function StunningQuality() {
  const tabData = [
    {
      id: "products",
      label: "Products",
      orig: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793964790/1520190768707_wznisc.jpg",
      trans: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793973736/1520190768707-removebg-preview_fjtyav.png",
    },
    {
      id: "animals",
      label: "Animals",
      orig: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793974528/wp4394629-4k-tiger-wallpapers_bca0nb.jpg",
      trans: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793974526/wp4394629-4k-tiger-wallpapers-removebg-preview_h4vnmt.png",
    },
        {
      id: "Flowers",
      label: "Flowers",
      orig: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793974914/wp9110155-4k-ultra-hd-flowers-wallpapers_pgurk0.jpg",
      trans: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793974819/wp9110155-4k-ultra-hd-flowers-wallpapers-removebg-preview_tpprlu.png",
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
          Stunning quality
        </h2>

    
        <Tabs defaultValue="people" className="w-full flex flex-col items-center">
          
        
          <TabsList className="bg-gray-100/80 p-1.5 rounded-full mb-10 flex flex-wrap justify-center gap-1">
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-full px-5 py-2 text-sm font-semibold text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all cursor-pointer"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

   
          {tabData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="w-full mt-0">
              <ImageComparisonCard origImg={tab.orig} transImg={tab.trans} />
            </TabsContent>
          ))}
        </Tabs>

      </div>
    </section>
  );
}

function ImageComparisonCard({ origImg, transImg }: { origImg: string; transImg: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onContextMenu={(e) => e.preventDefault()}
      className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer select-none shadow-xl border border-gray-200 bg-white"
    >
   
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,#e5e7eb_25%,transparent_25%),linear-gradient(-45deg,#e5e7eb_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e5e7eb_75%),linear-gradient(-45deg,transparent_75%,#e5e7eb_75%)] bg-[size:24px_24px] bg-[position:0_0,0_12px,12px_-12px,-12px_0px] bg-white">
        <Image
          src={transImg}
          alt="Background Removed"
          fill
          quality={100}
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover pointer-events-none"
          priority
        />
      </div>

  
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <Image
          src={origImg}
          alt="Original Image"
          fill
          quality={100}
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
          priority
        />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold pointer-events-auto cursor-grab active:cursor-grabbing">
          ↔
        </div>
      </div>
    </div>
  );
}