import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

if (document.getElementById("rasal-app")) {
    ReactDOM.render(<App />, document.getElementById("rasal-app"));
}
