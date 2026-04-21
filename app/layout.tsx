import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaby | Invitaciones Digitales",
  description: "Diseños digitales que transforman momentos especiales en experiencias inolvidables. Invitaciones personalizadas para bodas, XV años, baby showers y más.",
  keywords: ["invitaciones digitales", "bodas", "XV años", "baby shower", "diseño digital", "invitaciones personalizadas"],
  authors: [{ name: "Gaby" }],
  openGraph: {
    title: "Gaby | Invitaciones Digitales",
    description: "Diseños digitales que transforman momentos especiales en experiencias inolvidables",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {children}
      </body>
    </html>
  );
}
