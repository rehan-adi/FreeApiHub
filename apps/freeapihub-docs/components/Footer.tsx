import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex gap-6 md:px-20 py-6 w-full flex-wrap items-center justify-center md:justify-between dark:bg-[#141312]">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    >
      <span className="mr-2 text-sm dark:text-[#FAFAFACC] text-black font-medium">Powered by</span>
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={60}
          height={40}
          priority
        />
    </a>
    <p className="text-sm dark:text-[#FAFAFACC] text-black font-medium">© 2024 Free API Hub - All Rights Reserved</p>
  </footer>
  );
};

export default Footer;
