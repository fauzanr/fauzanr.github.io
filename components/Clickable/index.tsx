import { FCC } from "@/data/types";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

const Clickable: FCC<{ noBG?: boolean } & HTMLAttributes<HTMLDivElement>> = ({
  children,
  noBG,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cn(
        `rounded-md cursor-pointer text-wh2 hover:text-wh1 ${className}`,
        {
          "hover:backdrop-brightness-125": !noBG,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Clickable;
