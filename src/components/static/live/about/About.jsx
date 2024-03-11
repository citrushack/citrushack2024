import Image from "next/image";
import rayas from "@/public/svg/about/rayas.svg";
import title from "@/public/svg/about/title.svg";
// import car from "@/public/svg/about/car.svg";
import { PiTagSimpleFill } from "react-icons/pi";
import Corners from "../../Corners";

const About = () => {
  return (
    <div className="w-full relative">
      <Image src={rayas} />
      {/* <Image
        src={car}
        className="w-full sm:w-1/2 absolute bottom-0 lg:-bottom-16 md:right-[20%] z-10"
      /> */}
      <div className="w-full bg-citrus-black text-citrus-black py-10 flex items-center justify-center">
        <div className="w-11/12 rounded-[100px] bg-citrus-beige justify-between flex flex-col md:flex-row gap-8 px-8 py-12 pb-24 lg:pb-48">
          <Image src={title} />
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center justify-center text-xl lg:text-4xl gap-2 font-bold underline">
              <PiTagSimpleFill />
              36 HOUR HACKATHON AT UCR
            </div>
            <div className="flex flex-col items-start relative py-8 gap-2">
              <Corners />
              <div className="flex items-center justify-center text-lg lg:text-2xl gap-2">
                <PiTagSimpleFill />
                500+ HACKERS
              </div>
              <div className="flex items-center justify-center text-lg lg:text-2xl gap-2">
                <PiTagSimpleFill />
                5K+ PRIZE
              </div>
              <div className="text-sm lg:text-lg">
                Citrus Hack is a 36-hour hackathon hosted by the University of
                California, Riverside. Hackers are challenged to create a
                project on the spot and demo it to compete for prizes. Our goal
                is to provide learning and networking opportunities for our
                community of hackers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
