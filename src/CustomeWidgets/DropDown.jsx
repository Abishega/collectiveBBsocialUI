import React from "react";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

export default function DropDown() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Any Category");

  return (
    <div className=" relative border rounded-md bg-white w-40 h-10  font-semibold text-center  p-2 ">
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className="relative"
      >
        {selected}
        <span className="absolute m-1">
          {isActive ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </span>
      </div>
      <div
        className="absolute w-32 mt-3 ml-2 [box-shadow:0_0_10px_5px_rgba(3,_3,_3,_0.07)]  "
        style={{ display: isActive ? "block" : "none" }}
      >
        <div
          onClick={(e) => {
            setIsSelected(e.target.textContent);
            setIsActive(!isActive);
          }}
          className="p-[10px] text-gray-500 cursor-pointer"
        >
          One
        </div>
        <div
          className="p-[10px] text-gray-500 cursor-pointer"
          onClick={(e) => {
            setIsSelected(e.target.textContent);
            setIsActive(!isActive);
          }}
        >
          Two
        </div>
        <div
          className=" p-[10px]  text-gray-500 cursor-pointer"
          onClick={(e) => {
            setIsSelected(e.target.textContent);
            setIsActive(!isActive);
          }}
        >
          Three
        </div>
      </div>
    </div>
  );
}
