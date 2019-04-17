import * as marubatu from 'marubatu';
import {ActionTree, MutationTree} from 'vuex';
import {RootState} from '~/types';

export const state = (): RootState => ({
  game: {
    board: new marubatu.Board(),
  },
});

export const mutations: MutationTree<RootState> = {
  setBoard(state: RootState, board: marubatu.Board): void {
    state.game.board = board;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({commit}, context) {
    commit('setBoard', marubatu.Board.parse('----o----'));
  },
};
