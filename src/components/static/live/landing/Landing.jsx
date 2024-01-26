"use client";
import Image from "next/image";
import logo from "@/public/LOGO.svg";
import year from "@/public/2024.svg";
import Countdown from "./CountDown";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full relative flex items-center justify-between min-h-screen">
      {session && (
        <div
          className="rounded-full z-10 absolute right-5 top-5 cursor-pointer px-6 py-1 bg-transparent border-2 ml-3 border-citrus-black hover:border-citrus-yellow text-base lg:text-2xl font-russo hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu bg-citrus-gray-100"
          onClick={signOut}
        >
          Sign Out
        </div>
      )}
      {session?.user.roles.participants !== 1 && (
        <div
          className="rounded-full z-10 absolute right-5 top-5 cursor-pointer px-6 py-1 bg-transparent border-2 ml-3 border-citrus-black hover:border-citrus-yellow text-base lg:text-2xl font-russo hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu bg-citrus-gray-100"
          onClick={signIn}
        >
          Login
        </div>
      )}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="flex flex-col w-1/3 gap-4 items-center justify-center">
          <Image src={logo} className="w-1/2" alt="logo" />
          <Image src={year} className="w-1/4" alt="year" />
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl text-citrus-green-200 font-rock mb-5">
              Coming Soon !
            </div>

            {session ? (
              <Link
                className="flex gap-2 items-center ml-3 px-6 py-1 text-lg lg:text-2xl font-russo hover:-translate-y-1 duration-200 transform-gpu"
                href="/user/dashboard"
              >
                Go To
                <span className="text-citrus-green-100 underline">
                  Dashboard
                </span>
                <MdArrowOutward />
              </Link>
            ) : (
              <>
                <Link
                  className="flex gap-2 items-center ml-3 px-6 py-1 text-lg lg:text-2xl font-russo hover:-translate-y-1 duration-200 transform-gpu"
                  href="/form/participant"
                >
                  Apply to
                  <span className="text-citrus-green-100 underline">
                    Participate
                  </span>
                  <MdArrowOutward />
                </Link>
                <div className="flex">
                  <Link
                    className="flex gap-2 items-center ml-3 px-6 py-1 text-lg lg:text-base font-russo hover:-translate-y-1 duration-200 transform-gpu"
                    href="/form/mentor"
                  >
                    Apply to
                    <span className="text-citrus-black underline"> Mentor</span>
                    <MdArrowOutward />
                  </Link>
                  <Link
                    className="flex gap-2 items-center ml-3 px-6 py-1 text-lg lg:text-base font-russo hover:-translate-y-1 duration-200 transform-gpu"
                    href="/form/volunteer"
                  >
                    Apply to
                    <span className="text-citrus-black underline">
                      Volunteer
                    </span>
                    <MdArrowOutward />
                  </Link>
                </div>
              </>
            )}
            <Countdown />

            <Link
              className="px-6 py-1 text-citrus-gray-200 text-lg lg:text-2xl font-russo hover:-translate-y-1 duration-200 transform-gpu"
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
