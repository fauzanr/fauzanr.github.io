import { genID } from "@/lib/utils";
import { create } from "zustand";
import { Chat } from "./types";
import { mockChats } from "./mock";

interface ChatState {
  chats: Chat[];
  sendMessage: (m: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: mockChats,
  sendMessage: (m: string) => {
    const newChat: Chat = {
      id: genID(),
      username: "guest🎖️",
      channelId: 0,
      timestamp: new Date(),
      isAdmin: false,
      message: m,
    };
    set((state) => ({ chats: [...state.chats, newChat] }));
  },
}));
