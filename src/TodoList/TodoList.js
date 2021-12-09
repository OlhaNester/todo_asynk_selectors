import React from "react";
import "./TodoList.js";
import "./TodoList.css";
import classNames from "classnames";
import { connect } from "react-redux";
//import * as todosActions from "../redux/todos/todos_actions";


//import todosOperations from '../redux/todos/todos-operation';
//import todosSelectors from '../redux/todos/todos-selectors';

import {todosOperations, todosSelectors} from '../redux/todos';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames("TodoList_item", {
          TodoList_item_completed: completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList_checkbox"
          checked={completed}
          onChange={() => onToggleCompleted({id, completed: !completed})}
        />

        <p className="TodoList_text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

// const getVisibleTodos = (allTodos, filter) => {
//   const normalizedFiltered = filter.toLowerCase();
//   return allTodos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFiltered)
//   );
// };

// const mapStateToProps = (state) => {
//   const { filter, items } = state.todos;
//   const visibleTodos = getVisibleTodos(items, filter);
//   return {
//     todos: visibleTodos,
//   };
// };

const mapStateToProps = (state) => ({
  todos: todosSelectors.getVisibleTodos(state),
});
const mapDispatchToProps = {
  onToggleCompleted: todosOperations.toggleCompleted,
  onDeleteTodo: todosOperations.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
