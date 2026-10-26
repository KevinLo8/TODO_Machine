import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <input className="search-input" value={searchValue} placeholder="Cortar Cebollas" onChange={
            (event) => {
                setSearchValue(event.target.value);
            }
        } />
    );
}

export { TodoSearch };