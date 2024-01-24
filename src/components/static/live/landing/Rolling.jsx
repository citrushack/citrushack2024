const RollingText = ({ children, repeat = 6, reverse = false }) => {
  return (
    <div
      className={`flex h-full ${
        reverse ? "animate-rolling-reverse" : "animate-rolling"
      }`}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div className="w-fit" key={i}>
          {children}
        </div>
      ))}
    </div>
  );
};

export default RollingText;
