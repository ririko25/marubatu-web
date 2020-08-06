export * from './state';

export interface Game {
  board: string;
  histories: string[];
  lastPlay: number | null;
}

export interface Chat {
  messages: MessageData[];
}

export type MessageData = {
  name: string;
  message: string;
};
