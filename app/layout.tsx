import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CJ Setlhong – Property Consultant | Century 21 Adams and Costello",
  description:
    "CJ Setlhong is an award-winning Property Consultant at Century 21 Adams and Costello, Wynnum QLD. Top 2% globally in the Century 21 network for 2021, 2022, and 2023.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
