import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "./components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Development and Revenue Operations",
  description: "Web development services and marketing operations expertise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      {/*    <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
