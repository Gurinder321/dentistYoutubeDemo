import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Dental | Premium Dentistry in Las Vegas, NV",
  description:
    "Award-winning dental care in Las Vegas. General dentistry, cosmetic services, implants, Invisalign, and emergency care. Accepting new patients. Book your free consultation today.",
  keywords: [
    "dentist Las Vegas",
    "Las Vegas dental",
    "cosmetic dentistry Las Vegas",
    "dental implants Las Vegas",
    "Invisalign Las Vegas",
    "emergency dentist Las Vegas",
  ],
  openGraph: {
    title: "Lumina Dental | Las Vegas",
    description: "Premium dental care in Las Vegas, NV. Book your free consultation.",
    locale: "en_US",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}
