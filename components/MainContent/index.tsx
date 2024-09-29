"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Servers from "./Servers";
import ChannelRoom from "./ChannelRoom";
import { useUIStore } from "@/data/store";

const MainContent = () => {
  const showSidebar = useUIStore((state) => state.showSidebar);

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
