"use client";
import React from "react";
import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import { navItems } from "@/constants";
const MobileNavigation = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggleMenu} className="md:hidden">
        <Link href="/signin" className="flex gap-2">
          <div className="text-3xl  ">
            <IoMenu />
          </div>
        </Link>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 md:hidden text-white/20"
        onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex  items-center justify-center p-4 bg-black/90 z-10 w-screen overflow-y-auto">
          <DialogPanel
            transition
            className=" absolute top-10 m-5 w-full max-w-md rounded-xl p-6 backdrop-blur-2xl duration-200 ease-out data-closed:transform-[scale(65%)] data-closed:opacity-0 bg-black /20 border-2 border-white-500">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-xl mb-5">
                  {" "}
                  Navigation Menu
                </h3>
                <button
                  onClick={close}
                  className="cursor-pointer p-[1] bg-gray-900 rounded-md hover:bg-gray-700 duration-200 border-[1px] border-white/20">
                  {" "}
                  <IoClose className=" rounded-2xl text-2xl text-gray-200 hover:text-green-500 transition-all duration-100" />
                </button>
              </div>
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-2 relative group py-2 px-4 text-sm text-white hover:text-green-400  font-semibold transition-all duration-100">
                    <span className="w-2.5 h-2.5  bg-gray-900 rounded-full border-2 border-gray-400 inline-flex group-hover:border-green-500" />
                    {item.title}
                    <span
                      className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 ml-4 group-hover:bg-green-500 duration-200
                    "></span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4"></div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
