const Error = ({ code, error, message, dev }) => {
  return (
    <div className="w-screen h-screen flex flex-col  font-racing items-center justify-center fixed">
      <p className="text-center text-9xl font-racing text-transparent text-stroke-citrus-green-100 stroke-weight-[4px] m-0">
        {code}
      </p>
      <p className="text-center text-lg md:text-2xl text-citrus-green-200 m-0">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg  text-citrus-gray-200 m-0">
        {message}
      </p>
      {dev && (
        <p className="text-center text-sm md:text-lg text-citrus-gray-200 m-0">
          Developer Notes: {dev}
        </p>
      )}
    </div>
  );
};

export default Error;
