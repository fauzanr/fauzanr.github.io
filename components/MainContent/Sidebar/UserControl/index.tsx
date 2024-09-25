import Clickable from "@/components/Clickable";
import React from "react";

const UserControl = () => {
  return (
    <div className="flex items-center p-2">
      <Clickable className="group flex flex-auto items-center p-1">
        <div className="relative">
          <div className="rounded-full bg-slate-100 h-9 w-9"></div>
          <span className="absolute rounded-full h-3 w-3 bg-green -right-1 -bottom-1 border-4 border-bg2 box-content"></span>
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
