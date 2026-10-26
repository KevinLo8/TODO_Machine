import React from "react";
import { UseLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
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
        <TodoContext.Provider
            value={{
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                loading,
                error,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };