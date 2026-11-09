"use client";

import { FileText, ShieldCheck, CreditCard, Lock, Mail } from "lucide-react";


export default function page() {

return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-3xl mx-auto px-2">
        
    
        <div className="border-b border-gray-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Last updated: November 2026 | Developed by <strong>Kawsar Ahmed</strong> for <strong>Remove<span className="text-blue-600">X</span></strong>
          </p>
        </div>

      
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>1. Acceptance of Terms</span>
            </h2>
            <p>
              Welcome to RemoveX. By accessing or using our website and AI-powered background removal tools, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </div>

   
          <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-blue-600" />
              <span>2. User Accounts & Mandatory Authentication</span>
            </h2>
            <p className="mb-3">
              To ensure platform stability, protect resource allocation, and prevent automated abuse, <strong>authentication is strictly required</strong>. Users must create an account and log in to process or download images using the tool.
            </p>
            <p className="text-xs text-gray-600 font-medium">
              You are solely responsible for maintaining the confidentiality of your credentials and account actions.
            </p>
          </div>

        
        
         <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span>3. Free Credits & Paid Memberships</span>
            </h2>
            <ul className="list-disc list-inside space-y-2.5 text-gray-700">
              <li>
                <strong>Free Credits:</strong> Every newly registered account automatically receives <strong>10 free credits</strong> to explore and test our background removal capabilities.
              </li>
              <li>
                <strong>Paid Subscriptions & Packs:</strong> After consuming the initial 10 free credits, you will be required to purchase a credit top-up pack or a active paid membership plan to continue using RemoveX.
              </li>
              <li>
                Payments are handled securely via authorized third-party gateways, and credits are credited directly to your registered user profile.
              </li>
            </ul>
          </div>

        
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              4. Prohibited Uses
            </h2>
            <p className="mb-2">
              You agree not to misuse RemoveX. Prohibited activities include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 pl-2">
              <li>Uploading malicious, illegal, or copyright-infringing material.</li>
              <li>Attempting to bypass credit checks, rate limits, or platform API safeguards.</li>
              <li>Automating bot requests without explicit developer permissions.</li>
            </ul>
          </div>

        
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              5. Intellectual Property
            </h2>
            <p>
              The RemoveX application architecture, user interface components, brand identity, and codebase are created and maintained by <strong>Kawsar Ahmed</strong>. All software components are protected under applicable intellectual property laws.
            </p>
          </div>

       
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3 flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>6. Developer & Legal Contact</span>
            </h2>
            <p className="mb-2">
              For any questions or legal inquiries regarding these terms, feel free to reach out directly:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200/60 font-medium text-xs sm:text-sm text-gray-800 space-y-1">
              <p><strong>Developer:</strong> Kawsar Ahmed</p>
              <p><strong>Platform:</strong> RemoveX</p>
              <p><strong>Contact Email:</strong> kawsar158464@gmail.com</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}