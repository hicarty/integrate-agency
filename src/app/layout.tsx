import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "integrate | AI-First AR Agency | UK Midlands",
  description: "Bridge the digital and physical. AI agent first, human assisted AR agency helping UK Midlands SMEs scale from £250k revenue and teams of 10 to 20. AI Transformations, Media Production, Archive Production.",
  keywords: ["AR Agency", "AI Agency", "UK Midlands", "SME", "Digital Transformation", "Video Production", "Archive Digitisation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
