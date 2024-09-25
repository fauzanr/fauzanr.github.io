import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "./Topbar";
import ChatRoom from "./ChatRoom";
import Chatbox from "./Chatbox";
import MemberTab from "./MemberTab";
import Servers from "../Sidebar/Servers";

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
              <div className="flex flex-col flex-auto">
                <div className="flex-auto">
                  <ChatRoom />
                </div>
                <div className="flex-none">
                  <Chatbox />
                </div>
              </div>
              <div className="flex-none">
                <MemberTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
