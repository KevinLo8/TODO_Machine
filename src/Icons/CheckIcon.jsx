import { FaCheck } from "react-icons/fa";
import './icons.css';

function CheckIcon({ completed, onComplete }) {
    return (
        <span
            className="icon check-icon"
            onClick={onComplete}
        >

            <FaCheck
                className="icon-svg"
                fill={completed ? 'green' : 'gray'}
            />

        </span>
    );
}

export { CheckIcon };