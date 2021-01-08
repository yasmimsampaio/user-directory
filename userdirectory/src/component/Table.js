import React, { Component } from "react";
import API from '../utils/API'

class Table extends Component {
    componentDidMount() {
        API.getRandomHuman()
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    
    render(){
        return(
            <table style={{width:100}}>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
            </tr>
            </table>
        )
    }
}
export default Table;

 