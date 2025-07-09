// import "./globals.css";
// import "./components/fonts.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#EBFFEF] w-full mx-auto  ">
//         <div className="h-[150px]  flex items-center justify-center">
//           <Header />
//         </div>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import "./globals.css";
import "./components/fonts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EBFFEF] w-full mx-auto">
        <div className="mb-15">
          <Header />
        </div>
        <div className="mt-40">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
