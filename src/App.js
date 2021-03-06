import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false
      },
      () => console.log(this.state)
    );
  };
  handleClearList = () => {
    console.log("clear list");
  };
  handleDelete = id => {
    console.log(`handle edit ${id}`);
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };
  render() {
    console.log(this.state);

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 x-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>

            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
