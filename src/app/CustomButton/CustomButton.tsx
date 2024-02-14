import { useState } from "react";
import { motion } from "framer-motion";

interface CustomButtonProps {
  children: string;
  handleClick: () => void;
}

const CustomButton = ({ children, handleClick }: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false); // Set this to true to make it rotate without needing to hover while testing

  return (
    <motion.button
      type="button"
      className=" relative bg-buttonIdle  font-semibold text-lg text-white z-[1] p-[2px] rounded-[32px] overflow-hidden" // Remove 'overflow-hidden' so that you can see the actual div that's giving us the rotate effect
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
              ? // This is a pretty subtle gradient, but can easily be customized to fit our client's customer scheme. Left simple on purpose for ease of experimentation.
                // The only important colors are the first and last ones, since those are both transparent, thus giving us the "rotating line of light" illusion. Feel free to experiment!
                // PS: You might need to change the percentage values of your colours based on how many colours you add to this gradient. For now, 40% works as the tail-end since it's just a 3 colour gradient.
                "conic-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 20%,rgba(255,255,255,0) 40%)"
              : ""
          }`,
        }}
        animate={isHovered ? { rotate: 500, scale: 4 } : {}}
        // 500 Degrees are chosen instead of 360 so that the "tail" of our chosen colour will end about where the line's "head" started. Once again, this is due to the transparency we added.
        // Feel free to experiment as gradient is made more complex. Scale also affects how our animation looks, so feel free to mess around with that too!
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
}; // 500 degrees seems to work best with this gradient, but this is cause i added transparency. This value will probably shift when we make gradient more akin to the design's needs

export default CustomButton;
