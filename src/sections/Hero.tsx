"use client";

import arrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    // radial gradient 200% widht dan 100% height start at bottom left, dari #183EC2 ke #EAEEFE_100%
    <section
      ref={heroRef}
      className="pt-8 md:pt-5 md:pb-10 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[48px] tracking-tighter mt-6 bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
              Pathway to productivity
            </h1>
            <p className="text-xl tracking-tight leading-7 mt-6 text-[#010D3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>

            <div className="flex gap-1 mt-[30px] items-center">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <Image src={arrowIcon} alt="arrow icon" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* h-648px dari height figma flex-1 agar gambar kesamping */}
          <div className="mt-20 md:mt-0 h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="Cog Image"
              // -left-6 dari x position
              className="md:absolute md:h-full w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={CylinderImage.src}
              alt="Cylinder Image"
              width={220}
              height={220}
              // -top-8 dari y position dan -left-32 dari x position
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY }}
            />

            <motion.img
              src={NoodleImage.src}
              alt="Noodle Image"
              width={220}
              height={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
