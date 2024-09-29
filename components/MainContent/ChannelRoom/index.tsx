import React from "react";
import ChatRoom from "./ChatRoom";
import Chatbox from "./Chatbox";
import MemberTab from "./MemberTab";
import { useUIStore } from "@/data/store";

const ChannelRoom = () => {
  const showMemberTab = useUIStore((state) => state.showMemberTab);
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
      <div className="flex-none">{showMemberTab && <MemberTab />}</div>
    </div>
  );
};

export default ChannelRoom;
