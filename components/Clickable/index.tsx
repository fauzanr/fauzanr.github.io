import { FCC } from "@/data/types";
import React, { HTMLAttributes } from "react";

const Clickable: FCC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`hover:backdrop-brightness-125 rounded-md cursor-pointer text-wh2 hover:text-wh1 ${rest.className}`}
    >
      {children}
    </div>
  );
};

export default Clickable;
