import React from "react";
import { SearchIcon } from "../assets/SearchIcon";

export const FilterCreator = () => {
  return (
    <div className="flex space-y-3 justify-between">
      <div className="space-y-5">
        <div className="relative border border-orange-300  rounded-full w-56 h-9 text-center font-semibold  flex space-x-7 text-sm">
          <button className="border border-orange-300 bg-orange-200 rounded-full w-20 m-1 ">
            Creator
          </button>
          <button>Mason Xavier</button>
        </div>
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              {" "}
              <SearchIcon />
            </div>

            <input
              placeholder="Search creators"
              className=" p-1 block border border-gray-500 rounded-lg text-center "
            />
          </div>
        </div>
        <div className="flex space-x-7 text-gray-500">
          <button> All</button>
          <button>Invited</button>
          <button>Pending Approval</button>
          <button> Approved</button>
        </div>
      </div>
      <div className="">
        <div className="mt-12">
          <button className="border border-gray-400 text-xs  rounded-md  font-semibold w-20  h-7 m-1 ">
            Filter
          </button>
          <button className="border border-gray-400 text-xs  rounded-md w-20 font-semibold  h-7 m-1 ">
            Sort
          </button>
        </div>
        <div>
          <button className="border border-black  text-sm rounded-md w-40  font-bold h-8 m-1 ">
            Close Applications
          </button>
        </div>
      </div>
    </div>
  );
};
