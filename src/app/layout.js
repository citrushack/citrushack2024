/* eslint-disable camelcase */
/* eslint-disable new-cap */
import "./globals.css";
import { Russo_One, Raleway, Rock_Salt } from "next/font/google";
import Session from "@/components/dynamic/Session";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const russo = Russo_One({
  subsets: ["latin"],
  variable: "--font-russo",
  weight: ["400"],
});
const rock = Rock_Salt({
  subsets: ["latin"],
  variable: "--font-rock",
  weight: ["400"],
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${russo.variable} ${raleway.variable} ${rock.variable} bg-citrus-gray-100 flex flex-col lg:flex-row h-full`}
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
