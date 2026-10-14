import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoItem } from '../Components/TodoItem';
import { TodoList } from '../Components/TodoList';
import { TodoSearch } from '../Components/TodoSearch';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { TodosEmpty } from '../Components/TodosEmpty';

function AppUI(props) {
    return (
        <>
            <TodoCounter
                completed={props.completedTodos}
                total={props.totalTodos}
            />

            <TodoSearch
                searchValue={props.searchValue}
                setSearchValue={props.setSearchValue}
            />

            <TodoList>
                {props.loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {props.error && <TodosError />}
                {(!props.loading && props.searchedTodos.length == 0) && <TodosEmpty />}


                {props.searchedTodos.map(todo => (

                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => props.completeTodo(todo.text)}
                        onDelete={() => props.deleteTodo(todo.text)}
                    />

                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export { AppUI };