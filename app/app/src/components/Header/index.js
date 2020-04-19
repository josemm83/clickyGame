import React from 'react';

function Header({children}){
    return (<div className="header">
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more then once!</h2>
        </div>
    );
}

export default Header;