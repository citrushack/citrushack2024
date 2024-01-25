import Image from "next/image";
import logo from "@/public/LOGO.svg";
import year from "@/public/2024.svg";
import cars from "@/public/svg/landing/cars.svg";
import Countdown from "./CountDown";
import Link from "next/link";
import RollingText from "./Rolling";
import arrow from "@/public/svg/landing/arrow.svg";

const Landing = () => {
  return (
    <div className="w-full relative flex items-center justify-between">
      <div className="absolute overflow-hidden top-0 w-full z-0">
        <RollingText reverse={true}>
          <div className="text-9xl text-transparent text-stroke-citrus-beige-200 stroke-weight-[4px] font-racing">
            CITRUSHACK
          </div>
        </RollingText>
      </div>
      <div className="absolute overflow-hidden w-full z-0 h-[60vh]">
        <RollingText repeat={10}>
          <Image src={arrow} className="min-w-[500px]" />
        </RollingText>
      </div>
      <div className="absolute overflow-hidden bottom-0 w-full z-0">
        <RollingText reverse={true}>
          <div className="text-9xl text-transparent text-stroke-citrus-beige-200 stroke-weight-[4px] font-racing">
            CITRUSHACK
          </div>
        </RollingText>
      </div>
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="flex flex-col w-1/2 gap-4">
          <div className="flex w-full">
            <Image src={logo} className="w-1/2" />
            <Image src={year} className="w-1/2" />
          </div>
          <Countdown />
          <div className="flex">
            <Link
              className="px-8 py-2 bg-citrus-orange text-2xl font-racing hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu"
              href="/form/participant"
            >
              Apply
            </Link>
            <Link
              className="px-8 py-2 text-citrus-gray-200 text-2xl font-racing hover:-translate-y-1 duration-200 transform-gpu"
              href="/form/sponsor"
            >
              Sponsor
            </Link>
          </div>
        </div>
      </div>
      <Image src={cars} className="relative z-10" />
    </div>
  );
};

export default Landing;
