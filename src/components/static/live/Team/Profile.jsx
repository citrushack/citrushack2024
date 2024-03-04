import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Profile = ({ profile }) => {
  return (
    <div className="bg-citrus-black p-2 md:p-5 text-white flex flex-col items-center rounded-2xl w-full">
      <Image src={profile.image} className="w-full rounded-2xl mb-2" />
      <div className="text-base md:text-xl font-black text-center">
        {profile.name}
      </div>
      <div className="text-xs md:text-base text-center my-1">
        {profile.position}
      </div>
      <div className="flex gap-2">
        <Link href={profile.linkedin}>
          <FaEnvelope className="text-base md:text-xl" />
        </Link>
        <Link href={profile.email}>
          <FaLinkedin className="text-base md:text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
