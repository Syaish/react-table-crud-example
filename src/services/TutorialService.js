import http from "../http-common";

const getAll = () => {
  return http.get("/Values");
};

const get = (id) => {
  return http.get(`/Values/${id}`);
};

const create = (data) => {
  return http.post("/Values", data);
};

const update = (id, data) => {
  return http.put(`/Values/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/Values/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;