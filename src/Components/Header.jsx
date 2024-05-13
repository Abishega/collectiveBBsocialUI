import React from "react";
import BBLogo from "../assets/BBLogo";
import { Search } from "./Search";
import { NotificationIcon } from "../assets/NotificationIcon";
import manimg from "../assets/man1.png";
import { Coin } from "../assets/Coin";
import { Ellipse } from "../assets/Ellipse";

export const Header = () => {
  return (
    <header className="flex space-x-10 justify-between ">
      <div className="flex space-x-10">
        <BBLogo />
        <Search />
      </div>
      <div className="flex  space-x-4 ">
        <div className="relative flex ">
          <div className="absolute p-2">
            {" "}
            <Coin />
          </div>

          <div className="border border-black rounded-full  h-10 w-40 text-center py-2 pl-3 items-center font-bold ">
            $25,365 coins
          </div>
        </div>
        <div className="mt-3">
          <div className="ml-4"> <Ellipse/></div>
          <NotificationIcon /> 
        </div>
        <div className="relative flex ">
          <img src={manimg} className="rounded-full absolute ml-1 mt-1  " />
          <div className="relative border border-gray-500  rounded-full w-48 h-11 text-center font-bold p-2">
            Mason Xavier
          </div>
        </div>
      </div>
    </header>
  );
};
