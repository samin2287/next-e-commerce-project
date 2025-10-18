import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";
import SocialLinks from "../SocialLink";
import FooterTittle from "../FooterTittle";
import { navItems } from "@/constants";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white py-5 lg:py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          {" "}
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <p className="py-5">
            We are a team of designers and developers that create high quality
            WordPress
          </p>
          <SocialLinks />
        </div>
        <div>
          <FooterTittle className="mb-5">My Account</FooterTittle>
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className=" group flex  py-1 items-center text-sm text-gray-700 hover:text-green-400  font-semibold transition-all duration-100">
              <span className="w-1.5 h-1.5 mr-2 bg-gray-500 rounded-full   inline-flex group-hover:bg-green-500" />
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <FooterTittle className="mb-5">Information</FooterTittle>
          {navItems.slice(4, 6).map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className=" group flex  py-1 items-center text-sm text-gray-700 hover:text-green-400  font-semibold transition-all duration-100">
              <span className="w-1.5 h-1.5 mr-2 bg-gray-500 rounded-full   inline-flex group-hover:bg-green-500" />
              {item.title}
            </Link>
          ))}
          {[
            { title: "Inquiry", href: "/" },
            { title: "FAQs", href: "/" },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex py-1 items-center text-sm text-gray-700 hover:text-green-500 font-semibold transition-all duration-100">
              <span className="w-1.5 h-1.5 mr-2 bg-gray-500 rounded-full inline-flex group-hover:bg-green-500" />
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <FooterTittle className="mb-5">Talk to Us</FooterTittle>
          <p className="text-gray-500 font-semibold text-sm">
            Got Questions? Call us
          </p>
          <FooterTittle className="mb-5">+88 123 456 7890</FooterTittle>
          <div className="mt-3">
            <p className="text-base flex items-center gap-x-3 text-gray-600">
              <MdEmail />
              shofy@suppert.com
            </p>
            <p className="text-base flex items-center gap-x-3 text-gray-600">
              <MdLocationPin />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </Container>
      <p className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
