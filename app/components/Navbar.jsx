import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2">
          <Link href="/about">About</Link>
        </li>
        <li className="p-2">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/login">Login</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/signup ">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
