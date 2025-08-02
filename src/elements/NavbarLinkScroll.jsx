// src/component/NavbarLinkScroll.jsx
import { Link as ScrollLink } from "react-scroll";
import { NavbarLink } from "flowbite-react";

export default function NavbarLinkScroll({ to, children }) {
  return (
    <NavbarLink
      as={ScrollLink}
      to={to}
      smooth={true}
      offset={-80}
      duration={500}
      spy={true}
      activeClass="text-white underline font-bold"
      className="text-lg lg:text-xl cursor-pointer font-mono"
    >
      {children}
    </NavbarLink>
  );
}
