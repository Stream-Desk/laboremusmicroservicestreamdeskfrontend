<template>
  <v-card class="infoCard">
    <v-card-title>
      <h3>Ticket Info</h3>
    </v-card-title>
    <div class="infoCardContainer">
      <v-card-text class="infoCard_left">
        <div>
          <h5>Name:</h5>
          <p class="danger">A560</p>
        </div>
        <div>
          <h5>Modify time</h5>
          <p>06:13 pm</p>
          <p>12/05/2020</p>
        </div>

        <div>
          <h5>Requested time</h5>
          <p>06:13 pm</p>
          <p>12/05/2020</p>
        </div>
      </v-card-text>
      <v-card-text class="infoCard_right">
        <div>
          <h5>Current Status</h5>
          <p>Open</p>
        </div>
        <div>
          <h5>Priority</h5>
          <p>Normal</p>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TicketInfo",
};
</script>

<style scoped>
.infoCardContainer {
  display: flex;
  /* justify-content: space-between; */
}
.infoCard {
  width: 300px;
}
</style>
