import './index.css';
import React, { useState } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { AppUI } from './AppUI';


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

localStorage.setItem(itemName, JSON.stringify(defaultTodos));

*/

const App = () =>{

  const [ searchValue, setSearchValue ] = useState('');
  const { item:todo, saveItems:saveTodos, loading, error } = useLocalStorage("TODO_V1", [] );
  
  const completedTodo = todo.filter( todo => !!todo.Completed ).length;
  const totalToDo = todo.length;
  
  // estados derivados
  const searchedTodo = todo.filter( (todo) => {

    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);

  });

  const toggleToDo = (text) => {
   
    // copiar un array dentro de otro
    const newTodos = [...todo];
    // buscar el indice en donde aparece el texto
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // editamos solamente el objeto por indice encontrado
    if( newTodos[todoIndex].Completed ===  true ){
      newTodos[todoIndex].Completed = false;
    }else{
      newTodos[todoIndex].Completed = true;
    }
    // inyectamos todo el nuevo array
    
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
   
    // copiar un array dentro de otro
    const newTodos = [...todo];
    // buscar el indice en donde aparece el texto
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // editamos solamente el objeto por indice encontrado
    newTodos.splice(todoIndex, 1);
    // inyectamos todo el nuevo array
    
    saveTodos(newTodos);
  }

  //if ( totalToDo == completedTodo )  { alert("Se completaron todas las tareas") }
  
  return(
    <AppUI 
      loading={loading}
      error={error}
      completedTodo={completedTodo} 
      searchedTodo={searchedTodo} 
      totalToDo={totalToDo} 
      setSearchValue={setSearchValue} 
      toggleToDo={toggleToDo} 
      deleteTodo={deleteTodo}
      
    />
  )
  

}

export default App;
