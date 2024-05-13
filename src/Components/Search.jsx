import React from "react";
import { SearchIcon } from "../assets/SearchIcon";

export const Search = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none mb-3  ">
        {" "}
        <SearchIcon />
      </div>

      <input
        placeholder="Search Keyword..."
        className=" p-2 block border border-gray-500 rounded-full text-center "
      />
    </div>
  );
};
