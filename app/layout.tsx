import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackRoom",
  description: "Video Calling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      layout:{
        logoImageUrl: '/goodbg.png',
        socialButtonsVariant: 'iconButton'
      },
      variables:{
        colorText: '#ffff',
        colorPrimary: '#0E78F9',
        colorBackground: '#1C1F2E',
        colorInputBackground: '#252A41',
        colorInputText: '#ffff',
        
      }
    }}
    >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}>
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
