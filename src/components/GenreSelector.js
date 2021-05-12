import React from 'react';

const GenreSelector = ({changeGenre}) => {

    const handleChange = function(event) {
        const chosenGenre = event.target.value;
        changeGenre(chosenGenre)
        console.log(chosenGenre)
    }


    return (
        <select defaultValue = '' onChange = {handleChange}>
            <option value="0">All</option>
            <option value="1">Rock</option>
            <option value="2">Dance</option>
            <option value="3">Country</option>
        </select>
    )



};

export default GenreSelector;