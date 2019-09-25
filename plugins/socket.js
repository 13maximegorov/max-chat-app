import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
const nuxt = new Nuxt(config)
const { host, port } = nuxt.options.server

export default function({store}) {
    Vue.use(new VueSocketIO({
        debug: false,
        connection: `http://${host}:${port}`,
        vuex: {
            store,
            actionPrefix: 'SOCKET_',
            mutationPrefix: 'SOCKET_'
        }
    }))
}