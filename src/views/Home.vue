<template>
  <div>
    <!-- <Login /> -->
    <Tickets />
    <!-- <SignIn /> -->
  </div>
</template>

<script>
//import Login from "../components/shared/Login.vue";
import Tickets from "../components/shared/Tickets.vue";
//import SignIn from "../components/shared/SignIn.vue";
export default {
  name: "Home",

  components: {
    //Login,
    Tickets,
    // SignIn,
  },
};
</script>
