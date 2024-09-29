import { genID } from "@/lib/utils";
import { create } from "zustand";
import { Channel, ChannelGroup, Chat, Server } from "./types";
import { mockChannelGroup, mockChannels, myServer } from "./mock";

interface ChannelState {
  channel: Channel;
  sendMessage: (m: string) => void;
  setCurrentChannel: (c: Channel) => void;
}

const defaultChannel = mockChannels[1];

export const useChannelStore = create<ChannelState>((set, get) => ({
  channel: { ...defaultChannel },
  sendMessage: (m: string) => {
    const currentChannelId = get().channel.id;
    const newChat: Chat = {
      id: genID(),
      username: "guest🎖️",
      channelId: currentChannelId,
      timestamp: new Date(),
      isAdmin: false,
      message: m,
    };

    set((state) => ({
      channel: { ...state.channel, chats: [...state.channel.chats, newChat] },
    }));

    // warning: mutate constant data
    setTimeout(() => {
      mockChannels.find((c) => c.id === currentChannelId)?.chats.push(newChat);
    }, 0);
  },
  setCurrentChannel: (channel: Channel) => set(() => ({ channel })),
}));

interface ServerState {
  server: Server;
  channelGroups: ChannelGroup[];
  channels: Channel[];
  setCurrentServer: (s: Server) => void;
}

const defaultServer = myServer;

export const useServerStore = create<ServerState>((set) => ({
  server: {
    id: defaultServer.id,
    name: defaultServer.name,
    color: defaultServer.color,
    pic: defaultServer.pic,
  },
  channelGroups: mockChannelGroup,
  channels: mockChannels,
  setCurrentServer: (server: Server) => set(() => ({ server })),
}));
