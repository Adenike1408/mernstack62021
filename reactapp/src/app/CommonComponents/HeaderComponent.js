import React, {Fragment} from "react";

let Header = (props) => {
    return(
        <Fragment >
            <h1>{props.name}'s Header Component</h1>
        </Fragment>
    )
}

export default Header;