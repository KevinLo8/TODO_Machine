import React from 'react';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';

function UseLocalStorage(itemName, InitialValue) {

  const localStorageTodos = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageTodos) {
    localStorage.setItem(itemName, JSON.stringify(InitialValue));
    parsedItem = InitialValue;
  } else {
    parsedItem = JSON.parse(localStorageTodos);
  }

  const [item, setItem] = React.useState(parsedItem);

  const updateItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  }

  return [item, updateItem];
}

function App() {
  const [todos, updateTodos] = UseLocalStorage('TODOs_V1', []);
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
    updateTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(indexTodo, 1);
    updateTodos(newTodos);
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
