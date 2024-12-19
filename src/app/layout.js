import { Poppins, Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SUPCON",
    template: "%s | SUPCON",
  },
  description: "NEXT GENERATION AUTOMATION",
  keywords: ["oil", "gas", "digitalization"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable} ${geistSans.variable} ${inter.variable} antialiased`}
    >
      <body className="w-screen overflow-x-hidden">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
