import React, {Component, PureComponent} from "react";
import "./app.css";
import Header, { Footer as hFooter, pi } from "../app/CommonComponents/HeaderComponent"; 
import Footer from "../app/CommonComponents/FooterComponent"; 
import About from "../app/CommonComponents/AboutComponent"; 
import Home from "../app/CommonComponents/HomeComponent"; 
import NotFound from "../app/CommonComponents/NotFoundPage"; 
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

//This is the class component created using React.Component class
export default class App extends Component {
    render(){
        console.log("Render in app ")
        let admin = true;
        // JSX : React doesn't have any separate html templating so it creates html+js using below code
        // Virtual DOM - document object model
        return(
            <Router> 
                <Header />
                <Switch>
                    {/* <Route exact path="/" render={()=>{admin ? <Redirect to="/home" /> : <About/> }} /> */}
                    <Route path="/home" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/about/:id" exact component={About} />                    
                    {/* <Route path="/" component={Home} /> */}
                    <Route path="*" component={NotFound} />
                </Switch>
               
                <Footer />
            </Router>
        )
    }

} 










//old code commented
// export default class App extends Component {

//     constructor(props){
//         super(props)

//         this.state = {
//             name : "Hung"
//         }

//         //this.changeName();
//         //this.sessionName = "MERNStack";
//     }

//     changeName = ()=>{

//         setTimeout(() => {
//             console.log("this.sessionName "+this.sessionName)
//             this.sessionName = "React";
//             console.log("this.sessionName "+this.sessionName)
//             this.setState({
//                 name : "Luke"
//             })
//         }, 2000);

        
//     }

//     render(){
//         console.log("Render in app ")
//         let admin = true;

//         let myname = "Adenike";
//         let a = 5, b = 70;
//         // JSX : React doesn't have any separate html templating so it creates html+js using below code
//         // Virtual DOM - document object model
//         return(
//             <Router> 
//                 <Header name={"Hung"} age={102}>
//                     <div>First div as a child from parent</div>
//                     <div>Second div as a child from parent</div>
//                 </Header>
//                 
//                 <Switch>
//                 <Route exact path="/" render={()=>{admin ? <Redirect to="/user" /> : <Home/> }} component={About} />
//                     <Route path="/home" exact component={Home} />
//                     <Route path="/about" exact component={About} />
//                     <Route path="/about/:id" exact component={About} />
//                     <Route path="/" component={Home} />
//                 </Switch>
//                 {/* <h1>The very first react component. Basically App Component</h1>
//                 <h1>My Name is {myname}</h1>
//                 <h2>Multiply {a*b}</h2>
//                 <h2>Value of pi - {pi}</h2>
//                 {this.sessionName}
//                 <b>{this.state.name}</b> */}
//                 <Footer />
//             </Router>
//         )
//     }

// } 