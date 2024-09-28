import { FCC } from "@/data/types";
import React from "react";

const Chat: FCC = ({ children }) => {
  return (
    <div className="flex w-full gap-3 px-3 py-1 mb-2 hover:backdrop-brightness-90">
      <div className="flex-none rounded-full w-9 h-9 bg-indigo-500"></div>
      <div className="flex flex-col flex-auto">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-emerald-400">fauzanr</span>
          <span className="text-xs text-wh2">08/17/2024 11:22 PM</span>
        </div>
        <div className="text-wh1 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Chat;
