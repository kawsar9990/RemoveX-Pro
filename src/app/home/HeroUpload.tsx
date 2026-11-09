"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroUpload() {
  const sampleImages = [
    { id: 1, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1775140074/xoxgyihwmk3xdz9p6osx.jpg", alt: "Person" },
    { id: 2, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793964790/pngtree-the-bengal-tiger-emblem-of-wild-image_16362570_taoiiy.jpg", alt: "Animal" },
    { id: 3, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793964789/download_znzysk.jpg", alt: "Car" },
    { id: 4, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793964790/1520190768707_wznisc.jpg", alt: "Object" },
  ];

  
return (
    <section className="w-full bg-white py-1 md:py-16 px-4 sm:px-6 md:px-3 xl:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-7 sm:gap-0 md:gap-3">
        
  
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          

          <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-6 flex items-center justify-center">
            <video
              src="https://res.cloudinary.com/dkmzakgx2/video/upload/v1794028718/mnauel-main-c_ax4gv3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Remove Image Background
          </h1>
          

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-lg sm:text-xl text-gray-700 font-semibold mb-6">
            <span>100% Automatically and</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-base sm:text-lg font-bold shadow-md shadow-blue-600/30">
              Free
            </span>
          </div>

          <p className="text-gray-500 text-sm sm:text-base max-w-md">
            Remove backgrounds from photos in seconds with AI. Deliver professional cutout results instantly.
          </p>
        </div>

    
        <div className="w-full md:w-1/2 flex flex-col sm:pt-10 sm:pb-10 xl:pt-0 xl:pb-0 items-center lg:items-end">
          
          
          <div className="w-full max-w-md h-80 md:h-100 bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-center items-center shadow-[0_0_30px_rgba(0,0,0,0.12)] mb-6">
            <div className="flex flex-col items-center justify-center w-full space-y-4">
              
              <Link href="/upload" className="w-full">
                <Button 
                  size="lg"
                  className="w-full cursor-pointer px-8 py-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg sm:text-xl shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-95"
                >
                  Upload Image
                </Button>
              </Link>

              <p className="text-gray-500 font-medium text-sm sm:text-base pt-1">
                or drop a file,
              </p>
              
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                paste image or{" "}
                <Link href="/upload" className="underline text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                  URL
                </Link>
              </p>

            </div>
          </div>

         
          <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
            <div className="text-center sm:text-left text-xs sm:text-[10px] md:text-[12px] font-semibold text-gray-500">
              <p>No image?</p>
              <p>Try one of these:</p>
            </div>

            <div className="flex items-center gap-2.5">
              {sampleImages.map((img) => (
                <Link 
                  key={img.id} 
                  href="/upload" 
                  className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer bg-gray-50"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>

      
          <p className="w-full max-w-md text-[11px] sm:text-xs text-gray-400 text-center md:text-left mt-6 leading-relaxed px-2">
            By uploading an image or URL you agree to our{" "}
            <Link href="/terms-of-service" className="underline text-gray-600 hover:text-blue-600">
              Terms of Service
            </Link>
            . To learn more about how Remove<span className="text-blue-600 font-semibold">X</span> handles your personal data, check our{" "}
            <Link href="/privacy-policy" className="underline text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
            .
          </p>

        </div>

      </div>
    </section>
  );
}