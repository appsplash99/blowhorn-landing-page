import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Button } from "./Button";

interface INavbarProps {
  showMobileNav: boolean;
  setshowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<INavbarProps> = ({
  children,
  showMobileNav,
  setshowMobileNav,
}) => {
  return (
    <nav className="bg-red-600 relative">
      <div className="h-16 md:h-28 flex bg-white flex-wrap items-center justify-between p-4 border-b-2 border-gray-300">
        <div className="flex gap-4 items-center justify-center">
          <div className={`block lg:${!showMobileNav && "hidden"}`}>
            <button
              className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500"
              onClick={() => setshowMobileNav(!showMobileNav)}
            >
              {showMobileNav ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>
          </div>
          <a className="text-2xl text-gray-800 font-bold font-heading" href="#">
            nullBrains.
          </a>
        </div>
        {/* DESKTOP MENU */}
        <div
          className={`hidden lg:flex gap-6 items-center justify-center text-xl`}
        >
          {children}
        </div>
        <div className="flex gap-2 items-center">
          <Button className="py-2 px-2 bg-white hover:bg-gray-100 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-600 w-22 md:w-24 transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 rounded-full text-xs md:text-base">
            Sign In
          </Button>
          <Button className="py-2 px-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-22 md:w-24 transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full text-xs md:text-base">
            Sign Up
          </Button>
        </div>
      </div>
      {/* MOBILE NAV */}
      <div
        className={`absolute w-full h-12 bg-purple-300 ${
          showMobileNav ? "flex" : "hidden"
        } lg:hidden gap-6 items-center justify-center text-xl`}
      >
        {children}
      </div>
    </nav>
  );
};
