import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  metadataBase: new URL("https://www.walnutvillageresort.com"),
  title: {
    default: "Walnut Village Resort | Luxury Hotel in Pahalgam",
    template: "%s | Walnut Village Resort",
  },
  description:
    "Stay at Walnut Village Resort in Movera, Pahalgam. 16 rooms, Himalayan views, garden, hot tub, restaurant, and free parking — your gateway to Baisaran, Betaab Valley & the Lidder River.",
  keywords:
    "Walnut Village Resort Pahalgam, hotel in Movera Pahalgam, resort in Pahalgam Kashmir, Pahalgam Lidder River hotel, Baisaran valley resort, Betaab Valley hotel, Kashmir mountain resort, Pahalgam family resort",
  authors: [{ name: "Walnut Village Resort" }],
  openGraph: {
    type: "website",
    title: "Walnut Village Resort — Luxury Hotel in Pahalgam",
    description:
      "Stay at Walnut Village Resort in Movera, Pahalgam. 16 rooms, Himalayan views, garden, hot tub, restaurant, and free parking — your gateway to Baisaran, Betaab Valley & the Lidder River.",
    url: "https://www.walnutvillageresort.com",
    siteName: "Walnut Village Resort",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walnut Village Resort — Luxury Hotel in Pahalgam",
    description:
      "Stay at Walnut Village Resort in Movera, Pahalgam. 16 rooms, Himalayan views, garden, hot tub, restaurant, and free parking — your gateway to Baisaran, Betaab Valley & the Lidder River.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

import { Playfair_Display, Inter, Space_Grotesk } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/hero/hero-1.jpeg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Walnut Village Resort",
              description:
                "Stay at Walnut Village Resort in Movera, Pahalgam. 16 rooms, Himalayan views, garden, hot tub, restaurant, and free parking.",
              url: "https://www.walnutvillageresort.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Awura Road, Walnut Village Resort",
                addressLocality: "Movera, Pahalgam",
                addressRegion: "Jammu & Kashmir",
                postalCode: "192401",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
