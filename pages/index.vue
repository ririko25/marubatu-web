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
import { Component, Mutation, State, Vue } from 'nuxt-property-decorator';
import { Game, Chat, Player } from '~/types';
import Board from '~/components/Board.vue';

@Component({
  components: {
    Board,
  },
})
export default class extends Vue {
  @State player: Player;
  @State game: Game;
  @State chat: Chat;
  message = '';

  mounted() {
    this.seledtTeam('o');
    this.getAllMessages();
  }

  seledtTeam(team: string) {
    this.$socket.emit('JOIN_ROOM', { team });
    this.joinTeam(team);
  }

  getAllMessages() {
    this.$socket.emit('GET_ALL_MESSAGES');
  }

  sendMessage() {
    this.$socket.emit('POST_MESSAGE', { user: this.player.name, team: this.player.team, text: this.message });
  }

  @Mutation('joinTeam') joinTeam: (team: string) => void;
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
