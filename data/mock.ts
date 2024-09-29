import { genID } from "@/lib/utils";
import { Channel, ChannelGroup, Server } from "./types";

export const currentServerId = "5ac42f35-6258-48bf-ab07-5ab860208955";

export const servers: Server[] = [
  {
    id: "5a897416-87a5-4a38-bd1c-ea780606fb51",
    name: "Cormier, Dietrich and Morissette",
  },
  {
    id: "d3cfdcfd-2845-401c-8144-62384bc1a800",
    name: "Paucek Group",
  },
  {
    id: currentServerId,
    name: "Kautzer LLC",
  },
  {
    id: "3a4551f0-598f-46c9-bc4b-f43b9a21bff0",
    name: "Kunze, Larson and Strosin",
  },
  {
    id: "dec46a29-8eaa-4a2e-bc4d-8f70b2d16fa9",
    name: "Parker Inc",
  },
  {
    id: "ec788797-b3f9-4b4f-848a-b70adb9c9d54",
    name: "Brekke Group",
  },
  {
    id: "e8628297-906a-465a-a232-425dc0055f77",
    name: "Marvin, Pouros and Gorczany",
  },
  {
    id: "a5a29297-44c7-4613-b94d-e11f8ea803d5",
    name: "Altenwerth, Sawayn and Jaskolski",
  },
  {
    id: "49777cd0-45ae-4532-a6f0-a056a411e34b",
    name: "Roob-Ondricka",
  },
  {
    id: "5a8d602a-414b-4a9e-bd1e-3668144d1289",
    name: "Greenfelder-Cremin",
  },
  {
    id: "07494412-9f41-4ab8-b855-475d57cb61d4",
    name: "Ortiz and Sons",
  },
  {
    id: "32bf131c-2e81-47ba-808f-85d2cb3000e5",
    name: "Mueller-Ritchie",
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
      name: "general",
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
