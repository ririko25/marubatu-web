import io from "socket.io-client";
import Vue from "vue";
import VueSocketIO from "vue-socket.io-extended";

const socket = io("http://localhost:3333");
export default ({ store }) => {
  Vue.use(VueSocketIO, socket, { store });
};
