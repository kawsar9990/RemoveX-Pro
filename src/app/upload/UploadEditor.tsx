"use client";

import React, { useState } from "react";
import Image from "next/image";
import UploadEditorSkeleton from "@/components/Skeleton/UploadEditorSkeleton";
import { Download, Plus, Trash2 } from "lucide-react";
import { MdCompare } from "react-icons/md";
import { GrUndo, GrRedo } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import ImageSparkleLoader from "@/components/Loader/ImageSparkleLoader";

interface UploadEditorProps {
  selectedImage: string;
  originalImage: string;
  imagesList: string[];
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onImageSelect: (url: string) => void;
  onImageDelete: (url: string) => void;
  isUploading: boolean;
  previewUrl: string;
  onUndo: () => void;
  onRedo: () => void;
  onDownload: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export default function UploadEditor({
  selectedImage,
  originalImage,
  imagesList,
  fileInputRef,
  onImageSelect,
  onImageDelete,
  isUploading,
  previewUrl,
  onUndo,
  onRedo,
  onDownload,
  canUndo,
  canRedo,
}: UploadEditorProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isComparing, setIsComparing] = useState(false); 

return (
  <div className="fixed inset-0 pt-30 flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-white select-none">
      
      {selectedImage && !imageLoaded && !isUploading && (
        <div className="fixed inset-0 z-[100] bg-white">
          <UploadEditorSkeleton />
          <div className="hidden">
            <Image
              src={selectedImage}
              alt="Loading image"
              width={400}
              height={300}
              priority
              unoptimized
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </div>
        </div>
      )}

      <div className="w-full h-full flex flex-col justify-start gap-4">
        
    
        <header className="px-10 py-2 flex justify-center items-center">
          <div className="bg-white flex items-center justify-between shadow-[0_0_4px_rgba(0,0,0,0.12)] rounded-full px-5 py-3">
            <div className="flex items-center gap-5">

             
              <button 
                className={`cursor-pointer transition ${isComparing ? "text-blue-600 scale-110" : "text-gray-700"}`}
                onMouseDown={() => setIsComparing(true)}
                onMouseUp={() => setIsComparing(false)}
                onTouchStart={() => setIsComparing(true)}
                onTouchEnd={() => setIsComparing(false)}
                title="Hold to compare original"
              >
                <MdCompare className="w-6 h-6" />
              </button>

          
              <button 
                onClick={onUndo} 
                disabled={!canUndo} 
                className={`cursor-pointer ${canUndo ? "text-gray-700 hover:text-black" : "text-gray-200 cursor-not-allowed"}`}
              >
                <GrUndo className="w-6 h-6" />
              </button>

            
              <button 
                onClick={onRedo} 
                disabled={!canRedo} 
                className={`cursor-pointer ${canRedo ? "text-gray-700 hover:text-black" : "text-gray-200 cursor-not-allowed"}`}
              >
                <GrRedo className="w-6 h-6" />
              </button>

             
              <Button
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
                onClick={onDownload}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </Button>
            </div>
          </div>
        </header>

     

       <main className="flex flex-col items-center justify-center px-4 sm:px-6">
        <div
        className="relative w-full max-w-[350px] sm:max-w-[400px] h-[260px] sm:h-[240px] rounded-4xl overflow-hidden shadow-2xl border border-gray-100 p-0"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(45deg,#e5e7eb 25%,transparent 25%),linear-gradient(-45deg,#e5e7eb 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e5e7eb 75%),linear-gradient(-45deg,transparent 75%,#e5e7eb 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
        }}
      >
       
<div className="relative w-full h-full flex items-center justify-center bg-white rounded-3xl overflow-hidden bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%),linear-gradient(-45deg,#f0f0f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0f0f0_75%),linear-gradient(-45deg,transparent_75%,#f0f0f0_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]">
       
  {isUploading && previewUrl ? (
    <>
      <Image
        src={previewUrl}
        alt="Uploading preview"
        fill
        unoptimized
        className="object-contain pointer-events-none rounded-3xl"
      />
      <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 backdrop-blur-xs">
        <ImageSparkleLoader />
      </div>
    </>
  ) : selectedImage ? (
    <Image
      src={isComparing ? originalImage : selectedImage}
      alt="Cutout Preview"
      fill
      sizes="(max-width: 768px) 100vw, 420px"
      className="object-contain pointer-events-none rounded-3xl"
      priority
      onLoad={() => setImageLoaded(true)}
      onError={() => setImageLoaded(true)}
      unoptimized
    />
  ) : (
    <div className="text-gray-400 text-sm font-medium">
      No image selected
    </div>
  )}
</div>
</div>
</main>

      
        <footer className="w-full pb-8 px-4">
          <div className="max-w-md mx-auto flex items-center justify-center gap-3 p-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-700 transition-all cursor-pointer hover:scale-105 disabled:opacity-50"
              title="Upload New Image"
            >
              <Plus className="w-6 h-6" />
            </button>

            <div className="relative flex-1 min-w-0"> 
              <div className="flex items-center gap-2.5 overflow-x-auto py-2">
                {imagesList.map((imgUrl, index) => (
                  <div
                    key={imgUrl}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                      selectedImage === imgUrl
                        ? "border-blue-600 shadow-md"
                        : "border-gray-200 opacity-80 hover:opacity-100"
                    }`}
                    onClick={() => !isUploading && onImageSelect(imgUrl)}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="60px"
                      className={`object-cover transition-all duration-300 ${
                        isUploading ? "blur-sm opacity-40 scale-105" : ""
                      }`}
                      unoptimized
                    />

                    {!isUploading && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onImageDelete(imgUrl);
                        }}
                        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer z-30"
                        title="Delete image"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}