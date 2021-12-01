import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
//import types from "./todos_types";
import {
  addTodoRequest, addTodoSuccess, addTodoError,
  deleteTodoRequest, deleteTodoSuccess, deleteTodoError,
  filteredTodo, toggleCompletedRequest, toggleCompletedError, toggleCompletedSuccess,
  fetchTodosRequest, fetchTodosError, fetchTodosSuccess
} from "./todos_actions";

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((todo) => todo.id !== payload);

//     default:
//       return state;
//   }
// };

const items = createReducer([], {
  [fetchTodosSuccess]: (state, {payload})=> payload,
  [addTodoSuccess] : (state, {payload}) => [...state, payload],
  [deleteTodoSuccess]: (state, {payload}) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, {payload}) => 
    state.map((todo) =>
      todo.id === payload.id
        ? payload
        : todo,
    ),
});

const loading = createReducer(false, {
  [fetchTodosRequest]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: ()=> false,
  [deleteTodoRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: ()=> false,
  [toggleCompletedRequest]: () => true,
  
});
const filter = createReducer("", {
  [filteredTodo]: (state, action) => action.payload,
});
const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
