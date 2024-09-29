import { genID } from "@/lib/utils";
import { create } from "zustand";
import { Channel, ChannelGroup, Chat } from "./types";
import { mockChannelGroup, mockChannels } from "./mock";

interface ChannelState {
  channelId: string;
  channelName: string;
  chats: Chat[];
  sendMessage: (m: string) => void;
  setCurrentChannel: (c: Channel) => void;
}

const defaultChannel = mockChannels[1];

export const useChannelStore = create<ChannelState>((set, get) => ({
  channelId: defaultChannel.id,
  channelName: defaultChannel.name,
  chats: defaultChannel.chats,
  sendMessage: (m: string) => {
    const currentChannelId = get().channelId;
    const newChat: Chat = {
      id: genID(),
      username: "guest🎖️",
      channelId: currentChannelId,
      timestamp: new Date(),
      isAdmin: false,
      message: m,
    };

    set((state) => ({ chats: [...state.chats, newChat] }));

    // warning: mutate constant data
    setTimeout(() => {
      mockChannels.find((c) => c.id === currentChannelId)?.chats.push(newChat);
    }, 0);
  },
  setCurrentChannel: (channel: Channel) => {
    const current = get();
    current.channelId = channel.id;
    current.channelName = channel.name;
    current.chats = mockChannels.find((c) => c.id === channel.id)?.chats || [];
    set(() => ({ ...current }));
  },
}));

interface ServerState {
  serverId: string;
  serverName: string;
  channelGroups: ChannelGroup[];
  channels: Channel[];
}

export const useServerStore = create<ServerState>((set) => ({
  serverId: genID(),
  serverName: "Server 1",
  channelGroups: mockChannelGroup,
  channels: mockChannels,
}));
