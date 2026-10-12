import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className='create-button' onClick={() => console.log("le diste click")}>
        +
    </button>
  );
}

export { CreateTodoButton };