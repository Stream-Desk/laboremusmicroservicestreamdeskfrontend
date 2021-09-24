<template>
  <v-container grid-list-lg>
    <v-card>
      <div>
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
          <table class="table align-items-center flush">
            <thead>
              <th
                v-for="key in columns"
                :key="key"
                @click="sortBy(key)"
                :class="{ active: sortKey == key }"
              >
                <i class="fas fa-sort-down"> {{ key }}</i>

                <span
                  class="arrow"
                  :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
                ></span>
              </th>
            </thead>
          </table>
        </div>
        <div class="table-body-wrapper">
          <table>
            <tbody>
              <tr v-for="data in filteredData" :key="data">
                <td v-for="key in columns" :key="key">{{ data[key] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
export default {
  name: "Table",
  props: {
    data: Array,
    columns: Array,
  },
  data() {
    return {
      searchQuery: "",
      sortKey: "",
      sortOrders: {},
    };
  },
  computed: {
    filteredData: function () {
      let sortKey = this.sortKey;
      let filterKey = this.searchQuery && this.searchQuery.toLowerCase();
      let order = this.sortOrders[sortKey] || 1;
      let data = this.data;

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
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
  },
  created() {
    let sortOrders = {};
    this.columns.forEach(function (key) {
      sortOrders[key] = 1;
    });
    this.sortOrders = sortOrders;
  },
};
</script>
<style scoped>
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
</style>
