/* eslint-disable camelcase */
/* eslint-disable new-cap */
import "./globals.css";
import { Poppins, Racing_Sans_One } from "next/font/google";
import Session from "@/components/dynamic/Session";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const racing = Racing_Sans_One({
  subsets: ["latin"],
  variable: "--font-racing",
  weight: ["400"],
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${racing.variable} ${poppins.variable} bg-citrus-beige-100 flex flex-col lg:flex-row h-full`}
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