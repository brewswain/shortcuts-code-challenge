"use client";

import Image from "next/image";
import CustomButton from "./CustomButton/CustomButton";

export default function Home() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <main className=" bg-slate-900 flex justify-center items-center h-dvh">
      <CustomButton handleClick={handleClick}>
        Discover more of our work
      </CustomButton>
    </main>
  );
}
