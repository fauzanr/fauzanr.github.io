import React from "react";
import Sidebar from "../Sidebar";

const MainContent = () => {
  return (
    <div className="flex h-full">
      <div className="w-60">
        <Sidebar />
      </div>
      <div className="flex-auto">hola</div>
    </div>
  );
};

export default MainContent;
