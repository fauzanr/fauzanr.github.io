import React from "react";
import Channels from "./Channels";
import UserControl from "./UserControl";

const Sidebar: React.FC = () => {
  return (
    <div className="w-60 h-full bg-bg1 flex flex-col">
      <div className="flex-auto overflow-hidden">
        <Channels />
      </div>
      <div className="flex-none">
        <UserControl />
      </div>
    </div>
  );
};

export default Sidebar;
