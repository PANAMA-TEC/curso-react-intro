import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


const defaultTodos = [
  { text: ' cebolla', Completed: true },
  { text: 'tomar el curso de React', Completed: false },
  { text: 'Llorar con la llorona', Completed: false },
  { text: 'Cortar cebolla', Completed: false },
  { text: 'LALALALA ', Completed: false },
  { text: 'Usar estados derivados ', Completed: true }
]

const App = () => {

  const [ searchValue, setSearchValue ] = React.useState('');
  const [ todo, setTodo ] = React.useState(defaultTodos);

  
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
  }

  if ( totalToDo == completedTodo )  { alert("Se completaron todas las tareas") }
  

  //console.log('los usuarios buscan todos de: ' + searchValue)

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
        
        <CreateTodoButton/>
        
      </div>
    </div>
  );
}

export default App;
