import Clickable from "@/components/Clickable";
import { repeat } from "@/lib/utils";
import React from "react";

const Chatbox = () => {
  return (
    <div className="bg-bg3 pb-4 px-3">
      <div className="bg-gray-600 p-2 flex rounded-lg">
        <Clickable noBG className="flex-none flex justify-center w-10">
          <i className="ri-hashtag text-xl"></i>
        </Clickable>
        <input
          placeholder="Message #channel"
          className="outline-none resize-none min-w-0 w-full -my-2 py-2 no-scrollbar bg-gray-600"
        />
        <div className="flex gap-3">
          {repeat(4, () => (
            <Clickable noBG className="flex-none">
              <i className="ri-hashtag text-xl"></i>
            </Clickable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
