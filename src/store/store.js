import { createStore } from 'vuex'
import * as todos from "@/store/modules/todos.js";

export default createStore({
  state: todos.state,
  getters: todos.getters,
  mutations: todos.mutations,
  actions: todos.actions,
});
