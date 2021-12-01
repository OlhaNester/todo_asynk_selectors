
// переписали из App
const getLoading = state => state.todos.loading;
// переписали из Filter
const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

//переписали из TodoList
const getVisibleTodos = state => {
    const todos = getAllTodos(state);
    const filter = getFilter(state);
    const normalizedFiltered = filter.toLowerCase();

    return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFiltered)
  );
};
 
// переписали из Stat
const getTotalTodo = state => {
    const todos = getAllTodos(state);
    return todos.length;
};

const getComplitedTodo = state => {
    const todos = getAllTodos(state);
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0 )
};
 
export default {
    getLoading,
    getFilter,
    getVisibleTodos,
    getTotalTodo,
    getComplitedTodo
}