import { COMMITTEE, DIRECTORS, TEAM } from "@/data/static/Team";
import Header from "../../Header";
import Profile from "./Profile";
import Corners from "../../Corners";
import Image from "next/image";
import flag from "@/public/svg/team/flag.svg";
import light from "@/public/svg/team/light.svg";

const Team = () => {
  return (
    <div className="relative w-full items-center justify-center flex flex-col py-12">
      <Header text="Out Team" color="black" />
      <div className="flex flex-wrap w-9/12 md:w-4/12 items-center justify-center relative">
        <Corners />
        <Image
          src={flag}
          alt="flag"
          className="absolute left-0 -translate-x-[88%] top-0 hidden md:block z-0"
        />
        <Image
          src={flag}
          alt="flag"
          className="absolute right-0 translate-x-[88%] top-0 scale-x-[-1] hidden md:block z-0"
        />
        {DIRECTORS.map((profile, index) => (
          <div key={index} className="w-1/2 p-2 relative z-10">
            <Profile profile={profile} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap w-9/12 md:w-8/12 items-center justify-center relative">
        <Corners />
        <Image
          src={light}
          alt="light"
          className="absolute right-0 -translate-y-[50%] translate-x-[50%] top-0 hidden md:block z-0"
        />
        <Image
          src={light}
          alt="light"
          className="absolute left-0 -translate-x-[80%] translate-y-[50%] top-0 hidden md:block z-0 scale-x-[-1]"
        />
        {TEAM.map((profile, index) => (
          <div key={index} className="w-1/2 md:w-1/4 p-2 relative z-10">
            <Profile profile={profile} />
          </div>
        ))}
      </div>
      <div className="bg-citrus-black w-full items-center justify-center flex flex-col py-8 mt-8">
        <Header text="Committees" color="white" />
        <div className="flex flex-wrap w-10/12 text-white items-start justify-evenly">
          {Object.entries(COMMITTEE).map(([committee, list], index) => (
            <div
              key={index}
              className="w-1/3 lg:w-1/6 flex flex-col items-center justify-center"
            >
              <div className="text-base md:text-2xl my-6">{committee}</div>
              {list.map((name, index2) => (
                <div
                  className="text-xs md:text-xl font-extralight"
                  key={index2}
                >
                  {name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
