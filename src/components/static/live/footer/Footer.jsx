import footer from "@/public/svg/footer/footer.svg";
import logo from "@/public/svg/footer/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full relative flex flex-col items-center">
      <Image
        src={footer}
        alt="footer"
        className="absolute bottom-0 left-0 w-full z-0"
      />
      <Image src={logo} alt="logo" className="z-10 relative w-1/2 md:w-1/3" />
      <div className="z-10 my-4 relative text-white">
        Made with ❤ by the Citrus Hack team at University of California,
        Riverside.
      </div>
    </div>
  );
};

export default Footer;
