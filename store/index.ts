import * as marubatu from 'marubatu';
import {ActionTree, MutationTree} from 'vuex';
import {RootState} from '~/types';

export const state = (): RootState => ({
  game: {
    board: new marubatu.Board().toString(),
    histories: [],
  },
});

export const mutations: MutationTree<RootState> = {
  setBoard(state: RootState, board: marubatu.Board): void {
    state.game.board = board.toString();
  },
  addHistory(state: RootState, history: string): void {
    state.game.histories.push(history);
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({commit}, context) {
    commit('setBoard', marubatu.Board.parse('---------'));
    commit('addHistory', '対戦開始！！！！');
  },
};
