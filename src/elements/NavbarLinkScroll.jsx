// src/component/NavbarLinkScroll.jsx
import { Link as ScrollLink } from "react-scroll";
import { NavbarLink } from "flowbite-react";

export default function NavbarLinkScroll({ to, children, className = "" }) {
  return (
    <NavbarLink
      as={ScrollLink}
      to={to}
      smooth={true}
      offset={-80}
      duration={500}
      spy={true}
      activeClass="active"
      className={`dark:text-gray-200 text-gray-200 text-lg lg:text-xl cursor-pointer font-mono ${className}`}
    >
      {children}
    </NavbarLink>
  );
}
