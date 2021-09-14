<template>
  <div class="container">
    <v-btn flat depressed id="contain" @click="onOpen">
      <i class="fas fa-envelope-square">Email</i>
    </v-btn>
    <v-dialog v-model="dialog" persistent class="form" v-if="!submitted">
      <form ref="form">
        <v-card
          id="card"
          :elevation="hover ? 10 : 1"
          width="500px"
          height="550"
        >
          <i @click="close" class="fas fa-times" id="close"></i>
          <v-container grid-list-xs>
            <v-layout row wrap>
              <v-card-text>
                <label>Name</label>
                <input
                  type="text"
                  v-model="email.emailToName"
                  name="name"
                  placeholder="Your Name"
                />
                <label>Email</label>
                <input
                  type="email"
                  v-model="email.emailToId"
                  name="email"
                  placeholder="Email"
                />
                <label>Subject</label>
                <input
                  type="text"
                  v-model="email.emailSubject"
                  name="subject"
                  placeholder="Subject"
                />
                <label>Message</label>
                <textarea
                  name="message"
                  v-model="email.emailBody"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                >
                </textarea>
                <v-card-actions class="submit">
                  <v-spacer></v-spacer>
                  <v-btn
                    elevation="1"
                    variant="outlined"
                    text
                    class="mb-5"
                    @click="sendTicket"
                    rounded="pill"
                    text-center
                    id="buton"
                    >Cancel</v-btn
                  >
                  <v-btn
                    flat
                    elevation="1"
                    class="mb-5"
                    @click="sendEmail"
                    rounded="pill"
                    id="btn"
                    >Send</v-btn
                  >
                </v-card-actions>
              </v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </form>
    </v-dialog>
  </div>
</template>

<script>
import AllTicketsDataService from "../service/AllTicketDataServices";
export default {
  data() {
    return {
      email: {
        emailBody: "",
        emailSubject: "",
        emailToId: "",
        emailToName: "",
      },
      submitted: false,
      dialogCancel: false,
      dialog: false,
    };
  },
  methods: {
    sendEmail() {
      var data = {
        emailBody: this.email.emailBody,
        emailSubject: this.email.emailSubject,
        emailToId: this.email.emailToId,
        emailToName: this.email.emailToName,
        status: false,
      };

      AllTicketsDataService.email(data)
        .then((response) => {
          this.email.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTicket() {
      this.submitted = false;
      this.ticket = {};
    },

    onOpen() {
      this.dialog = true;
    },

    close() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
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

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
