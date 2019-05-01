<template>
  <section>
    <h1 class="header">みんなでまるばつ</h1>
    <Board :board="game.board"></Board>
    <div>{{game.histories}}</div>
    <!-- <History></History> -->
    <!-- <label for="chat-msg">ちゃっとめっせーじ</label>
    <input type="text" id="chat-msg" v-model="message">
    <button v-on:click="sendMessage">そうしん</button>-->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Game } from "~/types";
import Board from "~/components/Board.vue";

@Component({
  components: {
    Board,
  },
})
export default class extends Vue {
  @State game: Game;
  message = "";

  sendMessage() {
    this.$socket.emit("POST_MESSAGE", { name: "nuxt", message: this.message });
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
