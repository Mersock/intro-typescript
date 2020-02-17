import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

class _App extends React.Component<AppProps> {
  //   componentDidMount() {
  //     this.props.fetchTodos();
  //   }

  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodos(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodos })(_App);
