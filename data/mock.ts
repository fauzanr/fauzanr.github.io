import { genID } from "@/lib/utils";
import { Channel, ChannelGroup, Server } from "./types";

export const currentServerId = "5ac42f35-6258-48bf-ab07-5ab860208955";

export const myServer: Server = {
  id: genID(),
  name: "Fauzan Rianda",
  color: "",
  pic: "bg-profile-pic",
};

export const mockServers: Server[] = [
  {
    id: genID(),
    name: "cerulean",
    color: "#98B2D1",
  },
  {
    id: genID(),
    name: "fuchsia rose",
    color: "#C74375",
  },
  {
    id: genID(),
    name: "true red",
    color: "#BF1932",
  },
  {
    id: genID(),
    name: "aqua sky",
    color: "#7BC4C4",
  },
  {
    id: genID(),
    name: "tigerlily",
    color: "#E2583E",
  },
  {
    id: genID(),
    name: "blue turquoise",
    color: "#53B0AE",
  },
];

export const mockChannelGroup: ChannelGroup[] = [
  {
    id: genID(),
    name: "MAIN CHANNELS",
    serverId: currentServerId,
  },
  {
    id: genID(),
    name: "VOICE CHANNELS",
    serverId: currentServerId,
  },
  {
    id: genID(),
    name: "CODING",
    serverId: currentServerId,
  },
  {
    id: genID(),
    name: "A VERY LONG CHANNEL CATEGORY NAME",
    serverId: currentServerId,
  },
];

export const mockChannels: Channel[] = [
  {
    id: genID(),
    name: "welcome👋",
    channelGroup: mockChannelGroup[0].id,
    serverId: currentServerId,
    type: "text",
    chats: [],
  },
  (() => {
    const channelId = genID();
    return {
      id: channelId,
      name: "intro",
      channelGroup: mockChannelGroup[0].id,
      serverId: currentServerId,
      type: "text",
      chats: [
        {
          id: genID(),
          username: "fauzanr",
          channelId,
          timestamp: new Date(),
          isAdmin: true,
          message: "hola",
        },
        {
          id: genID(),
          username: "fauzanr",
          channelId,
          timestamp: new Date(),
          isAdmin: true,
          message: "hola",
        },
        {
          id: genID(),
          username: "fauzanr",
          channelId,
          timestamp: new Date(),
          isAdmin: true,
          message:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto illo nesciunt quod itaque quia commodi, in ab natus quos totam repudiandae perferendis autem. Nesciunt quae ipsum, ea exercitationem beatae assumenda!",
        },
        {
          id: genID(),
          username: "fauzanr",
          channelId,
          timestamp: new Date(),
          isAdmin: true,
          message: "hola",
        },
        {
          id: genID(),
          username: "fauzanr",
          channelId,
          timestamp: new Date(),
          isAdmin: true,
          message: "hola",
        },
      ],
    };
  })(),
  {
    id: genID(),
    name: "other-stuff",
    channelGroup: mockChannelGroup[0].id,
    serverId: currentServerId,
    type: "text",
    chats: [],
  },
  {
    id: genID(),
    name: "react",
    channelGroup: mockChannelGroup[2].id,
    serverId: currentServerId,
    type: "text",
    chats: [],
  },
  {
    id: genID(),
    name: "nodejs",
    channelGroup: mockChannelGroup[2].id,
    serverId: currentServerId,
    type: "text",
    chats: [],
  },
  {
    id: genID(),
    name: "typescript",
    channelGroup: mockChannelGroup[2].id,
    serverId: currentServerId,
    type: "text",
    chats: [],
  },
  {
    id: genID(),
    name: "vuejs",
    channelGroup: mockChannelGroup[2].id,
    serverId: currentServerId,
    type: "text",
    chats: [],
  },
  {
    id: genID(),
    name: "this-is-a-very-long-channel-name",
    channelGroup: mockChannelGroup[3].id,
    serverId: currentServerId,
    type: "text",
    chats: [],
  },
];
