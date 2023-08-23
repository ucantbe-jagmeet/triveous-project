import Link from "next/link";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  console.log(user);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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

      {!user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignOut} className="p-2 cursor-pointer">
            Signup
          </li>
        </ul>
      ) : (
        <div className="flex items-center">
          <p>Welcome, {user.displayName}</p>
          <p onClick={handleSignOut} className=" ml-7 cursor-pointer">
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
