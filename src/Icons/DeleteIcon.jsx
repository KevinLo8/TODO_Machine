import { FaX } from "react-icons/fa6";
import './icons.css';

function DeleteIcon({ onDelete }) {
    return (
        <span
            className="icon delete-icon"
            onClick={onDelete}
        >

            <FaX
                className="icon-svg"
            />

        </span>
    );
}

export { DeleteIcon };