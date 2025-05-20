// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mowd Ministries",
  icons: {
    icon: "/favicon.png",
  },
  description: "Get Connected to Jesus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[inter-regular]" att-vdb-init="true">
        
        <main>{children}</main>
      </body>
    </html>
  );
}
