import { TRACKS } from "@/data/static/Tracks";
import RollingText from "../../Rolling";
import Image from "next/image";

const Tracks = () => {
  return (
    <div className="w-full">
      <RollingText text="Tracks" />
      <div className="bg-citrus-black flex items-center w-full justify-center p-10">
        <div className="grid grid-cols-3 w-11/12">
          {Object.entries(TRACKS).map(([title, value], index) => {
            return (
              <div
                key={index}
                className="italic font-archivo font-black flex flex-col items-center justify-end"
              >
                <div className="text-xs md:text-xl text-white font-bold">
                  {title}
                </div>
                <Image src={value.img} alt={title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
