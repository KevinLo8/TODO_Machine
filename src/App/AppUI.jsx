import React from 'react';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { TodosEmpty } from '../Components/TodosEmpty';
import { TodoContext } from '../Components/TodoContext/TodoContext';

function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length == 0) && <TodosEmpty />}


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

export { AppUI };