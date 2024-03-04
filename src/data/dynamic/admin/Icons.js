import { IoIosMail, IoIosShirt, IoIosSchool } from "react-icons/io";
import { SiGithub, SiDevpost, SiFigma } from "react-icons/si";
import {
  FaAppleAlt,
  FaPhoneAlt,
  FaCrown,
  FaSchool,
  FaVenusMars,
  FaBirthdayCake,
  FaBook,
  FaClock,
} from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

export const ICONS = {
  github: <SiGithub className="mr-2" />,
  devpost: <SiDevpost className="mr-2" />,
  figma: <SiFigma className="mr-2" />,
  winner: <FaCrown className="ml-1 text-hackathon-yellow-100 text-lg" />,
  phone: <FaPhoneAlt className="text-citrus-orange mr-2" />,
  email: <IoIosMail className="text-citrus-orange mr-2 text-lg" />,
  shirt: <IoIosShirt className="text-citrus-orange mr-2 text-lg" />,
  diet: <FaAppleAlt className="text-citrus-orange mr-2" />,
  age: <FaBirthdayCake className="text-citrus-orange mr-2 text-lg" />,
  gender: <FaVenusMars className="text-citrus-orange mr-2 text-lg" />,
  grade: <IoIosSchool className="text-citrus-orange mr-2 text-lg" />,
  major: <FaBook className="text-citrus-orange mr-2 text-lg" />,
  school: <FaSchool className="text-citrus-orange mr-2 text-lg" />,
  eventSource: <MdContactPage className="text-citrus-orange mr-2 text-lg" />,
  priorHackathons: <FaClock className="text-citrus-orange mr-2 text-lg" />,
};
