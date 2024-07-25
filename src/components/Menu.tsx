"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <svg
        className=""
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{
          width: "24px",
          height: "24px",
          strokeWidth: "1.5px",
          cursor: "pointer",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          style={{ stroke: "currentColor" }}
        />
      </svg>
      {open && (
        <div className="absolute bg-black text-white top-20 left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10  ">
          <Link href="/">HomePage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
