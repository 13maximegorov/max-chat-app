<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card min-width="320" style="margin-top: 100px">
        <v-snackbar v-model="snackbar" :timeout="6000" top>
          {{ message }}
          <v-btn text @click="snackbar = false" color="pink">Закрыть</v-btn>
        </v-snackbar>
        <v-card-title>MaxChatApp</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="16" :rules="nameRules" label="Ваше имя" required></v-text-field>

            <v-text-field v-model="room" :rules="roomRules" label="Введите комнату" required></v-text-field>

            <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">Войти</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout: "empty",
  head: {
    title: "Добро пожаловать в MaxChatApp"
  },
  sockets: {
    connect: function() {
      console.log("Client connected...");
    }
  },
  data: () => ({
    valid: true,
    snackbar: false,
    message: '',
    name: "",
    nameRules: [
      v => !!v || "Введите имя",
      v => (v && v.length <= 16) || "Имя не должно превышать 16 символов"
    ],
    room: "",
    roomRules: [v => !!v || "Введите комнату"]
  }),

  methods: {
    ...mapMutations(["setUser"]),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        };

        this.$socket.emit("userJoined", user, data => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            user.id = data.userId;
            this.setUser(user);
            this.$router.push("/chat");
          }
        });
      }
    }
  },
  mounted() {
    const {message} = this.$route.query
    if (message === 'noUser') {
      this.message = 'Введите данные'
    } else if (message === 'leftChat') {
      this.message = 'Вы вышли из чата'
    }

    this.snackbar = !!this.message
  }
};
</script>
