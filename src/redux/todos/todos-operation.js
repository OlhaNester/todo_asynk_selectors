import axios from 'axios';
import {fetchTodosRequest, fetchTodosError, fetchTodosSuccess,
  addTodoRequest, addTodoError, addTodoSuccess,
  deleteTodoRequest, deleteTodoError, deleteTodoSuccess,
  toggleCompletedRequest, toggleCompletedError, toggleCompletedSuccess
} from './todos_actions';



axios.defaults.baseURL = 'http://localhost:4040';

// const fetchTodos = ()=> dispatch => {

//   dispatch(fetchTodosRequest());

//   axios.get(`http://localhost:4040/todos`)
//     .then(({ data }) => dispatch(fetchTodosSuccess(data)))
//     .catch(error => dispatch(fetchTodosError(error)));
// } Переписываем как асинхронную функцию:

const fetchTodos = () => async dispatch => {

  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get(`http://localhost:4040/todos`);
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error));
  }
};


const addTodo = (text) => dispatch => {
  const todo = {
    text: text,
    completed: false,
  };

  dispatch(addTodoRequest());

  axios.post(`http://localhost:4040/todos`, todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error =>dispatch(addTodoError(error)));
};

const deleteTodo = id => dispatch => {
  dispatch(deleteTodoRequest());

  axios.delete(`http://localhost:4040/todos/${id}`)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = {completed};
  dispatch(toggleCompletedRequest());
  
  axios.patch(`http://localhost:4040/todos/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    . catch(error=> dispatch(toggleCompletedError(error)));
}

export default {
    fetchTodos, addTodo, deleteTodo, toggleCompleted,
};