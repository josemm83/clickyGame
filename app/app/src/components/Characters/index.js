import React from 'react';

function Characters({name, photo, onClick}){
    return <img 
        className = "click-item"
        src = {photo}
        alt = {name}
        name = {name}
        onClick = {()=> onClick(name)}
    />;
}

export default Characters;