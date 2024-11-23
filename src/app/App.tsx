import React from "react";
import "./App.css";
import Rick from "/Rick.webp";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Rick} alt="Rick and Andre" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};


