<template>
  <section>
    <h1 class="header">marubatu!</h1>
    <Board :board="game.board"></Board>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Game } from "~/types";
import Board from "~/components/Board.vue";

@Component({
  components: {
    Board
  }
})
export default class extends Vue {
  @State game: Game;
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/style.scss";

.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
