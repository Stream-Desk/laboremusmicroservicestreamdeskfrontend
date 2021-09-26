<template>
  <v-container grid-list-lg>
    <v-card>
      <div class="wrapper">
        <select v-on:change="filterTicket" class="header">
          <option value="all">All Tickets</option>
          <option value="ticketId">TicketId</option>
          <option value="priority">Priority</option>
          <option value="category">Category</option>
          <option value="summary">Summary</option>
          <option value="date">Date</option>
          <option value="requester">Requester</option>
        </select>
      </div>

      <div class="email"><Email /></div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <form id="search">
          Search
          <input
            class="search"
            name="query"
            v-model="searchQuery"
            placeholder="Search here"
          />
        </form>
        <div class="filter">
          <select class="select">
            <option>Status</option>
            <option>Open</option>
            <option>Resolved</option>
            <option>Closed</option>
            <option>Pending</option>
          </select>
        </div>
      </v-card-actions>
      <v-divider></v-divider>
      <div id="grid-template">
        <div class="table-header-wrapper">
          <table hover table-striped class="table table-bordered responsive">
            <thead>
              <tr>
                <th
                  v-for="key in ticketTable.tableHeadings"
                  :key="key"
                  @click="sortBy(key)"
                  :class="{ active: sortKey == key }"
                  :ticket="tickets"
                >
                  {{ key }}
                  <span
                    class="arrow"
                    :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
                  ></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(ticket, key) in filteredData"
                :key="key"
                @click="viewTicket(ticket.id)"
              >
                <td v-for="(field, key) in ticketTable.fields" :key="key">
                  {{ getTicketFieldValues(ticket, field) }}
                  <view-ticket></view-ticket>
                </td>
                <td>
                  <v-chip class="" small flat>
                    {{ ticket.status }}
                  </v-chip>
                </td>
                <div class="hover">
                  <i class="fas fa-trash" @click="onOpen"> </i>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="page-navigation">
        <p>
          {{ startRow / rowsPerPage + 1 }} out of
          {{ Math.ceil(filteredData.length / rowsPerPage) }}
        </p>
        <button>Next</button>
      </div>
      <select v-model="rowsPerPage">
        <option
          v-for="pageSize in pageSizeMenu"
          :key="pageSize"
          :value="pageSize"
        >
          {{ pageSize }}
        </option>
      </select>
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
import AllTicketsDataService from "../service/AllTicketDataServices";
import { ticketLabels } from "../utils/constants";
import { xpath_getter } from "../utils/jsonHelpers";
import Email from "../components/Email.vue";
export default {
  components: {
    Email,
  },
  data() {
    return {
      pageSizeMenu: [10, 20, 50, 100],
      startRow: 0,
      rowsPerPage: 10,
      searchQuery: "",
      sortKey: "",
      sortOrders: {},

      tickets: [],
      ticketTable: {
        tableHeadings: [
          ticketLabels.id,
          ticketLabels.priority,
          ticketLabels.category,
          ticketLabels.summary,
          ticketLabels.date,
          // ticketLabels.requester,
          ticketLabels.status,
        ],
        fields: [
          "$.id",
          "$.priority",
          "$.category",
          "$.summary",
          "$.submitDate",
          // "$.requester",
          // "$.status",
        ],
      },
    };
  },
  computed: {
    filteredData: function () {
      let sortKey = this.sortKey;
      let filterKey = this.searchQuery && this.searchQuery.toLowerCase();
      let order = this.sortOrders[sortKey] || 1;
      let data = this.tickets;

      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    dataPerPage: function () {
      return this.filteredData.filters(
        (fields, index) =>
          index >= this.startRow && index < this.startRow + this.rowsPerPage
      );
    },
  },
  created() {
    this.retrieveTickets();
    let sortOrders = {};
    this.ticketTable.tableHeadings.forEach(function (key) {
      sortOrders[key] = 1;
    });
    this.sortOrders = sortOrders;
  },
  methods: {
    getTicketFieldValues(row, field) {
      return xpath_getter(row, field);
    },
    sortBy: function (tickets) {
      this.sortKey = tickets;
      this.sortOrders[tickets] = this.sortOrders[tickets] * -1;
    },
    // Pagination
    movePages: function (amount) {
      let newStartRow = this.startRow + amount * this.rowsPerPage;
      if (newStartRow >= 0 && newStartRow < this.filteredData.length) {
        this.startRow = newStartRow;
      }
    },
    // @Get Tickets
    retrieveTickets() {
      AllTicketsDataService.getAll()
        .then((response) => {
          this.tickets = response.data;
          this.tickets.map((ticket) => {
            ticket.summary = this.getDisplayTicket(ticket.summary);
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

    viewTicket(id) {
      this.$router.push({ name: "RaiseTicket", params: { id: id } });
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

    getDisplayTicket(summary) {
      summary = summary.length > 10 ? summary.substr(0, 10) + "..." : summary;
      return summary;
    },

    mounted() {
      this.retrieveTickets();
    },
  },
};
</script>
<style scoped>
th {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.filter {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  text-transform: capitalize;
  box-sizing: border-box;
  padding: 2px 5px 2px 5px;
}
.select {
  padding: 2px 5px 2px 5px;
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
tr,
td {
  cursor: pointer;
}

.email {
  position: relative;
  float: left;
  padding-top: 2px;
}
th.active {
  color: blue;
}

th.active .arrow {
  opacity: 1;
  font-size: 20px;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
  /* font-size: 50px; */
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #1a1919;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #1a1919;
}
</style>
