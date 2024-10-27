import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex gap-6 md:px-20 py-6 flex-wrap items-center justify-center md:justify-between">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    >
      <span className="mr-2 text-sm text-[#FAFAFACC] font-medium">Powered by</span>
      <Image
        aria-hidden
        src="/vercel.svg"
        alt="File icon"
        width={16}
        height={16}
      />
      Vercel
    </a>
    <p className="text-sm text-[#FAFAFACC] font-medium">© 2024 Free API Hub - All Rights Reserved</p>
  </footer>
  );
};

export default Footer;
