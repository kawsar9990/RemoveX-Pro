"use client";

import Image from "next/image";
import { Sparkles, Zap, Layers } from "lucide-react";

export default function AiGeneratorFeature() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50/50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-12 lg:gap-16">
        

        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
    
         
          <h2 className="text-2xl sm:text-[15px] md:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight leading-tight">
            All-in-one AI background <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              remover & generator
            </span>
          </h2>

       
          <p className="text-gray-600 text-[12px] sm:text-[10px] md:text-[13px] lg:text-sm leading-relaxed">
            <strong>RemoveX</strong> is your ultimate high-precision background isolation engine. Leveraging deep learning, it effortlessly cuts out subjects and delivers pixel-perfect transparent cutouts with unmatched accuracy.
          </p>

        
          <p className="text-gray-500 text-sm sm:text-[10px] md:text-[13px] lg:text-base leading-relaxed">
            But the workflow doesn’t stop at isolation. With our built-in <strong>AI Background Generator</strong>, you can instantly swap ordinary backdrops into cinematic studio scenes or immersive environments without writing complex prompts.
          </p>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 w-full">
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-5 h-5 lg:w-8 lg:h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 sm:w-3 sm:h-3 md:w-3.5 md:w-3.5 lg:w-4 lg:h-4" />
              </div>
              <span className="text-xs sm:text-[8px] md:text-[11px] lg:text-sm font-bold text-gray-800">Instant AI Cutouts</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="w-5 h-5 lg:w-8 lg:h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Layers className="w-4 h-4 sm:w-3 sm:h-3 md:w-3.5 md:w-3.5 lg:w-4 lg:h-4" />
              </div>
              <span className="text-xs sm:text-[10px] md:text-[11px] lg:text-sm font-bold text-gray-800">Smart Backdrops</span>
            </div>
          </div>

        </div>

      
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-md h-[380px] sm:h-[320px] md:h-[380px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white p-3 sm:p-2 md:p-3 lg:p-4 flex items-center justify-center gap-3">
            
          
            <div className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-100">
              <Image
                src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1793974528/wp4394629-4k-tiger-wallpapers_bca0nb.jpg"
                alt="Studio Background"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-semibold">
                Studio Backdrop
              </div>
            </div>

           <div className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-blue-50">
              <Image
                src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1793974526/wp4394629-4k-tiger-wallpapers-removebg-preview_h4vnmt.png"
                alt="AI Generated Background"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>AI Generated</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}