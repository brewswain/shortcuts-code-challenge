import { useState } from "react";
import { motion } from "framer-motion";

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
      className=" relative bg-buttonIdle  font-semibold text-lg text-white z-[1] p-[2px] rounded-[32px] overflow-hidden"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`button__spinning-border absolute z-[2] inset-0 
        
        `}
        style={{
          background: `${
            isHovered
              ? "conic-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 20%,rgba(255,255,255,0) 40%)"
              : ""
          }`,
        }}
        animate={isHovered ? { rotate: 500, scale: 4 } : {}}
        transition={isHovered ? { duration: 1, repeat: 0 } : {}}
      />
      <div className="relative bg-slate-900 rounded-[32px] w-[300px] h-[60px] z-[3]">
        <span
          className={`flex  h-full justify-center items-center  ${
            isHovered
              ? "-translate-y-[50%] opacity-0 transition duration-500"
              : ""
          }`}
        >
          {children}
        </span>
        <span
          className={`absolute w-[23ch] top-8 left-1/2  translate-x-[-50%] opacity-0 ${
            isHovered
              ? "-translate-y-[58%] opacity-100 transition duration-500"
              : ""
          }`}
        >
          {children}
        </span>
      </div>
    </motion.button>
  );
};

export default CustomButton;
