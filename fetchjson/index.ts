import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;

  const ID = todo.id;
  const tittle = todo.title;
  const finished = todo.completed;
  logTodo(ID, tittle, finished);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has Titile of: ${title}
    Is it finished? ${completed}
  `);
};
