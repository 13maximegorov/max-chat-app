<template>
    <v-text-field
            v-model="text"
            :append-outer-icon="sendIcon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Введите сообщение"
            type="text"
            @keydown.enter="send"
            @click:append-outer="send"
          ></v-text-field>
</template>

<script>
import { mdiSend } from "@mdi/js";
export default {
    data() {
        return {
            text: '',
            sendIcon: mdiSend
        }
    },
    methods: {
        send() {
            this.$socket.emit('createMessage', {
                text: this.text,
                id: this.$store.state.user.id,
                name: this.$store.state.user.name
            }, data => {
                if (typeof data === 'string') {
                    console.error(data)
                } else {
                    this.text = ""
                }
            })
        }
    }
}
</script>