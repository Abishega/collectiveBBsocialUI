import React from "react";
import { FilterCreator } from "./FilterCreator";
import { CreatorCards } from "../Cards/CreatorCards";

export const Creator = ({ data }) => {
  return (
    <div className="border border-black p-7 rounded-2xl  ">
      <FilterCreator />
      <CreatorCards data={data} />
    </div>
  );
};
