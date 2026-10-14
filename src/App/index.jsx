import React from 'react';
import { UseLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

function App() {
  const {
    item: todos,
    updateItem: updateTodos,
    loading,
    error,
  } = UseLocalStorage('TODOs_V1', []);
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
    <AppUI
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    loading = {loading}
    error = {error}
    />
  )
}

export default App
