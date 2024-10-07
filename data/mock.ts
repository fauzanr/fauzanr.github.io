import { genID } from "@/lib/utils";
import { ChannelGroup, Server } from "./types";

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
    id: "9ydm445s8zw",
    name: "MAIN CHANNELS",
    serverId: currentServerId,
  },
  {
    id: "znutatrjh4",
    name: "EXPERIENCES & WORK HISTORY",
    serverId: currentServerId,
  },
  {
    id: "6agxcu5e2",
    name: "TOOLS",
    serverId: currentServerId,
  },
  {
    id: "iep2ci6zz8l",
    name: "A VERY LONG CHANNEL CATEGORY NAME",
    serverId: currentServerId,
  },
];
