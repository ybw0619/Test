<template>
    <div>
      <div class="movies">
        영화 목록
        <div v-for="movie in movies" :key="movie.id" class="movie">
          <img v-bind:src="movie.poster" class="poster">
          <div>
            <strong>{{movie.name}}</strong>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>

<script>
import { date } from "quasar";
export default {
  name: "PageBoard",
  data() {
    return {
      date: date,
      movies: []
    };
  },
  created() {
    this.$axios.get("/api/movies").then(res => {
      this.movies = res.data;
      console.log(this.movies);
    });
  }
};
</script>
