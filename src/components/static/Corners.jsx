import corner from "@/public/svg/about/corner.svg";
import Image from "next/image";

const Corners = () => {
  return (
    <>
      <Image src={corner} className="absolute top-0 left-0" />
      <Image src={corner} className="absolute top-0 right-0 rotate-90" />
      <Image src={corner} className="absolute bottom-0 left-0 -rotate-90" />
      <Image src={corner} className="absolute bottom-0 right-0 rotate-180" />
    </>
  );
};

export default Corners;
