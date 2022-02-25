<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-3" v-for="(card, index) in cards" :key="index">
          <CardComponent :card="card"></CardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { TrivialCard } from "../../models/TrivialCard";
import CardComponent from './CardComponent.vue';
export default {
  name: "TrivialComponent",
  data() {
    return {
      data: {},
      cards: [],
    };
  },components: {
    CardComponent
  },
  methods: {
    getTrivialCards() {
      fetch("https://opentdb.com/api.php?amount=10")
        .then((response) => response.json())
        .then((json) => {
          this.data = json;
          for (const json of json.results) {
            this.cards.push(new TrivialCard(json));
          }
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
      this.getTrivialCards();
  },
};
</script>

<style scoped>
</style>