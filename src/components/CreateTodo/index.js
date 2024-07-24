import './index.css';

const CreateTodo = () => {
  return(
   
    <button className='buttonAgregar' onClick={ evento }>
      +
   </button>

  );
}

const evento = (event) => {
  console.log(event.target);
}

export { CreateTodo };
