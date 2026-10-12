import './TodoItem.css';

function TodoItem(promp) {
  return (
    <li className='row-list'>

      <span
        className={`icon check-icon ${promp.completed && "check-icon--active"}`}
        onClick={promp.onComplete}
      >
        V
      </span>

      <p
        className={`text-item ${promp.completed && "text-item--complete"}`}
      >
        {promp.text}
      </p>

      <span
        className='icon delete-icon'
        onClick={promp.onDelete}
      >
        X
      </span>

    </li>
  );
}

export { TodoItem };