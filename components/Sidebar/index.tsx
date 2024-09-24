import React from "react";
import Channels from "./Channels";
import UserControl from "./UserControl";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-bg1 flex flex-col">
      <Channels />
      <UserControl />
    </div>
  );
};

export default Sidebar;
