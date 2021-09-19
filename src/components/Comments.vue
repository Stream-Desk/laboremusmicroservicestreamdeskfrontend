<template>
  <v-card>
    <v-card-text class="commentsCard">
      <div class="commentsSection primary">
        <label for="commment">Comments</label>
      </div>

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
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
label {
  float: left;
}
</style>
