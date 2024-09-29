"use client";

import Clickable from "@/components/Clickable";
import { useChannelStore, useServerStore } from "@/data/store";
import { FCC } from "@/data/types";
import { repeat } from "@/lib/utils";
import React, { ReactNode, useState } from "react";

const ChannelItem: FCC<{
  Icon?: ReactNode;
  showSettings?: boolean;
  showInvite?: boolean;
  onClick?: () => void;
}> = ({
  Icon = <i className="ri-hashtag"></i>,
  showInvite,
  showSettings,
  onClick,
  children,
}) => {
  return (
    <Clickable className="group mx-2 my-0.5 px-2 py-1" onClick={onClick}>
      <div className="flex items-center gap-1">
        <div className="flex-none text-wh2">{Icon}</div>
        <div className="flex-auto overflow-hidden text-nowrap text-ellipsis">
          {children}
        </div>
        <div className="flex-none hidden group-hover:block">
          {showInvite && (
            <i className="ri-user-add-fill text-wh2 hover:text-wh1"></i>
          )}
          {showSettings && (
            <i className="ri-settings-5-fill text-wh2 hover:text-wh1"></i>
          )}
        </div>
      </div>
    </Clickable>
  );
};

const ChannelGroup: FCC<{ title: string }> = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <div
        className="text-wh2 hover:text-wh1 group cursor-pointer select-none uppercase text-xs mt-5"
        onClick={() => setCollapse(!collapse)}
      >
        <div className="flex items-center gap-1 ml-1 mr-2 pb-1">
          <span className="flex-none">
            {!collapse ? (
              <i className="ri-arrow-down-s-line"></i>
            ) : (
              <i className="ri-arrow-right-s-line"></i>
            )}
          </span>
          <div className="flex-auto text-nowrap text-ellipsis overflow-hidden">
            {title}
          </div>
          <span className="flex-none font-bold hidden group-hover:block">
            <i className="ri-add-line"></i>
          </span>
        </div>
      </div>
      {!collapse ? children : null}
    </>
  );
};

const Channels = () => {
  const { channels, channelGroups } = useServerStore((state) => state);
  const setCurrentChannel = useChannelStore((state) => state.setCurrentChannel);

  return (
    <div className="h-full flex flex-col rounded-tl-lg bg-bg2">
      <div className="relative flex-none h-32 rounded-tl-lg border-none bg-slate-500">
        <div className="absolute left-0 right-0 p-2">Server Name</div>
      </div>
      <div className="my-3">
        <ChannelItem Icon={<i className="ri-quote-text"></i>}>oioi</ChannelItem>
      </div>
      <hr className="border-gray-700 mx-2" />
      <div className="overflow-y-auto">
        {channelGroups.map((cg) => (
          <ChannelGroup key={cg.id} title={cg.name}>
            {channels
              .filter((channel) => channel.channelGroup === cg.id)
              .map((channel) => (
                <ChannelItem
                  key={channel.id}
                  showInvite
                  showSettings
                  onClick={() => setCurrentChannel(channel)}
                >
                  {channel.name}
                </ChannelItem>
              ))}
          </ChannelGroup>
        ))}
      </div>
    </div>
  );
};

export default Channels;
