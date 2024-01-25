import { COLORS } from "@/data/static/colors";
const Header = ({ text, color, shadow }) => {
  return (
    <div
      className={`${COLORS[shadow].text} ${COLORS[color].border} w-8/12 text-8xl font-racing relative border-b-[6px] pb-2`}
    >
      {text}
      <div
        className={`text-5xl pb-2 text-black absolute bottom-0 border-b-[10px] pr-5 ${COLORS[color].border}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Header;
