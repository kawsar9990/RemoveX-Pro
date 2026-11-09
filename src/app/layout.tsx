import type { Metadata } from "next";
import "../style/globals.css";
import ClientLayout from "@/components/layouts/clientLayout";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "RemoveX Pro | Remove Background from Images",
  description: "Remove background from images with RemoveX Pro. Our advanced AI-powered tool allows you to easily remove backgrounds from your photos, making them perfect for presentations, social media, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
return (
<html
    lang="en"
    className={cn("antialiased scroll-smooth", "font-sans", geist.variable)}>
    <body className="flex flex-col"
    cz-shortcut-listen="true">
    <ClientLayout>
      {children}
    </ClientLayout>
    </body>
</html>
  );
}
