import { createStore } from "vuex";

export default createStore({
  state: {
    arr: [
        {
            id: 1,
            name: "Pak Darya",
            group: 202,
            teacher: "khakim",
        }
    ],
  },
  getters: {
    arr: (state) => state.arr,
  },
  mutations: {},
  actions: {
 
  },
  modules: {},
});
