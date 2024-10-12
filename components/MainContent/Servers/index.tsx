import { mockServers, myServer } from "@/data/mock";
import { useServerStore, useUIStore } from "@/data/store";
import { FCC, Server } from "@/data/types";
import { cn, getInitials } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const ServerItem: FCC<
  { server?: Server; isActive?: boolean } & HTMLAttributes<HTMLDivElement>
> = ({ server, isActive, ...rest }) => (
  <div className="relative">
    <div
      {...rest}
      className={cn(
        "bg-slate-400 group bg-center bg-cover flex-none flex items-center justify-center mx-3 hover:rounded-2xl w-12 h-12 rounded-full cursor-pointer select-none",
        rest.className
      )}
    >
      <div
        className={cn(
          "absolute w-2 -left-1 top-[50%] -translate-y-[50%] rounded-full group-hover:h-[30%] bg-white",
          {
            "h-[80%] group-hover:h-[80%]": isActive,
          }
        )}
      ></div>
      <span className="text-white text-lg font-bold">
        {getInitials(server?.name)}
      </span>
    </div>
  </div>
);

const Servers = () => {
  const currentServerId = useServerStore((state) => state.server.id);
  const setCurrentServer = useServerStore((state) => state.setCurrentServer);
  const toggleUI = useUIStore((state) => state.toggleUI);

  const changeCurrentServer = (server: Server) => {
    setCurrentServer(server);
    toggleUI("showSidebar", true);
  };

  return (
    <div className="h-full bg-bg1 flex flex-col">
      <div className="flex flex-col gap-2 py-3 overflow-y-auto no-scrollbar">
        <ServerItem
          className="bg-profile-pic"
          isActive={myServer.id === currentServerId}
          onClick={() => changeCurrentServer(myServer)}
        />
        <hr className="border-gray-700 mx-2" />
        {mockServers.map((server) => (
          <ServerItem
            key={server.id}
            server={server}
            isActive={server.id === currentServerId}
            style={{ background: server.color }}
            onClick={() => changeCurrentServer(server)}
          />
        ))}
      </div>
    </div>
  );
};

export default Servers;
