// import Vue from 'vue'
// import VueSocketIO from 'vue-socket.io'
// const {host, port} = require('../nuxt.config.js').server

// export default function({store}) {
//     Vue.use(new VueSocketIO({
//         debug: false,
//         connection: `https://max-chat-application.herokuapp.com:${port}`,
//         vuex: {
//             store,
//             actionPrefix: 'SOCKET_',
//             mutationPrefix: 'SOCKET_'
//         }
//     }))
// }