"use client";

import { FCC } from "@/data/types";
import React, { ReactNode, useState } from "react";

const SidebarItem: FCC<{
  Icon?: ReactNode;
  showSettings?: boolean;
  showInvite?: boolean;
}> = ({
  Icon = <i className="ri-hashtag"></i>,
  showInvite,
  showSettings,
  children,
}) => {
  return (
    <div className="group hover:backdrop-brightness-125 rounded-md cursor-pointer text-wh2 hover:text-wh1 ml-2 mr-1 my-0.5 px-2 py-1">
      <div className="flex items-center gap-1">
        <div className="flex-none text-wh2">{Icon}</div>
        <div className="flex-auto">{children}</div>
        <div className="flex-none hidden group-hover:block">
          {showInvite && (
            <i className="ri-user-add-fill text-wh2 hover:text-wh1"></i>
          )}
          {showSettings && (
            <i className="ri-settings-5-fill text-wh2 hover:text-wh1"></i>
          )}
        </div>
      </div>
    </div>
  );
};

const SidebarGroup: FCC<{ title: string }> = ({ title, children }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        className="text-wh2 hover:text-wh1 group cursor-pointer select-none uppercase text-xs mt-5"
        onClick={() => setShow(!show)}
      >
        <div className="flex items-center gap-1 ml-1 mr-2 pb-1">
          <span className="flex-none">
            {show ? (
              <i className="ri-arrow-down-s-line"></i>
            ) : (
              <i className="ri-arrow-right-s-line"></i>
            )}
          </span>
          <div className="flex-auto">{title}</div>
          <span className="flex-none font-bold hidden group-hover:block">
            <i className="ri-add-line"></i>
          </span>
        </div>
      </div>
      {show ? children : null}
    </>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-bg1">
      <div className="h-full rounded-tl-lg bg-bg2">
        <div className="relative h-32 rounded-tl-lg border-none bg-slate-500">
          <div className="absolute left-0 right-0 p-2">aloga</div>
        </div>
        <div className="my-3">
          <SidebarItem Icon={<i className="ri-quote-text"></i>}>
            oioi
          </SidebarItem>
        </div>
        <hr className="border-gray-700 mx-2" />
        <SidebarGroup title="aloha">
          <SidebarItem showInvite showSettings>
            oioi
          </SidebarItem>
          <SidebarItem showInvite showSettings>
            oioi
          </SidebarItem>
          <SidebarItem showInvite showSettings>
            oioi
          </SidebarItem>
        </SidebarGroup>
        <SidebarGroup title="aloha 2">
          <SidebarItem showInvite showSettings>
            oioi
          </SidebarItem>
          <SidebarItem showInvite showSettings>
            oioi
          </SidebarItem>
          <SidebarItem showInvite showSettings>
            oioi
          </SidebarItem>
        </SidebarGroup>
      </div>
    </div>
  );
};

export default Sidebar;
