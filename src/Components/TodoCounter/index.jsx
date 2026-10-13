import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (

        total == completed ?

            <h1 className='notification' >Felicidades, has completado todas tu ToDos</h1>

            :

            <h1 className='notification' >
                Has Completado <span className='completed-span'>{completed}</span> de <span className='total-span'>{total}</span> ToDos
            </h1>

    );
}

export { TodoCounter };