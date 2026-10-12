import React from 'react';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar El curso a intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[indexTodo].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />

        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App
