import { Chat, Game, Player } from '~/types';

export interface RootState {
  player: Player;
  game: Game;
  chat: Chat;
}
