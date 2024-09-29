import { FC, ReactNode } from "react";

export interface Server {
  id: string | number;
  name: string;
}

export interface ChannelCategory {
  id: string | number;
  name: string;
  serverId: Server["id"];
}

type ChannelType = "text" | "voice";

export interface Channel {
  id: string | number;
  name: string;
  serverId: Server["id"];
  channelCategory: ChannelCategory["id"];
  type: ChannelType;
}

export interface Chat {
  id: string;
  username: string;
  message: string;
  channelId: Channel["id"];
  isAdmin?: boolean;
  timestamp: Date;
}

export type FCC<P = {}> = FC<P & { children?: ReactNode }>;
