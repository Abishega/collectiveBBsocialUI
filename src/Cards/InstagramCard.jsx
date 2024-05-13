import React from "react";
import instaicon from "../assets/instaicon.png";
import { YoutubeIcon } from "../assets/YoutubeIcon";
import { InstagramIcon } from "../assets/InstagramIcon";

export const InstagramCard = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <div className=" w-11/12 h-52 m-2 rounded-2xl justify-center flex  border">
          <div className="w-1/4 h-full   ">
            <div className="w-full h-full border border-r-gray border-l-0 border-t-0 border-b-0 flex items-center justify-center  flex-col ">
              <img src={instaicon} />
              <text>Instagram</text>
              <text className="text-gray-300">@instagram</text>
            </div>
          </div>
          <div className="w-full h-10 ">
            <div className="flex space-x-7 m-7">
              <div className="flex flex-col">
                <text className="text-gray-400">Total Followers</text>
                <text className=" font-bold text-lg">443.1k</text>
              </div>
              <div className="flex flex-col">
                <text className="text-gray-400">Total Followers</text>
                <text className=" font-bold text-lg">443.1k</text>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="w-60 h-full border border-r-gray-500 border-l-0 border-t-0 border-b-0 flex flex-col  text-xs ml-7  ">
                  <div className="flex space-x-2  mt-2   ">
                    <div>
                      <YoutubeIcon />
                    </div>
                    <div>@youtube</div>
                  </div>
                  <div className="flex  space-x-5 mt-4">
                    <div className="flex flex-col">
                      <text className="text-gray-400">Followers</text>
                      <text className=" font-bold ">443.1k</text>
                    </div>
                    <div className="flex flex-col">
                      <text className="text-gray-400">Avg.Likes</text>
                      <text className=" font-bold ">443.1k</text>
                    </div>
                    <div className="flex flex-col">
                      <text className="text-gray-400">Avg.Likes</text>
                      <text className=" font-bold ">443.1k</text>
                    </div>
                  </div>
                </div>
                <div className="w-60 h-full border border-r-gray-500 border-l-0 border-t-0 border-b-0 flex flex-col  text-xs ml-7  ">
                  <div className="flex space-x-2  mt-2   ">
                    <div>
                      <YoutubeIcon />
                    </div>
                    <div>@youtube</div>
                  </div>
                  <div className="flex  space-x-5 mt-4">
                    <div className="flex flex-col">
                      <text className="text-gray-400">Followers</text>
                      <text className=" font-bold ">443.1k</text>
                    </div>
                    <div className="flex flex-col">
                      <text className="text-gray-400">Avg.Likes</text>
                      <text className=" font-bold ">443.1k</text>
                    </div>
                    <div className="flex flex-col">
                      <text className="text-gray-400">Avg.Likes</text>
                      <text className=" font-bold ">443.1k</text>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="border rounded-md bg-white w-15 h-15 flex space-x-2 mt-10 ml-5 justify-center p-2   ">
                    <text className=""> ₹</text>
                  </div>

                  <div className="border rounded-md bg-white w-32 h-30 flex space-x-2 mt-10 ml-5 justify-center p-2   ">
                    <text className="">View Report</text>
                  </div>
                  <div className="border rounded-md bg-black w-42 h-30 flex space-x-2 mt-10 ml-5 justify-center p-2  text-white ">
                    <text className="">Add to campaign</text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
