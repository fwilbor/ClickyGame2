import React from "react";
import "./Alert.css";

const Alert = props => (
    <div className="default" style={props.style}>
        {props.message ? (
            <p>{props.message}</p>
        ) : (
                <p className="default-msg black">Instructions: Test your Art Meso Memory.  Click on a Picture, but not more than once, How long will it take you to become an Art Meso Champion? </p>
            )}
    </div>
)

export default Alert;