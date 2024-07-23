import './index.css';

const CreateTodoButton = () => {
  return(
   
    <button className='buttonAgregar' onClick={ evento }>
      +
   </button>

  );
}

const evento = (event) => {
  console.log(event.target);
}

export { CreateTodoButton };
