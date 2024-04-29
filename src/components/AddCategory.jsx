

import React, { useState } from 'react'

// export const AddCategory = ( props ) => {
export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const value = inputValue.trim();

        if ( value.length < 1 ) return;
        // props.setCategory( categorias => [inputValue, ...categorias] );
        onNewCategory( value );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
            type='text'
            placeholder='Buscar gifs'
            value={ inputValue }
            onChange={ ( event ) => onInputChange(event) }
            />
        </form>
        
    );
}