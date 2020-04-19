import React from "react";

function Jumbotron ({children}) {
    return(
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="">Clicky Game</a>
                </li>
                <li>
                    Click on an image to begin!
                </li>
                <li>
                    "Score: "
                    "0"
                    " | Top Score: "
                    "0"
                </li>
            </ul>
        </nav>
    );
}

export default Jumbotron;