import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import NavbarLinkScroll from "../elements/NavbarLinkScroll";

export default function NavbarComponent({ visible }) {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}
    >
      <Navbar
        rounded
        className="bg-slate-900 dark:bg-slate-900 text-white border-b rounded-2xl"
      >
        <NavbarBrand href="#">
          <span className="flex text-2xl p-2.5 font-semibold text-white font-mono">
            makmalt
          </span>
        </NavbarBrand>

        <div className="flex md:ml-auto">
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <NavbarLinkScroll
            to="about"
            className="relative inline-block after:content-[''] after:block 
              after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
              hover:after:w-full w-full"
          >
            About
          </NavbarLinkScroll>

          <NavbarLinkScroll
            to="portfolio"
            className="relative inline-block after:content-[''] after:block 
              after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
              hover:after:w-full w-full"
          >
            Portfolio
          </NavbarLinkScroll>

          <NavbarLinkScroll
            to="contact"
            className="relative inline-block after:content-[''] after:block 
              after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-250 sm:after:duration-300 
              hover:after:w-full w-full"
          >
            Contact
          </NavbarLinkScroll>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
