import React from "react";

const ServerItem = () => (
  <div className="bg-slate-400 flex-none hover:rounded-2xl w-12 h-12 rounded-full cursor-pointer"></div>
);

const Servers = () => {
  return (
    <div className="h-full bg-bg1 flex flex-col">
      <div className="flex flex-col gap-2 p-3 overflow-y-auto no-scrollbar">
        <ServerItem />
        <hr className="border-gray-700 mx-2" />
        <ServerItem />
        <ServerItem />
        <ServerItem />
        <ServerItem />
        <ServerItem />
        <ServerItem />
      </div>
    </div>
  );
};

export default Servers;
