import React from "react";
import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Loading = () =>{

    return(
        <div>
            <Spinner color="primary"/>
        </div>
    )
}

export default Loading;