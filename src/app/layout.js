<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet" />

import "./globals.css";
import "./components/fonts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReduxProvider from "@/redux/ReduxProvider";
import Providers from "./Providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EBFFEF] w-full mx-auto">
        <ReduxProvider>
            <Providers>
          <div className="mb-15">
            <Header />
          </div>
          <div className="mt-40">{children}</div>

          <Footer />
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
