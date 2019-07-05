import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "do your homework"
      },
      {
        id: 2,
        title: "go pick up wawa"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = event => {
    console.log("handle change");
  };
  handleSubmit = event => {
    console.log("handle submit");
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
              handleChange={this.state.handleChange}
              handleSubmit={this.state.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClearList={this.state.handleClearList}
              handleDelete={this.state.handleDelete}
              handleEdit={this.state.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
