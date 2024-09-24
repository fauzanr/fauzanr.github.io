import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "./Topbar";
import ChatRoom from "./ChatRoom";

const MainContent = () => {
  return (
    <div className="flex h-full">
      <div className="w-60">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-auto">
        <Topbar />
        <ChatRoom />
      </div>
    </div>
  );
};

export default MainContent;
