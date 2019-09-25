import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
const config = require('../nuxt.config.js')

export default function({store}) {
    Vue.use(new VueSocketIO({
        debug: false,
        connection: `${config.server.host}:${config.server.port}`,
        vuex: {
            store,
            actionPrefix: 'SOCKET_',
            mutationPrefix: 'SOCKET_'
        }
    }))
}