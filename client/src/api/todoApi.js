import axios from "axios";


export const fetchTodos = async () => {
  try {
    console.log("[API] Fetching todos from:", `/api/todos`);
    return axios.get(`/api/todos`);
  } catch (error) {
    console.error("[API] Fetch todos failed:", error.message);
    throw error;
  }
};


export const createTodo = async (payload) => {
  return axios.post(`/api/todos`, payload);
};

export const deleteTodo = async (id) => {
  return axios.delete(`/api/todos/${id}`);
};
export const updateTodo = async (id, updates) => {
  try {
    return axios.put(`/api/todos/${id}`, updates);
  } catch (error) {
    console.error("[API] Update todo failed:", error.message);
    throw error;
  }
};