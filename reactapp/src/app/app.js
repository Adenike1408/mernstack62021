import React, {Component} from "react";
import Header from "../app/CommonComponents/HeaderComponent"; 

export default class App extends Component {

    constructor(props){
        super(props)
    }


    render(){
        let myname = "Adenike";
        let a = 5, b = 70;
        // JSX : React doesn't have any separate html templating so it creates html+js using below code
        // Virtual DOM - document object model
        return(
            <div> 
                <Header name={"Hung"}/>

                <h1>The very first react component. Basically App Component</h1>
                <h1>My Name is {myname}</h1>
                <h2>Multiply {a*b}</h2>
                
            </div>
        )
    }

} 