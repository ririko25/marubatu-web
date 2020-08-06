import * as marubatu from 'marubatu';
import { ActionTree, MutationTree } from 'vuex';
import { MessageData, RootState } from '~/types';

export const state = (): RootState => ({
  game: {
    board: new marubatu.Board().toString(),
    lastPlay: null,
    histories: [],
  },
  chat: {
    messages: [],
  },
});

export const mutations: MutationTree<RootState> = {
  addHistory(state: RootState, history: string): void {
    state.game.histories.push(history);
  },
  SOCKET_CONNECT(state: RootState, status: any) {
    console.log('繋がったよ');
  },
  SOCKET_CHAT_MESSAGE(state: RootState, data: MessageData) {
    console.log(data);
    state.chat.messages.push(data);
  },
  SOCKET_BOARD(state: RootState, data: { board: string; lastPlay: number | null }) {
    state.game.board = data.board;
    state.game.lastPlay = data.lastPlay;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ commit }, context) {
    commit('addHistory', '対戦開始！！！！');
  },
};
