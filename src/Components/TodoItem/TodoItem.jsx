import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className='row-list'>
      <span className={`icon check-icon ${props.completed && "check-icon--active"}`}>V</span>
      <p className={`text-item ${props.completed && "text-item--complete"}`}>{props.text}</p>
      <span className='icon delete-icon'>X</span>
    </li>
  );
}

export { TodoItem };