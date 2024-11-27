"use client";
import Link from "next/link";
import React from "react";
import Search from "../ui/Search";

const NavBar = () => {
  return (
    <>
      <div className="bg-gray-200 py-3 px-10 flex   items-center justify-between w-full ">
        <div className="logo flex justify-between ">
          <Link href={"/"} className="flex gap-2">
            <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
            <img
              src="/next.svg"
              className=" text-white "
              width={100}
              height={100}
            />
          </Link>
          <nav className=" hidden sm:flex  gap-3 w-[50%]">
            <Link
              href={"/"}
              className="text-[14px] font-semibold hover:text-blue-700 transition-all"
            >
              Showcase
            </Link>
            <Link
              href={"/docs"}
              className="text-[14px] font-semibold hover:text-blue-700 transition-all"
            >
              Docs
            </Link>
            <Link
              href={"/blogs"}
              className="text-[14px] font-semibold hover:text-blue-700 transition-all"
            >
              Blogs
            </Link>
            <Link
              href={"/templetes"}
              className="text-[14px] font-semibold hover:text-blue-700 transition-all"
            >
              Templetes
            </Link>
          </nav>
        </div>

        <div className="flex gap-3 items-center ">
          <div className="flex justify-between w-[220px] h-8 bg-white rounded-md outline outline-1 outline-gray-400 ">
            <input
              type="text"
              className="  w-[200px] rounded-md px-2  text-[12px] outline-none"
              placeholder="Search documentation here..."
            />

            <button
              className="mr-2 block "
              onClick={() => {
                console.log("this is a button");
              }}
            >
              <Search />
            </button>
          </div>
          <button className=" hover:border-gray-500 border hover:bg-gray-200 border-gray-400 px-3 py-1 rounded-md text-[13px]">
            feedback
          </button>
          <button className="text-white border border-gray-900 hover:bg-gray-800 bg-gray-900 px-3 py-1 rounded-md text-[13px]">
            Learn
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
