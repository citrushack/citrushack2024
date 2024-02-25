import Image from "next/image";
import logo from "@/public/svg/landing/logo.svg";
import helmet from "@/public/svg/landing/helmet.svg";
import Countdown from "./CountDown";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="w-full flex flex-col bg-citrus-beige">
      <div className="w-full relative flex items-center justify-between">
        <Image src={helmet} alt="helmet" />
        <div className="flex flex-col items-end mr-24">
          <Image src={logo} alt="logo" />
          <div className="-mt-16 flex flex-col">
            <div className="text-3xl">May 17 - 19, 2024 Coming Soon!</div>
            <Countdown />
          </div>
        </div>
      </div>
      <div className="self-end text-5xl text-citrus-orange mr-24 font-bold mb-4">
        See you at the endl;!
      </div>
      <div className="flex self-end mr-24 gap-8">
        <Button text="Participate" link="/form/participant" />
        <Button text="Sponsor" link="/form/sponsor" />
        <Button text="Mentor" link="/form/mentor" />
        <Button text="Volunteer" link="/form/volunteer" />
      </div>
    </div>
  );
};

export default Landing;
