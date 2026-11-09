"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  
return (
    <div className="fixed inset-0 z-99999999999999 min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center relative">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="inline-flex items-center justify-center mb-6"
        >
          <h1 className="text-8xl sm:text-9xl font-black tracking-extratight text-gray-900/10 select-none">
            404
          </h1>
          
        </motion.div>


        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wide text-blue-600 bg-blue-50/80 border border-blue-100 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Page Not Found
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Lost in Background?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed max-w-sm mx-auto">
            Oops! The page you{`'`}re searching for was removed along with the background, or it never existed.
          </p>
        </motion.div>

     
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
         
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 h-11 px-6 rounded-xl border-gray-200 bg-white/80 hover:bg-gray-100 text-gray-800 font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600" />
            <span>Go Back</span>
          </Button>

       
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full cursor-pointer flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold shadow-lg shadow-gray-900/10 transition-all duration-200 active:scale-95">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-xs font-semibold text-gray-400 tracking-wider uppercase"
        >
          Remove<span className="text-blue-600">X</span> Pro Platform
        </motion.div>

      </div>
    </div>
  );
}