import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: `${SITE.name} ${SITE.tagline} | Lucknow`,
  description:
    "Optimus Eye Hospital & Dental Clinic — trusted multi-specialty clinic in Arjunganj, Lucknow. Expert eye care, dental treatments, and more.",
  keywords:
    "eye hospital lucknow, dental clinic lucknow, ophthalmologist lucknow, dentist lucknow, optimus eye hospital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
