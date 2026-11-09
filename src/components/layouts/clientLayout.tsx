"use client";

import React from "react";
import ToastProvider from "@/provider/ToastProvider";
import { Inter } from "next/font/google";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({
subsets: ["latin"],
display: "swap",
});

export default function ClientLayout({children }: { children: React.ReactNode }) {

const pathname = usePathname();
const isNotFoundPage = pathname === "/not-found" || pathname === "/404";
const isUploadPage = pathname === "/upload";


return (
<div className={`${inter.className}`}>
{!isNotFoundPage && <Header />}

<main className={`${!isNotFoundPage ? "pt-20" : "pt-0"}`}>
{children}
</main>

{!isNotFoundPage && !isUploadPage && <Footer />}

<ToastProvider />
</div>
);
}