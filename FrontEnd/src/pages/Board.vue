<template>
  <q-page style="width: 100%; max-width: 1000px">
    <div class="row justify-center">
      <q-list separator class="q-md col-8">
        <q-item v-for="board in boards" v-ripple :key="board">
          <q-item-section>
            <q-item-label>{{board.title}}</q-item-label>
            <q-item-label caption lines="3">{{board.content}}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>{{date.formatDate(new Date(board.date), 'YYYY-MM-DD')}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div></div>
  </q-page>
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
      boards: []
    };
  },
  created() {
    this.$axios.get("/api/boards").then(res => {
      this.boards = res.data;
      console.log(this.boards);
    });
  }
};
</script>
