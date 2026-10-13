import { CheckIcon } from '../../Icons/CheckIcon';
import { DeleteIcon } from '../../Icons/DeleteIcon';
import './TodoItem.css';

function TodoItem(promp) {
  return (
    <li className='row-list'>

      <CheckIcon
        completed={promp.completed}
        onComplete={promp.onComplete}
      />

      <p
        className={`text-item ${promp.completed && "text-item--complete"}`}
      >
        {promp.text}
      </p>

      <DeleteIcon
        onDelete={promp.onDelete}
      />

    </li>
  );
}

export { TodoItem };