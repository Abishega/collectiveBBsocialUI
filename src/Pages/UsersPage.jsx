import React from "react";
import { AudienceFilter } from "../Components/AudienceFilter";
import { InstagramSection } from "../Components/InstagramSection";

export const UsersPage = () => {
  return (
    <div className="p-10 flex flex-col w-full ">
      <div className=" border border-black  rounded-2xl  h-full ">
        <AudienceFilter />
        <InstagramSection />
      </div>
    </div>
  );
};
