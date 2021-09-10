import http from "/http-ticket";

class AllTicketsDataService {
  getAll() {
    return http.get("/api/Tickets/Labo/All");
  }

  get(id) {
    return http.get(`/api/Tickets/${id}`);
  }

  create(data) {
    return http.post("/api/Tickets", data);
  }

  update(id, data) {
    return http.put(`/api/Tickets/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/Tickets/Labo/${id}`);
  }

  // deleteAll() {
  //     return http.delete(`/tickets`);
  // }

  // findByDate(date) {
  //     return http.get(`/tickets?date=${date}`);
  // }
}

export default new AllTicketsDataService();
