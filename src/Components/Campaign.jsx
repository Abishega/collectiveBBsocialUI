import React from "react";
import Banner from "../assets/campaignBanner.jpg";
import { Vector } from "../assets/Vector";
import { Vector1 } from "../assets/Vector1";
import { Vector2 } from "../assets/Vector2";
import { Vector3 } from "../assets/Vector3";

export const Campaign = () => {
  return (
    <div className="border border-black p-7 rounded-2xl ">
      <img src={Banner} alt="Campaign Banner" />
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Summer Campaign</h2>
        <div className="flex items-center space-x-1">
          <Vector />
          <span className="text-xs font-bold"> Closed Campaign</span>
        </div>
        <p>
          Black mirror is a television series released by Netflix and it’s 6th
          season is here, the main objective of this campaign is to target
          millennial audiences who are into watching movies and TV series...
        </p>
        <section className="border border-gray-400 rounded-xl w-30">
          <div className="flex space-x-4 p-2">
            <div className="mt-2">
              <Vector1 />
            </div>
            <div className="flex flex-col">
              <span className="text-md font-bold">Application deadline</span>
              <span>Feb 27, 2024 11:59PM</span>
            </div>
          </div>
          <div className="flex space-x-4 p-2">
            <div className="mt-2">
              <Vector2 />
            </div>
            <div className="flex flex-col">
              <span className="text-md font-bold">
                Content submission deadline
              </span>
              <span>Feb 27, 2024 11:59PM</span>
            </div>
          </div>
          <div className="flex space-x-4 p-2">
            <div className="mt-2">
              <Vector3 />
            </div>
            <div className="flex flex-col">
              <span className="text-md font-bold">
                Content go-live deadline
              </span>
              <span>Feb 27, 2024 11:59PM</span>
            </div>
          </div>
        </section>
        <p>Accepting</p>
        <button className="bg-black text-white rounded-md p-3">
          View Report
        </button>
        <section className="border border-yellow-400 rounded-xl bg-orange-50 w-30">
          <div className="flex space-x-4 p-2">
            <div className="mt-2">
              <Vector1 />
            </div>
            <div className="flex flex-col">
              <span className="text-md font-bold">Total applications</span>
              <span>1 creator</span>
            </div>
          </div>
          <div className="flex space-x-4 p-2">
            <div className="mt-2">
              <Vector2 />
            </div>
            <div className="flex flex-col">
              <span className="text-md font-bold">Shortlisted</span>
              <span>0 creators</span>
            </div>
          </div>
          <div className="flex space-x-4 p-2">
            <div className="mt-2">
              <Vector3 />
            </div>
            <div className="flex flex-col">
              <span className="text-md font-bold">Budget Exhausted</span>
              <span>₹0</span>
            </div>
          </div>
        </section>

        <div>Niche and language</div>
      </div>
    </div>
  );
};
