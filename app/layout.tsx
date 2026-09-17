import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahadnan.me"),
  title: `${profile.name}, Software Engineer`,
  description: profile.intro,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name}, Software Engineer`,
    description: profile.intro,
    url: "https://abdullahadnan.me",
    siteName: profile.name,
    type: "profile",
  },
};

// Runs before paint so the stored theme is applied without a flash.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
