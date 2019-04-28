declare module "*.vue" {
  // import "socket.io-client";
  import "vue-socket.io-extended";
  module "vue/types/vue" {
    interface Vue {
      // $socket: SocketIOClient.Socket; // vue-socket.io-extended で定義済み
    }
  }
}
