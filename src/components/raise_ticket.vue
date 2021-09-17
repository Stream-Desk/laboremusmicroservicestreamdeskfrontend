<template>
  <v-container>
    <v-card class="newTicketCard">
      <TicketInfo />
      <p style="font-weight: bold;">Comments</p>
      <Comments />
    </v-card>
  </v-container>
</template>

<script>
import TicketInfo from "./TicketInfo.vue";
import Comments from "./Comments.vue";
export default {
  name: "RaiseTicket",
  components: { TicketInfo, Comments },
};
</script>

<style scoped>
.newTicketCard {
  padding: 30px;
}
p{
  padding-top: 20px;
}
</style>
