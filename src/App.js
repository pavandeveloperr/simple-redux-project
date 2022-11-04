// import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import Employee from './Components/Employee';


class App extends Component {
  state={employees:[
    {
      "key":1,
      "name": "ABC",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key":2,
      "name": "John",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key":3,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key":4,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key":5,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key":6,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    }
  ]
}

 

componentDidMount() {

}
   
render() {
  return (<div>
    {
      this.state.employees.map((emp) => {
      return <Employee name={emp.name} dob={emp.date_of_birth} pos={emp.position_held} onClickHandler={(event)=>{
      console.log("click event", Event);
      this.setState({employees:[]});
    }} /> }
  )}
  </div>

  )
}

}
export default App;
