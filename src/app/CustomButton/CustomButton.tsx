import { useState } from "react";
import { motion } from "framer-motion";

import "./borderEffect.css";

interface CustomButtonProps {
  children: string;
  handleClick: () => void;
}

const CustomButton = ({ children, handleClick }: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const variants = {
    hover: {
      rotate: 360,
    },
  };

  return (
    <motion.button
      type="button"
      className="rounded-[32px] relative border border-buttonIdle py-4 px-8 font-semibold text-lg text-white"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute w-full h-full rounded-[32px] left-0 top-0  border border-buttonIdle border-gradient ${
          isHovered ? "animate-spin" : ""
        }`}
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ duration: 1, ease: "linear" }}
      />

      <span className="relative">
        <span
          className={`block ${
            isHovered
              ? "-translate-y-[75%] opacity-0 transition duration-500"
              : ""
          }`}
        >
          {children}
        </span>
        <span
          className={`absolute w-[23ch] top-4 left-[-11.5ch] opacity-0 ${
            isHovered
              ? "-translate-y-[58%] opacity-100 transition duration-500"
              : ""
          }`}
        >
          {children}
        </span>
      </span>
    </motion.button>
  );
};

export default CustomButton;
