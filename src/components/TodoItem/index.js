import './index.css';

const TodoItem = ( {mensaje, completed, onCompleted, onDelete} ) => {
  return (
    <li className='TodoItem'>
      <span className= 'iconCheck' >	
        <svg onClick={ onCompleted } xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill={ `${ completed ? 'red' : 'blue'}`} className={"bi bi-check2"} viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
        </svg>
      </span>
      <p className={`taskName ${ completed ? 'taskName-completed' : ''}`}>{mensaje} </p>
      <span className='closeButton'> 
        <svg onClick={ onDelete } xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={"bi bi-eraser"} viewBox="0 0 16 16">
          <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
        </svg>
      </span>
    </li>
  );
}

export { TodoItem };
