import * as marubatu from "marubatu";
import { ActionTree, MutationTree } from "vuex";
import { MessageData, RootState } from "~/types";

export const state = (): RootState => ({
  game: {
    board: new marubatu.Board().toString(),
    histories: [],
  },
  messages: [],
});

export const mutations: MutationTree<RootState> = {
  setBoard(state: RootState, board: marubatu.Board): void {
    state.game.board = board.toString();
  },
  addHistory(state: RootState, history: string): void {
    state.game.histories.push(history);
  },
  SOCKET_CONNECT(state: RootState, status: any) {
    console.log("繋がったよ");
  },
  SOCKET_CHAT_MESSAGE(state: RootState, data: MessageData) {
    console.log(data);
  },
  SOCKET_BOARD(state: RootState, data: { board: string }) {
    state.game.board = data.board;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    commit("setBoard", marubatu.Board.parse("---------"));
    commit("addHistory", "対戦開始！！！！");
  },
};
