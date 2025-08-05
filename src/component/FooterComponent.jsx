"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              name="makmalth"
              className="font-mono"
            />
          </div>
          <div className="sm:mt-4 sm:grid-cols-3 sm:gap-6 justify-items-end me-30">
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="makmalth™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.instagram.com/makmalt_"
              icon={BsInstagram}
            />
            <FooterIcon href="https://www.github.com/makmalt" icon={BsGithub} />
            <FooterIcon
              href="https://www.linkedin.com/in/mochammad-akmal-thoriq/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
