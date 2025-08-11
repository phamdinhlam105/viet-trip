import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppFooter from "@/components/footer/app-footer";
import { Toaster } from "sonner";
import ResponsiveNavbar from "@/components/navbar/navbar-check";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Viettrip Tourist | Dịch Vụ Du Lịch & Lữ Hành Chuyên Nghiệp",
  description:
    "Viettrip - Chuyên Tour Bình Ba, Tour Nha Trang, tour trong & ngoài nước. Dịch vụ tận tâm, giá tốt, trải nghiệm đáng nhớ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Windows tiles */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />

        {/* Màu theme */}
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph cho Facebook/Zalo */}
        <meta property="og:title" content="Viettrip Tourist" />
        <meta
          property="og:description"
          content="Lữ Hành Quốc Tế & Dịch Vụ Du Lịch Chuyên Nghiệp"
        />
        <meta
          property="og:image"
          content="https://viettriptourist.com/android-chrome-512x512.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viettriptourist.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Viettrip Tourist" />
        <meta
          name="twitter:description"
          content="Lữ Hành Quốc Tế & Dịch Vụ Du Lịch Chuyên Nghiệp"
        />
        <meta
          name="twitter:image"
          content="https://viettriptourist.com/android-chrome-512x512.png"
        />
      </head>
      <body className={`${inter.variable}  antialiased`}>
        <ResponsiveNavbar />
        <Toaster richColors position="top-center" />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
