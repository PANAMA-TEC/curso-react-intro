import './index.css'
import React, { useState } from 'react';

const TodoSearch = ( { searchValue, setSearchValue }) => {


  return(
    <input 
      className='inputSearch' 
      placeholder='Cortar Cebolla' 
      onChange={ (Event) => { setSearchValue( Event.target.value ) } } 
      value ={ searchValue }
    />
  );

}

export { TodoSearch };
