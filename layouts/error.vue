<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">404.</h1>
    <h1 v-else>Oops, error</h1>
    <NuxtLink to="/">Volver al inicio</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog",
};
</script>
