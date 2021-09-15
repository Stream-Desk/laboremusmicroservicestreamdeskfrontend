<template>
  <v-app>
    <v-app-bar app color="black" class="bar">
      <v-toolbar-title class="title">
        Stream|<span>Desk</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="btn"><i class="fas fa-user"></i></v-btn>
      <v-btn icon class="btn"><i class="fas fa-comments"></i></v-btn>
      <v-btn icon class="btn"><i class="fas fa-bell"></i></v-btn>
      <v-btn flat class="button" small color="white" href="/login">Login</v-btn>
    </v-app-bar>
    <br />
    <v-main>
      <Email />
      <raise-ticket></raise-ticket>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Email from "./components/Email.vue";
import RaiseTicket from "./components/raise_ticket.vue";
export default {
  name: "App",
  components: {
    RaiseTicket,
     Email,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
body {
  background: #fff;
}
.bar .title {
  color: rgb(250, 246, 20);
  font-size: 25px;
  text-transform: upeercase;
  font-weight: 900;
  font-family: "Roboto" sans-serifs;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.bar .title span {
  color: #fff;
}
.btn {
  background: #fff;
  color: #000;
  display: inline-block;
  margin: 0 10px;
  font-size: 18px;
  width: 34px;
  height: 34px;
  line-height: 35px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  transition-property: background, color;
}
.btn:hover {
  background: rgb(250, 246, 20);
  color: #fff;
}
.button {
  background: #fff;
  color: #000;
  border-radius: 20px;
  transition: 0.3s;
  transition-property: background, color;
}
.button:hover {
  background: rgb(250, 246, 20);
  color: rgb(15, 78, 196);
}
</style>
