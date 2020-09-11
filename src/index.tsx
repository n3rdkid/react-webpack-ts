import React from 'react';
import ReactDom from "react-dom";

function App() : JSX.Element {
    function sum(a:number,b:number){
        return a+b;
    }
    return (
        <h1>
            Test {sum(2,2)}
        </h1>
    )
}

export default App

const root= document.getElementById("app");

ReactDom.render(<App/> , root);
