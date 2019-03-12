<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 100%; max-width: 1000px">
      <q-table title="게시판" :data="boards" :columns="columns" row-key="name" :pagination.sync="pagination">
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="index">{{ props.row.__index + 1 }}</q-td>
            <q-td key="title"><div class="cursor-pointer" @click="alert('a')">{{ props.row.title }}</div></q-td>
            <q-td key="date">{{ date_.formatDate(new Date(props.row.date), "YYYY-MM-DD") }}</q-td>
            <q-td key="writer">{{ props.row.writer }}</q-td>
          </q-tr>
        </template>
        <template v-slot:top-right>
          <q-btn @click="writeDialog = true">글쓰기</q-btn>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="writeDialog">
      <q-card style="min-width: 600px">
        <q-card-section>
          <div class="text-h6">글쓰기 </div>
        </q-card-section>

        <q-card-section >
          <q-input v-model="board.title" label="제목" color="brand"/>
          <q-input
            label="내용"
            v-model="board.content"
            type="textarea"
            color="brand"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="저장" @click="write" color="black" v-close-dialog />
        </q-card-actions>
      </q-card>
    </q-dialog>
    
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
      writeDialog:false,
      date_: date,
      board:{
        title:'',
        content:'',
        writer:''
      },
      boards: [],
      columns: [
        { name:"desc", align: "left", field: 'name', label: "번호"},
        { align: "left", label: "제목"},
        { align: "left", label: "날짜"},
        { align: "left", label: "글쓴이"}
      ],
      pagination: {
        sortBy: "desc", // String, column "name" property value
        descending: false,
        page: 1,
        rowsPerPage: 10 // current rows per page being displayed
      }
    };
  },
  methods: {
    write(){
      this.board.writer='양호준'
      this.$axios.post("/api/boards",this.board).then(res => {
        console.log(res.data);
        if(res.data.result!=0){
          this.boards.push(res.data.result)
          this.board.title=''
          this.board.content=''
          this.board.writer=''
        }
      });
    }
  },
  created() {
    this.$axios.get("/api/boards").then(res => {
      this.boards = res.data;
      console.log(this.boards);
    });
  }
};
</script>
