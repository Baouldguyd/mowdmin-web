import type { Metadata } from "next";
import "./globals.css";


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
      <body
      className=""
      att-vdb-init="true"
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
