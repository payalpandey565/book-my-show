import React from "react";


import {BiChevronRight,BiSearch,BiChevronDown,BiMenu} from "react-icons/bi"


const NavSm =() => {
  return(
    <>
    <div className="text-white flex item-center justify-between">
    <div>
    <h3 className="text-2xl font-bold" >It All Starts Here!!</h3>
    <span className="text-gray-400 text-xs flex items-center">
    Hyderabad <BiChevronRight/>
    </span>
    </div>
    <div className="w-8 h-8">
    <BiSearch className="w-full h-full"/>
    </div>
    </div>
    </>
  )
};
const NavMd =() => {
  return(
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
    <div className="w-8 h-8">
    <BiSearch className="w-full h-full"/>
    </div>
    <input type="search" className="w-full focus:outline-none" placeholder="Search for Movies,Events,Plays,Shows and Activities"/>
    </div>


  )


};
const NavLg =() => {
  return(
    <>
    <div className="container mx-auto px-4 flex items-center justify-between">

    <div className="flex items-center w-1/2">
    <div className="w-20 h-16 ">
    <img
    src="https://play-lh.googleusercontent.com/I8M0mhb7fcRfTi22XzLfeFeIcj3tiKMCQNH4YFPjqkQA8mEakWuaQrDKELo0ISuTZg"
    alt="logo"
    className="py-2 h-16 w-20 rounded-xl px-2 "/>
    </div>
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
    <BiSearch/>
    <input type="search" className="w-full focus:outline-none" placeholder="Search for Movies,Events,Plays,Shows and Activities"/>
    </div>
    </div>

    <div className="flex gap-3">
    <span className="text-gray-400 text-s flex items-center hover:text-white cursor-pointer">
    Hyderabad <BiChevronDown/>
    </span>
    <button className="bg-navCol-80 text-white text-s  py-2 px-4 rounded inline-flex items-center">
    Sign in

    </button>
    <div className="w-8 h-8 text-white">
    <BiMenu className="w-full h-full" />
    </div>
    </div>
    </div>
    </>
  )

};

const Navbar = () => {
  return(
    <>
    <nav className="bg-navCol-90  px-4 py-2"  >
    <div className="md:hidden" >{
      /*mobile screen*/
      <NavSm />
    }</div>
    <div className="hidden lg:hidden  md:flex" >{
      /*tablet screen*/
      <NavMd/>


    }</div>
    <div className="hidden lg:flex" >{
      /*desktop screen*/
      <NavLg/>
    }</div>
    </nav>
    </>
  )
};

export default Navbar;
