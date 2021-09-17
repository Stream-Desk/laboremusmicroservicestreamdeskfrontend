<template>
  <div>
    <v-card style="border-radius: 20px">
      <v-card-text class="commentsCard">
        <div style="margin-bottom: 40px">
          <span class="dot">MM</span> <br />
          To upload images, please first delete the corrupted files.
        </div>
        <div class="closeTicketBtn">
          <v-btn
            >Submit as Closed <i class="fas fa-caret-down fa-2x"></i
          ></v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style scoped>
.commentsCard {
  display: flex;
  background-color: #effbf9;
}
.commentsSection {
  border-radius: 40px;
  padding: 2px 5px;
  background-color: #0072a2;
  color: #fff;
}
.v-btn {
  background-color: #27314d;
  color: #fff;
}
.closeTicketBtn {
  position: absolute;
  right: 0;
  bottom: 10px;
  right: 10px;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 80%;
  display: inline-block;
}
</style>