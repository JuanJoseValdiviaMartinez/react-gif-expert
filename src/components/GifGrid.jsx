
import React from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    //Custom Hook
    const { images, isLoading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // const getImages = async () => {

    //     const newImages = await getGifs( category );
    //     setImages( newImages );

    // }

    // useEffect( ()=> {
    //     getImages();
    // }, [ ] );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className='card-grid'>
            {
                images.map( ( image ) => (
                // {images.map( ({ id, title}) => {
                    // return <li key={ img.id }>{ img.title }</li>
                    // return <li key={ id }>{ title }</li>
                    <GifItem  key={ image.id } 
                        { ...image }/>
                 ) )
            }

            </div>
            
        </>
    );
}
