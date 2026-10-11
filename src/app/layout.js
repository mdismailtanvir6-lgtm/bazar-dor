import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MarqueeProducts from "@/components/layout/MarqueeProducts";
import Categories from "@/components/layout/Categories";
import Footer from "@/components/layout/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "bazar-dor",
  description: "A market price tracking website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body>
        <Header />
        <Categories />
        <MarqueeProducts />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
