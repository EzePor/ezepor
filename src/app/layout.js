import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi página",
  description: "Página web de presentación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}

        <Footer />
        </body>
    </html>
  );
}
