"use client";

import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaWhatsapp
} from "react-icons/fa";
import { RiUpworkFill } from "react-icons/ri";
import { RiFiverrFill } from "react-icons/ri";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          

          <div className="flex items-center flex-wrap justify-center gap-2.5">

            <a
              href="https://www.facebook.com/programming.kawsar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>


            <a
              href="https://www.linkedin.com/in/kawsar-ahmed-2a466441b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

        
            <a
              href="https://www.instagram.com/tmr_kawsar_x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <FaInstagram className="w-4 h-4" />
            </a>

        
            <a
              href="https://wa.me/8801602084187"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01ea366a2190fd74bd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              title="Upwork"
            >
              <RiUpworkFill className="w-4 h-4" />
            </a>

            
            <a
              href="https://www.fiverr.com/kawsar_develope"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fiverr"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              title="Fiverr"
            >
              <RiFiverrFill className="w-4 h-4" />
            </a>
          </div>

         
          <div className="text-xs font-medium text-gray-500 text-center md:text-right">
            &copy; {currentYear} Remove<span className="text-blue-600">X</span>. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}