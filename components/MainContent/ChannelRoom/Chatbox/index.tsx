"use client";

import Clickable from "@/components/Clickable";
import { useChatStore } from "@/data/store";
import React from "react";

const ChatInput = () => {
  const sendMessage = useChatStore((state) => state.sendMessage);
  return (
    <input
      placeholder="Message #channel"
      className="outline-none resize-none min-w-0 w-full no-scrollbar text-wh1 bg-gray-700"
      onKeyUp={(e) => {
        const message = e.currentTarget.value?.trim();
        if (e.key === "Enter" && message) {
          sendMessage(message);
          e.currentTarget.value = "";
        }
      }}
    />
  );
};

const Chatbox = () => {
  return (
    <div className="flex gap-2 bg-bg3 pb-4 px-3">
      <div className="bg-gray-700 flex flex-auto rounded-lg">
        <Clickable noBG className="flex-none flex justify-center py-2 px-4">
          <i className="ri-add-circle-fill text-xl"></i>
        </Clickable>
        <ChatInput />
        <div className="flex gap-3 p-2">
          <Clickable noBG className="flex-none">
            <i className="ri-gift-2-fill text-xl"></i>
          </Clickable>
          <Clickable noBG className="flex-none">
            <i className="ri-file-gif-fill text-xl"></i>
          </Clickable>
          <Clickable noBG className="flex-none">
            <i className="ri-emoji-sticker-fill text-xl"></i>
          </Clickable>
          <Clickable noBG className="flex-none">
            <i className="ri-emotion-fill text-xl"></i>
          </Clickable>
        </div>
      </div>
      <div className="bg-gray-700 flex flex-none rounded-lg">
        <Clickable
          noBG
          className="h-full w-10 flex items-center justify-center"
        >
          <i className="ri-shapes-fill text-xl"></i>
        </Clickable>
      </div>
    </div>
  );
};

export default Chatbox;
