import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApplyAI",
  keywords: [
    "job application",
  ],
  description: "ApplyAI - Your AI-Powered Job Application Assistant",
  icons: {
    icon: "logo/3d_orgn_wb.svg",
  },
  authors: [
    {
      name: "Sharaf Boukhezer",
      url: "https://sharafedd.github.io/portfolio/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
