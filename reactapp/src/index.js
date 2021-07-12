//console.log("This is the entry point of my client side application shopping cart to be built in react")
import React from "react";
import {render} from "react-dom";

import App from "./app/app"

render(
    <App/>, //application that would be rendered on single page
    document.getElementById("root") //bootstrapping the application root container
)