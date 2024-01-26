"use client";
import Image from "next/image";
import logo from "@/public/LOGO.svg";
import year from "@/public/2024.svg";
import Countdown from "./CountDown";
import Link from "next/link";
import RollingText from "./Rolling";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import CustomLink from "../../CustomLink";

const Landing = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full relative flex items-center justify-between min-h-screen">
      <div className="absolute overflow-hidden top-0 w-full z-0">
        <RollingText reverse={true}>
          <div className="text-8xl text-transparent font-racing text-stroke-citrus-green-200/30 stroke-weight-[2px]">
            &nbsp;CITRUSHACK&nbsp;
          </div>
        </RollingText>
      </div>
      <div className="absolute overflow-hidden bottom-0 w-full z-0">
        <RollingText reverse={false}>
          <div className="text-8xl text-transparent font-racing text-stroke-citrus-green-200/30 stroke-weight-[2px]">
            &nbsp;CITRUSHACK&nbsp;
          </div>
        </RollingText>
      </div>
      {session && (
        <div
          className="z-10 absolute right-5 top-5 cursor-pointer px-6 py-1 bg-transparent border-2 ml-3 border-citrus-green-100 hover:border-citrus-yellow text-base lg:text-2xl font-racing hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu bg-citrus-gray-100"
          onClick={signOut}
        >
          Sign Out
        </div>
      )}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="flex flex-col w-1/3 gap-4 items-center justify-center">
          <div className="flex w-full">
            <Image src={logo} className="w-1/2" alt="logo" />
            <Image src={year} className="w-1/2" alt="year" />
          </div>
          <div className="text-5xl font-racing text-citrus-green-200">
            Coming Soon
          </div>
          <Countdown />
          <div className="flex">
            {session?.user.roles.participants !== 1 &&
              session?.user.roles.participants !== 0 && (
                <>
                  <CustomLink link="/form/participant" text="Apply" />
                  <CustomLink link="/form/mentor" text="Mentor" />
                  <CustomLink link="/form/volunteer" text="Volunteer" />
                </>
              )}
            {session && <CustomLink link="/user/dashboard" text="Dashboard" />}
            {session?.user.roles.participants !== 1 && (
              <div
                className="cursor-pointer px-6 py-1 bg-transparent border-2 ml-3 border-citrus-green-100 hover:border-citrus-yellow text-lg lg:text-2xl font-racing hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu"
                onClick={signIn}
              >
                Login
              </div>
            )}
            <Link
              className="px-6 py-1 text-citrus-gray-200 text-lg lg:text-2xl font-racing hover:-translate-y-1 duration-200 transform-gpu"
              href="/form/sponsor"
            >
              Sponsor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
