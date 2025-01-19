import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "NextStep",
  description: "NextStep APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
