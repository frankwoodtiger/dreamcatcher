import React from "react";
import "../../css/common.css"

class Choice extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}
                 data-index={this.props.index}
                 className={"row p-3 mb-2 border border-dark rounded choice"
                    + (this.props.bgColorClassName)
                    + (this.props.clickable ? " clickable" : "")}>
                {this.props.text}
            </div>
        );
    }
}

export default Choice;