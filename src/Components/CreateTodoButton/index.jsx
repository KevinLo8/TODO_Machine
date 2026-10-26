import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton() {
  const {
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <button
      className='create-button'
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >
      +
    </button>
  );
}

export { CreateTodoButton };