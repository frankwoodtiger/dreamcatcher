import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>Welcome to DreamCatcher</div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)

console.log("dreamcatcher loaded!");