import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Goku']);

    //Los ... es para añador a lo que hay algo nuevo
    /*export const handleAdd = () => {
          setCategories(cats => [...categories]);
      }*/

    return (
        <div>
            <h2>GifExpertApp</h2>
            {/* Añadimos una propiedad ( que obligamos con props en AddCategory) a el componente AddCategory ( el nombre da igual) y la igualamos a la funcioón setCategories*/}
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => (
                        //Otra manera sin componente:  return <li key={category}> {category}</li>
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>

        </div>


    )

}

