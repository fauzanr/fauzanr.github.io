import { type ClassValue, clsx } from "clsx";
import { Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const genID = () => Math.random().toString(36).substring(2);

export const repeat = (n: number, cb: (idx: number) => ReactNode) =>
  Array.from({ length: n }).map((_, idx) => (
    <Fragment key={idx}>{cb(idx)}</Fragment>
  ));

export const getInitials = (name?: string) => {
  if (typeof name !== "string") return "";

  const names = name.split(" ").filter(Boolean);
  const initials = names.map((part) => part.charAt(0).toUpperCase()).join("");

  return initials;
};
