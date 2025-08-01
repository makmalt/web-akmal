import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import NavbarLinkScroll from "../elements/NavbarLinkScroll";

export default function NavbarComponent() {
  return (
    <Navbar rounded className="sticky top-0 z-50 mb-5 lg:mb-0">
      <NavbarBrand href="https://flowbite-react.com">
        <span className="flex text-2xl p-2.5 font-semibold dark:text-white font-mono">
          makmalth
        </span>
      </NavbarBrand>
      <div className="flex md:ml-auto">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLinkScroll to="home">Home</NavbarLinkScroll>
        <NavbarLinkScroll to="skills">Skills</NavbarLinkScroll>
        <NavbarLinkScroll to="contact">Contact</NavbarLinkScroll>
      </NavbarCollapse>
    </Navbar>
  );
}
