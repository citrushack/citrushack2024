import { PiTagSimpleFill } from "react-icons/pi";

const Header = ({ text, color }) => {
  return (
    <div
      className={`${
        color === "white"
          ? "text-white"
          : color === "black"
          ? "text-citrus-black"
          : ""
      } text-2xl md:text-5xl flex items-center font-archivo font-black gap-3 underline`}
    >
      <PiTagSimpleFill />
      {text}
      <PiTagSimpleFill className="rotate-180" />
    </div>
  );
};

export default Header;
