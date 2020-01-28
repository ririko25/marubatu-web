<template>
  <div class="board">
    <table>
      <tbody>
        <tr>
          <td v-for="cell in top" :key="cell.index" class="cell" v-on:click="play(cell)">{{cell.v}}</td>
        </tr>
        <tr>
          <td
            v-for="cell in center"
            :key="cell.index"
            class="cell"
            v-on:click="play(cell)"
          >{{cell.v}}</td>
        </tr>
        <tr>
          <td
            v-for="cell in bottom"
            :key="cell.index"
            class="cell"
            v-on:click="play(cell)"
          >{{cell.v}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import * as marubatu from "marubatu";
import { Component, Prop, Vue, Mutation } from "nuxt-property-decorator";

interface cellData {
  index: number;
  x: number;
  y: number;
  v: marubatu.CellValue;
}

@Component({})
export default class Board extends Vue {
  @Prop() board: string;

  mounted() {
    this.$socket.emit("REQUEST_BOARD");
  }

  get cellDataList() {
    return this.boardInstance.cells.map(
      (c, i): cellData => ({
        index: i,
        x: marubatu.Board.indexToPos(i)[0],
        y: marubatu.Board.indexToPos(i)[1],
        v: c,
      }),
    );
  }
  get boardInstance(): marubatu.Board {
    return marubatu.Board.parse(this.board);
  }
  get top() {
    return this.cellDataList.slice(0, 3);
  }
  get center() {
    return this.cellDataList.slice(3, 6);
  }
  get bottom() {
    return this.cellDataList.slice(6, 9);
  }
  play(cell: cellData) {
    const nextBoard = this.boardInstance.play(cell.x, cell.y);
    if (nextBoard.end()) {
      if (nextBoard.win(marubatu.CellValue.Maru)) {
        this.addHistory("マルの勝ち");
      } else if (nextBoard.draw()) {
        this.addHistory("引き分け");
      } else {
        this.addHistory("バツの勝ち");
      }
      const newBoard = "---------";
      this.$socket.emit("BOARD", { board: newBoard, lastPlay: null });
    } else {
      this.$socket.emit("BOARD", { board: nextBoard.toString(), lastPlay: cell.index });
    }
  }
  @Mutation("addHistory") addHistory: (history: string) => void;
}
</script>

<style scoped>
.board {
  user-select: none;
}
.cell {
  padding: 20px;
  border: solid black 1px;
}
</style>
