import Image from "next/image";
import logo from "@/public/LOGO.svg";
import year from "@/public/2024.svg";
import cars from "@/public/svg/landing/cars.svg";
import Countdown from "./CountDown";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="w-full relative flex items-center justify-between">
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col w-1/2 gap-4">
          <div className="flex w-full">
            <Image src={logo} className="w-1/2" />
            <Image src={year} className="w-1/2" />
          </div>
          <Countdown />
          <div className="flex">
            <Link
              className="px-8 py-2 bg-citrus-orange text-2xl font-racing hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu"
              href="/form"
            >
              Apply
            </Link>
            <Link
              target="_blank"
              className="px-8 py-2 text-citrus-gray-200 text-2xl font-racing hover:-translate-y-1 duration-200 transform-gpu"
              href={process.env.NEXT_PUBLIC_SPONSORSHIP}
            >
              Sponsor
            </Link>
          </div>
        </div>
      </div>
      <Image src={cars} />
    </div>
  );
};

export default Landing;
