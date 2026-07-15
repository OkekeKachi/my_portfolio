import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Kachi. | Software Engineer",
    template: "%s | Kachi.",
  },
  description:
    "Kachi. is a software engineer based in Abuja, Nigeria, building premium web applications with clean architecture, polished UI, and modern tooling.",
  metadataBase: new URL("https://kachi.dev"),
  alternates: {
    canonical: "https://kachi.dev",
  },
  openGraph: {
    title: "Kachi. | Software Engineer",
    description:
      "Kachi. is a software engineer based in Abuja, Nigeria, building premium web applications with clean architecture, polished UI, and modern tooling.",
    url: "https://kachi.dev",
    siteName: "Kachi. Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 1200,
        alt: "Kachi. portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kachi. | Software Engineer",
    description:
      "Kachi. is a software engineer based in Abuja, Nigeria, building premium web applications with clean architecture, polished UI, and modern tooling.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
