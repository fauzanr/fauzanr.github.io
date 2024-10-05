import React, { ReactNode, useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import { cn } from "@/lib/utils";
import { useChannelStore } from "@/data/store";

const Welcome = ({ channel }: { channel: ReactNode }) => (
  <div className="flex flex-col gap-2 px-3 my-10">
    <div className="rounded-full h-16 w-16 bg-gray-700 flex items-center justify-center">
      <i className="ri-hashtag text-wh1 text-4xl"></i>
    </div>
    <div className="text-wh1 text-3xl font-bold">Welcome to #{channel}!</div>
    <div className="text-wh2">This is the start of the #{channel} channel.</div>
  </div>
);

const ChatRoom = () => {
  const { id, name, chats } = useChannelStore((state) => state.channel) || {};
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current?.scrollHeight });
    setShowContent(true);
  }, [chats, id]);

  return (
    <div className="bg-bg3 h-full">
      <div
        ref={scrollRef}
        className={cn("h-full flex flex-col overflow-y-auto", {
          invisible: !showContent,
        })}
      >
        <span className="mt-auto"></span>
        <Welcome channel={name} />
        <hr className="border-gray-700 mx-2 mb-5" />
        {chats?.map((chat) => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
