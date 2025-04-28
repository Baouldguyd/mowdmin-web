// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "Mowd Ministries",
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
        {/* <ClientWrapper /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
