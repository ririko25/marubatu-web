export * from './state';

export interface Player {
  name: string;
  team: string;
}

export interface Game {
  board: string;
  histories: string[];
  lastPlay: number | null;
}

export interface Chat {
  messages: MessageData[];
}

export type MessageData = {
  user: string;
  team: string;
  text: string;
};
