<template>
  <v-app>
    <v-main>
      <v-container>
        <div id="banner">
          <img src="https://picsum.photos/300/200" />
          <p>
            Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты.
          </p>
          <button>Click</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <v-text-field label="Фильтрация по названию" v-model="filterByName" />
        <v-select
          v-model="sortByDate"
          :items="options"
          item-text="label"
          item-value="value"
          label="Соритровка по дате"
        />
        <BaseList :list="filteredList" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { parse } from "date-fns";
import BaseList from "./components/BaseList.vue";

const api = axios.create({ baseURL: "https://swapi.dev/api/films/" });
const DATE_FORMAT = "yyyy-MM-dd";

export default {
  name: "App",

  components: {
    BaseList
  },

  data() {
    return {
      list: [],
      filterByName: null,
      sortByDate: "ASC",
      options: [
        { value: "ASC", label: "По возрастанию" },
        { value: "DESC", label: "По убыванию" }
      ]
    };
  },
  computed: {
    filteredList() {
      let result = this.list;

      if (this.filterByName) {
        result = this.list.filter(item =>
          item.title.toLowerCase().includes(this.filterByName.toLowerCase())
        );
      }

      if (this.sortByDate === "ASC") {
        result = [...result].sort((a, b) => {
          const firstDate = this.parseDate(a.release_date);
          const lastDate = this.parseDate(b.release_date);
          return firstDate - lastDate;
        });
      } else if (this.sortByDate === "DESC") {
        result = [...result].sort((a, b) => {
          const firstDate = this.parseDate(a.release_date);
          const lastDate = this.parseDate(b.release_date);
          return lastDate - firstDate;
        });
      }

      return result;
    }
  },
  async created() {
    const res = await api.get();
    this.list = await res.data.results;
  },
  methods: {
    parseDate(date) {
      return parse(date, DATE_FORMAT, new Date());
    }
  }
};
</script>

<style lang="scss">
#banner {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ececec;
}
</style>
