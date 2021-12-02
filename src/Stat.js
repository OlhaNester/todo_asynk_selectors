import React from "react";
import { connect } from "react-redux";
import todosSelectors from '../src/redux/todos/todos-selectors';

const Stat = ({ totalTodo, complitedTodo }) => {
  return (
    <div>
      <p>Общее кол-во {totalTodo}</p>
      <p> Кол-во выполненных {complitedTodo}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalTodo: todosSelectors.getTotalTodo(state),
  complitedTodo: todosSelectors.getComplitedTodo(state),
});

export default connect(mapStateToProps)(Stat);
