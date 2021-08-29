import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { MENU_LINKS } from "../utils/menuLinks";

interface INavbarProps {
  showMobileNav: boolean;
  setshowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<INavbarProps> = ({
  setshowMobileNav,
  showMobileNav,
}) => {
  return (
    <nav className={`relative z-50 h-24 select-none`}>
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <a href="#_" className="inline-block py-4 md:py-0">
            <span className="p-1 text-xl font-black leading-none text-gray-900">
              <span>nullBrains.</span>
              <span className="text-indigo-600">.</span>
            </span>
          </a>
        </div>
        <div
          className={`top-0 left-0 right-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex transition-all duration-200 ease-in-out transform  ${
            showMobileNav ? "flex fixed" : "hidden"
          }`}
        >
          <div
            className={`flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row `}
          >
            <a
              href="#_"
              className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
            >
              nullBrains.<span className="text-indigo-600">.</span>
            </a>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              {Object.keys(MENU_LINKS).map((key, index) => (
                <a
                  key={index}
                  href="#_"
                  onClick={(e) => e.preventDefault()}
                  className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                >
                  {key}
                </a>
              ))}
              <a
                href="#_"
                className="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative"
              >
                <AiOutlineSearch
                  className="text-gray-600 hover:underline focus:text-indigo-600 font-medium"
                  onClick={(e) => e.preventDefault()}
                />
              </a>
            </div>
            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <a
                href="#"
                className="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"
              >
                Sign In
              </a>
              <a
                href="#_"
                className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
          onClick={() => setshowMobileNav(!showMobileNav)}
        >
          {!showMobileNav ? (
            <FaBars className="text-xl" />
          ) : (
            <FaWindowClose className="text-xl" />
          )}
        </div>
      </div>
    </nav>
  );
};
