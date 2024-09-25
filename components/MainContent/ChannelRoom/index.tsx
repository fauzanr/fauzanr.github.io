import React from "react";
import ChatRoom from "./ChatRoom";
import Chatbox from "./Chatbox";
import MemberTab from "./MemberTab";

const ChannelRoom = () => {
  return (
    <div className="flex">
      <div className="flex flex-auto">
        <div className="flex flex-col">
          <div className="flex-auto">
            <ChatRoom />
          </div>
          <div className="flex-none">
            <Chatbox />
          </div>
        </div>
      </div>
      <div className="flex-none">
        <MemberTab />
      </div>
    </div>
  );
};

export default ChannelRoom;
