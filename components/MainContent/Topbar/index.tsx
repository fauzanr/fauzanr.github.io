import Clickable from "@/components/Clickable";
import { useChannelStore, useUIStore } from "@/data/store";
import React from "react";

const SearchInput = () => (
  <div className="relative">
    <input
      className="outline-none rounded-sm bg-gray-900 text-wh2 text-sm pl-2 pr-7 w-40 h-6"
      placeholder="Search"
    />
    <span className="absolute top-0 bottom-0 right-2 pointer-events-none">
      <i className="ri-search-line text-wh2"></i>
    </span>
  </div>
);

const Topbar = () => {
  const channel = useChannelStore((state) => state.channel);
  const { showSidebar, toggleUI } = useUIStore((state) => state);

  return (
    <div className="bg-bg3 h-12 border-bg2 border-b-2 flex items-center px-3">
      <div className="flex-none">
        <Clickable noBG onClick={() => toggleUI("showSidebar")}>
          {showSidebar ? (
            <i className="ri-menu-fold-3-fill text-wh2 text-2xl mr-2"></i>
          ) : (
            <i className="ri-menu-unfold-3-fill text-wh2 text-2xl mr-2"></i>
          )}
        </Clickable>
      </div>
      <div className="flex flex-auto items-center">
        {channel?.id && (
          <>
            <div className="flex-none">
              <i className="ri-hashtag text-wh2 text-2xl mr-2"></i>
            </div>
            <div className="flex-auto text-white text-nowrap text-ellipsis overflow-hidden w-0">
              {channel?.name}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-none items-center gap-3">
        <Clickable noBG>
          <i className="ri-chat-thread-fill text-2xl"></i>
        </Clickable>
        <Clickable noBG>
          <i className="ri-notification-3-fill text-2xl"></i>
        </Clickable>
        <Clickable noBG>
          <i className="ri-pushpin-fill text-2xl"></i>
        </Clickable>
        <Clickable noBG onClick={() => toggleUI("showMemberTab")}>
          <i className="ri-group-fill text-2xl"></i>
        </Clickable>

        <SearchInput />

        <Clickable noBG>
          <i className="ri-inbox-fill text-2xl"></i>
        </Clickable>
        <Clickable noBG>
          <i className="ri-question-fill text-2xl"></i>
        </Clickable>
      </div>
    </div>
  );
};

export default Topbar;
