export default {
  env: {},
  head: {
    title: 'marubatu-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js TypeScript project',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#3B8070' },
  css: [],
  buildModules: ['@nuxt/typescript-build'],
  build: {},
  modules: ['@nuxtjs/axios'],
  axios: {},
  plugins: [
    {
      src: '~/plugins/socket.io',
      ssr: false, // <-- this line is required
    },
  ],
  server: {
    port: 4022,
    host: '0.0.0.0',
  },
};
