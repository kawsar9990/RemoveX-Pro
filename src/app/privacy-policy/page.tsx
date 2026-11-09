"use client";

import { Shield, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  
return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto px-2">
        
       
        <div className="border-b border-gray-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Membership Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
            Privacy Policy & Terms
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Last updated: November 2026 | Remove<span className="text-blue-600">X</span> Pro Platform
          </p>
        </div>

      
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          
         
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
            
              <span>1. Information We Collect</span>
            </h2>
            <p>
              Welcome to RemoveX Pro. We respect your privacy and are committed to protecting your personal data. When you register or interact with our platform, we collect basic details such as your email address and profile info to secure your account.
            </p>
          </div>


          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
              <span>2. Mandatory Authentication & Access</span>
            </h2>
            <p className="mb-3">
              To ensure high performance, protect platform resources, and prevent abuse, <strong>users must log in or register an account</strong> to access the background removal tool. Anonymous or guest usage is strictly restricted.
            </p>
            <p className="text-xs text-gray-600 font-medium">
              We use Supabase authentication to securely manage user sessions and protect your data.
            </p>
          </div>

          
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
              <span>3. Free Credits & Paid Memberships</span>
            </h2>
            <ul className="list-disc list-inside space-y-2.5 text-gray-700">
              <li>
                <strong>Free Trial Credits:</strong> Upon successful registration and logging into your account, you will receive <strong>10 free credits</strong> to test and experience our premium AI background removal tool.
              </li>
              <li>
                <strong>Paid Membership / Credit Packs:</strong> Once your initial 10 free credits are fully utilized, you will be required to purchase a paid membership or a credit package to continue processing and downloading images.
              </li>
              <li>
                All transactions and payment details are processed securely through our verified payment gateways. We do not store sensitive payment credentials on our servers.
              </li>
            </ul>
          </div>

    
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              4. Image Processing & Data Retention
            </h2>
            <p>
              Uploaded images are processed via our secure cloud pipeline strictly for background removal purposes. We respect your privacy, and uploaded images are automatically handled securely without unauthorized public exposure.
            </p>
          </div>

       
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>5. Support & Contact</span>
            </h2>
            <p className="mb-2">
              If you have any questions regarding our privacy practices, credit system, or paid subscriptions, feel free to contact us:
            </p>
            <p className="font-bold text-gray-900">
              Email: kawsar158464@gmail.com
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}