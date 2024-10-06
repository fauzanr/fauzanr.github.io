import React, { ReactNode, useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import { cn } from "@/lib/utils";
import { useChannelStore } from "@/data/store";

const SIMPLIFIED_CHAT_DELAY = 5 * 1000;

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
  const chatRef = useRef({ user: "", time: 0 });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current?.scrollHeight });
    setShowContent(true);
  }, [chats, id]);

  return (
    <div className="bg-bg3 h-full">
      <div
        ref={scrollRef}
        className={cn("h-full flex flex-col overflow-y-auto pb-2", {
          invisible: !showContent,
        })}
      >
        <span className="mt-auto"></span>
        <Welcome channel={name} />
        <hr className="border-gray-700 mx-2 mb-5" />
        {chats?.map((chat, idx) => {
          const time = new Date(chat.timestamp).getTime();
          const textOnly =
            idx !== 0 &&
            chatRef.current.user === chat.username &&
            time - chatRef.current.time < SIMPLIFIED_CHAT_DELAY;
          chatRef.current.time = time;
          chatRef.current.user = chat.username;

          return <Chat key={chat.id} chat={chat} textOnly={textOnly} />;
        })}
      </div>
    </div>
  );
};

export default ChatRoom;
