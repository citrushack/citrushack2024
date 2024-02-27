const RollingText = ({ text, repeat = 6, reverse = false }) => {
  return (
    <div className="translate-y-[18%] relative flex overflow-hidden font-archivo font-black text-5xl md:text-8xl w-full text-citrus-black">
      <div className="flex h-full animate-marquee gap-3">
        {Array.from({ length: repeat }, (_, i) => (
          <div className="w-fit" key={i}>
            {text}
          </div>
        ))}
      </div>
      <div className="absolute flex h-full animate-marquee-continuation gap-3">
        {Array.from({ length: repeat }, (_, i) => (
          <div className="w-fit" key={i}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingText;
