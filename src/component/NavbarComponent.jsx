import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import NavbarLinkScroll from "../elements/NavbarLinkScroll";

export default function NavbarComponent() {
  return (
    <Navbar
      rounded
      className="bg-slate-900 dark:bg-slate-900 sticky top-0 z-50 mb-5 lg:mb-0 text-white"
    >
      <NavbarBrand href="https://flowbite-react.com">
        <span className="flex text-2xl p-2.5 font-semibold text-white font-mono">
          makmalth
        </span>
      </NavbarBrand>
      <div className="flex md:ml-auto">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLinkScroll to="about">About</NavbarLinkScroll>
        <NavbarLinkScroll to="portfolio">Portfolio</NavbarLinkScroll>
        <NavbarLinkScroll to="contact">Contact</NavbarLinkScroll>
      </NavbarCollapse>
    </Navbar>
  );
}
