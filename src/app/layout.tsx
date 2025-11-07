import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hugo Wenner - Desenvolvedor Web",
  description: "Desenvolvedor web especializado em criação de sites e sistemas web personalizados. Landing pages, sites completos e sistemas avançados.",
  keywords: ["Hugo Wenner", "Desenvolvedor Web", "Landing Page", "Site Profissional", "Sistema Web", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Hugo Enrique Wenner" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Hugo Wenner - Desenvolvedor Web",
    description: "Desenvolvedor web especializado em criação de sites e sistemas web personalizados",
    url: "https://hugowenner.com",
    siteName: "Hugo Wenner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Wenner - Desenvolvedor Web",
    description: "Desenvolvedor web especializado em criação de sites e sistemas web personalizados",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
