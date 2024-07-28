import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const roboto = Roboto({ subsets: ["latin"] , weight : ['300','400','700'] });

export const metadata = {
  title: "KenD's Portfolio",
  description: "KenD's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className + ' bg-[#000000]'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
