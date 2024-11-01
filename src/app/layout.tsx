import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title:
    "Bavette Steak House | Best Beef Steak in Liverpool | Unforgettable Dining",
  description:
    " Discover Bavette Steak House in Woolton Village, Liverpool - the ultimate destination for perfectly aged, hand-selected steaks. Enjoy a luxurious dining experience with premium cuts, curated wines, and a warm atmosphere that makes every meal memorable.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: "Bavette Steak House, Best steak house Liverpool, beef steak Liverpool, fine dining Liverpool, steak restaurant Woolton Village, Bavette menu, premium steaks, signature steaks, curated wines, group dining Liverpool"
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-manrope text-[#FBEAD2] antialiased",
          manrope.variable,
          playfair.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
