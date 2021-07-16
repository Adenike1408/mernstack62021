import React, {Component, PureComponent} from "react";
import Header, { Footer, pi } from "../app/CommonComponents/HeaderComponent"; 

//This is the class component created using React.Component class
export default class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            name : "Hung"
        }

        this.changeName();
        this.sessionName = "MERNStack";
    }

    changeName = ()=>{

        setTimeout(() => {
            console.log("this.sessionName "+this.sessionName)
            this.sessionName = "React";
            console.log("this.sessionName "+this.sessionName)
            this.setState({
                name : "Luke"
            })
        }, 2000);

        
    }

    render(){
        console.log("Render in app ")
        let myname = "Adenike";
        let a = 5, b = 70;
        // JSX : React doesn't have any separate html templating so it creates html+js using below code
        // Virtual DOM - document object model
        return(
            <div> 
                {/* <Header name={"Hung"} age={102}/> */}

                <Header name={"Hung"} age={102}>
                    <div>First div as a child from parent</div>
                    <div>Second div as a child from parent</div>
                </Header>

                <h1>The very first react component. Basically App Component</h1>
                <h1>My Name is {myname}</h1>
                <h2>Multiply {a*b}</h2>
                <h2>Value of pi - {pi}</h2>
                {this.sessionName}
                <b>{this.state.name}</b>
                <Footer />
            </div>
        )
    }

} 