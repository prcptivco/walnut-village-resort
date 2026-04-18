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
    icon: "/favicon.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
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
