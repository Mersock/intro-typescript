import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispath: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    // console.log(response);
    dispath<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};
