import { genID } from "@/lib/utils";
import { create } from "zustand";
import { Channel, Chat } from "./types";
import { mockChannels, mockChats } from "./mock";

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
  chats: mockChats.filter((c) => c.channelId === defaultChannel.id),
  sendMessage: (m: string) => {
    const newChat: Chat = {
      id: genID(),
      username: "guest🎖️",
      channelId: get().channelId,
      timestamp: new Date(),
      isAdmin: false,
      message: m,
    };

    // warning: mutate constant data
    mockChats.push(newChat);

    set((state) => ({ chats: [...state.chats, newChat] }));
  },
  setCurrentChannel: (channel: Channel) => {
    const current = get();
    current.channelId = channel.id;
    current.channelName = channel.name;
    current.chats = mockChats.filter((c) => c.channelId === channel.id);
    set(() => ({ ...current }));
  },
}));

interface ServerState {
  serverId: string;
  serverName: string;
  channels: Channel[];
}

export const useServerStore = create<ServerState>((set) => ({
  serverId: genID(),
  serverName: "Server 1",
  channels: mockChannels,
}));
