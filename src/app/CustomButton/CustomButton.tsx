import { useState } from "react";

interface CustomButtonProps {
  children: string;
  handleClick: () => void;
}

const CustomButton = ({ children, handleClick }: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      type="button"
      className="rounded-[32px] border border-buttonIdle py-4 px-8 font-semibold text-lg text-white"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative">
        <span>{children}</span>
        <span
          className={`absolute top-4 left-0 opacity-0 ${
            isHovered ? "-translate-y-2/3 opacity-100 transition delay-150" : ""
          }`}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export default CustomButton;
