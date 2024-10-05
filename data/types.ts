import { FC, ReactNode } from "react";

export interface Server {
  id: string;
  name: string;
  color: string;
  pic?: string;
}

export interface ChannelGroup {
  id: string;
  name: string;
  serverId: Server["id"];
}

type ChannelType = "text" | "voice";

export interface Channel {
  id: string;
  name: string;
  serverId: Server["id"];
  channelGroup: ChannelGroup["id"];
  type: ChannelType;
  chats: Chat[];
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
