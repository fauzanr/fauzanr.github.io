"use client";

import { mockServers, myServer } from "@/data/mock";
import { useServerStore } from "@/data/store";
import { FCC, Server } from "@/data/types";
import { cn, getInitials } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const ServerItem: FCC<{ server?: Server } & HTMLAttributes<HTMLDivElement>> = (
  props
) => (
  <div
    {...props}
    className={cn(
      "bg-slate-400 bg-center bg-cover flex-none flex items-center justify-center hover:rounded-2xl w-12 h-12 rounded-full cursor-pointer",
      props.className
    )}
  >
    <span className="text-white text-lg font-bold">
      {getInitials(props.server?.name)}
    </span>
  </div>
);

const Servers = () => {
  const setCurrentServer = useServerStore((state) => state.setCurrentServer);
  return (
    <div className="h-full bg-bg1 flex flex-col">
      <div className="flex flex-col gap-2 p-3 overflow-y-auto no-scrollbar">
        <ServerItem
          className="bg-profile-pic"
          onClick={() => setCurrentServer(myServer)}
        />
        <hr className="border-gray-700 mx-2" />
        {mockServers.map((server) => (
          <ServerItem
            key={server.id}
            server={server}
            style={{ background: server.color }}
            onClick={() => setCurrentServer(server)}
          />
        ))}
      </div>
    </div>
  );
};

export default Servers;
