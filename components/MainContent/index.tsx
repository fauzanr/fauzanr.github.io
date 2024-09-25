import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Servers from "./Servers";
import ChannelRoom from "./ChannelRoom";

const MainContent = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-none">
        <Servers />
      </div>
      <div className="flex-auto">
        <div className="flex h-full">
          <div className="flex-none">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-auto">
            <div className="flex-none">
              <Topbar />
            </div>
            <div className="flex flex-auto overflow-hidden">
              <ChannelRoom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
