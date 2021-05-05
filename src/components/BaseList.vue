<template>
  <div class="list-grid">
    <v-card v-for="item in list" :key="item.episode_id">
      <v-card-title> {{ item.title }}</v-card-title>
      <v-card-text> {{ item.release_date }} </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BaseList",

  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}
</style>
