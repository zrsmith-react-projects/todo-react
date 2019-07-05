import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>Hello from TodoList</h2>
        <TodoItem />
      </section>
    );
  }
}
