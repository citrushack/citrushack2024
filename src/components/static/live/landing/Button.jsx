import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Button = ({ text, link }) => {
  return (
    <div className="flex">
      <div className="lg:text-2xl">Apply to &nbsp; </div>
      <Link
        href={link}
        className="flex items-center text-base lg:text-2xl hover:-translate-y-1 hover:text-citrus-orange duration-300 text-citrus-black font-bold"
      >
        {text}
        <MdArrowOutward className="ml-2" />
      </Link>
    </div>
  );
};

export default Button;
