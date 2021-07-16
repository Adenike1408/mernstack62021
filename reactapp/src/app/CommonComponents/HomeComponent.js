import React, {Component} from "react";

export default class Home extends Component {

    render(){

        return(
            <div className={"loadimage form"} style={{backgroundImage: "url(/images/hm_pic4.jpg)"}}>
                    {/* <img src={"./images/hm_pic4.jpg"} /> */}
                    {/* {this.state.Title} */}
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to create product collection.</li>
                        <li>Allow user's to add to cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                        <li>Allow users to cancel the order.</li>
                        <li>Allow users to reorder the cart.</li>
                        <li>Allow users to give ratings to each product.</li>
                        <li>Have notifications on top right with logout.</li>
                    </ul>
                    {/* <label>
                    Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter age"/>
                     </label> */}
                    <button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/about/2500")}>GoTo About Page</button>
                    
                    {/* <button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/userhook")}>GoTo User Hooks</button>
                      */}
                    {/* <img  src="/images/hm_pic4.jpg"/> */}
                </div>
        )
    }

}