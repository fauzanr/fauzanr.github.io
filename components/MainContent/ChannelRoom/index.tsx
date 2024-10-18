import React from "react";
import ChatRoom from "./ChatRoom";
import Chatbox from "./Chatbox";
import MemberTab from "./MemberTab";
import { useChannelStore, useUIStore } from "@/data/store";
import useIsMobile from "@/lib/hooks";
import { cn } from "@/lib/utils";

const ChannelRoom = () => {
  const showMemberTab = useUIStore((state) => state.showMemberTab);
  const channel = useChannelStore((state) => state.channel);
  const toggleUI = useUIStore((state) => state.toggleUI);

  useIsMobile({
    width: 550,
    onChange: (isMobile) => {
      toggleUI("showMemberTab", !isMobile);
    },
  });

  return (
    <div className="flex h-full bg-bg3">
      {channel?.id && (
        <>
          <div className="flex-auto flex flex-col">
            <div className="flex-auto overflow-hidden">
              <ChatRoom />
            </div>
            <div className="flex-none">
              <Chatbox />
            </div>
          </div>
          <div className="flex-none">{showMemberTab && <MemberTab />}</div>
        </>
      )}
    </div>
  );
};

export default ChannelRoom;
