import './index.css';

const TodoCounter = ( { total, completed } ) => {
  return(
    <h1 className='tittleTodoCounter'>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
