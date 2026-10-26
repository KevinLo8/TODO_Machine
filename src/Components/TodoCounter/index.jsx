import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext);

    return (

        (totalTodos == completedTodos && totalTodos > 0) ?

            <h1 className='notification' >Felicidades, has completado todas tu ToDos</h1>

            :

            <h1 className='notification' >
                Has Completado <span className='completed-span'>{completedTodos}</span> de <span className='total-span'>{totalTodos}</span> ToDos
            </h1>

    );
}

export { TodoCounter };