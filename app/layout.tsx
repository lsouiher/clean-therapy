import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean Therapy by Lauren | House Cleaning in Cleveland, OH",
  description:
    "Professional residential cleaning services in Cleveland, Ohio. Deep cleans, standard cleans, move-in/out. Locally owned, referral-trusted. Call 216-906-5283.",
  keywords:
    "house cleaning Cleveland Ohio, cleaning service Cleveland, residential cleaning Cleveland Heights, deep clean Cleveland, maid service Cleveland OH",
  openGraph: {
    title: "Clean Therapy by Lauren — Clean Home, Clear Mind.",
    description:
      "Trusted home cleaning service serving Greater Cleveland, Ohio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Clean Therapy by Lauren",
              telephone: "+1-216-906-5283",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cleveland",
                addressRegion: "OH",
                addressCountry: "US",
              },
              areaServed: "Greater Cleveland",
              priceRange: "$$",
              description:
                "Professional residential cleaning services in Cleveland, Ohio.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
