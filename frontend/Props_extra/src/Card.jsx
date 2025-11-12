import { div } from "@tensorflow/tfjs";
import React from "react";

const Card =(props)=>{

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}
export default Card;