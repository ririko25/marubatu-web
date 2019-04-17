<template>
  <div class="card">
    <h2>{{board}}</h2>
  </div>
</template>

<script lang="ts">
import * as marubatu from "marubatu";
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class Board extends Vue {
  @Prop() board: marubatu.Board;
}
</script>

<style scoped>
</style>
