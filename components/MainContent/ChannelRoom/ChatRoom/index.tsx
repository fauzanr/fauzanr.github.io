"use client";

import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import { cn } from "@/lib/utils";

const Welcome = () => (
  <div className="flex flex-col gap-2 px-3 my-10">
    <div className="rounded-full h-16 w-16 bg-gray-700 flex items-center justify-center">
      <i className="ri-hashtag text-wh1 text-4xl"></i>
    </div>
    <div className="text-wh1 text-3xl font-bold">Welcome to #general!</div>
    <div className="text-wh2">This is the start of the #general channel.</div>
  </div>
);

const ChatRoom = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 100000 });
    setShowContent(true);
  }, []);

  return (
    <div className="bg-bg3 h-full">
      <div
        ref={scrollRef}
        className={cn("h-full flex flex-col overflow-y-auto", {
          invisible: !showContent,
        })}
      >
        <span className="mt-auto"></span>
        <Welcome />
        <hr className="border-gray-700 mx-2 mb-5" />
        <Chat>hola</Chat>
        <Chat>hola</Chat>
        <Chat>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          illo nesciunt quod itaque quia commodi, in ab natus quos totam
          repudiandae perferendis autem. Nesciunt quae ipsum, ea exercitationem
          beatae assumenda!
        </Chat>
        <Chat>hola</Chat>
        <Chat>hola</Chat>
        <Chat>hola</Chat>
        <Chat>hola</Chat>
        <Chat>hola</Chat>
        <Chat>hola</Chat>
      </div>
    </div>
  );
};

export default ChatRoom;
