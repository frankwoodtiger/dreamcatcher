import React from "react";
import "../../css/common.css"

class Choice extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}
                 className={"choice"
                    + (this.props.bgColorClassName)
                    + (this.props.clickable ? " clickable" : "")}>
                <div data-index={this.props.index}>{this.props.text}</div>
            </div>
        );
    }
}

export default Choice;