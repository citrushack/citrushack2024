import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-3xl font-bold text-citrus-orange">Loading...</p>
      <AiOutlineLoading3Quarters className="animate-spin text-citrus-orange" />
    </div>
  );
};

export default Loading;
