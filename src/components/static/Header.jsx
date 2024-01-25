const Header = ({ text, color }) => {
  return (
    <div
      className={`w-8/12 ml-[10%] text-[80px] leading-none text-hackathon-gray-100 font-bold font-racing relative border-b-[6px] border-citrus-${color} pb-2`}
    >
      {text}
      <p
        className={`!text-[40px] pb-2 text-black font-extrabold absolute bottom-0 border-b-[10px] pr-[7%] border-citrus-${color}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Header;
