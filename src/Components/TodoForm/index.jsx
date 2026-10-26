import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const summit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const cancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form
            className="TodoForm-form"
            onSubmit={summit}
        >
            <label className="TodoForm-label">Escribe tu nuevo ToDo</label>

            <textarea
                className="TodoForm-textArea"
                placeholder="el nuevo ToDo"
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={cancel}
                >Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };