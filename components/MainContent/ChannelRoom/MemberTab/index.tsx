import Clickable from "@/components/Clickable";
import { FCC } from "@/data/types";
import { cn, repeat } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const Member: FCC<{
  online?: boolean;
  isAdmin?: boolean;
  picClass?: HTMLAttributes<HTMLDivElement>["className"];
}> = ({ online, isAdmin, picClass, children }) => (
  <Clickable className="mx-2 p-2">
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          className={cn("rounded-full bg-slate-100 h-9 w-9", picClass, {
            "bg-profile-pic bg-cover": isAdmin,
          })}
        ></div>
        {online && (
          <span className="absolute rounded-full h-2 w-2 bg-green -right-1 -bottom-1 border-4 border-bg2 box-content"></span>
        )}
      </div>
      <div>{children}</div>
    </div>
  </Clickable>
);

const MemberGroup: FCC<{ label: string }> = ({ label, children }) => {
  const itemLength = React.Children.count(children);
  return (
    <div className="pt-5">
      <div className="text-wh2 text-xs uppercase px-4">
        {label} - {itemLength}
      </div>
      {children}
    </div>
  );
};

const MemberTab = () => {
  return (
    <div className="w-64 bg-bg2 h-full overflow-y-auto">
      <MemberGroup label="online">
        <Member online picClass="bg-indigo-500">
          guest🎖️
        </Member>
        <Member online isAdmin>
          fauzanr
        </Member>
      </MemberGroup>
      <MemberGroup label="offline">
        {repeat(6, (idx) => (
          <Member>member{idx}</Member>
        ))}
      </MemberGroup>
    </div>
  );
};

export default MemberTab;
