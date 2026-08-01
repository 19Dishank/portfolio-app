import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://dishankpatel.in"),
  title: "Dishank Patel — Frontend Developer",
  description:
    "Dishank Patel is a frontend developer working in React, Tailwind CSS, and JavaScript — building interfaces people actually rely on.",
  openGraph: {
    title: "Dishank Patel — Frontend Developer",
    description:
      "Dishank Patel is a frontend developer working in React, Tailwind CSS, and JavaScript — building interfaces people actually rely on.",
    url: "https://dishankpatel.in",
    siteName: "Dishank Patel — Frontend Developer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dishank Patel — Frontend Developer",
    description:
      "Dishank Patel is a frontend developer working in React, Tailwind CSS, and JavaScript — building interfaces people actually rely on.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dishank Patel",
    "url": "https://dishankpatel.in/",
    "jobTitle": "Frontend Developer",
    "sameAs": [
      "https://www.linkedin.com/in/19dishank",
      "https://github.com/19Dishank",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
