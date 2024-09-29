import Clickable from "@/components/Clickable";
import React from "react";

const UserControl = () => {
  return (
    <div className="flex items-center p-2">
      <Clickable className="group flex flex-auto items-center p-1 overflow-hidden">
        <div className="relative">
          <div className="rounded-full bg-slate-100 h-8 w-8"></div>
          <span className="absolute rounded-full h-2 w-2 bg-green -right-1 -bottom-1 border-4 border-bg1 box-content"></span>
        </div>
        <div className="flex flex-col ml-2">
          <span className="leading-none text-sm text-white font-semibold text-nowrap">
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
          <i className="ri-mic-fill text-lg"></i>
        </Clickable>
        <Clickable className="h-8 w-8 flex items-center justify-center">
          <i className="ri-headphone-fill text-lg"></i>
        </Clickable>
        <Clickable className="h-8 w-8 flex items-center justify-center">
          <i className="ri-settings-5-fill text-lg"></i>
        </Clickable>
      </div>
    </div>
  );
};

export default UserControl;
