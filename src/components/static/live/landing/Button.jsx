import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center text-base lg:text-2xl hover:-translate-y-2 duration-300 text-citrus-black"
    >
      <div>Apply to &nbsp; </div>
      <div className="underline font-bold">{text}</div>
      <MdArrowOutward className="ml-2" />
    </Link>
  );
};

export default Button;
