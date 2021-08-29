import React from "react";

interface IMenuLink {
  nameAttr: "home" | "features" | "blog" | "contact";
  linkName: string;
  href: string;
}

export const MENU_LINKS: IMenuLink[] = [
  {
    linkName: "Home",
    nameAttr: "home",
    href: "#home",
  },
  {
    linkName: "Features",
    nameAttr: "features",
    href: "#features",
  },
  {
    linkName: "Blog",
    nameAttr: "blog",
    href: "#blog",
  },
  { linkName: "Contact", href: "#contact", nameAttr: "contact" },
];
