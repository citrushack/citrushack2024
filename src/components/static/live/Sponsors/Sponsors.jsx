import Header from "../../Header";
import { SPONSORS } from "@/data/static/Sponsors";
import Image from "next/image";
import confetti from "@/public/svg/sponsor/confetti.svg";

const Sponsors = () => {
  return (
    <div className="relative w-full items-center justify-center flex flex-col py-12">
      <Image src={confetti} className="absolute top-0 left-0 w-1/6" />
      <Image
        src={confetti}
        className="absolute top-0 right-0 -scale-x-100 w-1/6"
      />
      <Header text="Out Sponsors" color="black" />
      <div className="flex flex-wrap w-8/12 items-center justify-center">
        {SPONSORS.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor}
            alt="sponsor"
            className="w-1/2 md:w-1/4 p-2 md:p-6"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
