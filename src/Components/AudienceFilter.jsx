import React from "react";
import DropDown from "../CustomeWidgets/DropDown";
import { SearchIcon } from "../assets/SearchIcon";

export const AudienceFilter = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center h-[250px] w-[auto] border rounded-t-2xl bg-[#ffc700] bg-[repeating-linear-gradient(_-45deg,_/*_Changed_angle_from_45deg_to_-45deg_*/_transparent,_transparent_60px,_/*_Increased_space_between_gray_lines_to_60px_*/_#808080_61px,_/*_Changed_from_#000_to_#808080_(gray_color)_*/_#808080_62px_/*_Changed_from_#000_to_#808080_(gray_color)_*/_)]">
        <div className="border rounded-xl bg-white w-11/12 h-28  ">
          <div className="flex items-center justify-center mt-7 ml-5">
            <div className="w-60 h-full border border-r-gray-500 border-l-0 border-t-0 border-b-0 flex flex-col  text-md ml-7  space-y-2 ">
              <div className="flex space-x-2     ">
                <div className="text-gray-400">Audience Location</div>
              </div>
              <div className="font-semibold">All</div>
            </div>
            <div className="w-60 h-full border border-r-gray-500 border-l-0 border-t-0 border-b-0 flex flex-col  text-md ml-7 space-y-2  ">
              <div className="flex space-x-2     ">
                <div className="text-gray-400">Influencer Size</div>
              </div>
              <div className="font-semibold">Choose Size</div>
            </div>
            <div className="w-60 h-full border border-r-gray-500 border-l-0 border-t-0 border-b-0 flex flex-col  text-md ml-7  space-y-2 ">
              <div className="flex space-x-2     ">
                <div className="text-gray-400">Audience Age</div>
              </div>
              <div className="font-semibold">Any</div>
            </div>
            <div className="w-60 h-full border border-r-0 border-l-0 border-t-0 border-b-0 flex flex-col  text-md ml-7  space-y-2  ">
              <div className="flex space-x-2    ">
                <div className="text-gray-400">Audience Gender</div>
              </div>
              <div className="font-semibold">Any</div>
            </div>
            <div className="border rounded-xl bg-black w-48 h-14 flex space-x-2 justify-center p-2 mr-3 mt-1 text-white items-center ">
                    <text className="">Show 4M Results</text>
                  </div>
          </div>
        </div>
        <div className="flex mt-2 space-x-3">
          <div>
            {" "}
            <DropDown />
          </div>
          <div className="border rounded-md bg-white  h-15 flex space-x-2   ">
            <DropDown />
            <div className="p-2">
              <SearchIcon />{" "}
            </div>
            <input placeholder="Type Name..." />
          </div>
          <div className="border rounded-md bg-white w-32 h-15 flex space-x-2 items-center justify-center   ">
            <text className="font-semibold">More Filter</text>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
