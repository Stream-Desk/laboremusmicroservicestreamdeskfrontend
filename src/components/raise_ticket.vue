<template>
  <v-card :elevation="hover ? 24 : 3" class="mx-auto my-12" max-width="600">
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-card-text>
          <form v-if="currentTicket">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">TicketId:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.id"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Date:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.submitDate"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Category:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.category"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Summary:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.summary"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Description:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.description"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Attachment:</label>
              <div class="col-sm-10">
                <input type="text" disabled class="form-control-plaintext" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Status:</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="currentTicket.status"
                  disabled
                  class="form-control-plaintext"
                />
              </div>
            </div>
          </form>
        </v-card-text>
      </v-layout>
      <hr />
      <div class="reply">
        <form>
          <h6>Comment</h6>
          <textarea
            name="message"
            cols="30"
            rows="5"
            v-model="comment.message"
            placeholder="Write here"
          ></textarea>
          <v-btn class="view" color="primary" @click="sendComment">Send</v-btn>
        </form>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import AllTicketsDataService from "../service/AllTicketDataServices";

export default {
  name: "ViewTicket",

  components: {},
  data() {
    return {
      currentTicket: null,
      message: "",
      comment:{
        message:""
      }
    };
  },
  updated: false,
  methods: {
    sendComment(){
     const data = {
        message:this.comment.message,
      }
       AllTicketsDataService.createComment(data)
        .then((response) => {
          this. comment.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    

    onSend: function (message) {
      alert(message);
    },
    onClickEditTicket() {
      this.dialog = true;
    },

    

    getTicket(id) {
      AllTicketsDataService.get(id)
        .then((response) => {
          this.currentTicket = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTicket(this.$route.params.id);
  },
};
</script>

<style>
form input {
  margin-left: 30px;
}
form label {
  font-weight: bold;
  color: black;
  font-size: 16px;
}

textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 6px;

  resize: vertical;
}
.view {
  float: right;
  right: 3.5rem;
  margin-bottom: 16px;
}
</style>
