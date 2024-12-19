"use client";

import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        {/* linear gradient dari figma dari kanan transparent ke kiri black */}
        {/* mask image transparent ke kiri transparetn, black tengah, kanan transparent */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image className="logo-ticker" src={AcmeLogo} alt="Acme Logo" />
            <Image
              className="logo-ticker"
              src={QuantumLogo}
              alt="Quantum Logo"
            />
            <Image className="logo-ticker" src={EchoLogo} alt="Echo Logo" />
            <Image
              className="logo-ticker"
              src={CelestialLogo}
              alt="Celestial Logo"
            />
            <Image className="logo-ticker" src={PulseLogo} alt="Pulse Logo" />
            <Image className="logo-ticker" src={ApexLogo} alt="Apex Logo" />

            {/* logo kedua untuk looping */}
            <Image className="logo-ticker" src={AcmeLogo} alt="Acme Logo" />
            <Image
              className="logo-ticker"
              src={QuantumLogo}
              alt="Quantum Logo"
            />
            <Image className="logo-ticker" src={EchoLogo} alt="Echo Logo" />
            <Image
              className="logo-ticker"
              src={CelestialLogo}
              alt="Celestial Logo"
            />
            <Image className="logo-ticker" src={PulseLogo} alt="Pulse Logo" />
            <Image className="logo-ticker" src={ApexLogo} alt="Apex Logo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
