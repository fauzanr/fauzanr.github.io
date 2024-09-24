import Clickable from "@/components/Clickable";
import React from "react";

const UserControl = () => {
  return (
    <div className="flex items-center p-2">
      <Clickable className="group flex flex-auto items-center p-1">
        <div className="relative">
          <div className="rounded-full w-8 h-8 bg-white"></div>
          <div className="absolute rounded-full h-3 w-3 bg-green border-bg1 border-2 right-[-2px] bottom-[-2px]"></div>
        </div>
        <div className="flex flex-col ml-2">
          <span className="leading-none text-xs text-white font-semibold">
            fauzanr
          </span>
          <span className="group-hover:hidden leading-none text-xs text-wh2">
            online
          </span>
          <span className="hidden group-hover:block leading-none text-xs text-wh2">
            .fauzanr
          </span>
        </div>
      </Clickable>
      <div className="flex flex-none text-wh2">
        <Clickable className="h-8 w-8 flex items-center justify-center">
          <i className="ri-hashtag text-xl"></i>
        </Clickable>
        <Clickable className="h-8 w-8 flex items-center justify-center">
          <i className="ri-hashtag text-xl"></i>
        </Clickable>
        <Clickable className="h-8 w-8 flex items-center justify-center">
          <i className="ri-hashtag text-xl"></i>
        </Clickable>
      </div>
    </div>
  );
};

export default UserControl;
