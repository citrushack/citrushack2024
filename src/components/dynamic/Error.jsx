const Error = ({ code, error, message, dev }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed">
      <p className="text-center text-6xl font-extrabold text-citrus-orange  m-0">
        {code}
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-black m-0">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg  text-citrus-orange m-0">
        {message}
      </p>
      {dev && (
        <p className="text-center text-sm md:text-lg text-citrus-orange m-0">
          Developer Notes: {dev}
        </p>
      )}
    </div>
  );
};

export default Error;
