import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Resto Rento",
  description: "Restoran terlezat yang pernah ada!",
};

export default function MenuLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} --font-poppins antialiased`}>
      {/* misal tambahin sidebar di sini kalau mau */}
      {children}
    </div>
  );
}
