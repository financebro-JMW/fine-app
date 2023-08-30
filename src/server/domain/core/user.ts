import { access } from "fs";

export type User = {
  name: string;
  email: string;
  uri: string;
  accessToken: string;
  refreshToken: string;
  profile: string;
  messages?: string;
  readed?: string;
  timestamp?: string;
  notification: boolean;
};
