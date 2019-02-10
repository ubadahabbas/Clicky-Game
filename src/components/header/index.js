import React from "react";
import "./style.css";


function Header (props){
        return (
         
            <nav class="navbar navbar-light bg-light sticky-top">
                <h4>{ }</h4>
                <h4> Score: {props.score}</h4>
                <h4>|</h4>
                <h4> Top Score: {props.topScore}</h4>
                <h4>{ }</h4>
            </nav>
     
        );
}

export default Header;