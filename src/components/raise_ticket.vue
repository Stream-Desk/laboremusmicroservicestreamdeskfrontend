<template>
  <v-container>
    <v-card class="newTicketCard">
      <v-form>
        <div class="px-3 newTicketForm">
          <div class="newTicketForm__left">
            <div>
              <label>Requester</label> &nbsp;
              <input />
            </div>
            &nbsp;
            <div>
              <label>Type</label> &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input />
            </div>
            &nbsp;
            <div>
              <label>Category</label> &nbsp;
              <input />
            </div>
            &nbsp;
            <div>
              <label>Summary</label> &nbsp;
              <input />
            </div>
            &nbsp;
            <div>
              <label>Description</label> &nbsp;
              <textarea />
            </div>
          </div>
          <div class="newTicketForm__right">
            <TicketInfo /> &nbsp;
            <Comments />
          </div>
        </div>
        <div class="newTicketForm__bottom">
          <div>
            <label>Change Status</label> &nbsp;
            <select>
              <option>pending</option>
              <option>pending</option>
            </select>
          </div>
          <div>
            <v-btn class="closeTicketBtn">close ticket </v-btn>
          </div>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import TicketInfo from "./TicketInfo.vue";
import Comments from "./Comments.vue";
export default {
  name: "RaiseTicket",
  components: { TicketInfo, Comments },
  data() {
    return {
      title: "",
      content: "",
    };
  },
};
</script>

<style scoped>
.newTicketCard {
  width: 70%;
  margin: 5rem auto;

  padding: 2rem;
}
.newTicketForm {
  display: flex;
  justify-content: space-between;
}
.closeTicketBtn {
  border-radius: 40px;
  background-color: #808080;
  color: #fff;
}
.newTicketForm__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
}
input,
select,
textarea {
  border: 1px solid #c4bfbf;

  padding: 5px;
  font-size: 15px;
  border-radius: 2px;
}
input,
textarea {
  width: 300px;
}
textarea {
  height: 200px;
}
</style>