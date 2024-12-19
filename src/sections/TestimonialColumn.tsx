"use client";
import Image from "next/image";
import { testimoni } from "@/utils/testimoni";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialColumn = (props: {
  className?: string;
  testimoni: typeof testimoni;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* membuat sebuah array baru dengan 2 elemen, fill mengisi array yang telah dibuat dengan nilai 0 */}
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimoni.map(
              ({ text, imageSrc, name, username }, index) => (
                <div className="card" key={index}>
                  <div>{text}</div>
                  <div className="flex gap-2 items-center mt-5">
                    <Image
                      src={imageSrc}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
