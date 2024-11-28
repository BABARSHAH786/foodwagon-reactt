// add to the top
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import Header from "./components/header";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement("h2", {}, "We are learning React"));
root.render(React.createElement(App));
// import style
import '../asset/style.css'




export default function Apps(){
    return(
        <div>HELLO
            <p>we done it yes</p>
            <p>all are players</p>
            {/* <Header /> */}
        </div>
    )
}