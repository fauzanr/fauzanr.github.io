import { genID } from "@/lib/utils";
import { create } from "zustand";
import { Channel, ChannelGroup, Chat, Server } from "./types";
import { mockChannelGroup, myServer } from "./mock";

interface ChannelState {
  channel: Channel | null;
  sendMessage: (m: string) => void;
  setCurrentChannel: (c: Channel) => void;
}

export const useChannelStore = create<ChannelState>((set, get) => ({
  channel: null,
  sendMessage: (m: string) => {
    const { channel } = get();
    if (channel == null) return;

    const currentChannelId = channel.id;
    const newChat: Chat = {
      id: genID(),
      username: "guest🎖️",
      channelId: currentChannelId,
      timestamp: new Date(),
      isAdmin: false,
      message: m,
    };

    const newChannel: Channel = {
      ...channel,
      chats: [...channel.chats, newChat],
    };

    set(() => ({ channel: newChannel }));

    // warning: mutate constant data
    setTimeout(() => {
      useServerStore.setState(({ channels }) => {
        const newChannels = channels.map((c) =>
          c.id === currentChannelId ? newChannel : c
        );
        return { channels: newChannels };
      });
    }, 0);
  },
  setCurrentChannel: (channel: Channel) => set(() => ({ channel })),
}));

interface ServerState {
  server: Server;
  channelGroups: ChannelGroup[];
  channels: Channel[];
  setCurrentServer: (s: Server) => void;
  setChannels: (c: Channel[]) => void;
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
  channels: [],
  setCurrentServer: (server: Server) => set(() => ({ server })),
  setChannels: (channels: Channel[]) => {
    useChannelStore.setState(() => ({ channel: channels[1] }));
    set(() => ({ channels }));
  },
}));

type ToggleableUI = "showMemberTab" | "showSidebar";

type ToggleableUIState = {
  [key in ToggleableUI]: boolean;
};

interface UIState extends ToggleableUIState {
  toggleUI: (ui: ToggleableUI, v?: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  showMemberTab: true,
  showSidebar: true,
  toggleUI: (ui: ToggleableUI, value?: boolean) =>
    set((state) => ({ [ui]: value == null ? !state[ui] : Boolean(value) })),
}));
