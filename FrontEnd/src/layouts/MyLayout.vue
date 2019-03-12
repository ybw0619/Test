<template>
  <div>
    <!-- 로그인 다이얼로그 시작-->
    <q-dialog v-model="alert">
      <q-card style="width: 300px">
        <q-card-section class="justify-center">
          Sign-In
        </q-card-section>
        <q-card-section>
          <q-input v-model="email" :dense="dense" placeholder="Email" color="black">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <q-input v-model="password" :dense="dense" placeholder="Password" type="password" color="black">
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Sign In" color="brand" v-close-dialog @click="signin"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- 로그인 다이얼로그 끝-->
    <q-layout view="hHh Lpr lff">
      <q-header bordered>
        <q-toolbar class="text-black">
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
          >
            <q-icon name="menu" />
          </q-btn>

          <q-toolbar-title>
            Hojun's Blog
          </q-toolbar-title>
          로그인: {{this.$store.state.isLogin}}
          <q-btn flat dense icon="input" label="Sign In" no-caps @click="alert = !alert" v-if="!this.$store.state.isLogin"/>
          <q-btn flat dense icon="input" label="Sign Out" no-caps @click="signout" v-if="this.$store.state.isLogin"/>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        overlay
        bordered
        class="text-grey-7"

      >
      <q-item clickable to="/" exact active-class="text-black">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>HOME</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable  to="/board" active-class="text-black">
        <q-item-section avatar>
          <q-icon name="event_note" />
        </q-item-section>
        <q-item-section>
          <q-item-label>BOARD</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable  to="/board0" active-class="text-black">
        <q-item-section avatar>
          <q-icon name="event_note" />
        </q-item-section>
        <q-item-section>
          <q-item-label>BOARD0</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable  to="/board1" active-class="text-black">
        <q-item-section avatar>
          <q-icon name="security" />
        </q-item-section>
        <q-item-section>
          <q-item-label>SECRET</q-item-label>
          <q-item-label caption>비밀공간....</q-item-label>
        </q-item-section>
      </q-item>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer>
        <q-toolbar class="bg-white text-grey-6 justify-center">
            © 2019 / 양호준
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      isLogin: false,
      email: '',
      password: '',
      alert: false,
      leftDrawerOpen: false,
      dense:true,
    }
  },
  created(){
    console.log(this)
  },
  methods: {
    openURL,
    signin(){
      this.$axios.post('/api/signin',{
      	"username":this.email,
      	"password":this.password
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.result == 1){
          this.$store.commit('login')
        }
      })
    },
    signout(){
      this.$axios.get('/api/signout')
      .then((res) => {
        console.log(res.data);
        if(res.data.result == 1){
          this.$store.commit('logout')
        }
      })
    },

  }
}
</script>

<style>
</style>
