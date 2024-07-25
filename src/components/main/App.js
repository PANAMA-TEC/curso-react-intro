import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodo } from '../CreateTodo';

/**
 *
 * 
 * 
const defaultTodos = [
  { text: ' cebolla', Completed: true },
  { text: 'tomar el curso de React', Completed: false },
  { text: 'Llorar con la llorona', Completed: false },
  { text: 'Cortar cebolla', Completed: false },
  { text: 'LALALALA ', Completed: false },
  { text: 'Usar estados derivados ', Completed: true }
]

localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

*/

const App = () =>{

  let localStorageTodos = localStorage.getItem('TODOS_V1');
  let parseTodos = "";

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parseTodos = [];
  }else {
    parseTodos = JSON.parse(localStorageTodos);
  }
  
  const [ searchValue, setSearchValue ] = useState('');
  const [ todo, setTodo ] = useState(parseTodos);
  
  const completedTodo = todo.filter( todo => !!todo.Completed ).length;
  const totalToDo = todo.length;
  
  // estados derivados
  const searchedTodo = todo.filter( (todo) => {

    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);

  });


  const saveTodos = (newTodos) =>{

    localStorage.removeItem("TODOS_V1");
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));

  }

  const toggleToDo = (text) => {
   
    // copiar un array dentro de otro
    const newTodos = [...todo];
    // buscar el indice en donde aparece el texto
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    // editamos solamente el objeto por indice encontrado
    if( newTodos[todoIndex].Completed ==  true ){
      newTodos[todoIndex].Completed = false;
    }else{
      newTodos[todoIndex].Completed = true;
    }
    // inyectamos todo el nuevo array
    setTodo(newTodos);
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
   
    // copiar un array dentro de otro
    const newTodos = [...todo];
    // buscar el indice en donde aparece el texto
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    // editamos solamente el objeto por indice encontrado
    newTodos.splice(todoIndex, 1);
    // inyectamos todo el nuevo array
    setTodo(newTodos);
    saveTodos(newTodos);
  }

  //if ( totalToDo == completedTodo )  { alert("Se completaron todas las tareas") }
  
  return (
   
    <div className='App'>
      <div className='contenedorPrincipal'>
    
        <TodoCounter total={totalToDo} completed={completedTodo}/>
        <TodoSearch searchValue={ searchValue }  setSearchValue={setSearchValue} />
    
        <TodoList>
          { searchedTodo.map( todo => (  
              <TodoItem  mensaje = { todo.text } key = { todo.text } completed ={todo.Completed}
                onCompleted = { ()=>{ toggleToDo(todo.text) }}
                onDelete = { () => { deleteTodo(todo.text); }} 
              /> 
            )) 
          }
        </TodoList>
        
        <CreateTodo/>
        
      </div>
    </div>
  );
}

export default App;
