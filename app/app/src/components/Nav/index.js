import React from "react";

function Jumbotron (props) {
    return(
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <li className={props.messageType}>
                    {props.message}
                </li>
                <li>
                    Score: {props.score} | Top Score: {props.scoreToBeat}
                </li>
            </ul>
        </nav>
    );
}

export default Jumbotron;