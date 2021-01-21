import React, { Component } from "react";

class Rows extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.email}</td>
            </tr>
        )
    }
}
export default Rows;