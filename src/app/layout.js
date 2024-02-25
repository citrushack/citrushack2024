/* eslint-disable camelcase */
/* eslint-disable new-cap */
import "./globals.css";
import { Poppins, Archivo } from "next/font/google";
import Session from "@/components/dynamic/Session";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} ${archivo.variable} flex flex-col lg:flex-row h-full font-poppins bg-citrus-beige`}
      >
        <Session session={session} refetchInterval={5 * 60} className="h-full">
          <div className="flex w-full">
            <Toaster />
            {children}
          </div>
        </Session>
      </body>
    </html>
  );
}
