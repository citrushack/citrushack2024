import Link from "next/link";
const CustomLink = ({ text, link }) => {
  return (
    <Link
      className="ml-3 px-6 py-1 text-lg lg:text-2xl font-racing hover:-translate-y-1 duration-200 transform-gpu"
      href={link}
    >
      Apply to <span className="text-citrus-orange-200"> {text}</span>
    </Link>
  );
};

export default CustomLink;
