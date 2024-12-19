"use client";

import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";
import LayoutTitle from "./LayoutTitle";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
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
        <LayoutTitle
          tag="Boost your productivity"
          title="A more effective way to track progress"
          description="Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts."
        />

        <div className="relative">
          <Image src={ProductImage} alt={"Product Image"} className="mt-10" />

          <motion.img
            src={PyramidImage.src}
            alt={"Pyramid Image"}
            className="absolute -top-32 -right-36 hidden md:block"
            width={262}
            height={262}
            style={{ translateY }}
          />

          <motion.img
            src={TubeImage.src}
            alt={"Tube Image"}
            className="absolute bottom-24 -left-36 hidden md:block"
            width={248}
            height={248}
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
