import React from "react";
import Channels from "./Channels";
import UserControl from "./UserControl";
import Servers from "../Servers";
import { useUIStore } from "@/data/store";
import useIsMobile from "@/lib/hooks";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const showSidebar = useUIStore((state) => state.showSidebar);
  const toggleUI = useUIStore((state) => state.toggleUI);

  const isMobile = useIsMobile({
    width: 860,
    onChange: (isMobile) => {
      if (!isMobile) toggleUI("showSidebar", true);
    },
  });

  return (
    <div
      className={cn("flex-none transition", {
        "fixed z-10 inset-0": isMobile,
        "bg-black bg-opacity-85": isMobile && showSidebar,
        "pointer-events-none": isMobile && !showSidebar,
      })}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          toggleUI("showSidebar");
        }
      }}
    >
      <div
        className={cn("flex h-full w-max transition", {
          "-translate-x-full": !showSidebar,
        })}
      >
        <Servers />
        <div className="w-60 h-full bg-bg1 flex flex-col">
          <div className="flex-auto overflow-hidden">
            <Channels
              onSelectChannel={() =>
                isMobile ? toggleUI("showSidebar", false) : null
              }
            />
          </div>
          <div className="flex-none">
            <UserControl />
          </div>
        </div>
      </div>
      {isMobile && showSidebar && (
        <div className="absolute right-0 top-0 m-2 pointer-events-none">
          <i className="ri-close-large-fill text-white text-2xl"></i>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
