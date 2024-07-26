import React from 'react';
/**
 * 
 * @param { Nombre de el valor en localStorage } itemName 
 * @param { Valor inicial del aplicativo } initialValue 
 * @returns 
 * 
 * Custon Hook, esto lo que hacce es que gurda en el localstorage, los cambios en el aplicativo
 * 
 */

const useLocalStorage = ( itemName, initialValue ) => {

    const localStorageTodos = localStorage.getItem(itemName);
    let parsedItem;
  
    if(!localStorageTodos){
      
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    
    }else {
      
      parsedItem = JSON.parse(localStorageTodos);
    
    }
  
    const [item, setItems] = React.useState(parsedItem);
  
    const saveItems = (newItem) =>{
  
      localStorage.removeItem(itemName);
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem);
  
    }
  
    return [ item, saveItems ]
  
  }

  export {useLocalStorage}