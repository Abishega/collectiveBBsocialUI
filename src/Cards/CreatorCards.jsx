import React from "react";
import manimg from "../assets/man1.png";
import { InstagramIcon } from "../assets/InstagramIcon";
import { FacebookIcon } from "../assets/facebookIcon";

export const CreatorCards = ({ data }) => {
  console.log("Infooooo>>>", data);
  return (
    <div>
      <div>
        {data.map((eachCreator) => {
          const {
            approval_status,
            engagement,
            cost,
            name,
            reach,
            views,
            followers,
            creatorname,
            mode_of_payment,
            last_bid,
          } = eachCreator;

          return (
            <div className="border border-gray-300 w-full h-36 rounded-2xl flex items-center p-5  space-x-5 my-3">
              <div className="w-1/5  ">
                <div className=" flex border border-gray-200 w-35 h-25  rounded-lg flex-col justify-between ">
                  <div className=" flex space-x-2 m-2">
                    <img src={manimg} className="rounded-full " />
                    <div>
                      <div className="text-xs font-semibold ">{name} </div>
                      <div className="text-gray-400 text-xs"> @vivan</div>
                    </div>
                  </div>
                  <div className="flex m-2  ">
                    <InstagramIcon />
                    <FacebookIcon />
                  </div>
                </div>
              </div>
              <div className="w-1/5 ">
                <div className="flex flex-col w-35 h-25 justify-between mb-2 ">
                  <text className="text-gray-400 text-xxs ">Deliverables</text>
                  <div className="text-sm">
                    Instagram Reel
                    <span className="text-gray-300 ">x1</span>
                  </div>
                  <div className="text-sm">Youtube Shorts</div>
                  <div className="text-xxs underline underline-offset-1 mt-4 font-bold cursor-pointer">
                    View Bidding History{" "}
                  </div>
                </div>
              </div>
              <div className="w-3/5 space-y-12">
                <div className=" text-xxs flex  space-x-10 float-start">
                  <div>
                    <text className="text-gray-400">Followers</text>
                    <div>{followers}</div>
                  </div>
                  <div>
                    <text className="text-gray-400">Reach</text>
                    <div>{reach}</div>
                  </div>
                  <div>
                    <text className="text-gray-400">Views</text>
                    <div>{views}</div>
                  </div>
                  <div>
                    <text className="text-gray-400">Engagement</text>
                    <div>{engagement}</div>
                  </div>
                  <div>
                    <text className="text-gray-400">Last Bid</text>
                    <div>{last_bid}</div>
                  </div>
                </div>
                <div className="flex space-x-2 float-end">
                  <div className="text-xxs text-gray-400">Mode of Payment:</div>

                  <div className="text-xxs first-line:">{mode_of_payment}</div>
                  <button className="rounded-lg w-30 h-5 bg-red-400  text-xxs px-2    ">
                    {approval_status}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
