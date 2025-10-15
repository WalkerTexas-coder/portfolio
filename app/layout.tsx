import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin Walker | Portfolio",
  description: "Technical Product Manager specializing in healthcare platforms. 3 years building telehealth SaaS solutions. Available for Series A-C startup roles.",
  openGraph: {
    title: "Austin Walker | Technical Product Manager",
    description: "Technical Product Manager specializing in healthcare platforms. 3 years building telehealth SaaS solutions.",
    url: "https://hirethiswalker.com",
    siteName: "Austin Walker Portfolio",
    images: [
      {
        url: "/og-image.png", // You'll need to add this image to your public/ folder
        width: 1200,
        height: 630,
        alt: "Austin Walker - Technical Product Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Walker | Technical Product Manager",
    description: "Technical Product Manager specializing in healthcare platforms. 3 years building telehealth SaaS solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
