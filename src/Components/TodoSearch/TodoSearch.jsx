import './TodoSearch.css';

function TodoSearch(props) {
    return (
        <input className="search-input" value={props.searchValue} placeholder="Cortar Cebollas" onChange={
            (event) => {
                props.setSearchValue(event.target.value);
            }
        }/>
    );
}

export { TodoSearch };