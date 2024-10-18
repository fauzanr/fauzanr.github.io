"use client";

import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ChannelRoom from "./ChannelRoom";
import { useServerStore } from "@/data/store";
import { Channel } from "@/data/types";

const MainContent = ({ channels }: { channels: Channel[] }) => {
  const setChannels = useServerStore((state) => state.setChannels);

  useEffect(() => {
    setChannels(channels);
  }, [channels]);

  return (
    <div className="flex h-screen overflow-hidden bg-bg3">
      <Sidebar />
      <div className="flex-auto" style={{ transition: "flex-grow 0.5s ease" }}>
        <div className="flex h-full">
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
