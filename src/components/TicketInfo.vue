<template>
  <v-card class="infoCard">
    <v-card-title>
      <h3>Ticket Info</h3>
    </v-card-title>
    <div class="infoCardContainer">
      <v-card-text class="infoCard_left">
        <div>
          <p style="font-weight: bold">Name:</p>
          <p class="danger" style="color: red">A560</p>
        </div>
        <div>
          <p style="font-weight: bold">Modify time</p>
          <p>06:13 pm</p>
          <p>12/05/2020</p>
        </div>

        <div>
          <p style="font-weight: bold">Requested time</p>
          <p>06:13 pm</p>
          <p>12/05/2020</p>
        </div>
      </v-card-text>
      <v-card-text class="infoCard_right">
        <div>
          <p style="font-weight: bold">Current Status</p>
          <ul>
            <li>Open</li>
            <li>Priority</li>
            <li>Normal</li>
          </ul>
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
  width: 280px;
}
li {
  list-style-type: none;
}
</style>