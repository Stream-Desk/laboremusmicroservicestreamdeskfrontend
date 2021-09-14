<template>
  <v-container grid-list-lg>
    <v-card>
      <h5 class="header">All Tickets <i class="fas fa-sort-down"></i></h5>
      <v-card-actions>
        <v-spacer></v-spacer>
        <input
          class="search"
          placeholder="Search here"
          v-model="filter"
          :search="search"
        />
        <v-btn v-model="filter" class="filter"
          >Status <i class="fas fa-sort-down"></i
        ></v-btn>
      </v-card-actions>
      <v-divider></v-divider>
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
              {{ header }} <i class="fas fa-sort-down"></i>
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
              <v-chip :color="getColor(status)" flat small>{{
                ticket.status
              }}</v-chip>
            </td>
          </tr>
        </tbody>
      </table>
      <v-pagination
        :length="length"
        v-model="currentPage"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        pills
        size="sm"
        align="right"
        class="pagination"
      ></v-pagination>
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
      perPage: 10,
      currentPage: 1,
      filter: "",
      props: ["items"],
      search: "",

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

    getColor(status) {
      if (status.value > "pending") return "red";
      else if (status.value > open) return "green";
      else return "grey";
    },
  },
};
</script>

<style scoped>
.filter {
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  text-transform: capitalize;
  box-sizing: border-box;
}
.pagination {
  margin-left: 80%;
  width: 207px;
  height: 30px;
  left: 1212px;
  top: 847px;
}
.search {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.header {
  margin-inline-start: 20px;
  margin-top: 20px;
}
</style>
