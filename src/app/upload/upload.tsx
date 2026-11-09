"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface UploadsProps {
  onUpload: () => void;
}

export default function Uploads({ onUpload }: UploadsProps) {

  const sampleImages = [
    { id: 1, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1775140074/xoxgyihwmk3xdz9p6osx.jpg", alt: "Person" },
    { id: 2, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793964790/pngtree-the-bengal-tiger-emblem-of-wild-image_16362570_taoiiy.jpg", alt: "Animal" },
    { id: 3, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793964789/download_znzysk.jpg", alt: "Car" },
    { id: 4, src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1793964790/1520190768707_wznisc.jpg", alt: "Object" },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Upload an image to remove its background
        </h1>

        <div className="max-w-lg pt-10 pb-10 mx-auto bg-white">
          <div className="flex flex-col items-center justify-center space-y-3">

            <div className="w-full sm:w-auto">
              <Button
                size="lg"
                 onClick={onUpload}
                className="w-full sm:w-auto cursor-pointer px-8 py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg sm:text-xl shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-95"
              >
                Upload Image
              </Button>
            </div>

            <p className="text-gray-700 font-bold text-base sm:text-lg pt-2">
              or drop a file
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">

          <div className="text-left text-xs sm:text-sm font-semibold text-gray-600">
            <p>No image?</p>
            <p>Try one of these:</p>
          </div>

          <div className="flex items-center gap-2.5">
            {sampleImages.map((img) => (
              <div
                key={img.id}
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        <p className="text-[11px] sm:text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
          By uploading an image or URL you agree to our{" "}
          <Link href="/terms-of-service" className="underline text-gray-600 hover:text-blue-600">
            Terms of Service
          </Link>
          . To learn more about how Remove
          <span className="text-blue-600 font-semibold">X</span>
          handles your personal data, check our{" "}
          <Link href="/privacy-policy" className="underline text-gray-600 hover:text-blue-600">
            Privacy Policy
          </Link>.
        </p>

      </div>
    </section>
  );
}