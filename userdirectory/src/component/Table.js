import React, { Component } from "react";
import API from '../utils/API'
import Rows from './Rows'

class Table extends Component {
    state = {
        humans: [],
      };

    componentDidMount() {
        API.getRandomHuman()
          .then(res => this.setState({ humans: res.data.results }))
          .catch(err => console.log(err));
      }
    
    render(){
        return(
            <table style={{width:100}}>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
            <Rows/>
            <Rows/>
            </table>
        )
    }
}
export default Table;

 