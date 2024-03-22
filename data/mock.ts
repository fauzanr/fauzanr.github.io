import { genID } from "@/lib/utils";
import { Channel, ChannelCategory, Server } from "./types";

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

export const channelCategory: ChannelCategory[] = [
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
    name: "A VERY LONG CHANNEL CATEGORY NAME LOL",
    serverId: currentServerId,
  },
];

export const channels: Channel[] = [
  {
    id: genID(),
    name: "welcome",
    channelCategory: channelCategory[0].id,
    serverId: currentServerId,
    type: "text",
  },
  {
    id: genID(),
    name: "general-chat",
    channelCategory: channelCategory[0].id,
    serverId: currentServerId,
    type: "text",
  },
  {
    id: genID(),
    name: "other-stuff",
    channelCategory: channelCategory[0].id,
    serverId: currentServerId,
    type: "text",
  },

  {
    id: genID(),
    name: "lobby",
    channelCategory: channelCategory[1].id,
    serverId: currentServerId,
    type: "voice",
  },
  {
    id: genID(),
    name: "lounge",
    channelCategory: channelCategory[1].id,
    serverId: currentServerId,
    type: "voice",
  },
  {
    id: genID(),
    name: "voice-room-1",
    channelCategory: channelCategory[1].id,
    serverId: currentServerId,
    type: "voice",
  },
  {
    id: genID(),
    name: "voice-room-2",
    channelCategory: channelCategory[1].id,
    serverId: currentServerId,
    type: "voice",
  },
  {
    id: genID(),
    name: "voice-room-3",
    channelCategory: channelCategory[1].id,
    serverId: currentServerId,
    type: "voice",
  },

  {
    id: genID(),
    name: "react",
    channelCategory: channelCategory[2].id,
    serverId: currentServerId,
    type: "text",
  },
  {
    id: genID(),
    name: "nodejs",
    channelCategory: channelCategory[2].id,
    serverId: currentServerId,
    type: "text",
  },
  {
    id: genID(),
    name: "typescript",
    channelCategory: channelCategory[2].id,
    serverId: currentServerId,
    type: "text",
  },
  {
    id: genID(),
    name: "vuejs",
    channelCategory: channelCategory[2].id,
    serverId: currentServerId,
    type: "text",
  },
  {
    id: genID(),
    name: "night-owl",
    channelCategory: channelCategory[2].id,
    serverId: currentServerId,
    type: "voice",
  },

  {
    id: genID(),
    name: "this-is-a-very-long-channel-name",
    channelCategory: channelCategory[3].id,
    serverId: currentServerId,
    type: "text",
  },
  {
    id: genID(),
    name: "random-room",
    channelCategory: channelCategory[3].id,
    serverId: currentServerId,
    type: "voice",
  },
];
