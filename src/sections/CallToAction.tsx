"use client";

import LayoutTitle from "./LayoutTitle";
import arrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="relative">
          <LayoutTitle
            title="Sign up for free today"
            description="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
          />

          <motion.img
            src={StarImage.src}
            alt="Star"
            className="absolute hidden md:block -top-[137px] -left-[256px]"
            width={360}
            height={360}
            style={{ translateY }}
          />

          <motion.img
            src={SpringImage.src}
            alt="Spring"
            className="absolute hidden md:block -top-[19px] md:left-[622px] lg:left-[838px]"
            width={363}
            height={363}
            style={{ translateY }}
          />
        </div>

        <div className="flex justify-center mt-10 gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <Image src={arrowRight} alt="arrow right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
