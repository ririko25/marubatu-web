export * from "./state";

export interface Game {
  board: string;
  histories: string[];
}

export type MessageData = {
  name: string;
  message: string;
};
