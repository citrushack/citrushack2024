import { INVOLVED } from "@/data/static/Involved";
import Header from "../../Header";
import Link from "next/link";

const Involved = () => {
  return (
    <div className="bg-citrus-black w-full flex flex-col items-center py-8">
      <Header text="Get Involved" color="white" />
      <div className="flex flex-wrap items-center justify-evenly w-11/12 lg:w-10/12 text-white my-10">
        {Object.entries(INVOLVED).map(([key, value], index) => (
          <div key={index} className="flex w-full lg:w-5/12 p-5">
            <div className="flex flex-col items-center justify-center mr-8">
              <Link
                className="text-bold text-xl md:text-3xl hover:-translate-y-1 duration-200 text-center hover:text-citrus-orange"
                href={value.link}
              >
                <div className="text-5xl lg:text-8xl mb-4">{value.icon}</div>
                Apply
              </Link>
            </div>
            <div>
              <div className="font-black text-lg md:text-4xl">{key}</div>
              <div className="text-bold text-base md:text-xl">
                {value.describtion}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Involved;
