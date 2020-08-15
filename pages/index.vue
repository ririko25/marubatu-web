<template>
  <section>
    <header>
      <h1>○✖️ゲーム</h1>
    </header>
    <body>
      <h1 class="header">みんなでまるばつ</h1>
      <Board :board="game.board" />
      <div>{{ game.histories }}</div>
      <!-- <History></History> -->
      <label for="chat-msg">ちゃっとめっせーじ</label>
      <input id="chat-msg" v-model="message" type="text" />
      <button @click="sendMessage">そうしん</button>
      <div>{{ chat.messages }}</div>
    </body>
  </section>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator';
import { Game, Chat } from '~/types';
import Board from '~/components/Board.vue';

@Component({
  components: {
    Board,
  },
})
export default class extends Vue {
  @State game: Game;
  @State chat: Chat;
  message = '';

  sendMessage() {
    this.$socket.emit('POST_MESSAGE', { name: 'NoName', message: this.message });
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/style.scss';

header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff;
  height: 70px;
  h1 {
    text-align: center;
    padding-top: 10px;
  }
}

body {
  background-color: #e7c5c5;
}
</style>
