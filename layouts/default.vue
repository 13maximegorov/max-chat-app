<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app mobile-break-point="650">
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>

        <v-list-item v-for="u in users" :key="u.id" @click.prevent>
          <v-list-item-content>
            <v-list-item-title>{{u.name}}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="u.id === user.id ? 'green' : 'grey'">{{chatIcon}}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>MaxChatApp (Комната {{user.room}})</v-toolbar-title>
      <v-btn @click="exit" class="mx-5" color="red">Выйти</v-btn>
    </v-app-bar>
    <v-content>
      <div style="height: 100%">
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { mdiChat } from "@mdi/js";
export default {
  data() {
    return {
      drawer: true,
      chatIcon: mdiChat
    };
  },
  computed: mapState(["user", "users"]),
  methods: {
    ...mapMutations(["clearData"]),
    exit() {
      this.$socket.emit("userLeft", this.user.id, () => {
        this.$router.push("/?message=leftChat");
        this.clearData();
      });
    }
  }
};
</script>
