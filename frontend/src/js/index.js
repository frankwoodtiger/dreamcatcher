import React from "react";
import ReactDOM from "react-dom";
import Question from "./component/question"

class App extends React.Component {
    render() {
        return (
            <Question />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)

console.log("dreamcatcher loaded!");