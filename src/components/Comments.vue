<template>
  <v-card>
    <v-card-text class="commentsCard">
      <div class="commentsSection primary">Comments</div> &nbsp;
      <textarea type="textarea"></textarea>
      &nbsp;
      <div>Attachments</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style scoped>
.commentsCard {
  display: flex;
}
.commentsSection {
  border-radius: 40px;
  padding: 2px 5px;
}
</style>
