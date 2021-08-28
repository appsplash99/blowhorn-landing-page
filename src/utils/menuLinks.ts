import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface IMenuLinks {
  [key: string]: string | React.ReactNode;
}

export const MENU_LINKS: IMenuLinks = {
  Home: "/",
  Features: "/features",
  Blog: "/blog",
  Contact: "/contact",
};
