import React, { Component } from "react";
import API from '../utils/API'
import Rows from './Rows'

class Table extends Component {
    state = {
        humans: [],
      };

    componentDidMount() {
        API.getRandomHuman()
          .then(res => {
            console.log(res.data.results);  
            this.setState({ humans: res.data.results })})
          .catch(err => console.log(err));
      }
    
    sorts=()=> {
        console.log("works");
        var sortedArr = this.state.humans.sort((a, b) => {
            var nameA = a.name.first.toUpperCase();
            var nameB = b.name.first.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0;
        })
        this.setState({ humans: sortedArr })
        };

    render(){
        return(
            <div>
            <button onClick={this.sorts}>Sort Names</button>
            <table style={{width:100}}>
            <tr>
                {/* <th>ID</th> */}
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            {this.state.humans.map(humans => (
                    <Rows
                    //   key={humans.id.value}
                    //   id={humans.id.value}
                      firstName={humans.name.first}
                      lastName={humans.name.last}
                      email={humans.email}
                      />))}
            </table>
            </div>
        )
    }
}
export default Table;

 