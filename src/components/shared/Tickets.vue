<template>
  <v-container grid-list-xs>
    <v-card>
      <div class="row">
        <div class="col" md="2">
          <input
            class="filter"
            v-model="filter"
            type="search"
            placeholder="search"
          />
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <div class="card-header border-0">
            <h5 class="mb-0">All Tickets</h5>
          </div>
          <div class="table-responsive">
            <table
              hover
              table
              class="table align-items-center flush"
              :filter="filter"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <thead class="thead-light">
                <tr>
                  <th
                    scope="col"
                    data-sortable="true"
                    v-for="(header, index) in ticketTable.tableHeadings"
                    :key="index"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(ticket, index) in tickets" :key="index">
                  <td
                    v-for="(field, fieldIndex) in ticketTable.fields"
                    :key="fieldIndex"
                  >
                    {{ getTicketFieldValues(ticket, field) }}
                    <view-ticket :tickets="ticket"></view-ticket>
                  </td>
                  <td>
                    <v-chip flat small>{{ ticket.status }}</v-chip>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import AllTicketsDataService from "../../service/AllTicketDataServices";
import { ticketLabels } from "../../utils/constants";
import { xpath_getter } from "../../utils/jsonHelpers";
export default {
  data() {
    return {
      perPage: 2,
      currentPage: 1,
      filter: "",
      props: ["items"],

      tickets: [],
      ticketTable: {
        tableHeadings: [
          ticketLabels.id,
          ticketLabels.priority,
          ticketLabels.category,
          ticketLabels.summary,
          ticketLabels.date,
          ticketLabels.requester,
          ticketLabels.status,
        ],
        fields: [
          "$.id",
          "$.priority",
          "$.category",
          "$.summary",
          "$.submitDate",
          "$.requester",
          // "$.status",
        ],
      },
    };
  },
  created() {
    this.retrieveTickets();
  },
  methods: {
    getTicketFieldValues(row, field) {
      return xpath_getter(row, field);
    },
    retrieveTickets() {
      AllTicketsDataService.getAll()
        .then((response) => {
          this.tickets = response.data;
          this.tickets.map((ticket) => {
            ticket.description = this.getDisplayTicket(ticket.description);
          });

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTickets();
    },

    editTickets(id) {
      this.$router.push({ name: "Ticket-details", params: { id: id } });
    },

    deleteTickets(id) {
      AllTicketsDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayTicket(description) {
      description =
        description.length > 20
          ? description.substr(0, 20) + "..."
          : description;
      return description;
    },
    getDisplaySummary(summary) {
      summary = summary.length > 20 ? summary.substr(0, 20) + "..." : summary;
      return summary;
    },

    mounted() {
      this.retrieveTickets();
    },
  },
};
</script>

<style scoped>
.filter {
  border: 1px solid rgb(205, 227, 245);
  margin-left: 7%;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
