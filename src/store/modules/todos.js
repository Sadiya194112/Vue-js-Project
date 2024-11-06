export const state = {
  todos: [],
};

export const getters = {
  getTodos: state => state.todos
};

export const mutations = {
  addTodo: (state, id) => {
    const newTask = {
      id: id.newId,
      task: id.task,
      completed: false
    };
    state.todos.unshift(newTask);
  },
  toggleTodo: (state, id) => {
    const item = state.todos.find(todo => todo.id === id);
    item.completed = !item.completed;
  },
  deleteTodo: (state, id) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos.splice(index, 1);
  }
};


export const actions = {
  addTodo: (context, id) => {
    context.commit('addTodo', id);
  },
  toggleTodo: (context, id) => {
    context.commit('toogleTodo', id)
  },
  deleteTodo: (context, id) => {
    context.commit('deleteTodo', id)
  }
};

