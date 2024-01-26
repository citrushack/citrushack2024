import Link from "next/link";
const CustomLink = ({ text, link }) => {
  return (
    <Link
      className="ml-3 px-6 py-1 bg-citrus-green-100 text-lg lg:text-2xl font-racing hover:bg-citrus-yellow hover:-translate-y-1 duration-200 transform-gpu"
      href={link}
    >
      {text}
    </Link>
  );
};

export default CustomLink;
