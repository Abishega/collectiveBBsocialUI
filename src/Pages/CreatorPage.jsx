import React, { useEffect, useState } from "react";

import { Campaign } from "../Components/Campaign";
import { Creator } from "../Components/Creator";
import creatorInfo from "../Data/creatorInfo";

export const CreatorPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(creatorInfo.data);
  }, []);
  return (
    <div className="p-10 flex flex-row space-x-2">
      <div className=" w-2/5">
        {" "}
        <Campaign />
      </div>
      <div className=" w-3/5 ">
        <Creator data={data} />
      </div>
    </div>
  );
};
