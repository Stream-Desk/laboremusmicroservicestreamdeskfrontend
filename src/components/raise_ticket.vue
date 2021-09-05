<template>
  <v-card class="newTicketCard">
    <v-form>
      <div class="px-3 newTicketForm">
        <div class="newTicketForm__left">
          <div>
            <label>Requester</label> &nbsp;
            <input placeholder="name here" />
          </div>
&nbsp;
          <div>
            <label>Type</label> &nbsp;
            <input placeholder="type here" />
          </div>
&nbsp;
          <div>
            <label>Category</label> &nbsp;
            <input placeholder="category here" />
          </div>
&nbsp;
          <div>
            <label>Summary</label> &nbsp;
            <input placeholder="summary here" />
          </div>
&nbsp;
          <div>
            <label>Requester</label> &nbsp;
            <textarea placeholder="description here" />
          </div>
        </div>
        <div class="newTicketForm__right">
          <TicketInfo/> &nbsp;
          <Comments/>
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
            
          <v-btn class="closeTicketBtn secondary">close ticket </v-btn>
        </div>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import TicketInfo from './TicketInfo.vue'
import Comments from './Comments.vue'
export default {
  name: "RaiseTicket",
  components:{TicketInfo, Comments},
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
  width: 60%;
  margin: 5rem auto;

  padding: 2rem;
}
.newTicketForm {
  display: flex;
  justify-content: space-between;
}
.closeTicketBtn {
  border-radius: 40px;
}
.newTicketForm__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
}
input{
border: 1px solid #000;
/* width: 200px; */
padding : 5px;
font-size: 15px;
border-radius: 2px;
}
</style>