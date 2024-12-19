"use client";
// !TIDAK BISA IMPORT SVG FILE NANTI COBA PAKE CARA LAIN !!

import arrowIcon from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import menuIcon from "@/assets/menu.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="leading-5 text-sm hidden md:block text-white/60">
          Streamline your workflow and boost your productivity.
        </p>

        <div className="inline-flex gap-2 items-center">
          <p>Get started for free</p>
          {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" /> */}
          <Image
            src={arrowIcon}
            alt="Arrow Icon"
            className="h-4 w-4 inline-flex justify-center items-center bg-white text-white rounded-lg"
          />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Sans Logo" height={40} width={40} />

            <Image
              src={menuIcon}
              className="h-5 w-5 md:hidden"
              alt="menu icon"
            />

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Customers</Link>
              <Link href={"#"}>Updates</Link>
              <Link href={"#"}>Help</Link>

              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
