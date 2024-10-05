"use client";

import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Servers from "./Servers";
import ChannelRoom from "./ChannelRoom";
import { useServerStore, useUIStore } from "@/data/store";
import { Channel } from "@/data/types";

const MainContent = ({ channels }: { channels: Channel[] }) => {
  const showSidebar = useUIStore((state) => state.showSidebar);
  const setChannels = useServerStore((state) => state.setChannels);

  useEffect(() => {
    setChannels(channels);
  }, [channels]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-none">
        <Servers />
      </div>
      <div className="flex-auto">
        <div className="flex h-full">
          <div className="flex-none">{showSidebar && <Sidebar />}</div>
          <div className="flex flex-col flex-auto">
            <div className="flex-none">
              <Topbar />
            </div>
            <div className="flex-auto overflow-hidden">
              <ChannelRoom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
