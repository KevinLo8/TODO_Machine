import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h1 className='notification' >Has Completado <span className='completed-span'>{completed}</span> de <span className='total-span'>{total}</span> TODOs</h1>
    );
}

export { TodoCounter };