import Clickable from "@/components/Clickable";
import { repeat } from "@/lib/utils";
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-bg3 h-16 border-bg2 border-b-2 flex items-center px-3">
      <div className="flex flex-auto items-center overflow-x-hidden w-0">
        <i className="ri-hashtag text-wh2 text-2xl mr-2"></i>
        <span className="text-white">general</span>
      </div>
      <div className="flex flex-none items-center gap-3">
        {repeat(4, () => (
          <Clickable noBG>
            <i className="ri-hashtag text-2xl"></i>
          </Clickable>
        ))}

        <input
          className="outline-none rounded-sm bg-gray-900 text-wh2 text-sm px-2 w-40 h-6"
          placeholder="Search"
        />

        {repeat(2, () => (
          <Clickable noBG>
            <i className="ri-hashtag text-2xl"></i>
          </Clickable>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
