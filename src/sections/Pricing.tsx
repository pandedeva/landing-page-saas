"use client";
import LayoutTitle from "./LayoutTitle";
import pricing from "@/utils/pricingTiers.json";
import checkIcon from "@/assets/check.svg";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <LayoutTitle
          title="Pricing"
          description="Free forever. Upgrade for unlimited tasks, better security, and exclusive features."
        />

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricing.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={index}
                className={clsx(
                  "card",
                  inverse && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={clsx(
                      "font-bold text-lg leading-7 tracking-tighter text-black/50",
                      inverse && "text-white/50"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        // ditambahin warnanya agar looping berjalan
                        // background size 200 agar looping juga
                        className="bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          // linear agar durasi nya sama saat masuk dan keluar
                          repeatType: "loop",
                        }}
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={clsx(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      {/* <CheckIcon className="h-6 w-6" /> */}
                      <Image
                        src={checkIcon}
                        alt="check icon"
                        className="w-6 h-6"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
