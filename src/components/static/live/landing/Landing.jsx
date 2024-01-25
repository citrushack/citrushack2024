import Image from "next/image";
import logo from "@/public/LOGO.svg";
import year from "@/public/2024.svg";
import cars from "@/public/svg/landing/cars.svg";
import carsh from "@/public/svg/landing/cars-h.svg";
import Countdown from "./CountDown";
import Link from "next/link";
import RollingText from "./Rolling";
import arrow from "@/public/svg/landing/arrow.svg";

const Landing = () => {
  return (
    <div className="w-full relative flex flex-col lg:flex-row justify-between min-h-[70vh]">
      <div className="absolute overflow-hidden top-0 w-full z-0">
        <RollingText reverse={true}>
          <div className="text-8xl 2xl:text-[300px] text-citrus-beige-200 font-racing">
            CITRUSHACK
          </div>
        </RollingText>
      </div>
      <div className="absolute overflow-hidden w-full z-0 top-1/2 -translate-y-1/2">
        <RollingText repeat={10}>
          <Image
            alt="arrow"
            src={arrow}
            className="min-w-[300px] lg:min-w-[500px] 2xl:min-w-[800px] "
          />
        </RollingText>
      </div>
      <div className="absolute overflow-hidden bottom-0 w-full z-0">
        <RollingText reverse={true}>
          <div className="text-8xl 2xl:text-[150px] text-citrus-beige-200 font-racing">
            CITRUSHACK
          </div>
        </RollingText>
      </div>
      <Image
        alt="cars"
        src={carsh}
        className="z-10 lg:hidden top-0 w-10/12 self-start"
      />
      <div className="relative z-20 flex-grow flex items-center justify-center">
        <div className="flex flex-col w-10/12 lg:w-1/2 gap-4">
          <div className="flex w-full">
            <Image alt="logo" src={logo} className="w-1/2" />
            <Image alt="year" src={year} className="w-1/2" />
          </div>
          <Countdown />
          <div className="flex">
            <Link
              className="px-8 py-2 bg-citrus-orange text-lg lg:text-2xl font-racing hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu"
              href="/form/participant"
            >
              Apply
            </Link>
            <Link
              className="px-8 py-2 text-citrus-gray-200 text-lg lg:text-2xl font-racing hover:-translate-y-1 duration-200 transform-gpu"
              href="/form/sponsor"
            >
              Sponsor
            </Link>
          </div>
        </div>
      </div>
      <Image
        alt="cars"
        src={cars}
        className="relative z-10 hidden lg:block w-1/3"
      />
    </div>
  );
};

export default Landing;
