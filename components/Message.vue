<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <!-- <p class="text-xs-center">{{text}}</p>
      <hr /> -->
      <v-alert
      border="left"
      colored-border
      type="warning"
      elevation="5"
    >
      {{text}}
    </v-alert>
    </div>
    <div v-else class="wrap">
      <div class="mes" :class="{owner}">
        <small>
          <strong>{{name}}</strong>
        </small>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    owner: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.system {
  margin-bottom: 1rem;
}

.system  p {
    margin-bottom: 1rem;
    }

.wrap {
    display: flex;
    flex-direction: column;
}

.mes {
    padding: 1rem;
    width: 60%;
    margin: 0 1rem;
    box-shadow: 0 0px 22px -7px rgb(0, 0, 0);
    border-radius: 4px;
    background: #1976d2;
    position: relative;
    margin-bottom: 1rem; 
}

.mes p {
        margin-bottom: 0;
    }

.owner {
    background: #ffffff;
    color: #000000;
    align-self: flex-end;
}
</style>