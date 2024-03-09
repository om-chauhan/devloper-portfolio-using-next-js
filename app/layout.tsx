import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ToasterContext from "./context/ToastContext";
import ScrollToTop from "@/components/ScrollToTop";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />

        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header />
            <ToasterContext />
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-6NLN8HY0VC" />
      </html>
    </>
  );
}
export const metadata = {
  title: "Omprakash Chauhan - Flutter Developer",
  description:
    "I am a Flutter developer based in India. Has Computer Engineering background.",
  generator: "Omprakash Chauhan",
  applicationName: "Omprakash Chauhan",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Omprakash Chauhan",
    "Omprakash",
    "omi",
    "op",
    "om",
    "chauhan",
    "om chauhan flutter developer",
    "om chauhan flutter developer portfolio",
    "om chauhan flutter developer portfolio website",
    "omi op flutter developer",
    "omi op flutter developer portfolio",
    "omi op flutter developer portfolio website",
    "flutter developer",
    "flutter developer portfolio",
    "flutter developer portfolio website",
    "flutter developer portfolio website omprakash chauhan",
    "flutter developer portfolio website omprakash",
    "flutter developer portfolio website om",
    "flutter developer portfolio website chauhan",
    "flutter developer portfolio website op",
    "flutter developer portfolio website omi",
  ],
  authors: [{ name: "https://om-chauhan.co.in" }],
  creator: "Omprakash Chauhan",
  publisher: "Omprakash Chauhan",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://om-chauhan.co.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Omprakash Chauhan - Flutter Developer",
    description:
      "I am a Flutter developer based in India. Has Computer Engineering background.",
    url: "https://om-chauhan.co.in",
    siteName: "Omprakash Chauhan",
    images: [
      {
        url: "https://om-chauhan.co.in/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "https://om-chauhan.co.in/manifest.json",
  icons: {
    icon: "/images/header-logo.png",
    shortcut: "/images/header-logo.png",
    apple: "/images/header-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Omprakash Chauhan - Flutter Developer",
    description:
      "I am a Flutter developer based in India. Has Computer Engineering background.",
    creator: "@_Omi_Op",
  },
  verification: {
    google: "oY4NT0QxHyWnaARedSZYEvGW8Og0Iwa5xXmGO40NuFA",
    bing: "1A2E1D1901E02800FFC969F75F41CFDD",
  },
  category: "technology",
};
