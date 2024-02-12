import { useState } from "react";
import { motion } from "framer-motion";

interface CustomButtonProps {
  children: string;
  handleClick: () => void;
}

const CustomButton = ({ children, handleClick }: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.button
      type="button"
      className="rounded-[32px] border border-buttonIdle py-4 px-8 font-semibold text-lg text-white"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
