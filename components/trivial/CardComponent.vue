<template>
  <div class="card h-100">
    <div class="card-body">
      <h4 class="card-title">{{ card.question }}</h4>
      <button
        type="button"
        name=""
        id=""
        :class="getClass(answer)"
        v-for="(answer, i) in card.answers"
        :key="i"
        :disabled="card.responded"
        @click="handleAnswer(answer)"

      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    methods: {
        handleAnswer(answer) {
            console.log(answer);
            this.card.responded = true;
            this.card.userAnswer = answer;
        },
        getClass(answer) {
            console.log('getClass');
            if(!this.card.responded) return "btn btn-primary btn-lg btn-block";
            else {
                if(answer === this.card.correctAnswer) return "btn btn-success btn-lg btn-block";
                else if(answer === this.card.userAnswer) return "btn btn-danger btn-lg btn-block";
                return "btn btn-secondary btn-lg btn-block";
            }
        },
    },
};
</script>

<style  scoped>
</style>