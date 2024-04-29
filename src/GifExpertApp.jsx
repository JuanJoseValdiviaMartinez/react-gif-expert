

import React from 'react'
import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from "./components/GifGrid";




export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState( ['One Punch', 'Dragon ball', 'One Piece'] );
    
    const onAddCategoria = ( value ) => {
        if ( categorias.includes( value ) ) return;
        setCategorias( categorias => [ value, ...categorias] );
        // setCategorias( categorias => [...categorias, 'Bersek'] );

    }


  return (
    <>
        {/* Titulo  */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategory = { setCategorias } 
            onNewCategory = { (value) => onAddCategoria(value) }

        />
        {/* Listasdo de Gifs */}

        {/* <button onClick={onAddCategoria}>Agregar</button> */}
        { categorias.map( category => (
            // return <li key={category} >{category}</li>
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
                ))
        }


        {/* Gif item */}


    </>


  );
}
