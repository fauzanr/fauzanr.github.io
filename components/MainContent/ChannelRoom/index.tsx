import React from "react";
import ChatRoom from "./ChatRoom";
import Chatbox from "./Chatbox";
import MemberTab from "./MemberTab";

const ChannelRoom = () => {
  return (
    <div className="flex h-full">
      <div className="flex-auto flex flex-col">
        <div className="flex-auto overflow-hidden">
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
  );
};

export default ChannelRoom;
