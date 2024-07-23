// TopFiltering.js

import React from "react";
import { MdGridView } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";
import { Tooltip } from "@mui/joy";

const TopFiltering = () => {
  return (
    <div className="flex items-center justify-center py-7 ml-10">
      <div className=" flex space-x-4 border-b border-gray-300 py-4">
        <div className="border-r px-3 ">
          <p>Price is in Rands and excludes taxt and handling fees</p>
        </div>
        <div>
          <TiThMenuOutline size={25} />
        </div>
        <div className="pr-5">
          <MdGridView size={25} />
        </div>

        <button className="text-blue-500 font-normal text-sm px-2 border-2 border-blue-500 ">
          Best match
        </button>
        <button className="text-gray-500 font-normal text-sm border-2 px-2  ">
          Best sellers
        </button>
        <button className="text-gray-500 font-normal text-sm border-2 px-2 ">
          Newest
        </button>
        <button className="text-gray-500 font-normal text-sm border-2 px-2 ">
          Customer rating
        </button>
        <button className="text-gray-500 font-normal text-sm border-2 px-2 ">
          Price
        </button>
      </div>
    </div>
  );
};

export default TopFiltering;
