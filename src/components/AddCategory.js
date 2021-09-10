import React, { useState } from 'react';
//import PropTypes from 'prop-types';




// Recibimos la propiedad de setCategories que le hemos añadido en GifExpertApp
export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')


    //Creamos una función que establece el valor del evento (e)
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }
    //Añadimos al presionar enter el input del evento en el setCategories
    const handleSubmit = (e) => {
            e.preventDefault();
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
            console.log('Submit hecho');
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            />
        </form>
    )
    //Para obligar a usar el props de setCategories desde el constructor en GifExpertApp
    // AddCategory.propTypes = {
    //     setCategories: PropTypes.func.isRequired
    // }
}
