import back from "@/public/svg/judge/judge.svg";
import Image from "next/image";
const Judge = ({ judge }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full relative">
        <Image src={back} className="w-full" />
        <Image
          src={judge.image}
          className="w-9/12 absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="text-xs md:text-base text-center">{judge.name}</div>
      <div className="text-xs md:text-base text-center font-extralight">
        {judge.title}
      </div>
    </div>
  );
};

export default Judge;
