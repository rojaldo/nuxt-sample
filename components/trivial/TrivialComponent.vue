<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-3" v-for="(card, index) in cards" :key="index">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">{{card.question}}</h4>
            <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" v-for="(answer, i) in card.answers" :key="i">{{answer}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TrivialCard } from "../../models/TrivialCard";
export default {
  name: "TrivialComponent",
  data() {
    return {
      data: {},
      cards: [],
    };
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