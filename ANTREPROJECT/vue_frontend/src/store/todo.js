import axios from "axios";

export default {
  namespaced: true,
  state: {
    todos: [],
  },

  getters: {},

  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
  },

  actions: {
    async fetchTodos({ commit }, payload) {
      try {
        const serverResponse = await axios.get(
          "http://localhost:3000/todos/find",
          {
            params: {
              userId: payload.userId,
            },
          }
        );

        commit("setTodos", serverResponse.data);
      } catch (error) {
        console.log(error);
      }
    },

    async createTodo({ commit, dispatch }, payload) {
      try {
        const serverResponse = await axios.post(
          "http://localhost:3000/todos/create",
          payload
        );

        if (serverResponse) {
          const fetchedData = await dispatch("fetchTodos", {
            userId: payload.userId,
          });
          commit("setTodos", fetchedData.data);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTodo({ commit, dispatch }, payload) {
      try {
        const serverResponse = await axios.delete(
          `http://localhost:3000/todos/delete?id=${payload.id}`
        );

        if (serverResponse) {
          const fetchedData = await dispatch("fetchTodos", {
            userId: payload.userId,
          });
          commit("setTodos", fetchedData.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateTodo({ commit, dispatch }, payload) {
      try {
        const sendData = {
          id: payload.id,
          task: {},
        };

        if (payload.completed != undefined)
          sendData.task.completed = !payload.completed;
        if (payload.task) sendData.task = payload.task;

        const serverResponse = await axios.patch(
          "http://localhost:3000/todos/update",
          sendData
        );

        if (serverResponse) {
          const fetchedData = await dispatch("fetchTodos", {
            userId: payload.userId,
          });
          commit("setTodos", fetchedData.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};