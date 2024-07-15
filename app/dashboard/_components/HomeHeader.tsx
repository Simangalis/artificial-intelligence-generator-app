import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa"; // Importing the SignIn icon from react-icons

const HomeHeader = () => {
  return (
    <div className="p-3 shadow-sm border-b-2 bg-[#457AE6]  flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 rounded-md max-w-lg bg-white">
        <Image src={"/logoo.svg"} alt="logo" width={50} height={50} />
      </div>

      <div className="flex gap-1 items-center">
        <div className="bg-primary p-2 rounded-full">
          <FaSignInAlt size={25} className="text-white" />
        </div>
        <Link href='/dashboard'>
          <button className="text-white transition: transform 0.3s ease,">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
