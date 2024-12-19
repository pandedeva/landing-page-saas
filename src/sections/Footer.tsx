"use client";
import Logo from "@/assets/logosaas.png";
import {
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-[#BCBCBC] text-sm leading-5 text-center">
      <div className="container">
        {/* before untuk gradient  */}
        <div className="inline-flex relative before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={Logo}
            alt="logo"
            height={40}
            width={40}
            className="relative"
          />
        </div>

        <nav className="flex flex-col md:flex-row gap-6 my-6 justify-center items-center">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Customers</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Help</Link>
          <Link href={"#"}>Careers</Link>
        </nav>

        <div className="flex gap-4 justify-center mb-6">
          <FaXTwitter className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:brightness-125" />
          <FaInstagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:brightness-125" />
          <FaLinkedin className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:brightness-125" />
          <FaPinterest className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:brightness-125" />
          <FaYoutube className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:brightness-125" />
        </div>

        <p>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
