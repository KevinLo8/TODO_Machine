import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar El curso a intro a React.js', completed: false},
  { text: 'Llorar con la Llorona', completed: false},
  { text: 'LALALALALA', completed: false}
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App
