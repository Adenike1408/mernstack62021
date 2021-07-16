import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

//This is a functional component created using arrow functions
let Header = (props) => {
    return(
        <Fragment >
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
            {/* <h1>{props.name}'s Header Component</h1>

            <h2>{props.age}</h2>

            {props.children[0]}
            {props.children[1]} */}
        </Fragment>
    )
}

export default Header; //default export only one is allowed


//named export 
export function Footer(props){
    return(
        <Fragment >
            <h1> Footer Component</h1>
        </Fragment>
    )
};

//named export 
export const pi = 3.141;