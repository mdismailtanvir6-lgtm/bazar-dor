import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MarqueeProducts from "@/components/layout/MarqueeProducts";
import Categories from "@/components/layout/Categories";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

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
        <div className="sticky top-0 z-50 ">
          <Header />
          <MarqueeProducts />
          <Categories />
        </div>

        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
