"use client";
import React from "react";
import * as Icons from "react-icons/fa6";
import Link from "next/link";

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Facebook",
    url: "https://facebook.com/yourprofile",
    icon: "FaFacebookF",
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://twitter.com/yourprofile",
    icon: "FaXTwitter",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://instagram.com/yourprofile",
    icon: "FaInstagram",
  },
  {
    id: 4,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "FaLinkedinIn",
  },
  {
    id: 5,
    name: "GitHub",
    url: "https://github.com/yourprofile",
    icon: "FaGithub",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ id, name, url, icon }) => {
        const Icon = (Icons as any)[icon];
        return (
          <Link
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="w-8 h-8 flex mt-5 items-center justify-center rounded-full ring-1 ring-gray-600 text-gray-600 hover:text-green-700 hover:ring-green-300 transition-all duration-300">
            <Icon className="text-xl" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
