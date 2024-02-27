import { JUDGES } from "@/data/static/Judge";
import Judge from "./Judge";
import Header from "../../Header";

const Judges = () => {
  return (
    <div className="relative w-full items-center justify-center flex flex-col py-12">
      <Header text="Judge" color="black" />
      <div className="flex flex-wrap w-9/12 md:w-8/12 items-center justify-center relative my-8">
        {JUDGES.map((judge, index) => (
          <div key={index} className="w-1/3 md:w-1/6 p-2 relative z-10">
            <Judge judge={judge} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
