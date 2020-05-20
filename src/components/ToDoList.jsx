/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* esl'nt-disable react/destruc'u r ing-a'signment */
import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
/*
ToDo List
1. add ToDo
2. display ToDo
3. cross-off ToDo
4. show No of active ToDo
5. filter all/active/complete
6. delete Todo
7. delete complete todo.
    7.1 show only if atleast one is complete
8. button to toggle all on/off

*/
export default class ToDoList extends Component {
    state = {
      todos: [],
      TodoToShow: 'all',
      toggleAll: true,
    };

    addToDo = (todo) => {
      this.setState((state) => ({
        todos: [todo, ...state.todos],
      }));
    }

    toggleComplete = (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          }
          return todo;
        }),
      });
    }

    updateToShow = (s) => {
      this.setState({
        TodoToShow: s,
      });
    }

    handleDelete = (id) => {
      this.setState((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    }

    removeAllComplete = () => {
      this.setState((state) => ({
        todos: state.todos.filter((todo) => !todo.complete),
      }));
    }

    toggleAllButton = () => {
      this.setState((state) => ({
        todos: state.todos.map((todo) => ({
          ...todo,
          complete: state.toggleAll,
        })),
        toggleAll: !this.state.toggleAll,
      }));
    }

    render() {
      let todos = [];

      if (this.state.TodoToShow === 'all') {
        todos = this.state.todos;
      } else if (this.state.TodoToShow === 'active') {
        todos = this.state.todos.filter((todo) => !todo.complete);
      } else if (this.state.TodoToShow === 'complete') {
        todos = this.state.todos.filter((todo) => todo.complete);
      }

      const left = this.state.todos.filter((todo) => !todo.complete).length;
      return (
        <div>
          <div>
            <ToDoForm onSubmit={this.addToDo} />
            {todos.map((todo) => (
              <ToDo
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)}
                onDelete={() => this.handleDelete(todo.id)}
                todo={todo}
              />

            ))}
            <div>
              <input
                placeholder="ToDo's Left"
                value={left}
              />
              ToDo Left
            </div>
            <button type="button" onClick={() => this.updateToShow('all')}>
              All
            </button>
            <button type="button" onClick={() => this.updateToShow('active')}>
              Active
            </button>
            <button type="button" onClick={() => this.updateToShow('complete')}>
              Complete
            </button>
          </div>
          {this.state.todos.some((todo) => todo.complete) ? (
            <button type="button" onClick={this.removeAllComplete}>
              Delete Complete Todos
            </button>
          ) : null}
          <button type="submit" onClick={this.toggleAllButton}>
            {' '}
            Toggle All
            {this.state.toggleAll}
          </button>
        </div>
      );
    }
}
