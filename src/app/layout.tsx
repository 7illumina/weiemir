import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import { SidebarNav, MobileBottomNav } from "@/components/ActiveNav";

const brand = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "7illumina",
  description: "Hey, I’m Emir 👋—developer, designer, and fun interface enjoyer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${brand.variable} font-sans antialiased min-h-dvh`}>        
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] min-h-dvh">
          <aside className="hidden md:grid sticky top-0 h-dvh grid-rows-[auto_1fr_auto] border-r border-white/10 p-6">
            <div>

            </div>
            <div className="flex items-center justify-center">
              <SidebarNav />
            </div>
            <div className="text-xs text-white/50 text-center">© {new Date().getFullYear()} Emir</div>
          </aside>
          <div className="relative">
            <main className="px-4 sm:px-6 md:px-10 pb-28 md:pb-0 pb-safe">{children}</main>
            {/* Mobile bottom nav */}
            <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
              <MobileBottomNav />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

