import React, { Component } from "react";
import { connect } from "react-redux";
import todosOperation from './redux/todos/todos-operation';

import Filter from "./TodoEditor/Filter";
// import axios from 'axios';
// import ColorPicker from "./ColorPicker";

import TodoList from "./TodoList";
import Form from "./Form";
import TodoEditor from "./TodoEditor";
//import shortid from "shortid";
import Modal from "./Modal";
//import Counter from "./Counter";
import Stat from "./Stat";

import todosSelectors from '../src/redux/todos/todos-selectors';

const colorPickerOpt = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }
  // componentDidMount() {
  //   // axios.get('http://localhost:4040/todos')
  //   //   .then(response => {
  //   //     console.log(response);
  //   //   });

  //   const todos = localStorage.getItem("todos");
  //   const parseTodos = JSON.parse(todos);
  //   if (parseTodos) {
  //     this.setState({ todos: parseTodos });
  //   }
  // }

  // componentDidApdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //     console.log("Обновилось поле");
  //     localStorage.setItem("todos", JSON.stringify(this.state.todos));
  //   }
  // }

  // addTodo = (text) => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text: text,
  //     completed: false,
  //   };
  //   this.setState((prevState) => ({
  //     todos: [todo, ...prevState.todos],
  //   }));
  // };

  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  // toggleCompleted = (todoId) => {
  //   console.log(todoId);

  //   this.setState((prevState) => ({
  //     // можно переписать в виде тернарника: this.setState(prevState =>todos: prevState.todos.map(todo => {todo.id === todoId ?{  ...todo, completed: !todo.completed,} : todo
  //     todos: prevState.todos.map((todo) => {

  //       if (todo.id === todoId) {
  //         return {
  //             ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     }),
  //   }));
  // };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // changeFilter = (event) => {
  //   this.setState({
  //     filter: event.currentTarget.value,
  //   });
  // };
  // getVisibleTodos = (params) => {
  //   const normalizedFiltered = this.state.filter.toLowerCase();
  //   return this.state.todos.filter(({ text }) =>
  //     text.toLowerCase().includes(normalizedFiltered)
  //   );
  // };

  // handleNameChange = (event) => {
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = (event) => {
  //   this.setState({ tag: event.currentTarget.value });
  // }

  render() {
    const { showModal } = this.state;
    // const totalTodo = todos.length;
    // const complitedTodo = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    return (
      <div className="App">
        {/* <Counter /> */}
        {this.props.isLoadingTodos && <h1>Загрузка...</h1>}
        <Filter />
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {/* <Clock /> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <h1>Это модальное окно</h1>
            <p>Lorem Ipsum";</p> */}
            <TodoEditor onSave={this.toggleModal} />
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}
        <Form />

        {/* <form>
          <label>
            {" "}
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameImputId}
            />
          </label>
          <label>
            {" "}
            Ник{" "}
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              id={this.nameImputId}
            />
          </label>
        </form> */}

        <Stat />

        <TodoList />
        {/* <ColorPicker options={colorPickerOpt} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchTodos: todosOperation.fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

